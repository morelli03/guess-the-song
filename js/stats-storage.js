/**
 * SONGLESS - Statistics & LocalStorage Manager
 * Gestisce il salvataggio dei progressi, statistiche, streak e testo di condivisione emoji
 */

const STATS_KEY = 'songless_it_stats_v1';
const DAILY_STATE_KEY = 'songless_it_daily_state_v1';

const DEFAULT_STATS = {
  played: 0,
  wins: 0,
  currentStreak: 0,
  maxStreak: 0,
  guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  lastPlayedDate: null
};

/**
 * Carica le statistiche salvate
 */
export function loadStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return { ...DEFAULT_STATS };
    return { ...DEFAULT_STATS, ...JSON.parse(raw) };
  } catch (err) {
    console.warn('Impossibile leggere statistiche:', err);
    return { ...DEFAULT_STATS };
  }
}

/**
 * Salva le statistiche nel localStorage
 */
export function saveStats(stats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (err) {
    console.warn('Impossibile salvare statistiche:', err);
  }
}

/**
 * Registra il completamento di una partita e aggiorna streak/distribuzione
 */
export function recordGameResult({ won, attemptCount, isDaily, dateStr }) {
  const stats = loadStats();
  stats.played += 1;

  if (won) {
    stats.wins += 1;
    const bucket = Math.min(6, Math.max(1, attemptCount));
    stats.guessDistribution[bucket] = (stats.guessDistribution[bucket] || 0) + 1;

    // Gestione streak giornaliero
    if (isDaily) {
      const yesterday = getYesterdayDateString();
      if (stats.lastPlayedDate === yesterday) {
        stats.currentStreak += 1;
      } else if (stats.lastPlayedDate !== dateStr) {
        stats.currentStreak = 1;
      }
      if (stats.currentStreak > stats.maxStreak) {
        stats.maxStreak = stats.currentStreak;
      }
      stats.lastPlayedDate = dateStr;
    }
  } else {
    if (isDaily) {
      stats.currentStreak = 0;
      stats.lastPlayedDate = dateStr;
    }
  }

  saveStats(stats);
  return stats;
}

/**
 * Salva lo stato della partita giornaliera corrente
 */
export function saveDailyState(dateStr, state) {
  try {
    const all = loadAllDailyStates();
    all[dateStr] = state;
    localStorage.setItem(DAILY_STATE_KEY, JSON.stringify(all));
  } catch (err) {
    console.warn('Impossibile salvare stato giornaliero:', err);
  }
}

/**
 * Recupera lo stato della partita del giorno
 */
export function getDailyState(dateStr) {
  const all = loadAllDailyStates();
  return all[dateStr] || null;
}

function loadAllDailyStates() {
  try {
    const raw = localStorage.getItem(DAILY_STATE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    return {};
  }
}

/**
 * Genera il testo con emoji per la condivisione (stile Heardle / Wordle)
 */
export function generateShareText({ isDaily, dailyNumber, won, attempts, guessHistory, mode, artistName }) {
  let title = 'Songless IT (Libera)';
  if (isDaily) {
    title = `Songless IT #${dailyNumber || 1}`;
  } else if (mode === 'artist' && artistName) {
    title = `Songless IT (${artistName} Edition)`;
  }
  const scoreBadge = won ? `${attempts}/6` : 'X/6';

  let emojiGrid = '';
  for (const g of guessHistory) {
    if (g.type === 'correct') {
      emojiGrid += '🟩 ';
    } else if (g.type === 'skipped') {
      emojiGrid += '⬛ ';
    } else if (g.type === 'incorrect') {
      emojiGrid += '🟥 ';
    }
  }

  // Completa con quadrati vuoti se terminato prima
  const remaining = 6 - guessHistory.length;
  for (let i = 0; i < remaining; i++) {
    emojiGrid += '⬜ ';
  }

  return `${title} 🎧 ${scoreBadge}\n\n${emojiGrid.trim()}\n\nIndovina la canzone su Songless! 🎶`;
}

function getYesterdayDateString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
