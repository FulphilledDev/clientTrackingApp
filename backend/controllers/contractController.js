const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Contract = require('../models/contractModel')

// @desc    Get User Contracts
// @route   GET /contracts
// @access  Private
const getContracts = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const contracts = await Contract.find({
        user: req.user.id
    }).sort('desc')

    if(!contracts) {
        res.json('No contracts at this time')
    }

    res.status(200).json(contracts)
})

// @desc    Create New Contract
// @route   POST /contracts
// @access  Private
const createContract = asyncHandler(async (req, res) => {
    const { users, contractTerms } = req.body

    if( !users ) {
        res.status(400)
        throw new Error('Please add users')
    }

    if( !contractTerms ) {
        res.status(400)
        throw new Error('Please add contract terms')
    }

    // Get user by using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const contract = await Contract.create({
        user: req.user.id,
        users,
        contractTerms,
        status: 'pending'
    })
    
    res.status(201).json(contract)
})

// @desc    Get User Contract
// @route   GET /contract/:id
// @access  Private
const getContract = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'get one contract' })
})

// @desc    Update Contract
// @route   PUT /contracts/:id
// @access  Private
const updateContract = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'update one Contract' })
})

// @desc    Delete Contracts
// @route   DELETE /contracts/:id
// @access  Private
const deleteContract = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'delete one Contract' })
})

// Additional Routes: 
// --> Approve Contract
// --> Deny Contract


module.exports = {
    getContracts,
    getContract,
    createContract,
    updateContract,
    deleteContract
}