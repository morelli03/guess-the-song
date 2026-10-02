/**
 * SONGLESS - Main Application Controller
 * Coordina UI, Motore di Gioco, Audio Player e Servizi di Ricerca
 */

import { SonglessAudioPlayer } from './audio-player.js';
import { SonglessGameEngine, STEP_DURATIONS, MAX_ATTEMPTS, FULL_PREVIEW_DURATION } from './game-engine.js';
import {
  getDailySong,
  getRandomSong,
  resolveSongAudio,
  getTodayDateString,
  CATEGORIES,
  FEATURED_ARTISTS,
  fetchArtistTopSongs
} from './song-catalog.js';
import { searchSongs, searchArtists, normalizeString } from './search-service.js';
import {
  loadStats,
  recordGameResult,
  saveDailyState,
  getDailyState,
  generateShareText
} from './stats-storage.js';

// --- STATO APPLICAZIONE ---
let currentMode = 'daily'; // 'daily' | 'unlimited' | 'artist'
let currentCategory = 'all';
let currentOrigin = 'all'; // 'all' | 'ita' | 'intl'
let currentArtist = null;
let currentArtistId = null;
let currentArtistArtwork = null;
let currentArtistSongs = [];
let currentTargetSong = null;
let selectedGuessSong = null;
let isMuted = false;
let searchDebounceTimer = null;
let artistSearchDebounceTimer = null;
let highlightedIndex = -1;
let currentSearchResults = [];
const artistPlayedDecks = new Map();

// --- ISTANZE MOTORE ---
const audioPlayer = new SonglessAudioPlayer();
const gameEngine = new SonglessGameEngine();

// --- ELEMENTI DOM ---
const brandBtn = document.getElementById('brandBtn');
const volumeBtn = document.getElementById('volumeBtn');
const volumeIcon = document.getElementById('volumeIcon');
const statsBtn = document.getElementById('statsBtn');
const helpBtn = document.getElementById('helpBtn');

const tabDaily = document.getElementById('tabDaily');
const tabUnlimited = document.getElementById('tabUnlimited');
const tabArtist = document.getElementById('tabArtist');
const categoryFilter = document.getElementById('categoryFilter');
const originSwitchContainer = document.getElementById('originSwitchContainer');
const originSwitch = document.getElementById('originSwitch');

// Elementi Modalità per Artista
const artistModeContainer = document.getElementById('artistModeContainer');
const artistSearchInput = document.getElementById('artistSearchInput');
const artistSearchGoBtn = document.getElementById('artistSearchGoBtn');
const artistSearchDropdown = document.getElementById('artistSearchDropdown');
const artistPillGrid = document.getElementById('artistPillGrid');
const artistActiveBanner = document.getElementById('artistActiveBanner');
const artistActiveAvatar = document.getElementById('artistActiveAvatar');
const artistActiveName = document.getElementById('artistActiveName');
const artistChangeBtn = document.getElementById('artistChangeBtn');
const artistNextSongTopBtn = document.getElementById('artistNextSongTopBtn');

const guessBoard = document.getElementById('guessBoard');
const timelineTrack = document.getElementById('timelineTrack');
const timelineFill = document.getElementById('timelineFill');
const timeCurrent = document.getElementById('timeCurrent');
const timeUnlocked = document.getElementById('timeUnlocked');
const timeTotal = document.getElementById('timeTotal');

const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const waveformLeft = document.getElementById('waveformLeft');
const waveformRight = document.getElementById('waveformRight');

const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const searchDropdown = document.getElementById('searchDropdown');
const skipBtn = document.getElementById('skipBtn');
const submitBtn = document.getElementById('submitBtn');

// Modali
const modalGameOver = document.getElementById('modalGameOver');
const gameOverHeading = document.getElementById('gameOverHeading');
const gameOverSubtitle = document.getElementById('gameOverSubtitle');
const revealCover = document.getElementById('revealCover');
const revealTrack = document.getElementById('revealTrack');
const revealArtist = document.getElementById('revealArtist');
const revealAlbum = document.getElementById('revealAlbum');
const fullAudioPlayer = document.getElementById('fullAudioPlayer');
const shareResultBtn = document.getElementById('shareResultBtn');
const nextRandomBtn = document.getElementById('nextRandomBtn');
const nextArtistSongBtn = document.getElementById('nextArtistSongBtn');
const changeArtistModalBtn = document.getElementById('changeArtistModalBtn');

const modalStats = document.getElementById('modalStats');
const statPlayed = document.getElementById('statPlayed');
const statWinRate = document.getElementById('statWinRate');
const statStreak = document.getElementById('statStreak');
const statMaxStreak = document.getElementById('statMaxStreak');
const distChart = document.getElementById('distChart');

const modalHelp = document.getElementById('modalHelp');
const toastContainer = document.getElementById('toastContainer');

// ============================================================================
// INIZIALIZZAZIONE
// ============================================================================
async function init() {
  buildTimelineSegments();
  renderFeaturedArtists();
  setupEventListeners();
  setupAudioCallbacks();
  setupEngineCallbacks();

  // Avvia con la modalità del giorno
  await switchMode('daily');
}

/**
 * Costruisce i 6 segmenti visivi proporzionali nella timeline
 */
function buildTimelineSegments() {
  timelineTrack.querySelectorAll('.timeline-segment').forEach(s => s.remove());

  const totalGameTime = STEP_DURATIONS[STEP_DURATIONS.length - 1]; // 16s
  let prevTime = 0;

  STEP_DURATIONS.forEach((duration, index) => {
    const segmentWidth = ((duration - prevTime) / totalGameTime) * 100;
    prevTime = duration;

    const seg = document.createElement('div');
    seg.className = 'timeline-segment';
    seg.style.width = `${segmentWidth}%`;
    seg.dataset.step = index;
    timelineTrack.appendChild(seg);
  });
}

/**
 * Popola il carosello degli artisti in evidenza per la Modalità per Artista
 */
function renderFeaturedArtists() {
  artistPillGrid.innerHTML = '';

  FEATURED_ARTISTS.forEach(artist => {
    const btn = document.createElement('button');
    btn.className = 'artist-pill';
    btn.dataset.artist = artist.name;
    btn.innerHTML = `
      <span>${artist.flag}</span>
      <strong>${escapeHtml(artist.name)}</strong>
      <span class="artist-pill-genre">${escapeHtml(artist.genre)}</span>
    `;

    btn.addEventListener('click', () => {
      selectArtist(artist.name, artist.id);
    });

    artistPillGrid.appendChild(btn);
  });
}

/**
 * Gestisce l'input per la ricerca e disambiguazione visiva dell'artista
 */
function handleArtistSearchInput(e) {
  const query = e.target.value.trim();
  clearTimeout(artistSearchDebounceTimer);

  if (query.length < 2) {
    closeArtistDropdown();
    return;
  }

  artistSearchDropdown.innerHTML = '<div class="artist-search-loading">Ricerca cantanti e gruppi... ⏳</div>';
  artistSearchDropdown.classList.add('open');

  artistSearchDebounceTimer = setTimeout(async () => {
    try {
      const artists = await searchArtists(query);
      renderArtistDropdown(artists, query);
    } catch (err) {
      console.warn('Errore ricerca artisti:', err);
      artistSearchDropdown.innerHTML = '<div class="artist-search-empty">Errore nella ricerca. Riprova.</div>';
    }
  }, 220);
}

/**
 * Mostra l'elenco visivo dei cantanti con copertina, nome, genere e traccia celebre
 */
function renderArtistDropdown(artists, query) {
  artistSearchDropdown.innerHTML = '';

  if (!artists || artists.length === 0) {
    artistSearchDropdown.innerHTML = `<div class="artist-search-empty">Nessun artista trovato per "${escapeHtml(query)}". Verifica il nome o prova un altro cantante!</div>`;
    artistSearchDropdown.classList.add('open');
    return;
  }

  artists.forEach(artist => {
    const card = document.createElement('div');
    card.className = 'artist-card-item';

    const coverHtml = artist.artworkUrl
      ? `<img class="artist-card-cover" src="${escapeHtml(artist.artworkUrl)}" alt="${escapeHtml(artist.artistName)}" loading="lazy" onerror="this.src='https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6e/fe/af/6efeaf67-47cc-3808-da77-2f7d36ad0805/5054197949418.jpg/100x100bb.jpg'" />`
      : `<div class="artist-card-cover artist-card-placeholder">🎤</div>`;

    const genreHtml = artist.genre
      ? `<span class="artist-card-genre">${escapeHtml(artist.genre)}</span>`
      : '';

    const sampleHtml = artist.sampleTrack
      ? `<span class="artist-card-sample">Hit: <em>${escapeHtml(artist.sampleTrack)}</em></span>`
      : '';

    card.innerHTML = `
      ${coverHtml}
      <div class="artist-card-info">
        <span class="artist-card-name">${escapeHtml(artist.artistName)}</span>
        <div class="artist-card-meta">
          ${genreHtml}
          ${sampleHtml}
        </div>
      </div>
      <button class="artist-card-action" type="button" title="Seleziona e avvia sfida">Sfida →</button>
    `;

    card.addEventListener('click', () => {
      selectArtist(artist.artistName, artist.artistId, artist.artworkUrl);
    });

    artistSearchDropdown.appendChild(card);
  });

  artistSearchDropdown.classList.add('open');
}

function closeArtistDropdown() {
  artistSearchDropdown.classList.remove('open');
  artistSearchDropdown.innerHTML = '';
}

/**
 * Seleziona un artista e avvia la sfida
 * Usa prioritariamente l'artistId univoco per garantire zero omonimi.
 */
async function selectArtist(artistName, artistId = null, artworkUrl = null) {
  if (!artistName || !artistName.trim()) return;

  const cleanName = artistName.trim();
  currentArtist = cleanName;
  currentArtistId = artistId;
  closeArtistDropdown();
  showToast(`Caricamento discografia di ${cleanName}...`, 2000);

  // Aggiorna classe attiva sui pill
  artistPillGrid.querySelectorAll('.artist-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.artist?.toLowerCase() === cleanName.toLowerCase());
  });

  const songs = await fetchArtistTopSongs(cleanName, artistId);

  if (!songs || songs.length === 0) {
    showToast(`Nessun brano originale trovato per "${cleanName}". Prova un altro artista!`, 3500);
    return;
  }

  currentArtistSongs = songs;
  currentArtistArtwork = artworkUrl || songs[0]?.artworkUrl || null;
  artistModeContainer.classList.remove('visible');
  artistActiveBanner.style.display = 'flex';
  artistActiveName.textContent = cleanName;

  if (currentArtistArtwork) {
    artistActiveAvatar.src = currentArtistArtwork;
    artistActiveAvatar.style.display = 'block';
  } else {
    artistActiveAvatar.style.display = 'none';
  }

  await startNewArtistGame();
}

/**
 * Avvia una nuova partita per l'artista selezionato
 * Implementa il Deck Shuffle (mazzo a esaurimento) per evitare doppioni
 */
async function startNewArtistGame() {
  audioPlayer.stop();
  closeModal(modalGameOver);

  if (!currentArtist || currentArtistSongs.length === 0) {
    showToast('Seleziona prima un artista!');
    return;
  }

  const artistKey = currentArtist.toLowerCase().trim();
  if (!artistPlayedDecks.has(artistKey)) {
    artistPlayedDecks.set(artistKey, new Set());
  }
  const playedSet = artistPlayedDecks.get(artistKey);

  // Filtra i brani già giocati per questo artista
  let unplayedPool = currentArtistSongs.filter(s => !playedSet.has(s.id));

  // Se tutti i brani della discografia sono stati giocati, rimescola il mazzo
  if (unplayedPool.length <= 1) {
    playedSet.clear();
    const prevId = currentTargetSong ? currentTargetSong.id : null;
    unplayedPool = currentArtistSongs.filter(s => s.id !== prevId);
    if (unplayedPool.length === 0) unplayedPool = currentArtistSongs;
  }

  const prevId = currentTargetSong ? currentTargetSong.id : null;
  if (prevId && unplayedPool.length > 1) {
    unplayedPool = unplayedPool.filter(s => s.id !== prevId);
  }

  const randomIndex = Math.floor(Math.random() * unplayedPool.length);
  const pickedSong = unplayedPool[randomIndex];
  playedSet.add(pickedSong.id);

  showToast(`Sfida: ${currentArtist} • Nuova canzone pronta! 🎧`);
  currentTargetSong = await resolveSongAudio(pickedSong);
  searchInput.placeholder = `Cerca una canzone di ${currentArtist}...`;

  await audioPlayer.loadTrack(currentTargetSong.previewUrl);
  gameEngine.start(currentTargetSong, false, null);
}

/**
 * Cambia la modalità di gioco (Daily vs Unlimited vs Artist)
 */
async function switchMode(mode) {
  currentMode = mode;
  audioPlayer.stop();

  if (mode === 'daily') {
    tabDaily.classList.add('active');
    tabUnlimited.classList.remove('active');
    tabArtist.classList.remove('active');
    categoryFilter.classList.remove('visible');
    originSwitchContainer.classList.remove('visible');
    artistModeContainer.classList.remove('visible');
    artistActiveBanner.style.display = 'none';
    nextRandomBtn.style.display = 'none';
    searchInput.placeholder = 'Cerca artista o titolo canzone...';

    // Recupera la canzone giornaliera
    const today = getTodayDateString();
    const dailySong = getDailySong(today);
    const savedState = getDailyState(today);

    showToast(`Caricamento Canzone del Giorno #${dailySong.dailyNumber}...`);
    currentTargetSong = await resolveSongAudio(dailySong);

    await audioPlayer.loadTrack(currentTargetSong.previewUrl);
    gameEngine.start(currentTargetSong, true, savedState);

    // Se la partita era già conclusa oggi, mostra il riassunto
    if (savedState && savedState.isGameOver) {
      setTimeout(() => openGameOverModal(savedState.isWon), 400);
    }
  } else if (mode === 'unlimited') {
    tabDaily.classList.remove('active');
    tabUnlimited.classList.add('active');
    tabArtist.classList.remove('active');
    categoryFilter.classList.add('visible');
    originSwitchContainer.classList.add('visible');
    artistModeContainer.classList.remove('visible');
    artistActiveBanner.style.display = 'none';
    nextRandomBtn.style.display = 'inline-flex';
    searchInput.placeholder = 'Cerca artista o titolo canzone...';

    await startNewRandomGame();
  } else if (mode === 'artist') {
    tabDaily.classList.remove('active');
    tabUnlimited.classList.remove('active');
    tabArtist.classList.add('active');
    categoryFilter.classList.remove('visible');
    originSwitchContainer.classList.remove('visible');
    nextRandomBtn.style.display = 'none';

    if (currentArtist && currentArtistSongs.length > 0) {
      artistModeContainer.classList.remove('visible');
      artistActiveBanner.style.display = 'flex';
      artistActiveName.textContent = currentArtist;
      if (currentArtistArtwork) {
        artistActiveAvatar.src = currentArtistArtwork;
        artistActiveAvatar.style.display = 'block';
      } else {
        artistActiveAvatar.style.display = 'none';
      }
      searchInput.placeholder = `Cerca una canzone di ${currentArtist}...`;
    } else {
      artistModeContainer.classList.add('visible');
      artistActiveBanner.style.display = 'none';
      showToast('Scegli un artista per avviare la sfida!');
    }
  }
}

/**
 * Avvia una nuova partita casuale (per la modalità libera)
 */
async function startNewRandomGame() {
  audioPlayer.stop();
  closeModal(modalGameOver);

  const prevId = currentTargetSong ? currentTargetSong.id : null;
  const rawSong = getRandomSong(currentCategory, currentOrigin, prevId);

  const catName = CATEGORIES[currentCategory.toUpperCase()]?.name || 'Tutte le Hit';
  let originLabel = '';
  if (currentOrigin === 'ita') originLabel = ' • Solo ITA 🇮🇹';
  else if (currentOrigin === 'intl') originLabel = ' • Non-ITA 🌍';

  showToast(`Nuova canzone (${catName}${originLabel})...`);
  currentTargetSong = await resolveSongAudio(rawSong);

  await audioPlayer.loadTrack(currentTargetSong.previewUrl);
  gameEngine.start(currentTargetSong, false, null);
}

// ============================================================================
// GESTIONE CALLBACK AUDIO E MOTORE
// ============================================================================
function setupAudioCallbacks() {
  audioPlayer.onTimeUpdate((curTime, maxDur) => {
    const totalTime = gameEngine.isGameOver ? FULL_PREVIEW_DURATION : STEP_DURATIONS[STEP_DURATIONS.length - 1];
    const pct = Math.min(100, (curTime / totalTime) * 100);
    timelineFill.style.width = `${pct}%`;
    timeCurrent.textContent = `${curTime.toFixed(1)}s`;
  });

  audioPlayer.onStateChange((state) => {
    if (state === 'playing') {
      playBtn.classList.add('playing');
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      waveformLeft.classList.add('playing');
      waveformRight.classList.add('playing');
    } else {
      playBtn.classList.remove('playing');
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      waveformLeft.classList.remove('playing');
      waveformRight.classList.remove('playing');
    }
  });

  audioPlayer.onError(() => {
    showToast('Errore di caricamento audio. Riprova con un altro brano.', 3000);
  });
}

function setupEngineCallbacks() {
  gameEngine.onStateChange = (state) => {
    audioPlayer.setMaxDuration(state.unlockedDuration);
    renderGuessRows(state.guesses, state.currentStep, state.maxSteps, state.isGameOver);
    renderTimelineState(state.currentStep, state.unlockedDuration, state.isGameOver);
    updateActionButtons(state);

    // Se è la modalità del giorno, salva lo stato corrente
    if (state.isDaily) {
      saveDailyState(getTodayDateString(), gameEngine.getState());
    }

    // Se il gioco è terminato
    if (state.isGameOver) {
      handleGameOver(state.isWon, state.guesses.length);
    }
  };
}

function handleGameOver(won, attempts) {
  // Registra statistiche
  recordGameResult({
    won,
    attemptCount: attempts,
    isDaily: currentMode === 'daily',
    dateStr: getTodayDateString()
  });

  // Mostra modale con delay per effetto scenico
  setTimeout(() => {
    openGameOverModal(won);
  }, 700);
}

// ============================================================================
// RENDERING INTERFACCIA UTENTE
// ============================================================================
function renderGuessRows(guesses, currentStep, maxSteps, isGameOver) {
  guessBoard.innerHTML = '';

  for (let i = 0; i < maxSteps; i++) {
    const row = document.createElement('div');
    row.className = 'guess-row';

    if (i < guesses.length) {
      const g = guesses[i];
      if (g.type === 'correct') {
        row.classList.add('correct', 'pop-in');
        row.innerHTML = `
          <div class="guess-content">
            <span class="guess-text"><strong>${escapeHtml(g.title)}</strong><span class="guess-artist">${escapeHtml(g.artist)}</span></span>
          </div>
          <span class="guess-badge">✓</span>
        `;
      } else if (g.type === 'skipped') {
        row.classList.add('skipped', 'pop-in');
        row.innerHTML = `
          <div class="guess-content">
            <span class="guess-text">Saltato</span>
          </div>
          <span class="guess-badge">⤼</span>
        `;
      } else {
        row.classList.add('incorrect', 'pop-in');
        row.innerHTML = `
          <div class="guess-content">
            <span class="guess-text"><strong>${escapeHtml(g.title)}</strong><span class="guess-artist">${escapeHtml(g.artist)}</span></span>
          </div>
          <span class="guess-badge">✕</span>
        `;
      }
    } else if (i === currentStep && !isGameOver) {
      row.classList.add('empty', 'current-target');
      row.innerHTML = `
        <div class="guess-content">
          <span class="guess-num">${i + 1}</span>
        </div>
      `;
    } else {
      row.classList.add('empty');
      row.innerHTML = `
        <div class="guess-content">
          <span class="guess-num">${i + 1}</span>
        </div>
      `;
    }

    guessBoard.appendChild(row);
  }
}

function renderTimelineState(currentStep, unlockedDuration, isGameOver) {
  const segments = timelineTrack.querySelectorAll('.timeline-segment');
  segments.forEach((seg, index) => {
    seg.classList.remove('unlocked', 'current-step');
    if (isGameOver || index < currentStep) {
      seg.classList.add('unlocked');
    } else if (index === currentStep && !isGameOver) {
      seg.classList.add('current-step');
    }
  });

  if (isGameOver) {
    timeUnlocked.textContent = 'Anteprima completa (30s)';
    timeTotal.textContent = '30.0s';
  } else {
    timeUnlocked.textContent = `${unlockedDuration.toFixed(1)}s sbloccati`;
    timeTotal.textContent = '16.0s';
  }
}

function updateActionButtons(state) {
  if (state.isGameOver) {
    skipBtn.disabled = true;
    submitBtn.disabled = true;
    searchInput.disabled = true;
    searchInput.placeholder = 'Partita conclusa!';
    skipBtn.querySelector('span').textContent = 'Partita conclusa';
  } else {
    skipBtn.disabled = false;
    searchInput.disabled = false;
    searchInput.placeholder = 'Cerca artista o titolo canzone...';
    const addSec = gameEngine.getNextSkipAddedSeconds();
    if (addSec > 0) {
      skipBtn.querySelector('span').textContent = `Salta (+${addSec}s)`;
    } else {
      skipBtn.querySelector('span').textContent = 'Salta';
    }
    submitBtn.disabled = !selectedGuessSong;
  }
}

// ============================================================================
// RICERCA E AUTOCOMPLETAMENTO
// ============================================================================
function handleSearchInput(e) {
  const q = e.target.value;
  searchClearBtn.classList.toggle('visible', q.length > 0);
  selectedGuessSong = null;
  submitBtn.disabled = true;

  clearTimeout(searchDebounceTimer);
  if (q.trim().length < 2) {
    closeDropdown();
    return;
  }

  searchDebounceTimer = setTimeout(async () => {
    const artistContext = (currentMode === 'artist' && currentArtist) ? currentArtist : null;
    let results = await searchSongs(q, artistContext);

    // In modalità per artista, prioritizza le canzoni della discografia ufficiale dell'artista selezionato
    if (currentMode === 'artist' && currentArtistSongs.length > 0) {
      const norm = normalizeString(q);
      const discographyMatches = currentArtistSongs.filter(s => {
        const titleNorm = normalizeString(s.title);
        const artNorm = normalizeString(s.artist);
        return titleNorm.includes(norm) || artNorm.includes(norm);
      });

      const existingKeys = new Set(discographyMatches.map(r => `${normalizeString(r.artist)}|${normalizeString(r.title)}`));
      const extraResults = results.filter(r => !existingKeys.has(`${normalizeString(r.artist)}|${normalizeString(r.title)}`));
      results = [...discographyMatches, ...extraResults];
    }

    currentSearchResults = results.slice(0, 60);
    renderDropdownResults(currentSearchResults);
  }, 200);
}

function renderDropdownResults(results) {
  searchDropdown.innerHTML = '';
  highlightedIndex = -1;

  if (results.length === 0) {
    searchDropdown.innerHTML = '<div class="search-empty-state">Nessuna canzone trovata. Prova altri termini!</div>';
    searchDropdown.classList.add('open');
    return;
  }

  results.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'search-item';
    div.dataset.index = index;

    const coverImg = item.artworkUrl
      ? `<img class="search-item-cover" src="${escapeHtml(item.artworkUrl)}" alt="" loading="lazy" onerror="this.style.opacity=0.3" />`
      : `<div class="search-item-cover" style="display:flex;align-items:center;justify-content:center;color:#6b7280;font-size:12px;background:#262932;">🎵</div>`;

    div.innerHTML = `
      ${coverImg}
      <div class="search-item-info">
        <span class="search-item-title">${escapeHtml(item.title)}</span>
        <span class="search-item-artist">${escapeHtml(item.artist)}</span>
      </div>
    `;

    div.addEventListener('click', () => {
      selectSearchItem(item);
    });

    searchDropdown.appendChild(div);
  });

  searchDropdown.classList.add('open');
}

function selectSearchItem(item) {
  selectedGuessSong = item;
  searchInput.value = `${item.artist} - ${item.title}`;
  closeDropdown();
  submitBtn.disabled = false;
  submitBtn.focus();
}

function closeDropdown() {
  searchDropdown.classList.remove('open');
  searchDropdown.innerHTML = '';
  highlightedIndex = -1;
}

// ============================================================================
// MODALI E RISULTATI
// ============================================================================
function openGameOverModal(won) {
  if (won) {
    gameOverHeading.className = 'game-over-title win';
    gameOverHeading.textContent = 'Hai Indovinato! 🎉';
    gameOverSubtitle.textContent = `Indovinato al ${gameEngine.guesses.length}° tentativo su 6!`;
  } else {
    gameOverHeading.className = 'game-over-title loss';
    gameOverHeading.textContent = 'Peccato! 😢';
    gameOverSubtitle.textContent = 'Hai esaurito i tentativi. Ecco la traccia corretta:';
  }

  if (currentTargetSong) {
    revealCover.src = currentTargetSong.artworkUrl || 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6e/fe/af/6efeaf67-47cc-3808-da77-2f7d36ad0805/5054197949418.jpg/600x600bb.jpg';
    revealTrack.textContent = currentTargetSong.resolvedTitle || currentTargetSong.title;
    revealArtist.textContent = currentTargetSong.resolvedArtist || currentTargetSong.artist;
    revealAlbum.textContent = `${currentTargetSong.albumName || 'Singolo'} • ${currentTargetSong.releaseYear || ''}`;

    if (currentTargetSong.previewUrl) {
      fullAudioPlayer.src = currentTargetSong.previewUrl;
      fullAudioPlayer.style.display = 'block';
    } else {
      fullAudioPlayer.style.display = 'none';
    }
  }

  // Pulsanti del modale a seconda della modalità
  if (currentMode === 'artist') {
    nextRandomBtn.style.display = 'none';
    nextArtistSongBtn.style.display = 'inline-flex';
    nextArtistSongBtn.querySelector('span').textContent = `Altra Canzone di ${currentArtist || 'questo artista'} 🎲`;
    changeArtistModalBtn.style.display = 'inline-flex';
  } else if (currentMode === 'unlimited') {
    nextRandomBtn.style.display = 'inline-flex';
    nextArtistSongBtn.style.display = 'none';
    changeArtistModalBtn.style.display = 'none';
  } else {
    nextRandomBtn.style.display = 'none';
    nextArtistSongBtn.style.display = 'none';
    changeArtistModalBtn.style.display = 'none';
  }

  openModal(modalGameOver);
}

function openStatsModal() {
  const stats = loadStats();
  statPlayed.textContent = stats.played;
  const winRate = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;
  statWinRate.textContent = `${winRate}%`;
  statStreak.textContent = stats.currentStreak;
  statMaxStreak.textContent = stats.maxStreak;

  // Render barre distribuzione
  distChart.innerHTML = '';
  const maxVal = Math.max(...Object.values(stats.guessDistribution), 1);

  for (let i = 1; i <= 6; i++) {
    const count = stats.guessDistribution[i] || 0;
    const pct = Math.max(8, (count / maxVal) * 100);

    const row = document.createElement('div');
    row.className = 'dist-row';
    row.innerHTML = `
      <span class="dist-num">${i}</span>
      <div class="dist-bar-wrapper">
        <div class="dist-bar" style="width: ${pct}%">${count}</div>
      </div>
    `;
    distChart.appendChild(row);
  }

  openModal(modalStats);
}

function openModal(modal) {
  modal.classList.add('active');
}

function closeModal(modal) {
  modal.classList.remove('active');
  if (modal === modalGameOver) {
    fullAudioPlayer.pause();
  }
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================
function setupEventListeners() {
  // Brand click torna a oggi
  brandBtn.addEventListener('click', () => {
    switchMode('daily');
  });

  // Modalità
  tabDaily.addEventListener('click', () => switchMode('daily'));
  tabUnlimited.addEventListener('click', () => switchMode('unlimited'));
  tabArtist.addEventListener('click', () => switchMode('artist'));

  // Categorie
  categoryFilter.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      categoryFilter.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      startNewRandomGame();
    });
  });

  // Switch Origine (ITA / Non-ITA / Tutte)
  originSwitch.querySelectorAll('.origin-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      originSwitch.querySelectorAll('.origin-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      currentOrigin = btn.dataset.origin;
      startNewRandomGame();
    });
  });

  // Ricerca e Selezione Artista (con suggerimenti visivi e copertine)
  artistSearchInput.addEventListener('input', handleArtistSearchInput);

  artistSearchGoBtn.addEventListener('click', async () => {
    const val = artistSearchInput.value.trim();
    if (!val) return;
    const firstCard = artistSearchDropdown.querySelector('.artist-card-item');
    if (firstCard && artistSearchDropdown.classList.contains('open')) {
      firstCard.click();
    } else {
      showToast(`Ricerca artista "${val}"...`, 1500);
      const results = await searchArtists(val);
      if (results && results.length > 0) {
        selectArtist(results[0].artistName, results[0].artistId, results[0].artworkUrl);
      } else {
        selectArtist(val);
      }
    }
  });

  artistSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeArtistDropdown();
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      artistSearchGoBtn.click();
    }
  });

  // Azioni Banner Artista Attivo
  artistChangeBtn.addEventListener('click', () => {
    artistModeContainer.classList.add('visible');
    artistActiveBanner.style.display = 'none';
    closeArtistDropdown();
    artistSearchInput.value = '';
    artistSearchInput.focus();
  });

  artistNextSongTopBtn.addEventListener('click', () => {
    startNewArtistGame();
  });

  // Pulsanti Modale per Artista
  nextArtistSongBtn.addEventListener('click', () => {
    startNewArtistGame();
  });

  changeArtistModalBtn.addEventListener('click', () => {
    closeModal(modalGameOver);
    switchMode('artist');
    artistModeContainer.classList.add('visible');
    artistActiveBanner.style.display = 'none';
    closeArtistDropdown();
    artistSearchInput.value = '';
    artistSearchInput.focus();
  });

  // Pulsante Play centrale
  playBtn.addEventListener('click', () => {
    audioPlayer.togglePlay();
  });

  // Ricerca
  searchInput.addEventListener('input', handleSearchInput);
  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchClearBtn.classList.remove('visible');
    closeDropdown();
    selectedGuessSong = null;
    submitBtn.disabled = true;
    searchInput.focus();
  });

  // Navigazione tastiera nel dropdown
  searchInput.addEventListener('keydown', (e) => {
    const items = searchDropdown.querySelectorAll('.search-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlightedIndex = (highlightedIndex + 1) % items.length;
      updateHighlight(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      highlightedIndex = (highlightedIndex - 1 + items.length) % items.length;
      updateHighlight(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < currentSearchResults.length) {
        selectSearchItem(currentSearchResults[highlightedIndex]);
      } else if (selectedGuessSong) {
        handleSubmitGuess();
      }
    } else if (e.key === 'Escape') {
      closeDropdown();
    }
  });

  // Click fuori dai dropdown per chiuderli
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      closeDropdown();
    }
    if (!e.target.closest('.artist-search-wrapper')) {
      closeArtistDropdown();
    }
  });

  // Gestione cambio scheda del browser: ferma audio e anteprime quando l'utente lascia la pagina
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (audioPlayer.isPlaying) {
        audioPlayer.stop();
      }
      if (fullAudioPlayer && !fullAudioPlayer.paused) {
        fullAudioPlayer.pause();
      }
    }
  });

  // Skip & Submit
  skipBtn.addEventListener('click', () => {
    audioPlayer.stop();
    gameEngine.skip();
  });

  submitBtn.addEventListener('click', () => {
    handleSubmitGuess();
  });

  function handleSubmitGuess() {
    if (!selectedGuessSong) return;
    audioPlayer.stop();
    const songToSubmit = selectedGuessSong;
    searchInput.value = '';
    searchClearBtn.classList.remove('visible');
    selectedGuessSong = null;
    submitBtn.disabled = true;
    gameEngine.submitGuess(songToSubmit);
  }

  // Volume / Mute
  volumeBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    audioPlayer.setVolume(isMuted ? 0 : 1);
    if (isMuted) {
      volumeIcon.innerHTML = `
        <line x1="1" y1="1" x2="23" y2="23"></line>
        <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
        <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
      `;
      showToast('Audio disattivato');
    } else {
      volumeIcon.innerHTML = `
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      `;
      showToast('Audio attivato');
    }
  });

  // Modale Statistiche & Help
  statsBtn.addEventListener('click', openStatsModal);
  helpBtn.addEventListener('click', () => openModal(modalHelp));

  // Chiusura Modali
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.close;
      closeModal(document.getElementById(modalId));
    });
  });

  // Condividi Risultato
  shareResultBtn.addEventListener('click', () => {
    const shareText = generateShareText({
      isDaily: currentMode === 'daily',
      dailyNumber: currentTargetSong ? currentTargetSong.dailyNumber : 1,
      won: gameEngine.isWon,
      attempts: gameEngine.guesses.length,
      guessHistory: gameEngine.guesses,
      mode: currentMode,
      artistName: currentArtist
    });

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareText).then(() => {
        showToast('Risultato copiato negli appunti! 📋');
      }).catch(() => {
        prompt('Copia il tuo risultato:', shareText);
      });
    } else {
      prompt('Copia il tuo risultato:', shareText);
    }
  });

  // Prossima Canzone Casuale
  nextRandomBtn.addEventListener('click', () => {
    startNewRandomGame();
  });
}

function updateHighlight(items) {
  items.forEach((it, idx) => {
    it.classList.toggle('highlighted', idx === highlightedIndex);
    if (idx === highlightedIndex) {
      it.scrollIntoView({ block: 'nearest' });
    }
  });
}

// ============================================================================
// UTILITIES
// ============================================================================
function showToast(message, duration = 2500) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastContainer.appendChild(toast);

  // Trigger animazione
  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// Avvia l'applicazione al caricamento
window.addEventListener('DOMContentLoaded', init);
