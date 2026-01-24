const express = require('express');
const router = express.Router();
// This points to your controller logic
const authController = require('../Controllers/authController'); 

// These match the fetch calls in your React Signup/Login components
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;