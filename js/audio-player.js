/**
 * SONGLESS - Audio Player Controller
 * Gestisce la riproduzione audio a precisione di frazioni di secondo per i frammenti sbloccati
 */

export class SonglessAudioPlayer {
  constructor() {
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.crossOrigin = 'anonymous';

    this.maxDuration = 0.5; // Durata massima sbloccata per il tentativo corrente
    this.isPlaying = false;
    this.isLoading = false;
    this.rafId = null;

    // Callbacks
    this.onTimeUpdateCallback = null;
    this.onStateChangeCallback = null;
    this.onErrorCallback = null;

    this.initListeners();
  }

  initListeners() {
    this.audio.addEventListener('playing', () => {
      this.isPlaying = true;
      this.isLoading = false;
      this.triggerStateChange('playing');
      this.startTracking();
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.stopTracking();
      this.triggerStateChange('paused');
    });

    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
      this.stopTracking();
      this.audio.currentTime = 0;
      this.triggerStateChange('ended');
    });

    this.audio.addEventListener('waiting', () => {
      this.isLoading = true;
      this.triggerStateChange('buffering');
    });

    this.audio.addEventListener('error', (e) => {
      this.isPlaying = false;
      this.isLoading = false;
      this.stopTracking();
      console.warn('Audio playback error:', e);
      if (this.onErrorCallback) this.onErrorCallback(e);
      this.triggerStateChange('error');
    });

    // Controllo hardware nativo:
    // Quando la scheda del browser passa in background, i browser disattivano requestAnimationFrame.
    // L'evento 'timeupdate' continua ad essere emesso dal motore audio del browser,
    // garantendo che la canzone NON continui ad andare avanti oltre maxDuration.
    this.audio.addEventListener('timeupdate', () => {
      if (this.isPlaying && this.audio.currentTime >= this.maxDuration) {
        this.stop();
      }
    });

    // Se l'utente cambia scheda del browser o riduce la finestra a icona,
    // ferma immediatamente l'audio e resetta il cursore.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.isPlaying) {
        this.stop();
      }
    });
  }

  /**
   * Carica un nuovo stream audio
   * @param {string} url - URL del file audio/anteprima
   * @returns {Promise<boolean>}
   */
  async loadTrack(url) {
    this.stop();
    if (!url) {
      console.warn('Nessun URL audio fornito.');
      return false;
    }

    this.isLoading = true;
    this.triggerStateChange('loading');
    this.audio.src = url;

    return new Promise((resolve) => {
      const onCanPlay = () => {
        this.isLoading = false;
        this.triggerStateChange('ready');
        this.audio.removeEventListener('canplay', onCanPlay);
        resolve(true);
      };

      const onError = () => {
        this.isLoading = false;
        this.audio.removeEventListener('error', onError);
        resolve(false);
      };

      this.audio.addEventListener('canplay', onCanPlay, { once: true });
      this.audio.addEventListener('error', onError, { once: true });
      this.audio.load();
    });
  }

  /**
   * Imposta il tetto massimo di riproduzione consentito per il tentativo attuale
   * @param {number} seconds - es. 0.5, 1.5, 3.5, 6.5, 11, 16, 30
   */
  setMaxDuration(seconds) {
    this.maxDuration = Math.max(0.1, seconds);
  }

  /**
   * Avvia o mette in pausa la riproduzione del frammento
   */
  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.playSnippet();
    }
  }

  /**
   * Riproduce il frammento audio fino a maxDuration
   */
  async playSnippet() {
    if (!this.audio.src) return;

    // Se siamo alla fine o oltre la durata massima, riparti da inizio
    if (this.audio.currentTime >= this.maxDuration - 0.05) {
      this.audio.currentTime = 0;
    }

    try {
      await this.audio.play();
    } catch (err) {
      console.warn('Errore autoplay audio:', err);
    }
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.stopTracking();
    if (this.onTimeUpdateCallback) {
      this.onTimeUpdateCallback(0, this.maxDuration);
    }
    this.triggerStateChange('stopped');
  }

  /**
   * Ciclo di monitoraggio continuo ad altissima precisione (60fps)
   */
  startTracking() {
    this.stopTracking();

    const checkTime = () => {
      const cur = this.audio.currentTime;

      if (this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(cur, this.maxDuration);
      }

      // Se abbiamo superato il limite consentito di secondi per questo tentativo, ferma e resetta
      if (cur >= this.maxDuration) {
        this.stop();
        return;
      }

      if (this.isPlaying) {
        this.rafId = requestAnimationFrame(checkTime);
      }
    };

    this.rafId = requestAnimationFrame(checkTime);
  }

  stopTracking() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  triggerStateChange(state) {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(state, {
        isPlaying: this.isPlaying,
        isLoading: this.isLoading,
        currentTime: this.audio.currentTime,
        maxDuration: this.maxDuration
      });
    }
  }

  onTimeUpdate(callback) {
    this.onTimeUpdateCallback = callback;
  }

  onStateChange(callback) {
    this.onStateChangeCallback = callback;
  }

  onError(callback) {
    this.onErrorCallback = callback;
  }

  setVolume(val) {
    this.audio.volume = Math.max(0, Math.min(1, val));
  }
}
