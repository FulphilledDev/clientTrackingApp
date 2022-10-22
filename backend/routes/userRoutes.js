const express = require('express')
const router = express.Router()
const {
    register,
    login
} = require('../controllers/userController') 


router.post('/', register)
router.post('/', login)



router.post('/dashboard', (req, res)=> {
    res.send('Dashboard Route')
})

module.exports = router