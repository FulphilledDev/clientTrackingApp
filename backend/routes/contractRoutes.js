const express = require('express')
const router = express.Router()
const {
    getContracts,
    getContract,
    createContract,
    updateContract,
    deleteContract
} = require('../controllers/contractController') 
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getContracts).post(protect, createContract)
router.route('/:id').get(getContract).delete(protect, deleteContract).put(protect, updateContract)


module.exports = router