const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

// Rotta per la registrazione
router.post('/register', registerUser);

module.exports = router;
