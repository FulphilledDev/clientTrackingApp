const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

const Admin = require('../models/adminModel')

// @desc    Register a new admin (1 time)
// @route   /admin
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
            email: admin.email
        })
    } else {
        res.status(400)
        throw new error('Invalid user data')
    }
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