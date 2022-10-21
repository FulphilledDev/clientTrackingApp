const express = require('express')
const router = express.Router()
const { 
    registerAdmin, 
    loginAdmin, 
    getAdmin,
    getAdminClients,
    createAdminClient } = require('../controllers/adminController')

const { protect } = require('../middleware/adminMiddleware')

router.post('/register', registerAdmin)

router.post('/login', loginAdmin)
router.get('/me', protect, getAdmin)

// Get and Create Client
router.route('/').get(protect, getClients).post(protect, createClient)

module.exports = router