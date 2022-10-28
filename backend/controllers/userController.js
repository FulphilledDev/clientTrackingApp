const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

// @desc    Register a New User
// @route   '/api'
// @access  Public
const register = asyncHandler( async (req, res) => {
    const { firstName, lastName, email, password } = (req.body)

    // const lowerCaseEmail = email.toLowerCase()
    // Validation
    if (!firstName || !lastName || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    // Find if user already exists
    const userExists = await (User.findOne({email}))

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create Admin
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new error('Invalid user data')
    }
})

// @desc    Login User
// @route   'api/users/login'
// @access  Public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    const user = await User.findOne({email})

    // Check user and passwords match
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

// Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


// @desc    Get current User
// @route   'api/users/me'
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    const user = {
        id: req.user._id,
        firstName: req.user.firstName,
        email: req.user.email
    }
    res.status(200).json(user)
})


module.exports = {
    register,
    login,
    getMe
}