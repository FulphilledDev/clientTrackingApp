const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Contract = require('../models/contractModel')

// @desc    Get User Contracts
// @route   GET /api/contracts
// @access  Private
const getContracts = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Found all contracts for current user
    const contracts = await Contract.find({
        $or: [
            {"users.sender.email": req.user.email},
            {"users.receiver.email": req.user.email}
        ]
    }).sort({'updatedAt': -1})

    if(!contracts) {
        res.json('No contracts at this time')
    }

    res.status(200).json(contracts)
})

// @desc    Create New Contract
// @route   POST /api/contracts
// @access  Private
const createContract = asyncHandler(async (req, res) => {
    // Get user to verify logged in
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }


    const { receiver, completionDate, startDate, paymentInterval, paymentAmount, service } = req.body

    if( !receiver ) {
        res.status(400)
        throw new Error('Please add users')
    }

    if( !completionDate || !startDate ) {
        res.status(400)
        throw new Error('Please verify a start and completion date')
    }

    if ( !paymentInterval || !paymentAmount ) {
        res.status(400)
        throw new Error('Please add payment details')
    }

    if ( !service ) {
        res.status(400)
        throw new Error('Please select a service')
    }

    if( req.user.email === receiver ) {
        res.status(400)
        throw new Error('Invalid recipient email')
    }

    // Checking that receiver email exists
    const recipient = await User.findOne({ email: receiver })

    if (!recipient) {
        res.status(404)
        throw new Error('Email not found')
    }

    const contract = await Contract.create({
        users: {
            sender: {
                email: req.user.email,
                profileImage: req.user.profileImage
            },
            receiver: {
                email: receiver,
                profileImage: recipient.profileImage
            }
        },
        details: { 
            startDate: startDate, 
            completionDate: completionDate, 
            paymentInterval: paymentInterval, 
            paymentAmount: paymentAmount, 
            service: service
        },
        status: 'pending'
    })
    
    res.status(201).json(contract)
})

// @desc    Get User Contract
// @route   GET /api/contracts/:id
// @access  Private
const getContract = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const contract = await Contract.findById(req.params.id)

    if(!contract) {
        res.status(404)
        throw new Error('Contract not found')
    }

    if (contract.users.sender.email !== req.user.email || contract.users.receiver.email !== req.user.email) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    res.status(200).json(contract)
})

// @desc    Modify Contract
// @route   PUT /api/contracts/:id
// @access  Private
const modifyContract = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const { receiver, completionDate, startDate, paymentInterval, paymentAmount, service } = req.body

    const contract = await Contract.findById(req.params.id)

    if(!contract) {
        res.status(404)
        throw new Error('Contract not found')
    }

    const authArray = [contract.users.receiver.email, contract.users.sender.email]

    // Verifying authorization by email or user
    if (!authArray.includes(req.user.email)) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    // Checking who the receiver is in order to get ALL of their information
    // We are currently allowing 2 subsequent requests in a row, which makes us the receiver
    // Process: on creation we are sender, on edit we are sender, then on second edit, BEFORE other user edits, we become receiver
    const recipient = await User.findOne({ email: receiver })

    const updatedContract = await Contract.findByIdAndUpdate(req.params.id, 
        {"users" : {
            sender : {
                email: req.user.email,
                profileImage: req.user.profileImage
            },
            receiver : {
                email: receiver,
                profileImage: recipient.profileImage
            }
        },
        "details": {
            startDate: startDate, 
            completionDate: completionDate, 
            paymentInterval: paymentInterval, 
            paymentAmount: paymentAmount, 
            service: service
        },
        "status": 'pending'
    },{ new: true })

    const contracts = await Contract.find({
        $or: [
            {"users.sender.email": req.user.email},
            {"users.receiver.email": req.user.email}
        ]
    }).sort({'updatedAt': -1})


    res.status(200).json(contracts)
})

// @desc    Approve Contract
// @route   PUT /api/contracts/:id/approve
// @access  Private
const approveContract = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const { status } = req.body

    // Check if contract already exists
    const contract = await Contract.findById(req.params.id)

    if(contract.status === 'approve') {
        res.status(404)
        throw new Error('Contract has already been approved')
    }

    // Verifying authorization by email or user
    // Whoever received this contract === users.sender : 'Not Authorized to approve'
    const authArray = [contract.users.receiver.email, contract.users.sender.email]

    // Verifying authorization by email or user
    if (!authArray.includes(req.user.email)) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    const approvedContract = await Contract.findByIdAndUpdate(req.params.id, 
        {
            status: status
        },
    // This shows changes made IMMEDIATELY
    { new: true })

    const contracts = await Contract.find({
        $or: [
            {"users.sender.email": req.user.email},
            {"users.receiver.email": req.user.email}
        ]
    }).sort({'updatedAt': -1})


    res.status(200).json(contracts)
})

// @desc    Deny Contract
// @route   PUT /api/contracts/:id/deny
// @access  Private
const denyContract = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const { status } = req.body

    // Check if contract and is denied
    const contract = await Contract.findById(req.params.id)

    if(contract && contract.status === 'deny') {
        res.status(404)
        throw new Error('Contract has already been denied')
    }

    // Verifying authorization by email or user
    // Whoever received this contract === user.receiver : 'Not Authorized to deny'
    const authArray = [contract.users.receiver.email, contract.users.sender.email]

    // Verifying authorization by email or user
    if (!authArray.includes(req.user.email)) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    const deniedContract = await Contract.findByIdAndUpdate(req.params.id, 
        { 
            status: status
        },
        { new: true })

    const contracts = await Contract.find({
        $or: [
            {"users.sender.email": req.user.email},
            {"users.receiver.email": req.user.email}
        ]
    }).sort({'updatedAt': -1})


    res.status(200).json(contracts)
})

// @desc    Delete Contracts
// @route   DELETE /api/contracts/:id
// @access  Private
const deleteContract = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const contract = await Contract.findById(req.params.id)

    if(!contract) {
        res.status(404)
        throw new Error('Contract not found')
    }

    if (contract.users[0].toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    await contract.remove()

    res.status(200).json({deleted: true})
})


module.exports = {
    getContracts,
    getContract,
    createContract,
    modifyContract,
    approveContract,
    denyContract,
    deleteContract,
}