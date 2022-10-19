const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Client = require('../models/clientModel')

// @desc    Register a new client
// @route   /client
// @access  Public
const registerClient = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, occupation, height, weight, bmr } = (req.body)

    // Validation
    if (!firstName || !lastName || !email || !password || !occupation || !height || !weight || !bmr ) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    // Find if user already exists
    const clientExists = await (Client.findOne({email}))

    if (clientExists) {
        res.status(400)
        throw new Error('Client already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create Client
    const client = await Client.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        occupation,
        height,
        weight,
        bmr
    })

    if(client) {
        res.status(201).json({
            _id: client._id,
            firstName: client.firstName,
            lastName: client.lastName,
            email: client.email,
            occupation: client.occupation,
            height: client.height,
            weight: client.weight,
            bmr: client.bmr,
            token: generateToken(client._id)
        })
    } else {
        res.status(400)
        throw new error('Invalid user data')
    }
})

// @desc    Login client
// @route   /client/login
// @access  Public
const loginClient = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const client = await Client.findOne({email})

    // Check client and passwords match
    if(client && (await bcrypt.compare(password, client.password))) {
        res.status(200).json({
            _id: client._id,
            firstName: client.firstName,
            lastName: client.lastName,
            email: client.email,
            token: generateToken(client._id)
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

module.exports = {
    registerClient,
    loginClient
}