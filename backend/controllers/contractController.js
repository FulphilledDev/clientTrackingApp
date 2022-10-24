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

    const { users, details } = req.body

    if( !users ) {
        res.status(400)
        throw new Error('Please add users')
    }

    if( !details ) {
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
        users,
        details,
        status: 'Pending'
    })
    
    res.status(201).json(contract)
})

// @desc    Get User Contract
// @route   GET /contracts/:id
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

    if (contract.users[0].toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authrized')
    }

    res.status(200).json(contract)
})

// @desc    Update Contract
// @route   PUT /contracts/:id
// @access  Private
const updateContract = asyncHandler(async (req, res) => {
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
        throw new Error('Not Authrized')
    }

    const updatedContract = await Contract.findByIdAndUpdate(req.params.id, req.body, {
        status: 'Pending'
    })

    res.status(200).json(updatedContract)
})

// @desc    Delete Contracts
// @route   DELETE /contracts/:id
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
        throw new Error('Not Authrized')
    }

    await contract.remove()

    res.status(200).json({deleted: true})
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