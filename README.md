# 🎵 Songless IT - Indovina la Canzone

Un gioco musicale a tentativi ispirato a **Songless** e **Heardle**, dove devi indovinare la canzone ascoltando frammenti audio di frazioni di secondo!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🕹️ Come si gioca

1. **Ascolta l'intro**: Si parte da appena **0.5 secondi** di musica!
2. **Cerca e indovina**: Digita il nome dell'artista o il titolo nella barra di ricerca con autocompletamento istantaneo e premi **Invia**.
3. **Salta (Skip)**: Se non la riconosci, premi **Salta** per sbloccare più secondi (0.5s → 1.5s → 3.5s → 6.5s → 11s → 16s).
4. **Obiettivo**: Hai a disposizione **6 tentativi**. Alla fine, potrai riascoltare l'anteprima completa e condividere il tuo punteggio con gli emoji!

---

## ✨ Funzionalità

- 📅 **Canzone del Giorno (Daily)**: Una traccia identica per tutti i giocatori al mondo ogni giorno, con salvataggio dello stato della partita nel browser.
- 🎲 **Modalità Libera Infinita**: Gioca quante canzoni vuoi senza limiti temporali con algoritmo Deck Shuffle (zero doppioni consecutivi).
- 🏷️ **Filtro Playlist Tematiche & Switch Nazionalità**:
  - 🎤 **Pop** (Hit radiofoniche italiane e internazionali)
  - 🎸 **Rock** (Grandi classici rock, hard rock e alternative)
  - 🧢 **Hip-Hop & Trap** (Marracash, Sfera Ebbasta, Lazza, Geolier, Eminem, Drake, ecc.)
  - 📼 **Anni '80 & '90 (Retro)** (I grandi successi iconici del passato)
  - 🇮🇹 / 🌍 **Switch Origine**: Filtra istantaneamente solo canzoni italiane o solo internazionali!
- 👤 **Modalità per Artista**:
  - Cerca qualsiasi cantante o gruppo (es. *Fred De Palma*, *Lazza*, *Queen*, *Annalisa*, ecc.).
  - **Menu di disambiguazione visiva**: Mostra le copertine/foto ufficiali e il genere per scegliere l'artista esatto eliminando ogni omonimia.
  - Sfida basata sull'intera discografia autentica (fino a 100 tracce originali da studio).
- ⏸️ **Pausa Automatica al Cambio Scheda**: Se cambi scheda o riduci a icona la finestra, l'audio si interrompe all'istante per non farti perdere il frammento.
- 🚫 **Filtro Anti-Basi & Anti-Remix**: Esclusione automatica di karaoke, versioni strumentali, cover band amatoriali e remix non ufficiali.
- 🎧 **Player Audio Preciso**: Timeline a segmenti proporzionali e visualizzatore d'onda sonora.
- 📊 **Statistiche & Streak**: Tracciamento locale delle partite giocate, % di vittorie, serie attuale e record di vittorie.
- 📋 **Condivisione Risultati**: Copia rapida della griglia emoji (es. `🟩 ⬛ ⬛ ⬛ ⬛ ⬛`) pronta per WhatsApp, Telegram e social.

---

## ☁️ Come Hostare su Vercel

Il progetto è una **Single Page Application statica nativa (HTML, CSS, JS ES Modules)** pronta per Vercel:

1. **Carica il progetto su GitHub**:
   - Crea una nuova repository su [GitHub](https://github.com/new).
   - Esegui i comandi indicati per effettuare il push del codice.
2. **Collega a Vercel**:
   - Vai su [vercel.com](https://vercel.com) ed effettua l'accesso con il tuo account GitHub.
   - Clicca su **Add New...** → **Project**.
   - Seleziona la repository appena creata.
   - Vercel riconoscerà automaticamente la configurazione tramite `vercel.json` e `index.html`.
   - Clicca su **Deploy**! Il sito sarà online in pochi secondi con certificato SSL HTTPS gratuito.

---

## 💻 Come Avviare in Locale

È sufficiente avere Python installato:

```bash
python server.py
```

Il browser si aprirà automaticamente su **`http://localhost:3000`**.
