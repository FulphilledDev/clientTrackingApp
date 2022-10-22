const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Contract = require('../models/contractModel')

// @desc    Create New Contract
// @route   POST /new-contract
// @access  Private
const createContract = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'createContract' })
})

// @desc    Get User Contracts
// @route   GET /contracts
// @access  Private
const getContracts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'getContracts' })
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