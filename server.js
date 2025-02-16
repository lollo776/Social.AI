const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());

// Connessione al database
mongoose.connect('mongodb://localhost/social-network', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connesso al database'))
    .catch(err => console.error('Errore di connessione:', err));

// Rotte di autenticazione
app.use('/api/auth', authRoutes);

// Avvio del server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
