const express = require('express')
const router = express.Router()
const {
    getContracts,
    getContract,
    createContract,
    updateContractDetails,
    deleteContract
} = require('../controllers/contractController') 
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getContracts).post(protect, createContract)
router.route('/:id').get(protect, getContract).delete(protect, deleteContract).put(protect, updateContractDetails)


module.exports = router