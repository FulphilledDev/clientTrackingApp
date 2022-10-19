const express = require('express')
const router = express.Router()
const { 
    registerClient, 
    loginClient, 
    getClient } = require('../controllers/clientController')

const { protect } = require('../middleware/clientMiddleware')

router.post('/register', registerClient)

router.post('/login', loginClient)
router.get('/me', protect, getClient)

module.exports = router