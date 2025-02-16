const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).send('Utente registrato con successo');
    } catch (error) {
        res.status(400).send('Errore nella registrazione');
    }
};
