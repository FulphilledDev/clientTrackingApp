const express = require('express')
const router = express.Router()
const { 
    register, 
    login, 
    getUser,
    getContracts,
    createContract } = require('../controllers/userController')

const { protect } = require('../middleware/userMiddleware')

// Home Page
router.post('/', register)
router.post('/', login)

// Dashboard
router.get('/me', protect, getUser)

// Get and Create Contracts
router.route('/dashboard').get(protect, getContracts).post(protect, createContract)

module.exports = router