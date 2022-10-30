const express = require('express')
const router = express.Router()
const {
    getContracts,
    getContract,
    createContract,
    modifyContract,
    deleteContract,
    approveContract,
    denyContract
} = require('../controllers/contractController') 
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .get(protect, getContracts)
    .post(protect, createContract)
router.route('/:id')
    .get(protect, getContract)
    .delete(protect, deleteContract)
    .put(protect, modifyContract)
router.route('/:id/approve')
    .put(protect, approveContract)
router.route('/:id/deny')
    .put(protect, denyContract)    


module.exports = router