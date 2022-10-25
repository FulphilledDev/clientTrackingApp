const express = require('express')
const router = express.Router()
const {
    getEntries,
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/entryController') 
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .get(getEntries)
    .post(protect, createEntry)
router.route('/:id')
    .get(getEntry)
    .delete(protect, deleteEntry)
    .put(protect, updateEntry)


module.exports = router