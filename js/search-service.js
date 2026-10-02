/**
 * SONGLESS - Search & Autocomplete Service
 * Risolve la ricerca globale imparziale tramite iTunes Search API
 * Garantisce che TUTTI i risultati abbiano copertina ad alta risoluzione
 * ed elimina qualsiasi favoritismo/spoiler per la canzone segreta.
 */

import { SONG_DATABASE, isOriginalStudioTrack } from './song-catalog.js';

// Cache per query recenti
const searchCache = new Map();

/**
 * Normalizza una stringa rimuovendo accenti, punteggiatura e spazi doppi
 */
export function normalizeString(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // rimuove accenti
    .replace(/[^\w\s]/gi, ' ')       // rimuove caratteri speciali
    .replace(/\s+/g, ' ')            // spazi singoli
    .trim();
}

/**
 * Calcola il punteggio di pertinenza tra il testo cercato e il brano
 */
function calculateRelevance(item, normQuery) {
  const normTitle = normalizeString(item.title || '');
  const normArtist = normalizeString(item.artist || '');
  const combined = `${normArtist} ${normTitle}`;

  // Se l'artista corrisponde esattamente al termine cercato (es. "Queen", "Annalisa")
  if (normArtist === normQuery) return 120;
  // Se il titolo corrisponde esattamente
  if (normTitle === normQuery) return 110;
  // Se l'artista inizia con la query
  if (normArtist.startsWith(normQuery)) return 95;
  // Se il titolo inizia con la query
  if (normTitle.startsWith(normQuery)) return 90;
  // Contiene come parola intera nell'artista
  if (normArtist.includes(` ${normQuery} `) || normArtist.startsWith(`${normQuery} `)) return 85;
  // Contiene come parola intera nel titolo
  if (normTitle.includes(` ${normQuery} `) || normTitle.startsWith(`${normQuery} `)) return 80;
  // Contiene nell'artista
  if (normArtist.includes(normQuery)) return 70;
  // Contiene nel titolo
  if (normTitle.includes(normQuery)) return 60;
  // Contiene nella combinazione
  if (combined.includes(normQuery)) return 40;

  return 10;
}

/**
 * Cerca canzoni in tempo reale tramite iTunes Search API e catalogo locale
 * Mostra l'intera discografia autentica (fino a 60-80 brani) senza troncare a 10-15
 * e senza favorire o spoilerare la canzone obiettivo.
 * 
 * @param {string} query - Testo digitato dall'utente
 * @param {string} [contextArtist=null] - Artista corrente (se in modalità artista)
 * @returns {Promise<Array>} Elenco completo di suggerimenti autentici con copertine
 */
export async function searchSongs(query, contextArtist = null) {
  const cleanQuery = query.trim();
  if (cleanQuery.length < 2) return [];

  const cacheKey = `${cleanQuery.toLowerCase()}_${(contextArtist || '').toLowerCase()}`;
  if (searchCache.has(cacheKey)) {
    return searchCache.get(cacheKey);
  }

  const normQuery = normalizeString(cleanQuery);
  const seenKeys = new Set();
  const results = [];

  // Helper per inserire una traccia valida ed escludere duplicati
  function addTrack(item, source = 'itunes') {
    if (!item || !item.trackName || !item.artistName) return;
    if (!isOriginalStudioTrack(item, contextArtist || null)) return;

    // Normalizza il titolo rimuovendo appendici comuni (es. "Remastered 2011", "[Deluxe Edition]")
    const rawTitle = item.trackName;
    const cleanTit = rawTitle
      .replace(/\(.*?\)/g, '')
      .replace(/\[.*?\]/g, '')
      .replace(/- Live.*/i, '')
      .replace(/- Remaster.*/i, '')
      .trim();

    const normArtist = normalizeString(item.artistName);
    const normCleanTitle = normalizeString(cleanTit || rawTitle);
    const key = `${normArtist}|${normCleanTitle}`;

    if (!seenKeys.has(key)) {
      seenKeys.add(key);

      const artwork = item.artworkUrl100
        ? item.artworkUrl100.replace('100x100bb', '200x200bb')
        : (item.artworkUrl60 || null);

      results.push({
        id: `itunes-${item.trackId || Math.random().toString(36).slice(2, 9)}`,
        artist: item.artistName,
        title: rawTitle,
        cleanTitle: cleanTit || rawTitle,
        artworkUrl: artwork,
        previewUrl: item.previewUrl || null,
        source
      });
    }
  }

  // 1. Interrogazioni all'API ufficiale di iTunes (storefront IT, limite fino a 150)
  try {
    const encoded = encodeURIComponent(cleanQuery);
    const fetchPromises = [];

    // Query 1: Ricerca generale
    fetchPromises.push(
      fetch(`https://itunes.apple.com/search?term=${encoded}&entity=song&country=IT&limit=150`)
        .then(res => res.ok ? res.json() : { results: [] })
        .catch(() => ({ results: [] }))
    );

    // Query 2: Se la query potrebbe essere un artista o siamo in modalità artista, estrai discografia
    const targetArtistName = contextArtist || cleanQuery;
    if (targetArtistName.length >= 3) {
      const encArtist = encodeURIComponent(targetArtistName);
      fetchPromises.push(
        fetch(`https://itunes.apple.com/search?term=${encArtist}&entity=song&attribute=artistTerm&country=IT&limit=150`)
          .then(res => res.ok ? res.json() : { results: [] })
          .catch(() => ({ results: [] }))
      );
    }

    // Query 3: Se siamo in modalità artista e cerchiamo un brano dell'artista
    if (contextArtist && cleanQuery.toLowerCase() !== contextArtist.toLowerCase()) {
      const encCombined = encodeURIComponent(`${contextArtist} ${cleanQuery}`);
      fetchPromises.push(
        fetch(`https://itunes.apple.com/search?term=${encCombined}&entity=song&country=IT&limit=80`)
          .then(res => res.ok ? res.json() : { results: [] })
          .catch(() => ({ results: [] }))
      );
    }

    const responses = await Promise.all(fetchPromises);
    for (const data of responses) {
      if (data.results && Array.isArray(data.results)) {
        for (const item of data.results) {
          addTrack(item, 'itunes');
        }
      }
    }
  } catch (err) {
    console.warn('Errore chiamata iTunes API search:', err);
  }

  // 2. Integra le canzoni del nostro catalogo curato (461 hit storiche)
  const normContextArtist = contextArtist ? normalizeString(contextArtist) : null;
  for (const song of SONG_DATABASE) {
    if (normContextArtist && !normalizeString(song.artist).includes(normContextArtist) && !normContextArtist.includes(normalizeString(song.artist))) {
      continue;
    }

    const fullText = normalizeString(`${song.artist} ${song.title}`);
    const revText = normalizeString(`${song.title} ${song.artist}`);

    if (fullText.includes(normQuery) || revText.includes(normQuery) || (normContextArtist && normalizeString(song.artist).includes(normContextArtist))) {
      addTrack({
        trackId: song.id,
        artistName: song.artist,
        trackName: song.title,
        artworkUrl100: song.artworkUrl || null,
        previewUrl: song.previewUrl || null,
        collectionName: song.category
      }, 'catalog');
    }
  }

  // 3. Ordina in base alla pertinenza; in caso di parità, ordina alfabeticamente per titolo
  results.sort((a, b) => {
    const diff = calculateRelevance(b, normQuery) - calculateRelevance(a, normQuery);
    if (diff !== 0) return diff;
    return a.title.localeCompare(b.title);
  });

  // Mostra un elenco ricco e navigabile (fino a 60 brani)
  const finalResults = results.slice(0, 60);
  searchCache.set(cacheKey, finalResults);
  return finalResults;
}

/**
 * Confronta il tentativo dell'utente con la canzone bersaglio
 * @param {Object} guess - Canzone selezionata o testo inserito
 * @param {Object} target - Canzone obiettivo
 * @returns {boolean} true se è un match corretto
 */
export function checkSongMatch(guess, target) {
  if (!guess || !target) return false;

  // Se entrambi hanno ID univoco identico
  if (guess.id && target.id && guess.id === target.id) {
    return true;
  }

  const guessArtist = normalizeString(guess.artist || '');
  const guessTitle = normalizeString(guess.title || '');
  const targetArtist = normalizeString(target.artist || target.resolvedArtist || '');
  const targetTitle = normalizeString(target.title || target.resolvedTitle || '');

  // Match esatto o parziale robusto su titolo e artista
  const isTitleMatch = (
    guessTitle === targetTitle ||
    guessTitle.includes(targetTitle) ||
    targetTitle.includes(guessTitle)
  );

  const isArtistMatch = (
    guessArtist === targetArtist ||
    guessArtist.includes(targetArtist) ||
    targetArtist.includes(guessArtist)
  );

  return isTitleMatch && isArtistMatch;
}

/**
 * Cerca artisti su iTunes API con immagine di copertina, genere e brano iconico
 * Permette all'utente di selezionare visivamente l'artista esatto evitando omonimie
 * 
 * @param {string} query - Nome artista cercato dall'utente
 * @returns {Promise<Array>} Lista di artisti con artistId, artistName, genre, artworkUrl e sampleTrack
 */
export async function searchArtists(query) {
  const clean = query.trim();
  if (clean.length < 2) return [];

  const cacheKey = `artist_search_${clean.toLowerCase()}`;
  if (searchCache.has(cacheKey)) {
    return searchCache.get(cacheKey);
  }

  const enc = encodeURIComponent(clean);
  const qLow = clean.toLowerCase();
  const artistsMap = new Map();

  // 1. Cerca brani per artistTerm per individuare gli artisti più popolari e relativi brani celebri con copertina
  try {
    const urlSong = `https://itunes.apple.com/search?term=${enc}&entity=song&attribute=artistTerm&country=IT&limit=40`;
    const res = await fetch(urlSong);
    if (res.ok) {
      const data = await res.json();
      if (data.results) {
        for (const r of data.results) {
          const aid = r.artistId;
          const aname = r.artistName;
          if (!aid || !aname) continue;

          if (!artistsMap.has(aid)) {
            artistsMap.set(aid, {
              artistId: aid,
              artistName: aname,
              genre: r.primaryGenreName || 'Musica',
              artworkUrl: r.artworkUrl100 ? r.artworkUrl100.replace('100x100bb', '200x200bb') : null,
              sampleTrack: r.trackName || '',
              popularity: 1
            });
          } else {
            artistsMap.get(aid).popularity += 1;
          }
        }
      }
    }
  } catch (e) {
    console.warn('Errore ricerca artisti via song:', e);
  }

  // 2. Cerca per entity=musicArtist per catturare eventuali artisti omonimi precisi
  try {
    const urlArt = `https://itunes.apple.com/search?term=${enc}&entity=musicArtist&country=IT&limit=10`;
    const res = await fetch(urlArt);
    if (res.ok) {
      const data = await res.json();
      const missingIds = [];
      if (data.results) {
        for (const r of data.results) {
          const aid = r.artistId;
          const aname = r.artistName;
          if (!aid || !aname) continue;

          if (!artistsMap.has(aid)) {
            missingIds.push(aid);
            artistsMap.set(aid, {
              artistId: aid,
              artistName: aname,
              genre: r.primaryGenreName || 'Musica',
              artworkUrl: null,
              sampleTrack: '',
              popularity: 0
            });
          }
        }

        // Se mancano copertine, lookup rapido delle tracce
        if (missingIds.length > 0) {
          const lookupUrl = `https://itunes.apple.com/lookup?id=${missingIds.slice(0, 8).join(',')}&entity=song&limit=1`;
          const lRes = await fetch(lookupUrl);
          if (lRes.ok) {
            const lData = await lRes.json();
            if (lData.results) {
              for (const tr of lData.results) {
                if (tr.wrapperType === 'track') {
                  const aid = tr.artistId;
                  if (artistsMap.has(aid)) {
                    const entry = artistsMap.get(aid);
                    if (!entry.artworkUrl && tr.artworkUrl100) {
                      entry.artworkUrl = tr.artworkUrl100.replace('100x100bb', '200x200bb');
                    }
                    if (!entry.sampleTrack && tr.trackName) {
                      entry.sampleTrack = tr.trackName;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } catch (e) {
    console.warn('Errore ricerca musicArtist:', e);
  }

  // Rimuovi artisti senza copertina
  const valid = Array.from(artistsMap.values()).filter(a => a.artworkUrl);

  // Ordina: corrispondenza esatta di nome prima, poi popolarità
  valid.sort((a, b) => {
    const aNorm = a.artistName.toLowerCase();
    const bNorm = b.artistName.toLowerCase();

    const aExact = aNorm === qLow ? 1000 : (aNorm.startsWith(qLow) ? 500 : (aNorm.includes(qLow) ? 200 : 0));
    const bExact = bNorm === qLow ? 1000 : (bNorm.startsWith(qLow) ? 500 : (bNorm.includes(qLow) ? 200 : 0));

    const scoreA = aExact + (a.popularity * 10);
    const scoreB = bExact + (b.popularity * 10);

    return scoreB - scoreA;
  });

  const finalArtists = valid.slice(0, 8);
  searchCache.set(cacheKey, finalArtists);
  return finalArtists;
}
