/**
 * SONGLESS - Core Game Engine
 * Gestisce le regole, i 6 tentativi, l'avanzamento dei secondi e gli stati di vittoria/sconfitta
 */

import { checkSongMatch } from './search-service.js';

// Durate cumulative sbloccate ad ogni tentativo (in secondi)
export const STEP_DURATIONS = [0.5, 1.5, 3.5, 6.5, 11.0, 16.0];
export const FULL_PREVIEW_DURATION = 30.0;
export const MAX_ATTEMPTS = 6;

export class SonglessGameEngine {
  constructor() {
    this.targetSong = null;
    this.isDaily = false;
    this.currentStep = 0; // Da 0 a 5
    this.guesses = []; // Array di { type, text, artist, title, step }
    this.isGameOver = false;
    this.isWon = false;

    // Event callbacks
    this.onStateChange = null;
  }

  /**
   * Inizializza o ripristina una partita
   * @param {Object} targetSong - Canzone da indovinare
   * @param {boolean} isDaily - Indica se è la partita del giorno
   * @param {Object} [savedState] - Eventuale stato salvato per ripristino
   */
  start(targetSong, isDaily = false, savedState = null) {
    this.targetSong = targetSong;
    this.isDaily = isDaily;

    if (savedState) {
      this.currentStep = savedState.currentStep;
      this.guesses = savedState.guesses || [];
      this.isGameOver = savedState.isGameOver || false;
      this.isWon = savedState.isWon || false;
    } else {
      this.currentStep = 0;
      this.guesses = [];
      this.isGameOver = false;
      this.isWon = false;
    }

    this.notifyState();
  }

  /**
   * Restituisce la durata audio attualmente sbloccata in secondi
   */
  getUnlockedDuration() {
    if (this.isGameOver) {
      return FULL_PREVIEW_DURATION;
    }
    return STEP_DURATIONS[this.currentStep] || STEP_DURATIONS[0];
  }

  /**
   * Restituisce quanti secondi aggiuntivi verranno sbloccati al prossimo skip
   */
  getNextSkipAddedSeconds() {
    if (this.currentStep >= MAX_ATTEMPTS - 1) return 0;
    const current = STEP_DURATIONS[this.currentStep];
    const next = STEP_DURATIONS[this.currentStep + 1];
    return +(next - current).toFixed(1);
  }

  /**
   * Esegue l'azione "Salta" (Skip)
   */
  skip() {
    if (this.isGameOver || this.currentStep >= MAX_ATTEMPTS) return false;

    this.guesses.push({
      step: this.currentStep,
      type: 'skipped',
      text: 'Saltato',
      artist: '',
      title: 'Saltato'
    });

    this.currentStep += 1;

    if (this.currentStep >= MAX_ATTEMPTS) {
      this.isGameOver = true;
      this.isWon = false;
    }

    this.notifyState();
    return true;
  }

  /**
   * Invia un tentativo di indovinare
   * @param {Object} guessSong - Canzone scelta dall'autocompletamento
   */
  submitGuess(guessSong) {
    if (this.isGameOver || this.currentStep >= MAX_ATTEMPTS || !guessSong) return false;

    const isMatch = checkSongMatch(guessSong, this.targetSong);

    if (isMatch) {
      this.guesses.push({
        step: this.currentStep,
        type: 'correct',
        text: `${guessSong.artist} - ${guessSong.title}`,
        artist: guessSong.artist,
        title: guessSong.title
      });
      this.isWon = true;
      this.isGameOver = true;
    } else {
      this.guesses.push({
        step: this.currentStep,
        type: 'incorrect',
        text: `${guessSong.artist} - ${guessSong.title}`,
        artist: guessSong.artist,
        title: guessSong.title
      });

      this.currentStep += 1;

      if (this.currentStep >= MAX_ATTEMPTS) {
        this.isGameOver = true;
        this.isWon = false;
      }
    }

    this.notifyState();
    return true;
  }

  /**
   * Restituisce lo stato corrente per la memorizzazione
   */
  getState() {
    return {
      targetSongId: this.targetSong ? this.targetSong.id : null,
      currentStep: this.currentStep,
      guesses: this.guesses,
      isGameOver: this.isGameOver,
      isWon: this.isWon,
      isDaily: this.isDaily
    };
  }

  notifyState() {
    if (this.onStateChange) {
      this.onStateChange({
        currentStep: this.currentStep,
        maxSteps: MAX_ATTEMPTS,
        unlockedDuration: this.getUnlockedDuration(),
        nextSkipAdded: this.getNextSkipAddedSeconds(),
        guesses: this.guesses,
        isGameOver: this.isGameOver,
        isWon: this.isWon,
        targetSong: this.targetSong,
        isDaily: this.isDaily
      });
    }
  }
}
