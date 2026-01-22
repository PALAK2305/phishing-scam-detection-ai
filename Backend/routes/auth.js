const express = require('express');
const router = express.Router(); // 1. Define the router first
const authController = require('../Controllers/authController'); 

// 2. Set up the routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// 3. Export at the VERY BOTTOM
module.exports = router;