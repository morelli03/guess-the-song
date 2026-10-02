/**
 * SONGLESS - Song Catalog & Resolution Service
 * Contiene il catalogo curato di canzoni e il generatore della "Canzone del Giorno"
 * Con supporto per categorie e switch ITA / Non-ITA (Internazionale)
 */

export const CATEGORIES = {
  ALL: { id: 'all', name: 'Tutte le Hit', icon: '🎵' },
  POP: { id: 'pop', name: 'Top Pop', icon: '✨' },
  ROCK: { id: 'rock', name: 'Rock Legends', icon: '🎸' },
  HIPHOP: { id: 'hiphop', name: 'Hip-Hop & Rap', icon: '🎤' },
  RETRO: { id: 'retro', name: 'Anni 80 & 90', icon: '📼' },
};

export const ORIGINS = {
  ALL: 'all',
  ITA: 'ita',
  INTL: 'intl'
};

export const SONG_DATABASE = [
  // =========================================================================
  // HIP-HOP & RAP - ITALIANO (75 brani)
  // =========================================================================
  { id: 'hiphop-ita-1', artist: 'Marracash & Guè', title: 'Nulla Accade', category: 'hiphop', origin: 'ita', year: 2016 },
  { id: 'hiphop-ita-2', artist: 'Marracash', title: 'Bravi a cadere', category: 'hiphop', origin: 'ita', year: 2019 },
  { id: 'hiphop-ita-3', artist: 'Sfera Ebbasta', title: 'Visiera A Becco', category: 'hiphop', origin: 'ita', year: 2016 },
  { id: 'hiphop-ita-4', artist: 'Sfera Ebbasta', title: 'Calcolatrici', category: 'hiphop', origin: 'ita', year: 2023 },
  { id: 'hiphop-ita-5', artist: 'Guè', title: 'Brivido', category: 'hiphop', origin: 'ita', year: 2013 },
  { id: 'hiphop-ita-6', artist: 'Guè & Sfera Ebbasta', title: 'Cookies N Cream', category: 'hiphop', origin: 'ita', year: 2023 },
  { id: 'hiphop-ita-7', artist: 'Lazza', title: 'CENERE', category: 'hiphop', origin: 'ita', year: 2023 },
  { id: 'hiphop-ita-8', artist: 'Lazza & Sfera Ebbasta', title: 'Piove', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-9', artist: 'Fabri Fibra', title: 'Applausi per Fibra', category: 'hiphop', origin: 'ita', year: 2006 },
  { id: 'hiphop-ita-10', artist: 'Fabri Fibra', title: 'Tranne Te', category: 'hiphop', origin: 'ita', year: 2010 },
  { id: 'hiphop-ita-11', artist: 'Salmo', title: '90MIN', category: 'hiphop', origin: 'ita', year: 2018 },
  { id: 'hiphop-ita-12', artist: 'Salmo', title: 'Il cielo nella stanza', category: 'hiphop', origin: 'ita', year: 2018 },
  { id: 'hiphop-ita-13', artist: 'Geolier', title: 'I P\' ME, TU P\' TE', category: 'hiphop', origin: 'ita', year: 2024 },
  { id: 'hiphop-ita-14', artist: 'Geolier & Sfera Ebbasta', title: 'CALCOLATRICI', category: 'hiphop', origin: 'ita', year: 2023 },
  { id: 'hiphop-ita-15', artist: 'Tedua', title: 'Malamente', category: 'hiphop', origin: 'ita', year: 2023 },
  { id: 'hiphop-ita-16', artist: 'Capo Plaza', title: 'Non fare così', category: 'hiphop', origin: 'ita', year: 2018 },
  { id: 'hiphop-ita-17', artist: 'Club Dogo', title: 'Nato per questo', category: 'hiphop', origin: 'ita', year: 2024 },
  { id: 'hiphop-ita-18', artist: 'Noyz Narcos & Salmo', title: 'RESPIRA', category: 'hiphop', origin: 'ita', year: 2023 },
  { id: 'hiphop-ita-19', artist: 'Marracash', title: 'Crazy Love', category: 'hiphop', origin: 'ita', year: 2021 },
  { id: 'hiphop-ita-20', artist: 'Marracash', title: 'Infinity Love', category: 'hiphop', origin: 'ita', year: 2021 },
  { id: 'hiphop-ita-21', artist: 'Marracash', title: 'Crudelia', category: 'hiphop', origin: 'ita', year: 2019 },
  { id: 'hiphop-ita-22', artist: 'Marracash', title: 'Madame', category: 'hiphop', origin: 'ita', year: 2019 },
  { id: 'hiphop-ita-23', artist: 'Marracash', title: 'King del Rap', category: 'hiphop', origin: 'ita', year: 2011 },
  { id: 'hiphop-ita-24', artist: 'Guè', title: 'Mi hai fatto fare tardi', category: 'hiphop', origin: 'ita', year: 2017 },
  { id: 'hiphop-ita-25', artist: 'Guè', title: 'Chico', category: 'hiphop', origin: 'ita', year: 2020 },
  { id: 'hiphop-ita-26', artist: 'Guè', title: 'Borse Prada', category: 'hiphop', origin: 'ita', year: 2018 },
  { id: 'hiphop-ita-27', artist: 'Sfera Ebbasta', title: 'Cupido', category: 'hiphop', origin: 'ita', year: 2018 },
  { id: 'hiphop-ita-28', artist: 'Sfera Ebbasta', title: 'Tran Tran', category: 'hiphop', origin: 'ita', year: 2017 },
  { id: 'hiphop-ita-29', artist: 'Sfera Ebbasta', title: 'Rockstar', category: 'hiphop', origin: 'ita', year: 2018 },
  { id: 'hiphop-ita-30', artist: 'Sfera Ebbasta', title: 'Bottiglie Privè', category: 'hiphop', origin: 'ita', year: 2020 },
  { id: 'hiphop-ita-31', artist: 'Sfera Ebbasta', title: 'Baby', category: 'hiphop', origin: 'ita', year: 2020 },
  { id: 'hiphop-ita-32', artist: 'Lazza', title: 'Molotov', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-33', artist: 'Lazza', title: 'Uscito di Galera', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-34', artist: 'Lazza', title: 'Panico', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-35', artist: 'Lazza', title: 'Zeri in più', category: 'hiphop', origin: 'ita', year: 2024 },
  { id: 'hiphop-ita-36', artist: 'Geolier', title: 'Come Vuoi', category: 'hiphop', origin: 'ita', year: 2023 },
  { id: 'hiphop-ita-37', artist: 'Geolier', title: 'Money', category: 'hiphop', origin: 'ita', year: 2023 },
  { id: 'hiphop-ita-38', artist: 'Geolier', title: 'Emanuele', category: 'hiphop', origin: 'ita', year: 2019 },
  { id: 'hiphop-ita-39', artist: 'Geolier', title: 'Chiagne', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-40', artist: 'Tedua', title: 'Red Light', category: 'hiphop', origin: 'ita', year: 2023 },
  { id: 'hiphop-ita-41', artist: 'Tedua', title: 'Lo-fi For U', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-42', artist: 'Tedua', title: 'Wasabi 2.0', category: 'hiphop', origin: 'ita', year: 2017 },
  { id: 'hiphop-ita-43', artist: 'Salmo', title: 'Perdonami', category: 'hiphop', origin: 'ita', year: 2017 },
  { id: 'hiphop-ita-44', artist: 'Salmo', title: 'Kumite', category: 'hiphop', origin: 'ita', year: 2021 },
  { id: 'hiphop-ita-45', artist: 'Salmo', title: '1984', category: 'hiphop', origin: 'ita', year: 2016 },
  { id: 'hiphop-ita-46', artist: 'Salmo', title: 'Russell Crowe', category: 'hiphop', origin: 'ita', year: 2013 },
  { id: 'hiphop-ita-47', artist: 'Fabri Fibra', title: 'In Italia', category: 'hiphop', origin: 'ita', year: 2008 },
  { id: 'hiphop-ita-48', artist: 'Fabri Fibra', title: 'Pamplona', category: 'hiphop', origin: 'ita', year: 2017 },
  { id: 'hiphop-ita-49', artist: 'Fabri Fibra', title: 'Propaganda', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-50', artist: 'Fabri Fibra', title: 'Bugiardo', category: 'hiphop', origin: 'ita', year: 2007 },
  { id: 'hiphop-ita-51', artist: 'Capo Plaza', title: 'Tesla', category: 'hiphop', origin: 'ita', year: 2018 },
  { id: 'hiphop-ita-52', artist: 'Capo Plaza', title: 'Giovane Fuoriclasse', category: 'hiphop', origin: 'ita', year: 2017 },
  { id: 'hiphop-ita-53', artist: 'Capo Plaza', title: 'Plaza', category: 'hiphop', origin: 'ita', year: 2021 },
  { id: 'hiphop-ita-54', artist: 'Club Dogo', title: 'P.E.G.', category: 'hiphop', origin: 'ita', year: 2012 },
  { id: 'hiphop-ita-55', artist: 'Club Dogo', title: 'Chissà se Dio', category: 'hiphop', origin: 'ita', year: 2010 },
  { id: 'hiphop-ita-56', artist: 'Club Dogo', title: 'Mi Fist', category: 'hiphop', origin: 'ita', year: 2003 },
  { id: 'hiphop-ita-57', artist: 'Shiva', title: 'Auto Blu', category: 'hiphop', origin: 'ita', year: 2020 },
  { id: 'hiphop-ita-58', artist: 'Shiva', title: 'Soldi Puliti', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-59', artist: 'Shiva', title: 'Non lo Sai', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-60', artist: 'Rkomi', title: 'Partire da te', category: 'hiphop', origin: 'ita', year: 2021 },
  { id: 'hiphop-ita-61', artist: 'Rkomi', title: 'Nuovo Range', category: 'hiphop', origin: 'ita', year: 2021 },
  { id: 'hiphop-ita-62', artist: 'Rkomi', title: 'Insuperabile', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-63', artist: 'Ernia', title: 'Superclassico', category: 'hiphop', origin: 'ita', year: 2020 },
  { id: 'hiphop-ita-64', artist: 'Ernia', title: 'Ferma a Guardare', category: 'hiphop', origin: 'ita', year: 2020 },
  { id: 'hiphop-ita-65', artist: 'Ernia', title: 'Bella Fregatura', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-66', artist: 'Tony Effe', title: 'Sesso e Samba', category: 'hiphop', origin: 'ita', year: 2024 },
  { id: 'hiphop-ita-67', artist: 'Tony Effe', title: 'Miu Miu', category: 'hiphop', origin: 'ita', year: 2024 },
  { id: 'hiphop-ita-68', artist: 'Baby Gang', title: 'Mentalité', category: 'hiphop', origin: 'ita', year: 2022 },
  { id: 'hiphop-ita-69', artist: 'Massimo Pericolo', title: 'Sabbie d\'oro', category: 'hiphop', origin: 'ita', year: 2019 },
  { id: 'hiphop-ita-70', artist: 'Massimo Pericolo', title: '7 Miliardi', category: 'hiphop', origin: 'ita', year: 2019 },
  { id: 'hiphop-ita-71', artist: 'Caparezza', title: 'Fuori dal tunnel', category: 'hiphop', origin: 'ita', year: 2003 },
  { id: 'hiphop-ita-72', artist: 'Caparezza', title: 'Ti fa stare bene', category: 'hiphop', origin: 'ita', year: 2017 },
  { id: 'hiphop-ita-73', artist: 'Articolo 31', title: 'Tranqui Funky', category: 'hiphop', origin: 'ita', year: 1996 },
  { id: 'hiphop-ita-74', artist: 'Articolo 31', title: 'Domani smetto', category: 'hiphop', origin: 'ita', year: 2002 },
  { id: 'hiphop-ita-75', artist: 'Articolo 31', title: 'La fidanzata', category: 'hiphop', origin: 'ita', year: 1998 },
  // =========================================================================
  // HIP-HOP & RAP - INTERNAZIONALE (50 brani)
  // =========================================================================
  { id: 'hiphop-intl-1', artist: 'Eminem', title: 'Lose Yourself', category: 'hiphop', origin: 'intl', year: 2002 },
  { id: 'hiphop-intl-2', artist: 'Eminem', title: 'Without Me', category: 'hiphop', origin: 'intl', year: 2002 },
  { id: 'hiphop-intl-3', artist: 'Kendrick Lamar', title: 'HUMBLE.', category: 'hiphop', origin: 'intl', year: 2017 },
  { id: 'hiphop-intl-4', artist: 'Kendrick Lamar', title: 'Not Like Us', category: 'hiphop', origin: 'intl', year: 2024 },
  { id: 'hiphop-intl-5', artist: 'Drake', title: 'God\'s Plan', category: 'hiphop', origin: 'intl', year: 2018 },
  { id: 'hiphop-intl-6', artist: 'Drake', title: 'Hotline Bling', category: 'hiphop', origin: 'intl', year: 2015 },
  { id: 'hiphop-intl-7', artist: 'Travis Scott', title: 'SICKO MODE', category: 'hiphop', origin: 'intl', year: 2018 },
  { id: 'hiphop-intl-8', artist: 'Travis Scott', title: 'FE!N', category: 'hiphop', origin: 'intl', year: 2023 },
  { id: 'hiphop-intl-9', artist: '50 Cent', title: 'In Da Club', category: 'hiphop', origin: 'intl', year: 2003 },
  { id: 'hiphop-intl-10', artist: 'Dr. Dre & Snoop Dogg', title: 'Still D.R.E.', category: 'hiphop', origin: 'intl', year: 1999 },
  { id: 'hiphop-intl-11', artist: '2Pac', title: 'California Love', category: 'hiphop', origin: 'intl', year: 1995 },
  { id: 'hiphop-intl-12', artist: 'The Notorious B.I.G.', title: 'Juicy', category: 'hiphop', origin: 'intl', year: 1994 },
  { id: 'hiphop-intl-13', artist: 'Coolio', title: 'Gangsta\'s Paradise', category: 'hiphop', origin: 'intl', year: 1995 },
  { id: 'hiphop-intl-14', artist: 'Kanye West', title: 'Stronger', category: 'hiphop', origin: 'intl', year: 2007 },
  { id: 'hiphop-intl-15', artist: 'Post Malone & Swae Lee', title: 'Sunflower', category: 'hiphop', origin: 'intl', year: 2018 },
  { id: 'hiphop-intl-16', artist: 'Eminem', title: 'The Real Slim Shady', category: 'hiphop', origin: 'intl', year: 2000 },
  { id: 'hiphop-intl-17', artist: 'Eminem', title: 'Stan', category: 'hiphop', origin: 'intl', year: 2000 },
  { id: 'hiphop-intl-18', artist: 'Eminem', title: 'Till I Collapse', category: 'hiphop', origin: 'intl', year: 2002 },
  { id: 'hiphop-intl-19', artist: 'Eminem', title: 'Houdini', category: 'hiphop', origin: 'intl', year: 2024 },
  { id: 'hiphop-intl-20', artist: 'Kendrick Lamar', title: 'Alright', category: 'hiphop', origin: 'intl', year: 2015 },
  { id: 'hiphop-intl-21', artist: 'Kendrick Lamar', title: 'DNA.', category: 'hiphop', origin: 'intl', year: 2017 },
  { id: 'hiphop-intl-22', artist: 'Kendrick Lamar', title: 'Swimming Pools (Drank)', category: 'hiphop', origin: 'intl', year: 2012 },
  { id: 'hiphop-intl-23', artist: 'Drake', title: 'One Dance', category: 'hiphop', origin: 'intl', year: 2016 },
  { id: 'hiphop-intl-24', artist: 'Drake', title: 'In My Feelings', category: 'hiphop', origin: 'intl', year: 2018 },
  { id: 'hiphop-intl-25', artist: 'Drake', title: 'Passionfruit', category: 'hiphop', origin: 'intl', year: 2017 },
  { id: 'hiphop-intl-26', artist: 'Travis Scott', title: 'Goosebumps', category: 'hiphop', origin: 'intl', year: 2016 },
  { id: 'hiphop-intl-27', artist: 'Travis Scott', title: 'HIGHEST IN THE ROOM', category: 'hiphop', origin: 'intl', year: 2019 },
  { id: 'hiphop-intl-28', artist: 'Travis Scott', title: 'Antidote', category: 'hiphop', origin: 'intl', year: 2015 },
  { id: 'hiphop-intl-29', artist: 'Kanye West', title: 'Gold Digger', category: 'hiphop', origin: 'intl', year: 2005 },
  { id: 'hiphop-intl-30', artist: 'Kanye West', title: 'Heartless', category: 'hiphop', origin: 'intl', year: 2008 },
  { id: 'hiphop-intl-31', artist: 'Kanye West', title: 'Can\'t Tell Me Nothing', category: 'hiphop', origin: 'intl', year: 2007 },
  { id: 'hiphop-intl-32', artist: '50 Cent', title: 'Candy Shop', category: 'hiphop', origin: 'intl', year: 2005 },
  { id: 'hiphop-intl-33', artist: '50 Cent', title: 'P.I.M.P.', category: 'hiphop', origin: 'intl', year: 2003 },
  { id: 'hiphop-intl-34', artist: '2Pac', title: 'Changes', category: 'hiphop', origin: 'intl', year: 1998 },
  { id: 'hiphop-intl-35', artist: '2Pac', title: 'Dear Mama', category: 'hiphop', origin: 'intl', year: 1995 },
  { id: 'hiphop-intl-36', artist: 'The Notorious B.I.G.', title: 'Hypnotize', category: 'hiphop', origin: 'intl', year: 1997 },
  { id: 'hiphop-intl-37', artist: 'The Notorious B.I.G.', title: 'Big Poppa', category: 'hiphop', origin: 'intl', year: 1994 },
  { id: 'hiphop-intl-38', artist: 'Dr. Dre', title: 'The Next Episode', category: 'hiphop', origin: 'intl', year: 1999 },
  { id: 'hiphop-intl-39', artist: 'Snoop Dogg', title: 'Drop It Like It\'s Hot', category: 'hiphop', origin: 'intl', year: 2004 },
  { id: 'hiphop-intl-40', artist: 'Jay-Z', title: 'Empire State of Mind', category: 'hiphop', origin: 'intl', year: 2009 },
  { id: 'hiphop-intl-41', artist: 'Jay-Z', title: 'Niggas in Paris', category: 'hiphop', origin: 'intl', year: 2011 },
  { id: 'hiphop-intl-42', artist: 'J. Cole', title: 'No Role Modelz', category: 'hiphop', origin: 'intl', year: 2014 },
  { id: 'hiphop-intl-43', artist: 'J. Cole', title: 'Middle Child', category: 'hiphop', origin: 'intl', year: 2019 },
  { id: 'hiphop-intl-44', artist: 'Post Malone', title: 'Rockstar', category: 'hiphop', origin: 'intl', year: 2017 },
  { id: 'hiphop-intl-45', artist: 'Post Malone', title: 'Circles', category: 'hiphop', origin: 'intl', year: 2019 },
  { id: 'hiphop-intl-46', artist: 'Outkast', title: 'Ms. Jackson', category: 'hiphop', origin: 'intl', year: 2000 },
  { id: 'hiphop-intl-47', artist: 'Outkast', title: 'Hey Ya!', category: 'hiphop', origin: 'intl', year: 2003 },
  { id: 'hiphop-intl-48', artist: 'DMX', title: 'X Gon\' Give It to Ya', category: 'hiphop', origin: 'intl', year: 2003 },
  { id: 'hiphop-intl-49', artist: 'Cardi B', title: 'Bodak Yellow', category: 'hiphop', origin: 'intl', year: 2017 },
  { id: 'hiphop-intl-50', artist: 'Nicki Minaj', title: 'Super Bass', category: 'hiphop', origin: 'intl', year: 2010 },
  // =========================================================================
  // TOP POP - ITALIANO (66 brani)
  // =========================================================================
  { id: 'pop-ita-1', artist: 'Annalisa', title: 'Sinceramente', category: 'pop', origin: 'ita', year: 2024 },
  { id: 'pop-ita-2', artist: 'Annalisa', title: 'Mon Amour', category: 'pop', origin: 'ita', year: 2023 },
  { id: 'pop-ita-3', artist: 'Annalisa', title: 'Bellissima', category: 'pop', origin: 'ita', year: 2022 },
  { id: 'pop-ita-4', artist: 'Mahmood', title: 'Tuta Gold', category: 'pop', origin: 'ita', year: 2024 },
  { id: 'pop-ita-5', artist: 'Mahmood', title: 'Soldi', category: 'pop', origin: 'ita', year: 2019 },
  { id: 'pop-ita-6', artist: 'Blanco', title: 'Notti In Bianco', category: 'pop', origin: 'ita', year: 2021 },
  { id: 'pop-ita-7', artist: 'The Kolors', title: 'ITALODISCO', category: 'pop', origin: 'ita', year: 2023 },
  { id: 'pop-ita-8', artist: 'The Kolors', title: 'Un ragazzo una ragazza', category: 'pop', origin: 'ita', year: 2024 },
  { id: 'pop-ita-9', artist: 'Angelina Mango', title: 'La noia', category: 'pop', origin: 'ita', year: 2024 },
  { id: 'pop-ita-10', artist: 'Ghali', title: 'Casa Mia', category: 'pop', origin: 'ita', year: 2024 },
  { id: 'pop-ita-11', artist: 'Fedez & Annalisa & Articolo 31', title: 'Disco Paradise', category: 'pop', origin: 'ita', year: 2023 },
  { id: 'pop-ita-12', artist: 'Cesare Cremonini', title: '50 Special', category: 'pop', origin: 'ita', year: 1999 },
  { id: 'pop-ita-13', artist: 'Jovanotti', title: 'L\'Ombelico del Mondo', category: 'pop', origin: 'ita', year: 1995 },
  { id: 'pop-ita-14', artist: 'Laura Pausini', title: 'La solitudine', category: 'pop', origin: 'ita', year: 1993 },
  { id: 'pop-ita-15', artist: 'Eros Ramazzotti', title: 'Più bella cosa', category: 'pop', origin: 'ita', year: 1996 },
  { id: 'pop-ita-16', artist: 'Elodie', title: 'Margarita', category: 'pop', origin: 'ita', year: 2019 },
  { id: 'pop-ita-17', artist: 'Elodie', title: 'Due', category: 'pop', origin: 'ita', year: 2023 },
  { id: 'pop-ita-18', artist: 'Elodie', title: 'Bagno a mezzanotte', category: 'pop', origin: 'ita', year: 2022 },
  { id: 'pop-ita-19', artist: 'Marco Mengoni', title: 'Due Vite', category: 'pop', origin: 'ita', year: 2023 },
  { id: 'pop-ita-20', artist: 'Marco Mengoni', title: 'L\'essenziale', category: 'pop', origin: 'ita', year: 2013 },
  { id: 'pop-ita-21', artist: 'Marco Mengoni', title: 'Ti ho voluto bene veramente', category: 'pop', origin: 'ita', year: 2015 },
  { id: 'pop-ita-22', artist: 'Irama', title: 'Ovunque Sarai', category: 'pop', origin: 'ita', year: 2022 },
  { id: 'pop-ita-23', artist: 'Irama', title: 'Nera', category: 'pop', origin: 'ita', year: 2018 },
  { id: 'pop-ita-24', artist: 'Irama', title: 'Arrogante', category: 'pop', origin: 'ita', year: 2019 },
  { id: 'pop-ita-25', artist: 'Tananai', title: 'Tango', category: 'pop', origin: 'ita', year: 2023 },
  { id: 'pop-ita-26', artist: 'Tananai', title: 'Sesso Occasionale', category: 'pop', origin: 'ita', year: 2022 },
  { id: 'pop-ita-27', artist: 'Tananai & Annalisa', title: 'STORIE BREVI', category: 'pop', origin: 'ita', year: 2024 },
  { id: 'pop-ita-28', artist: 'Pinguini Tattici Nucleari', title: 'Ringo Starr', category: 'pop', origin: 'ita', year: 2020 },
  { id: 'pop-ita-29', artist: 'Pinguini Tattici Nucleari', title: 'Pastello Bianco', category: 'pop', origin: 'ita', year: 2021 },
  { id: 'pop-ita-30', artist: 'Pinguini Tattici Nucleari', title: 'Giovani Wannabe', category: 'pop', origin: 'ita', year: 2022 },
  { id: 'pop-ita-31', artist: 'Pinguini Tattici Nucleari', title: 'Rubami la Notte', category: 'pop', origin: 'ita', year: 2023 },
  { id: 'pop-ita-32', artist: 'Madame', title: 'Voce', category: 'pop', origin: 'ita', year: 2021 },
  { id: 'pop-ita-33', artist: 'Madame', title: 'Il bene nel male', category: 'pop', origin: 'ita', year: 2023 },
  { id: 'pop-ita-34', artist: 'Achille Lauro', title: 'Rolls Royce', category: 'pop', origin: 'ita', year: 2019 },
  { id: 'pop-ita-35', artist: 'Achille Lauro', title: 'Me ne frego', category: 'pop', origin: 'ita', year: 2020 },
  { id: 'pop-ita-36', artist: 'Achille Lauro', title: '16 Marzo', category: 'pop', origin: 'ita', year: 2020 },
  { id: 'pop-ita-37', artist: 'Colapesce Dimartino', title: 'Musica leggerissima', category: 'pop', origin: 'ita', year: 2021 },
  { id: 'pop-ita-38', artist: 'Colapesce Dimartino', title: 'Splash', category: 'pop', origin: 'ita', year: 2023 },
  { id: 'pop-ita-39', artist: 'Diodato', title: 'Fai Rumore', category: 'pop', origin: 'ita', year: 2020 },
  { id: 'pop-ita-40', artist: 'Coez', title: 'La musica non c\'è', category: 'pop', origin: 'ita', year: 2017 },
  { id: 'pop-ita-41', artist: 'Coez', title: 'È sempre bello', category: 'pop', origin: 'ita', year: 2019 },
  { id: 'pop-ita-42', artist: 'Calcutta', title: 'Paracetamolo', category: 'pop', origin: 'ita', year: 2018 },
  { id: 'pop-ita-43', artist: 'Calcutta', title: 'Pesto', category: 'pop', origin: 'ita', year: 2018 },
  { id: 'pop-ita-44', artist: 'Tommaso Paradiso', title: 'Non avere paura', category: 'pop', origin: 'ita', year: 2019 },
  { id: 'pop-ita-45', artist: 'Gazzelle', title: 'Destri', category: 'pop', origin: 'ita', year: 2020 },
  { id: 'pop-ita-46', artist: 'Gazzelle', title: 'Non sei tu', category: 'pop', origin: 'ita', year: 2017 },
  { id: 'pop-ita-47', artist: 'Tiziano Ferro', title: 'Sere Nere', category: 'pop', origin: 'ita', year: 2003 },
  { id: 'pop-ita-48', artist: 'Tiziano Ferro', title: 'Non me lo so spiegare', category: 'pop', origin: 'ita', year: 2003 },
  { id: 'pop-ita-49', artist: 'Tiziano Ferro', title: 'Xdono', category: 'pop', origin: 'ita', year: 2001 },
  { id: 'pop-ita-50', artist: 'Giorgia', title: 'Gocce di memoria', category: 'pop', origin: 'ita', year: 2003 },
  { id: 'pop-ita-51', artist: 'Giorgia', title: 'Come saprei', category: 'pop', origin: 'ita', year: 1995 },
  { id: 'pop-ita-52', artist: 'Elisa', title: 'Luce (tramonti a nord est)', category: 'pop', origin: 'ita', year: 2001 },
  { id: 'pop-ita-53', artist: 'Elisa', title: 'Gli ostacoli del cuore', category: 'pop', origin: 'ita', year: 2006 },
  { id: 'pop-ita-54', artist: 'Emma', title: 'Apnea', category: 'pop', origin: 'ita', year: 2024 },
  { id: 'pop-ita-55', artist: 'Emma', title: 'Amami', category: 'pop', origin: 'ita', year: 2013 },
  { id: 'pop-ita-56', artist: 'Max Pezzali', title: 'Sei un mito', category: 'pop', origin: 'ita', year: 1993 },
  { id: 'pop-ita-57', artist: 'Max Pezzali', title: 'Lo strano percorso', category: 'pop', origin: 'ita', year: 2004 },
  { id: 'pop-ita-58', artist: 'Jovanotti', title: 'A te', category: 'pop', origin: 'ita', year: 2008 },
  { id: 'pop-ita-59', artist: 'Jovanotti', title: 'Bella', category: 'pop', origin: 'ita', year: 1997 },
  { id: 'pop-ita-60', artist: 'Jovanotti', title: 'Il più grande spettacolo dopo il Big Bang', category: 'pop', origin: 'ita', year: 2011 },
  { id: 'pop-ita-61', artist: 'Lucio Dalla', title: 'Caruso', category: 'pop', origin: 'ita', year: 1986 },
  { id: 'pop-ita-62', artist: 'Lucio Dalla', title: 'L\'anno che verrà', category: 'pop', origin: 'ita', year: 1979 },
  { id: 'pop-ita-63', artist: 'Biagio Antonacci', title: 'Iris', category: 'pop', origin: 'ita', year: 1998 },
  { id: 'pop-ita-64', artist: 'Biagio Antonacci', title: 'Convivendo', category: 'pop', origin: 'ita', year: 2004 },
  { id: 'pop-ita-65', artist: 'Cesare Cremonini', title: 'Marmellata #25', category: 'pop', origin: 'ita', year: 2005 },
  { id: 'pop-ita-66', artist: 'Cesare Cremonini', title: 'Poetica', category: 'pop', origin: 'ita', year: 2017 },
  // =========================================================================
  // TOP POP - INTERNAZIONALE (65 brani)
  // =========================================================================
  { id: 'pop-intl-1', artist: 'The Weeknd', title: 'Blinding Lights', category: 'pop', origin: 'intl', year: 2019 },
  { id: 'pop-intl-2', artist: 'Dua Lipa', title: 'Levitating', category: 'pop', origin: 'intl', year: 2020 },
  { id: 'pop-intl-3', artist: 'Harry Styles', title: 'As It Was', category: 'pop', origin: 'intl', year: 2022 },
  { id: 'pop-intl-4', artist: 'Taylor Swift', title: 'Cruel Summer', category: 'pop', origin: 'intl', year: 2019 },
  { id: 'pop-intl-5', artist: 'Billie Eilish', title: 'bad guy', category: 'pop', origin: 'intl', year: 2019 },
  { id: 'pop-intl-6', artist: 'Miley Cyrus', title: 'Flowers', category: 'pop', origin: 'intl', year: 2023 },
  { id: 'pop-intl-7', artist: 'Ed Sheeran', title: 'Shape of You', category: 'pop', origin: 'intl', year: 2017 },
  { id: 'pop-intl-8', artist: 'Lady Gaga', title: 'Bad Romance', category: 'pop', origin: 'intl', year: 2009 },
  { id: 'pop-intl-9', artist: 'Bruno Mars', title: 'Locked Out of Heaven', category: 'pop', origin: 'intl', year: 2012 },
  { id: 'pop-intl-10', artist: 'Coldplay', title: 'Viva La Vida', category: 'pop', origin: 'intl', year: 2008 },
  { id: 'pop-intl-11', artist: 'Adele', title: 'Rolling in the Deep', category: 'pop', origin: 'intl', year: 2011 },
  { id: 'pop-intl-12', artist: 'Imagine Dragons', title: 'Believer', category: 'pop', origin: 'intl', year: 2017 },
  { id: 'pop-intl-13', artist: 'Katy Perry', title: 'Roar', category: 'pop', origin: 'intl', year: 2013 },
  { id: 'pop-intl-14', artist: 'Avicii', title: 'Wake Me Up', category: 'pop', origin: 'intl', year: 2013 },
  { id: 'pop-intl-15', artist: 'Rihanna', title: 'Umbrella', category: 'pop', origin: 'intl', year: 2007 },
  { id: 'pop-intl-16', artist: 'Harry Styles', title: 'Watermelon Sugar', category: 'pop', origin: 'intl', year: 2019 },
  { id: 'pop-intl-17', artist: 'Harry Styles', title: 'Sign of the Times', category: 'pop', origin: 'intl', year: 2017 },
  { id: 'pop-intl-18', artist: 'Dua Lipa', title: 'Don\'t Start Now', category: 'pop', origin: 'intl', year: 2019 },
  { id: 'pop-intl-19', artist: 'Dua Lipa', title: 'Houdini', category: 'pop', origin: 'intl', year: 2023 },
  { id: 'pop-intl-20', artist: 'Dua Lipa', title: 'Physical', category: 'pop', origin: 'intl', year: 2020 },
  { id: 'pop-intl-21', artist: 'The Weeknd', title: 'Save Your Tears', category: 'pop', origin: 'intl', year: 2020 },
  { id: 'pop-intl-22', artist: 'The Weeknd', title: 'Starboy', category: 'pop', origin: 'intl', year: 2016 },
  { id: 'pop-intl-23', artist: 'The Weeknd', title: 'Can\'t Feel My Face', category: 'pop', origin: 'intl', year: 2015 },
  { id: 'pop-intl-24', artist: 'Taylor Swift', title: 'Anti-Hero', category: 'pop', origin: 'intl', year: 2022 },
  { id: 'pop-intl-25', artist: 'Taylor Swift', title: 'Shake It Off', category: 'pop', origin: 'intl', year: 2014 },
  { id: 'pop-intl-26', artist: 'Taylor Swift', title: 'Blank Space', category: 'pop', origin: 'intl', year: 2014 },
  { id: 'pop-intl-27', artist: 'Billie Eilish', title: 'Happier Than Ever', category: 'pop', origin: 'intl', year: 2021 },
  { id: 'pop-intl-28', artist: 'Billie Eilish', title: 'when the party\'s over', category: 'pop', origin: 'intl', year: 2018 },
  { id: 'pop-intl-29', artist: 'Billie Eilish', title: 'BIRDS OF A FEATHER', category: 'pop', origin: 'intl', year: 2024 },
  { id: 'pop-intl-30', artist: 'Olivia Rodrigo', title: 'drivers license', category: 'pop', origin: 'intl', year: 2021 },
  { id: 'pop-intl-31', artist: 'Olivia Rodrigo', title: 'good 4 u', category: 'pop', origin: 'intl', year: 2021 },
  { id: 'pop-intl-32', artist: 'Olivia Rodrigo', title: 'vampire', category: 'pop', origin: 'intl', year: 2023 },
  { id: 'pop-intl-33', artist: 'Ariana Grande', title: '7 rings', category: 'pop', origin: 'intl', year: 2019 },
  { id: 'pop-intl-34', artist: 'Ariana Grande', title: 'thank u, next', category: 'pop', origin: 'intl', year: 2018 },
  { id: 'pop-intl-35', artist: 'Ariana Grande', title: 'no tears left to cry', category: 'pop', origin: 'intl', year: 2018 },
  { id: 'pop-intl-36', artist: 'Bruno Mars', title: 'Uptown Funk', category: 'pop', origin: 'intl', year: 2014 },
  { id: 'pop-intl-37', artist: 'Bruno Mars', title: '24K Magic', category: 'pop', origin: 'intl', year: 2016 },
  { id: 'pop-intl-38', artist: 'Bruno Mars', title: 'Just the Way You Are', category: 'pop', origin: 'intl', year: 2010 },
  { id: 'pop-intl-39', artist: 'Ed Sheeran', title: 'Perfect', category: 'pop', origin: 'intl', year: 2017 },
  { id: 'pop-intl-40', artist: 'Ed Sheeran', title: 'Bad Habits', category: 'pop', origin: 'intl', year: 2021 },
  { id: 'pop-intl-41', artist: 'Ed Sheeran', title: 'Thinking out Loud', category: 'pop', origin: 'intl', year: 2014 },
  { id: 'pop-intl-42', artist: 'Adele', title: 'Someone Like You', category: 'pop', origin: 'intl', year: 2011 },
  { id: 'pop-intl-43', artist: 'Adele', title: 'Hello', category: 'pop', origin: 'intl', year: 2015 },
  { id: 'pop-intl-44', artist: 'Adele', title: 'Easy On Me', category: 'pop', origin: 'intl', year: 2021 },
  { id: 'pop-intl-45', artist: 'Lady Gaga', title: 'Poker Face', category: 'pop', origin: 'intl', year: 2008 },
  { id: 'pop-intl-46', artist: 'Lady Gaga', title: 'Shallow', category: 'pop', origin: 'intl', year: 2018 },
  { id: 'pop-intl-47', artist: 'Lady Gaga', title: 'Born This Way', category: 'pop', origin: 'intl', year: 2011 },
  { id: 'pop-intl-48', artist: 'Katy Perry', title: 'Firework', category: 'pop', origin: 'intl', year: 2010 },
  { id: 'pop-intl-49', artist: 'Katy Perry', title: 'California Gurls', category: 'pop', origin: 'intl', year: 2010 },
  { id: 'pop-intl-50', artist: 'Rihanna', title: 'Diamonds', category: 'pop', origin: 'intl', year: 2012 },
  { id: 'pop-intl-51', artist: 'Rihanna', title: 'We Found Love', category: 'pop', origin: 'intl', year: 2011 },
  { id: 'pop-intl-52', artist: 'Beyoncé', title: 'Single Ladies', category: 'pop', origin: 'intl', year: 2008 },
  { id: 'pop-intl-53', artist: 'Beyoncé', title: 'Crazy In Love', category: 'pop', origin: 'intl', year: 2003 },
  { id: 'pop-intl-54', artist: 'Shakira', title: 'Hips Don\'t Lie', category: 'pop', origin: 'intl', year: 2006 },
  { id: 'pop-intl-55', artist: 'Shakira', title: 'Whenever, Wherever', category: 'pop', origin: 'intl', year: 2001 },
  { id: 'pop-intl-56', artist: 'Justin Bieber', title: 'Sorry', category: 'pop', origin: 'intl', year: 2015 },
  { id: 'pop-intl-57', artist: 'Justin Bieber', title: 'Love Yourself', category: 'pop', origin: 'intl', year: 2015 },
  { id: 'pop-intl-58', artist: 'Maroon 5', title: 'Sugar', category: 'pop', origin: 'intl', year: 2014 },
  { id: 'pop-intl-59', artist: 'Maroon 5', title: 'Moves Like Jagger', category: 'pop', origin: 'intl', year: 2011 },
  { id: 'pop-intl-60', artist: 'Sia', title: 'Chandelier', category: 'pop', origin: 'intl', year: 2014 },
  { id: 'pop-intl-61', artist: 'Shawn Mendes & Camila Cabello', title: 'Señorita', category: 'pop', origin: 'intl', year: 2019 },
  { id: 'pop-intl-62', artist: 'Sam Smith', title: 'Stay With Me', category: 'pop', origin: 'intl', year: 2014 },
  { id: 'pop-intl-63', artist: 'Coldplay', title: 'Yellow', category: 'pop', origin: 'intl', year: 2000 },
  { id: 'pop-intl-64', artist: 'Coldplay', title: 'A Sky Full of Stars', category: 'pop', origin: 'intl', year: 2014 },
  { id: 'pop-intl-65', artist: 'Coldplay', title: 'The Scientist', category: 'pop', origin: 'intl', year: 2002 },
  // =========================================================================
  // ROCK LEGENDS - ITALIANO (48 brani)
  // =========================================================================
  { id: 'rock-ita-1', artist: 'Måneskin', title: 'Zitti e Buoni', category: 'rock', origin: 'ita', year: 2021 },
  { id: 'rock-ita-2', artist: 'Måneskin', title: 'I Wanna Be Your Slave', category: 'rock', origin: 'ita', year: 2021 },
  { id: 'rock-ita-3', artist: 'Vasco Rossi', title: 'Albachiara', category: 'rock', origin: 'ita', year: 1979 },
  { id: 'rock-ita-4', artist: 'Vasco Rossi', title: 'Vita Spericolata', category: 'rock', origin: 'ita', year: 1983 },
  { id: 'rock-ita-5', artist: 'Ligabue', title: 'Certe Notti', category: 'rock', origin: 'ita', year: 1995 },
  { id: 'rock-ita-6', artist: 'Litfiba', title: 'Regina di Cuori', category: 'rock', origin: 'ita', year: 1997 },
  { id: 'rock-ita-7', artist: 'Zucchero', title: 'Diavolo In Me', category: 'rock', origin: 'ita', year: 1989 },
  { id: 'rock-ita-8', artist: 'Rino Gaetano', title: 'Gianna', category: 'rock', origin: 'ita', year: 1978 },
  { id: 'rock-ita-9', artist: 'Gianna Nannini', title: 'Meravigliosa Creatura', category: 'rock', origin: 'ita', year: 1995 },
  { id: 'rock-ita-10', artist: 'Måneskin', title: 'Beggin\'', category: 'rock', origin: 'ita', year: 2017 },
  { id: 'rock-ita-11', artist: 'Måneskin', title: 'Supermodel', category: 'rock', origin: 'ita', year: 2022 },
  { id: 'rock-ita-12', artist: 'Måneskin', title: 'Torna a casa', category: 'rock', origin: 'ita', year: 2018 },
  { id: 'rock-ita-13', artist: 'Måneskin', title: 'Morirò da re', category: 'rock', origin: 'ita', year: 2018 },
  { id: 'rock-ita-14', artist: 'Vasco Rossi', title: 'Siamo solo noi', category: 'rock', origin: 'ita', year: 1981 },
  { id: 'rock-ita-15', artist: 'Vasco Rossi', title: 'C\'è chi dice no', category: 'rock', origin: 'ita', year: 1987 },
  { id: 'rock-ita-16', artist: 'Vasco Rossi', title: 'Gli spari sopra', category: 'rock', origin: 'ita', year: 1993 },
  { id: 'rock-ita-17', artist: 'Vasco Rossi', title: 'Sally', category: 'rock', origin: 'ita', year: 1996 },
  { id: 'rock-ita-18', artist: 'Vasco Rossi', title: 'Rewind', category: 'rock', origin: 'ita', year: 1998 },
  { id: 'rock-ita-19', artist: 'Ligabue', title: 'Urlando contro il cielo', category: 'rock', origin: 'ita', year: 1991 },
  { id: 'rock-ita-20', artist: 'Ligabue', title: 'Balliamo sul mondo', category: 'rock', origin: 'ita', year: 1990 },
  { id: 'rock-ita-21', artist: 'Ligabue', title: 'Piccola stella senza cielo', category: 'rock', origin: 'ita', year: 1990 },
  { id: 'rock-ita-22', artist: 'Ligabue', title: 'Tra palco e realtà', category: 'rock', origin: 'ita', year: 1997 },
  { id: 'rock-ita-23', artist: 'Ligabue', title: 'Questa è la mia vita', category: 'rock', origin: 'ita', year: 2002 },
  { id: 'rock-ita-24', artist: 'Litfiba', title: 'El Diablo', category: 'rock', origin: 'ita', year: 1990 },
  { id: 'rock-ita-25', artist: 'Litfiba', title: 'Spirito', category: 'rock', origin: 'ita', year: 1994 },
  { id: 'rock-ita-26', artist: 'Litfiba', title: 'Fata Morgana', category: 'rock', origin: 'ita', year: 1993 },
  { id: 'rock-ita-27', artist: 'Litfiba', title: 'Gioconda', category: 'rock', origin: 'ita', year: 1991 },
  { id: 'rock-ita-28', artist: 'Litfiba', title: 'Il mio corpo che cambia', category: 'rock', origin: 'ita', year: 1999 },
  { id: 'rock-ita-29', artist: 'Negramaro', title: 'Mentre tutto scorre', category: 'rock', origin: 'ita', year: 2005 },
  { id: 'rock-ita-30', artist: 'Negramaro', title: 'Estate', category: 'rock', origin: 'ita', year: 2005 },
  { id: 'rock-ita-31', artist: 'Negramaro', title: 'Nuvole e lenzuola', category: 'rock', origin: 'ita', year: 2006 },
  { id: 'rock-ita-32', artist: 'Negrita', title: 'Rotolando verso sud', category: 'rock', origin: 'ita', year: 2005 },
  { id: 'rock-ita-33', artist: 'Negrita', title: 'Mama maé', category: 'rock', origin: 'ita', year: 1999 },
  { id: 'rock-ita-34', artist: 'Subsonica', title: 'Tutti i miei sbagli', category: 'rock', origin: 'ita', year: 2000 },
  { id: 'rock-ita-35', artist: 'Subsonica', title: 'Nuova ossessione', category: 'rock', origin: 'ita', year: 2002 },
  { id: 'rock-ita-36', artist: 'Le Vibrazioni', title: 'Dedicato a te', category: 'rock', origin: 'ita', year: 2003 },
  { id: 'rock-ita-37', artist: 'Le Vibrazioni', title: 'In una notte d\'estate', category: 'rock', origin: 'ita', year: 2003 },
  { id: 'rock-ita-38', artist: 'Zucchero', title: 'Baila Morena', category: 'rock', origin: 'ita', year: 2001 },
  { id: 'rock-ita-39', artist: 'Zucchero', title: 'Overdose (d\'amore)', category: 'rock', origin: 'ita', year: 1989 },
  { id: 'rock-ita-40', artist: 'Zucchero', title: 'Senza una donna', category: 'rock', origin: 'ita', year: 1987 },
  { id: 'rock-ita-41', artist: 'Gianna Nannini', title: 'Bello e impossibile', category: 'rock', origin: 'ita', year: 1986 },
  { id: 'rock-ita-42', artist: 'Gianna Nannini', title: 'Fotoromanza', category: 'rock', origin: 'ita', year: 1984 },
  { id: 'rock-ita-43', artist: 'Gianna Nannini', title: 'Sei nell\'anima', category: 'rock', origin: 'ita', year: 2006 },
  { id: 'rock-ita-44', artist: 'Pino Daniele', title: 'Je so\' pazzo', category: 'rock', origin: 'ita', year: 1979 },
  { id: 'rock-ita-45', artist: 'Pino Daniele', title: 'A me me piace \'o blues', category: 'rock', origin: 'ita', year: 1980 },
  { id: 'rock-ita-46', artist: 'Pino Daniele', title: 'Quanno chiove', category: 'rock', origin: 'ita', year: 1980 },
  { id: 'rock-ita-47', artist: 'Afterhours', title: 'Quello che non c\'è', category: 'rock', origin: 'ita', year: 2002 },
  { id: 'rock-ita-48', artist: 'Verdena', title: 'Valvonauta', category: 'rock', origin: 'ita', year: 1999 },
  // =========================================================================
  // ROCK LEGENDS - INTERNAZIONALE (69 brani)
  // =========================================================================
  { id: 'rock-intl-1', artist: 'Queen', title: 'Bohemian Rhapsody', category: 'rock', origin: 'intl', year: 1975 },
  { id: 'rock-intl-2', artist: 'Queen', title: 'Don\'t Stop Me Now', category: 'rock', origin: 'intl', year: 1978 },
  { id: 'rock-intl-3', artist: 'AC/DC', title: 'Back In Black', category: 'rock', origin: 'intl', year: 1980 },
  { id: 'rock-intl-4', artist: 'Nirvana', title: 'Smells Like Teen Spirit', category: 'rock', origin: 'intl', year: 1991 },
  { id: 'rock-intl-5', artist: 'Guns N Roses', title: 'Sweet Child O\' Mine', category: 'rock', origin: 'intl', year: 1987 },
  { id: 'rock-intl-6', artist: 'Bon Jovi', title: 'Livin\' On A Prayer', category: 'rock', origin: 'intl', year: 1986 },
  { id: 'rock-intl-7', artist: 'Linkin Park', title: 'In The End', category: 'rock', origin: 'intl', year: 2000 },
  { id: 'rock-intl-8', artist: 'Red Hot Chili Peppers', title: 'Californication', category: 'rock', origin: 'intl', year: 1999 },
  { id: 'rock-intl-9', artist: 'The Beatles', title: 'Here Comes The Sun', category: 'rock', origin: 'intl', year: 1969 },
  { id: 'rock-intl-10', artist: 'The White Stripes', title: 'Seven Nation Army', category: 'rock', origin: 'intl', year: 2003 },
  { id: 'rock-intl-11', artist: 'Green Day', title: 'Boulevard of Broken Dreams', category: 'rock', origin: 'intl', year: 2004 },
  { id: 'rock-intl-12', artist: 'Oasis', title: 'Wonderwall', category: 'rock', origin: 'intl', year: 1995 },
  { id: 'rock-intl-13', artist: 'Queen', title: 'We Will Rock You', category: 'rock', origin: 'intl', year: 1977 },
  { id: 'rock-intl-14', artist: 'Queen', title: 'We Are The Champions', category: 'rock', origin: 'intl', year: 1977 },
  { id: 'rock-intl-15', artist: 'Queen', title: 'Another One Bites The Dust', category: 'rock', origin: 'intl', year: 1980 },
  { id: 'rock-intl-16', artist: 'Queen', title: 'Radio Ga Ga', category: 'rock', origin: 'intl', year: 1984 },
  { id: 'rock-intl-17', artist: 'Queen', title: 'Under Pressure', category: 'rock', origin: 'intl', year: 1981 },
  { id: 'rock-intl-18', artist: 'AC/DC', title: 'Highway to Hell', category: 'rock', origin: 'intl', year: 1979 },
  { id: 'rock-intl-19', artist: 'AC/DC', title: 'Thunderstruck', category: 'rock', origin: 'intl', year: 1990 },
  { id: 'rock-intl-20', artist: 'AC/DC', title: 'You Shook Me All Night Long', category: 'rock', origin: 'intl', year: 1980 },
  { id: 'rock-intl-21', artist: 'Nirvana', title: 'Come As You Are', category: 'rock', origin: 'intl', year: 1991 },
  { id: 'rock-intl-22', artist: 'Nirvana', title: 'Heart-Shaped Box', category: 'rock', origin: 'intl', year: 1993 },
  { id: 'rock-intl-23', artist: 'Nirvana', title: 'Lithium', category: 'rock', origin: 'intl', year: 1991 },
  { id: 'rock-intl-24', artist: 'Guns N Roses', title: 'Welcome To The Jungle', category: 'rock', origin: 'intl', year: 1987 },
  { id: 'rock-intl-25', artist: 'Guns N Roses', title: 'Paradise City', category: 'rock', origin: 'intl', year: 1987 },
  { id: 'rock-intl-26', artist: 'Guns N Roses', title: 'November Rain', category: 'rock', origin: 'intl', year: 1991 },
  { id: 'rock-intl-27', artist: 'Bon Jovi', title: 'You Give Love A Bad Name', category: 'rock', origin: 'intl', year: 1986 },
  { id: 'rock-intl-28', artist: 'Bon Jovi', title: 'It\'s My Life', category: 'rock', origin: 'intl', year: 2000 },
  { id: 'rock-intl-29', artist: 'Bon Jovi', title: 'Always', category: 'rock', origin: 'intl', year: 1994 },
  { id: 'rock-intl-30', artist: 'Linkin Park', title: 'Numb', category: 'rock', origin: 'intl', year: 2003 },
  { id: 'rock-intl-31', artist: 'Linkin Park', title: 'Crawling', category: 'rock', origin: 'intl', year: 2000 },
  { id: 'rock-intl-32', artist: 'Linkin Park', title: 'Faint', category: 'rock', origin: 'intl', year: 2003 },
  { id: 'rock-intl-33', artist: 'Red Hot Chili Peppers', title: 'Under The Bridge', category: 'rock', origin: 'intl', year: 1991 },
  { id: 'rock-intl-34', artist: 'Red Hot Chili Peppers', title: 'Can\'t Stop', category: 'rock', origin: 'intl', year: 2002 },
  { id: 'rock-intl-35', artist: 'Red Hot Chili Peppers', title: 'Scar Tissue', category: 'rock', origin: 'intl', year: 1999 },
  { id: 'rock-intl-36', artist: 'Red Hot Chili Peppers', title: 'Otherside', category: 'rock', origin: 'intl', year: 1999 },
  { id: 'rock-intl-37', artist: 'The Beatles', title: 'Hey Jude', category: 'rock', origin: 'intl', year: 1968 },
  { id: 'rock-intl-38', artist: 'The Beatles', title: 'Let It Be', category: 'rock', origin: 'intl', year: 1970 },
  { id: 'rock-intl-39', artist: 'The Beatles', title: 'Come Together', category: 'rock', origin: 'intl', year: 1969 },
  { id: 'rock-intl-40', artist: 'The Beatles', title: 'Yesterday', category: 'rock', origin: 'intl', year: 1965 },
  { id: 'rock-intl-41', artist: 'The Rolling Stones', title: 'Paint It Black', category: 'rock', origin: 'intl', year: 1966 },
  { id: 'rock-intl-42', artist: 'The Rolling Stones', title: '(I Can\'t Get No) Satisfaction', category: 'rock', origin: 'intl', year: 1965 },
  { id: 'rock-intl-43', artist: 'The Rolling Stones', title: 'Start Me Up', category: 'rock', origin: 'intl', year: 1981 },
  { id: 'rock-intl-44', artist: 'Pink Floyd', title: 'Another Brick in the Wall, Pt. 2', category: 'rock', origin: 'intl', year: 1979 },
  { id: 'rock-intl-45', artist: 'Pink Floyd', title: 'Wish You Were Here', category: 'rock', origin: 'intl', year: 1975 },
  { id: 'rock-intl-46', artist: 'Pink Floyd', title: 'Comfortably Numb', category: 'rock', origin: 'intl', year: 1979 },
  { id: 'rock-intl-47', artist: 'Led Zeppelin', title: 'Stairway to Heaven', category: 'rock', origin: 'intl', year: 1971 },
  { id: 'rock-intl-48', artist: 'Led Zeppelin', title: 'Whole Lotta Love', category: 'rock', origin: 'intl', year: 1969 },
  { id: 'rock-intl-49', artist: 'Led Zeppelin', title: 'Kashmir', category: 'rock', origin: 'intl', year: 1975 },
  { id: 'rock-intl-50', artist: 'Green Day', title: 'Basket Case', category: 'rock', origin: 'intl', year: 1994 },
  { id: 'rock-intl-51', artist: 'Green Day', title: 'American Idiot', category: 'rock', origin: 'intl', year: 2004 },
  { id: 'rock-intl-52', artist: 'Green Day', title: 'Wake Me Up When September Ends', category: 'rock', origin: 'intl', year: 2004 },
  { id: 'rock-intl-53', artist: 'Oasis', title: 'Don\'t Look Back In Anger', category: 'rock', origin: 'intl', year: 1995 },
  { id: 'rock-intl-54', artist: 'Oasis', title: 'Champagne Supernova', category: 'rock', origin: 'intl', year: 1995 },
  { id: 'rock-intl-55', artist: 'U2', title: 'With Or Without You', category: 'rock', origin: 'intl', year: 1987 },
  { id: 'rock-intl-56', artist: 'U2', title: 'Sunday Bloody Sunday', category: 'rock', origin: 'intl', year: 1983 },
  { id: 'rock-intl-57', artist: 'U2', title: 'One', category: 'rock', origin: 'intl', year: 1991 },
  { id: 'rock-intl-58', artist: 'Foo Fighters', title: 'Everlong', category: 'rock', origin: 'intl', year: 1997 },
  { id: 'rock-intl-59', artist: 'Foo Fighters', title: 'Best of You', category: 'rock', origin: 'intl', year: 2005 },
  { id: 'rock-intl-60', artist: 'Muse', title: 'Uprising', category: 'rock', origin: 'intl', year: 2009 },
  { id: 'rock-intl-61', artist: 'Muse', title: 'Starlight', category: 'rock', origin: 'intl', year: 2006 },
  { id: 'rock-intl-62', artist: 'Arctic Monkeys', title: 'Do I Wanna Know?', category: 'rock', origin: 'intl', year: 2013 },
  { id: 'rock-intl-63', artist: 'Arctic Monkeys', title: 'I Bet You Look Good On The Dancefloor', category: 'rock', origin: 'intl', year: 2006 },
  { id: 'rock-intl-64', artist: 'The Killers', title: 'Mr. Brightside', category: 'rock', origin: 'intl', year: 2004 },
  { id: 'rock-intl-65', artist: 'Metallica', title: 'Enter Sandman', category: 'rock', origin: 'intl', year: 1991 },
  { id: 'rock-intl-66', artist: 'Metallica', title: 'Nothing Else Matters', category: 'rock', origin: 'intl', year: 1991 },
  { id: 'rock-intl-67', artist: 'Blink-182', title: 'All The Small Things', category: 'rock', origin: 'intl', year: 1999 },
  { id: 'rock-intl-68', artist: 'Blink-182', title: 'What\'s My Age Again?', category: 'rock', origin: 'intl', year: 1999 },
  { id: 'rock-intl-69', artist: 'The Police', title: 'Every Breath You Take', category: 'rock', origin: 'intl', year: 1983 },
  // =========================================================================
  // ANNI '80 & '90 (RETRO) - ITALIANO (43 brani)
  // =========================================================================
  { id: 'retro-ita-1', artist: '883', title: 'Hanno Ucciso L\'Uomo Ragno', category: 'retro', origin: 'ita', year: 1992 },
  { id: 'retro-ita-2', artist: '883', title: 'Nord Sud Ovest Est', category: 'retro', origin: 'ita', year: 1993 },
  { id: 'retro-ita-3', artist: '883', title: 'Come Mai', category: 'retro', origin: 'ita', year: 1993 },
  { id: 'retro-ita-4', artist: 'Lucio Battisti', title: 'La canzone del sole', category: 'retro', origin: 'ita', year: 1971 },
  { id: 'retro-ita-5', artist: 'Ricchi e Poveri', title: 'Sarà perché ti amo', category: 'retro', origin: 'ita', year: 1981 },
  { id: 'retro-ita-6', artist: 'Raffaella Carrà', title: 'A far l amore comincia tu', category: 'retro', origin: 'ita', year: 1976 },
  { id: 'retro-ita-7', artist: 'Umberto Tozzi', title: 'Gloria', category: 'retro', origin: 'ita', year: 1979 },
  { id: 'retro-ita-8', artist: 'Alan Sorrenti', title: 'Tu sei l unica donna per me', category: 'retro', origin: 'ita', year: 1979 },
  { id: 'retro-ita-9', artist: 'Gala', title: 'Freed From Desire', category: 'retro', origin: 'ita', year: 1996 },
  { id: 'retro-ita-10', artist: 'Corona', title: 'The Rhythm of the Night', category: 'retro', origin: 'ita', year: 1993 },
  { id: 'retro-ita-11', artist: '883', title: 'Sei un mito', category: 'retro', origin: 'ita', year: 1993 },
  { id: 'retro-ita-12', artist: '883', title: 'Una canzone d\'amore', category: 'retro', origin: 'ita', year: 1995 },
  { id: 'retro-ita-13', artist: '883', title: 'Gli anni', category: 'retro', origin: 'ita', year: 1995 },
  { id: 'retro-ita-14', artist: '883', title: 'La regola dell\'amico', category: 'retro', origin: 'ita', year: 1997 },
  { id: 'retro-ita-15', artist: '883', title: 'Rotta x casa di Dio', category: 'retro', origin: 'ita', year: 1993 },
  { id: 'retro-ita-16', artist: 'Lucio Battisti', title: 'Il mio canto libero', category: 'retro', origin: 'ita', year: 1972 },
  { id: 'retro-ita-17', artist: 'Lucio Battisti', title: 'Un\'avventura', category: 'retro', origin: 'ita', year: 1969 },
  { id: 'retro-ita-18', artist: 'Lucio Battisti', title: 'I giardini di marzo', category: 'retro', origin: 'ita', year: 1972 },
  { id: 'retro-ita-19', artist: 'Lucio Battisti', title: 'Acqua azzurra acqua chiara', category: 'retro', origin: 'ita', year: 1969 },
  { id: 'retro-ita-20', artist: 'Eiffel 65', title: 'Blue (Da Ba Dee)', category: 'retro', origin: 'ita', year: 1999 },
  { id: 'retro-ita-21', artist: 'Eiffel 65', title: 'Move Your Body', category: 'retro', origin: 'ita', year: 1999 },
  { id: 'retro-ita-22', artist: 'Gigi D\'Agostino', title: 'L\'Amour Toujours', category: 'retro', origin: 'ita', year: 1999 },
  { id: 'retro-ita-23', artist: 'Gigi D\'Agostino', title: 'The Riddle', category: 'retro', origin: 'ita', year: 1999 },
  { id: 'retro-ita-24', artist: 'Gigi D\'Agostino', title: 'Bla Bla Bla', category: 'retro', origin: 'ita', year: 1999 },
  { id: 'retro-ita-25', artist: 'Alexia', title: 'Uh La La La', category: 'retro', origin: 'ita', year: 1997 },
  { id: 'retro-ita-26', artist: 'Robert Miles', title: 'Children', category: 'retro', origin: 'ita', year: 1995 },
  { id: 'retro-ita-27', artist: 'Ricchi e Poveri', title: 'Mamma Maria', category: 'retro', origin: 'ita', year: 1982 },
  { id: 'retro-ita-28', artist: 'Raffaella Carrà', title: 'Tanti Auguri', category: 'retro', origin: 'ita', year: 1978 },
  { id: 'retro-ita-29', artist: 'Raffaella Carrà', title: 'Pedro', category: 'retro', origin: 'ita', year: 1980 },
  { id: 'retro-ita-30', artist: 'Umberto Tozzi', title: 'Ti Amo', category: 'retro', origin: 'ita', year: 1977 },
  { id: 'retro-ita-31', artist: 'Umberto Tozzi', title: 'Stella Stai', category: 'retro', origin: 'ita', year: 1980 },
  { id: 'retro-ita-32', artist: 'Donatella Rettore', title: 'Kobra', category: 'retro', origin: 'ita', year: 1980 },
  { id: 'retro-ita-33', artist: 'Donatella Rettore', title: 'Splendido Splendente', category: 'retro', origin: 'ita', year: 1979 },
  { id: 'retro-ita-34', artist: 'Loredana Bertè', title: 'E la luna bussò', category: 'retro', origin: 'ita', year: 1979 },
  { id: 'retro-ita-35', artist: 'Loredana Bertè', title: 'Non sono una signora', category: 'retro', origin: 'ita', year: 1982 },
  { id: 'retro-ita-36', artist: 'Mia Martini', title: 'Almeno tu nell\'universo', category: 'retro', origin: 'ita', year: 1989 },
  { id: 'retro-ita-37', artist: 'Mia Martini', title: 'Minuetto', category: 'retro', origin: 'ita', year: 1973 },
  { id: 'retro-ita-38', artist: 'Matia Bazar', title: 'Ti sento', category: 'retro', origin: 'ita', year: 1985 },
  { id: 'retro-ita-39', artist: 'Matia Bazar', title: 'Vacanze romane', category: 'retro', origin: 'ita', year: 1983 },
  { id: 'retro-ita-40', artist: 'Toto Cutugno', title: 'L\'Italiano', category: 'retro', origin: 'ita', year: 1983 },
  { id: 'retro-ita-41', artist: 'Al Bano & Romina Power', title: 'Felicità', category: 'retro', origin: 'ita', year: 1982 },
  { id: 'retro-ita-42', artist: 'Lorella Cuccarini', title: 'La notte vola', category: 'retro', origin: 'ita', year: 1989 },
  { id: 'retro-ita-43', artist: 'Heather Parisi', title: 'Cicale', category: 'retro', origin: 'ita', year: 1981 },
  // =========================================================================
  // ANNI '80 & '90 (RETRO) - INTERNAZIONALE (45 brani)
  // =========================================================================
  { id: 'retro-intl-1', artist: 'A-ha', title: 'Take On Me', category: 'retro', origin: 'intl', year: 1985 },
  { id: 'retro-intl-2', artist: 'Rick Astley', title: 'Never Gonna Give You Up', category: 'retro', origin: 'intl', year: 1987 },
  { id: 'retro-intl-3', artist: 'Michael Jackson', title: 'Billie Jean', category: 'retro', origin: 'intl', year: 1982 },
  { id: 'retro-intl-4', artist: 'Whitney Houston', title: 'I Wanna Dance with Somebody', category: 'retro', origin: 'intl', year: 1987 },
  { id: 'retro-intl-5', artist: 'ABBA', title: 'Dancing Queen', category: 'retro', origin: 'intl', year: 1976 },
  { id: 'retro-intl-6', artist: 'Madonna', title: 'Like a Prayer', category: 'retro', origin: 'intl', year: 1989 },
  { id: 'retro-intl-7', artist: 'Backstreet Boys', title: 'Everybody (Backstreet\'s Back)', category: 'retro', origin: 'intl', year: 1997 },
  { id: 'retro-intl-8', artist: 'Britney Spears', title: '...Baby One More Time', category: 'retro', origin: 'intl', year: 1998 },
  { id: 'retro-intl-9', artist: 'Spice Girls', title: 'Wannabe', category: 'retro', origin: 'intl', year: 1996 },
  { id: 'retro-intl-10', artist: 'George Michael', title: 'Careless Whisper', category: 'retro', origin: 'intl', year: 1984 },
  { id: 'retro-intl-11', artist: 'Cyndi Lauper', title: 'Girls Just Want to Have Fun', category: 'retro', origin: 'intl', year: 1983 },
  { id: 'retro-intl-12', artist: 'Toto', title: 'Africa', category: 'retro', origin: 'intl', year: 1982 },
  { id: 'retro-intl-13', artist: 'Michael Jackson', title: 'Thriller', category: 'retro', origin: 'intl', year: 1982 },
  { id: 'retro-intl-14', artist: 'Michael Jackson', title: 'Beat It', category: 'retro', origin: 'intl', year: 1982 },
  { id: 'retro-intl-15', artist: 'Michael Jackson', title: 'Smooth Criminal', category: 'retro', origin: 'intl', year: 1987 },
  { id: 'retro-intl-16', artist: 'Michael Jackson', title: 'Bad', category: 'retro', origin: 'intl', year: 1987 },
  { id: 'retro-intl-17', artist: 'Michael Jackson', title: 'Black or White', category: 'retro', origin: 'intl', year: 1991 },
  { id: 'retro-intl-18', artist: 'Madonna', title: 'Material Girl', category: 'retro', origin: 'intl', year: 1984 },
  { id: 'retro-intl-19', artist: 'Madonna', title: 'Like a Virgin', category: 'retro', origin: 'intl', year: 1984 },
  { id: 'retro-intl-20', artist: 'Madonna', title: 'Vogue', category: 'retro', origin: 'intl', year: 1990 },
  { id: 'retro-intl-21', artist: 'Madonna', title: 'La Isla Bonita', category: 'retro', origin: 'intl', year: 1986 },
  { id: 'retro-intl-22', artist: 'Prince', title: 'Purple Rain', category: 'retro', origin: 'intl', year: 1984 },
  { id: 'retro-intl-23', artist: 'Prince', title: 'Kiss', category: 'retro', origin: 'intl', year: 1986 },
  { id: 'retro-intl-24', artist: 'Prince', title: 'When Doves Cry', category: 'retro', origin: 'intl', year: 1984 },
  { id: 'retro-intl-25', artist: 'Whitney Houston', title: 'I Will Always Love You', category: 'retro', origin: 'intl', year: 1992 },
  { id: 'retro-intl-26', artist: 'George Michael', title: 'Faith', category: 'retro', origin: 'intl', year: 1987 },
  { id: 'retro-intl-27', artist: 'Wham!', title: 'Wake Me Up Before You Go-Go', category: 'retro', origin: 'intl', year: 1984 },
  { id: 'retro-intl-28', artist: 'Wham!', title: 'Last Christmas', category: 'retro', origin: 'intl', year: 1984 },
  { id: 'retro-intl-29', artist: 'Cyndi Lauper', title: 'Time After Time', category: 'retro', origin: 'intl', year: 1983 },
  { id: 'retro-intl-30', artist: 'ABBA', title: 'Gimme! Gimme! Gimme!', category: 'retro', origin: 'intl', year: 1979 },
  { id: 'retro-intl-31', artist: 'ABBA', title: 'Mamma Mia', category: 'retro', origin: 'intl', year: 1975 },
  { id: 'retro-intl-32', artist: 'Europe', title: 'The Final Countdown', category: 'retro', origin: 'intl', year: 1986 },
  { id: 'retro-intl-33', artist: 'Survivor', title: 'Eye of the Tiger', category: 'retro', origin: 'intl', year: 1982 },
  { id: 'retro-intl-34', artist: 'Phil Collins', title: 'In the Air Tonight', category: 'retro', origin: 'intl', year: 1981 },
  { id: 'retro-intl-35', artist: 'Tears for Fears', title: 'Everybody Wants to Rule the World', category: 'retro', origin: 'intl', year: 1985 },
  { id: 'retro-intl-36', artist: 'Depeche Mode', title: 'Enjoy the Silence', category: 'retro', origin: 'intl', year: 1990 },
  { id: 'retro-intl-37', artist: 'The Cure', title: 'Boys Don\'t Cry', category: 'retro', origin: 'intl', year: 1979 },
  { id: 'retro-intl-38', artist: 'Backstreet Boys', title: 'I Want It That Way', category: 'retro', origin: 'intl', year: 1999 },
  { id: 'retro-intl-39', artist: 'Backstreet Boys', title: 'As Long as You Love Me', category: 'retro', origin: 'intl', year: 1997 },
  { id: 'retro-intl-40', artist: 'Britney Spears', title: 'Oops!... I Did It Again', category: 'retro', origin: 'intl', year: 2000 },
  { id: 'retro-intl-41', artist: 'Spice Girls', title: 'Stop', category: 'retro', origin: 'intl', year: 1997 },
  { id: 'retro-intl-42', artist: 'Spice Girls', title: '2 Become 1', category: 'retro', origin: 'intl', year: 1996 },
  { id: 'retro-intl-43', artist: 'Cher', title: 'Believe', category: 'retro', origin: 'intl', year: 1998 },
  { id: 'retro-intl-44', artist: 'TLC', title: 'No Scrubs', category: 'retro', origin: 'intl', year: 1999 },
  { id: 'retro-intl-45', artist: 'TLC', title: 'Waterfalls', category: 'retro', origin: 'intl', year: 1994 },
];

// In-memory cache for resolved track audio and metadata
const trackCache = new Map();

/**
 * Verifica che una traccia sia una versione studio originale autentica,
 * escludendo basi musicali, versioni karaoke, cover per pianoforte, remix, live, ecc.
 */
export function isOriginalStudioTrack(item, targetArtist = null) {
  if (!item || !item.trackName) return false;

  const title = (item.trackName || '').toLowerCase();
  const album = (item.collectionName || '').toLowerCase();
  const artist = (item.artistName || '').toLowerCase();
  const fullText = `${title} ${album} ${artist}`;

  // 1. Pattern per escludere basi musicali, karaoke, remix, cover e versioni non-studio
  const bannedPatterns = [
    /\b(instrumental|base musicale|karaoke|backing track|minus one|play along|acapella|a cappella|sing-along|sing along)\b/i,
    /\b(remix|rmx|club mix|extended mix|dub mix|vip mix|mashup|rework|bootleg)\b/i,
    /\b(sped up|speed up|slowed|nightcore|8d audio|lo-fi|lofi|8-bit)\b/i,
    /\b(piano|acoustic|guitar|orchestral|violin|lullaby)\s+(version|cover|tribute)\b/i,
    /\b(tribute to|tribute band|tributo a|homage to|made famous by|originally performed by|in the style of|sound-alike|soundalike)\b/i,
    /(\(|\[)\s*(cover|tribute|homage|karaoke|instrumental|acoustic|piano cover|live)\b/i,
    /-\s*(live|instrumental|karaoke|acoustic|remix|rmx)\b/i,
    /\blive\s+(at|from|in|aid)\b/i,
    /\b(dal vivo|en vivo)\b/i,
    /\bninna nanna\b/i,
    /\b(cover band|cover version)\b/i
  ];

  for (const pattern of bannedPatterns) {
    if (pattern.test(fullText)) {
      return false;
    }
  }

  // 2. Esclusione etichette karaoke e artisti fake
  const fakeArtistIndicators = [
    'karaoke',
    'tribute',
    'orchestra',
    'players',
    'pianist',
    'sound group',
    'hit crew',
    'all stars',
    'cover band',
    'backing business',
    'karaoketop',
    'karaokey',
    'novox',
    'flat keys',
    'gynmusic',
    'ameritz',
    'midifine',
    'sunfly',
    'sing2piano',
    'sing2guitar',
    'instrumental zone',
    'prosound'
  ];
  if (fakeArtistIndicators.some(kw => artist.includes(kw))) {
    return false;
  }

  // 3. Se specificato un target artist, verifica che compaia nell'artista effettivo
  if (targetArtist) {
    const normTarget = targetArtist.toLowerCase().trim();
    if (!artist.includes(normTarget)) {
      return false;
    }
  }

  return true;
}

/**
 * Risolve l'audio preview da iTunes Search API dando priorità alla versione studio originale
 * @param {Object} song - Oggetto canzone dal catalogo o cercato
 * @returns {Promise<Object>} Oggetto arricchito con previewUrl e artworkUrl
 */
export async function resolveSongAudio(song) {
  if (!song) return null;

  // Se la canzone dispone già di anteprima audio e artwork (es. da fetchArtistTopSongs), usala direttamente
  if (song.previewUrl) {
    return song;
  }

  const cacheKey = `${song.artist} - ${song.title}`.toLowerCase();
  if (trackCache.has(cacheKey)) {
    return trackCache.get(cacheKey);
  }

  const query = encodeURIComponent(`${song.artist} ${song.title}`);
  const url = `https://itunes.apple.com/search?term=${query}&entity=song&country=IT&limit=15`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`iTunes API HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data.results && data.results.length > 0) {
      // Cerca il primo risultato autentico senza basi o remix
      let match = data.results.find(r => r.previewUrl && isOriginalStudioTrack(r, song.artist));
      if (!match) {
        match = data.results.find(r => r.previewUrl) || data.results[0];
      }

      const resolved = {
        ...song,
        previewUrl: match.previewUrl,
        artworkUrl: match.artworkUrl100 ? match.artworkUrl100.replace('100x100bb', '600x600bb') : null,
        albumName: match.collectionName || 'Singolo',
        itunesUrl: match.trackViewUrl,
        resolvedArtist: match.artistName,
        resolvedTitle: match.trackName,
        releaseYear: match.releaseDate ? new Date(match.releaseDate).getFullYear() : song.year
      };

      trackCache.set(cacheKey, resolved);
      return resolved;
    }
  } catch (err) {
    console.warn('Errore nel recuperare preview iTunes:', err);
  }

  // Fallback in caso di errore di rete
  return {
    ...song,
    previewUrl: null,
    artworkUrl: null,
    albumName: 'Singolo',
    resolvedArtist: song.artist,
    resolvedTitle: song.title
  };
}

/**
 * Genera deterministiche canzoni giornaliere basate sulla data odierna (YYYY-MM-DD)
 * @param {string} [dateStr] - Data nel formato YYYY-MM-DD
 * @returns {Object} Oggetto canzone selezionata per la giornata
 */
export function getDailySong(dateStr) {
  const targetDate = dateStr || getTodayDateString();
  
  let hash = 0;
  for (let i = 0; i < targetDate.length; i++) {
    const char = targetDate.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  
  const index = Math.abs(hash) % SONG_DATABASE.length;
  const song = SONG_DATABASE[index];
  return {
    ...song,
    dailyNumber: Math.abs(hash % 999) + 1,
    dateString: targetDate
  };
}

/**
 * Seleziona una canzone casuale dal catalogo (per modalità libera) con filtri per categoria e nazionalità
 * @param {string} [category='all'] - ID categoria ('all', 'pop', 'rock', 'hiphop', 'retro')
 * @param {string} [origin='all'] - Filtro nazionalità ('all', 'ita', 'intl')
 * @param {string} [excludeId=null] - ID da escludere per non ripetere subito la stessa
 * @returns {Object} Canzone casuale
 */
const PLAYED_DECK_KEY = 'songless_played_deck';

/**
 * Recupera l'elenco di ID delle canzoni già giocate nella sessione corrente
 */
export function getPlayedDeck() {
  try {
    const raw = sessionStorage.getItem(PLAYED_DECK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Aggiunge una canzone all'elenco delle canzoni giocate
 */
export function markSongAsPlayed(songId) {
  if (!songId) return;
  try {
    const deck = getPlayedDeck();
    if (!deck.includes(songId)) {
      deck.push(songId);
      if (deck.length > 500) deck.shift();
      sessionStorage.setItem(PLAYED_DECK_KEY, JSON.stringify(deck));
    }
  } catch (e) {
    console.warn('Errore salvataggio deck giocato:', e);
  }
}

/**
 * Seleziona una canzone casuale dal catalogo (per modalità libera)
 * Implementa un mazzo a esaurimento (Deck Shuffle): NESSUN DOPPIONE
 * finché tutti i brani della categoria non sono stati giocati!
 * 
 * @param {string} [category='all'] - ID categoria ('all', 'pop', 'rock', 'hiphop', 'retro')
 * @param {string} [origin='all'] - Filtro nazionalità ('all', 'ita', 'intl')
 * @param {string} [excludeId=null] - ID da escludere per non ripetere subito la stessa
 * @returns {Object} Canzone casuale
 */
export function getRandomSong(category = 'all', origin = 'all', excludeId = null) {
  let pool = SONG_DATABASE;

  // Filtro per categoria
  if (category && category !== 'all') {
    pool = pool.filter(s => s.category === category);
  }

  // Filtro per nazionalità (ITA vs Non-ITA)
  if (origin && origin !== 'all') {
    pool = pool.filter(s => s.origin === origin);
  }

  // Se i filtri combinati risultassero troppo restrittivi, ricadi sul catalogo completo
  if (pool.length === 0) {
    pool = SONG_DATABASE;
  }

  const playedDeck = getPlayedDeck();
  
  // Filtra i brani già riprodotti
  let unplayedPool = pool.filter(s => !playedDeck.includes(s.id));

  // Se il mazzo di questa categoria è esaurito (o ne resta 1), rimescola il mazzo
  if (unplayedPool.length <= 1) {
    const poolIds = new Set(pool.map(s => s.id));
    const remainingDeck = playedDeck.filter(id => !poolIds.has(id));
    try {
      sessionStorage.setItem(PLAYED_DECK_KEY, JSON.stringify(remainingDeck));
    } catch {}
    unplayedPool = pool.filter(s => s.id !== excludeId);
    if (unplayedPool.length === 0) unplayedPool = pool;
  }

  // Evita di riproporre la stessa identica canzone consecutivamente
  if (excludeId && unplayedPool.length > 1) {
    unplayedPool = unplayedPool.filter(s => s.id !== excludeId);
  }

  const randomIndex = Math.floor(Math.random() * unplayedPool.length);
  const chosen = unplayedPool[randomIndex];
  markSongAsPlayed(chosen.id);
  return chosen;
}

/**
 * Restituisce la data odierna in formato YYYY-MM-DD nel fuso orario locale
 */
export function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// =========================================================================
// MODALITÀ PER ARTISTA (ARTIST MODE)
// =========================================================================

export const FEATURED_ARTISTS = [
  // Artisti Italiani
  { name: 'Annalisa', id: 422762545, flag: '🇮🇹', genre: 'Pop' },
  { name: 'Marracash', id: 266581121, flag: '🇮🇹', genre: 'Hip-Hop' },
  { name: 'Sfera Ebbasta', id: 881651714, flag: '🇮🇹', genre: 'Trap/Rap' },
  { name: 'Vasco Rossi', id: 14589739, flag: '🇮🇹', genre: 'Rock' },
  { name: '883', id: 15132338, flag: '🇮🇹', genre: 'Pop/Retro' },
  { name: 'Måneskin', id: 1312874741, flag: '🇮🇹', genre: 'Rock' },
  { name: 'Lazza', id: 327850974, flag: '🇮🇹', genre: 'Rap' },
  { name: 'Mahmood', id: 1374872852, flag: '🇮🇹', genre: 'Pop' },
  { name: 'Fabri Fibra', id: 137080341, flag: '🇮🇹', genre: 'Rap' },
  { name: 'Geolier', id: 1414503043, flag: '🇮🇹', genre: 'Rap' },
  { name: 'Ligabue', id: 27419115, flag: '🇮🇹', genre: 'Rock' },
  // Artisti Internazionali
  { name: 'Queen', id: 3296287, flag: '🇬🇧', genre: 'Rock' },
  { name: 'Eminem', id: 111051, flag: '🇺🇸', genre: 'Hip-Hop' },
  { name: 'The Weeknd', id: 479756766, flag: '🇨🇦', genre: 'Pop/R&B' },
  { name: 'Taylor Swift', id: 159260351, flag: '🇺🇸', genre: 'Pop' },
  { name: 'Coldplay', id: 471744, flag: '🇬🇧', genre: 'Pop/Rock' },
  { name: 'Michael Jackson', id: 32940, flag: '🇺🇸', genre: 'Pop/Retro' },
  { name: 'Drake', id: 271256, flag: '🇨🇦', genre: 'Hip-Hop' },
  { name: 'Dua Lipa', id: 1031397873, flag: '🇬🇧', genre: 'Pop' },
  { name: 'Nirvana', id: 112018, flag: '🇺🇸', genre: 'Grunge/Rock' },
  { name: 'AC/DC', id: 5040714, flag: '🇦🇺', genre: 'Hard Rock' },
  { name: 'Billie Eilish', id: 1065981054, flag: '🇺🇸', genre: 'Alt-Pop' }
];

const artistSongsCache = new Map();

/**
 * Recupera le canzoni più famose di un artista da iTunes API
 * Usa prioritariamente l'artistId univoco per garantire zero omonimi.
 * 
 * @param {string} artistName - Nome dell'artista
 * @param {number|string} [artistId=null] - ID iTunes univoco dell'artista
 * @returns {Promise<Array>} Elenco di canzoni con preview audio e artwork
 */
export async function fetchArtistTopSongs(artistName, artistId = null) {
  if (!artistName) return [];

  const key = artistId ? `id_${artistId}` : artistName.trim().toLowerCase();
  if (artistSongsCache.has(key)) {
    return artistSongsCache.get(key);
  }

  // Se disponiamo dell'artistId univoco, usiamo la lookup diretta per azzerare qualsiasi omonimia
  let url;
  if (artistId) {
    url = `https://itunes.apple.com/lookup?id=${artistId}&entity=song&country=IT&limit=150`;
  } else {
    const encoded = encodeURIComponent(artistName.trim());
    url = `https://itunes.apple.com/search?term=${encoded}&entity=song&attribute=artistTerm&country=IT&limit=150`;
  }

  const songs = [];
  const seenTitles = new Set();

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        for (const item of data.results) {
          // Scarta l'oggetto 'artist' restituito da lookup e tieni solo 'track'
          if (item.wrapperType && item.wrapperType !== 'track') continue;
          if (!item.previewUrl || !item.trackName) continue;

          // Se l'artistId è specificato, controlla che appartenga a questo artista
          if (artistId && item.artistId && item.artistId != artistId) {
            if (!item.artistName.toLowerCase().includes(artistName.toLowerCase())) continue;
          }

          // Escludi tassativamente basi, karaoke, remix e tribute cover
          if (!isOriginalStudioTrack(item, artistName)) continue;

          // Normalizza titolo per escludere duplicati ovvi (es. "Live", "Remastered", "Acoustic")
          const cleanTitle = item.trackName
            .replace(/\(.*?\)/g, '')
            .replace(/\[.*?\]/g, '')
            .replace(/- Live.*/i, '')
            .replace(/- Remaster.*/i, '')
            .trim()
            .toLowerCase();

          if (!seenTitles.has(cleanTitle)) {
            seenTitles.add(cleanTitle);

            const artwork = item.artworkUrl100
              ? item.artworkUrl100.replace('100x100bb', '600x600bb')
              : null;

            songs.push({
              id: `artist-${item.trackId}`,
              artist: item.artistName,
              title: item.trackName,
              cleanTitle: item.trackName,
              previewUrl: item.previewUrl,
              artworkUrl: artwork,
              albumName: item.collectionName || 'Singolo',
              releaseYear: item.releaseDate ? new Date(item.releaseDate).getFullYear() : null,
              category: 'artist-mode',
              origin: 'all'
            });
          }
        }
      }
    }
  } catch (err) {
    console.warn(`Errore recupero canzoni per artista ${artistName}:`, err);
  }

  // Se iTunes restituisce poche canzoni, controlla anche se l'artista è nel nostro database locale
  if (songs.length < 3) {
    const norm = artistName.toLowerCase().trim();
    for (const s of SONG_DATABASE) {
      if (s.artist.toLowerCase().includes(norm) || norm.includes(s.artist.toLowerCase())) {
        const cleanTitle = s.title.toLowerCase().trim();
        if (!seenTitles.has(cleanTitle)) {
          seenTitles.add(cleanTitle);
          songs.push({
            id: s.id,
            artist: s.artist,
            title: s.title,
            cleanTitle: s.title,
            previewUrl: s.previewUrl || null,
            artworkUrl: s.artworkUrl || null,
            albumName: s.category || 'Singolo',
            releaseYear: s.year || null,
            category: 'artist-mode',
            origin: 'all'
          });
        }
      }
    }
  }

  artistSongsCache.set(key, songs);
  return songs;
}
