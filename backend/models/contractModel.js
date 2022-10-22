const mongoose = require('mongoose')
const userModel = require('./userModel')

const contractSchema = mongoose.Schema({
    creator: {
        type: String,
        required: true,
        unique: true
    },
    partner: {
        type: String,
        required: true,
        unique: true
    },
    length: {
        type: Number,
        required: true
    },
    startDate: {
        type: Number,
        required: true
    },
    completionDate: {
        type: Number,
        required: true
    },
    paymentInterval: {
        type: Number,
        required: true
    },
    paymentAmount: {
        type: Number,
        required: true
    },
    service: {
        type: String,
        required: true,
        enum: ['Nutrition Coaching', 'Mental Performance Coaching', 'Life Performance Coaching']
    },
    status: {
        pending: {
            type: Boolean,
            required: true,
            default: false
        },
        approved: {
            type: Boolean,
            required: true,
            default: false
        },
        denied: {
            type: Boolean,
            required: true,
            default: false
        }
    }
})

module.exports = mongoose.model('Contract', contractSchema)