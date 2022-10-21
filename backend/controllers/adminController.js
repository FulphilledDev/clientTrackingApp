const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Admin = require('../models/adminModel')
const Client = require('../models/clientModel')

// @desc    Register a new admin (1 time)
// @route   '/' (Home Page)
// @access  Public
const registerAdmin = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = (req.body)

    // Validation
    if (!firstName || !lastName || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    // Find if user already exists
    const adminExists = await (Admin.findOne({email}))

    if (adminExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create Admin
    const admin = await Admin.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    })

    if(admin) {
        res.status(201).json({
            _id: admin._id,
            firstName: admin.firstName,
            lastName: admin.lastName,
            email: admin.email,
            token: generateToken(admin._id)
        })
    } else {
        res.status(400)
        throw new error('Invalid user data')
    }
})

// @desc    Login admin
// @route   '/' (Home Page)
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const admin = await Admin.findOne({email})

    // Check admin and passwords match
    if(admin && (await bcrypt.compare(password, admin.password))) {
        res.status(200).json({
            _id: admin._id,
            firstName: admin.firstName,
            lastName: admin.lastName,
            email: admin.email,
            token: generateToken(admin._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

// @desc    Get current admin
// @route   /admin/me
// @access  Private
const getAdmin = asyncHandler(async (req, res) => {
    const admin = {
        id: req.admin._id,
        email: req.admin.email,
        firstName: req.admin.firstName,
        lastName: req.admin.lastName
    }
    res.status(200).json(admin)
})

// Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

// @desc    Get Admin Clients
// @route   GET /admin/clients
// @access  Private
const getAdminClients = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'getClients' })
})

// @desc    Create Admin Clients
// @route   POST /admin/clients
// @access  Private
const createAdminClient = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'createTicket' })
})

module.exports = {
    registerAdmin,
    loginAdmin,
    getAdmin,
    getAdminClients,
    createAdminClient,
}