const express = require('express')
const router = express.Router()
const {
    register,
    login,
    getMe
} = require('../controllers/userController') 
const { protect } = require('../middleware/authMiddleware')


router.post('/', register)
router.post('/login', login)
router.get('/me', protect, getMe)

router.post('/dashboard', (req, res)=> {
    res.send('Dashboard Route')
})

module.exports = router