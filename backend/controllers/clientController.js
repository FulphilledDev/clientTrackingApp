const asyncHandler = require('express-async-handler')

// @desc    Register a new client
// @route   /client
// @access  Public
const registerClient = asyncHandler(async (req, res) => {
    res.send('Register Client Route')
})

// @desc    Login client
// @route   /client/login
// @access  Public
const loginClient = asyncHandler(async (req, res) => {
    res.send('Login Client Route')
})

module.exports = {
    registerClient,
    loginClient
}