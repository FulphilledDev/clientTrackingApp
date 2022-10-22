const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Entry = require('../models/entryModel')

// @desc    Create New Entry
// @route   POST /new-entry
// @access  Private
const createEntry = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'createEntry' })
})

// @desc    Get User Entries
// @route   GET /entries
// @access  Private
const getEntries = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'getEntries' })
})

// @desc    Get User Entry
// @route   GET /entry/:id
// @access  Private
const getEntry = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'get one entry' })
})

// @desc    Update Entry
// @route   PUT /entries/:id
// @access  Private
const updateEntry = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'update one Entry' })
})

// @desc    Delete Contracts
// @route   DELETE /entries/:id
// @access  Private
const deleteEntry = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'delete one Entry' })
})

// Additional Routes: 
// --> Approve Entry
// --> Deny Entry


module.exports = {
    getEntries,
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry
}