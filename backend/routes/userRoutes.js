const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')

// Register new Users 
router.post('/register', registerUser)

// Login in users
router.post('/login', loginUser)

module.exports = router