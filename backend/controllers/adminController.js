const asyncHandler = require('express-async-handler')

// @desc    Register a new admin (1 time)
// @route   /admin
// @access  Public
const registerAdmin = asyncHandler(async (req, res) => {
    const { name, email, password } = (req.body)

    // Validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    res.send('Register Admin Route')
})

// @desc    Login admin
// @route   /admin/login
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
    res.send('Login Admin Route')
})

module.exports = {
    registerAdmin,
    loginAdmin
}