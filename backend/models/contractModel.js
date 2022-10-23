const mongoose = require('mongoose')
const userModel = require('./userModel')

const contractSchema = mongoose.Schema({
    users: [{
        type: String,
        required: true
    }],
    contract: [{
        sender: {
            type: String,
            required: true,
            unique: true
        },
        recipient: {
            type: String,
            required: true,
            unique: true
        },
        sentAt: {
            type: Date
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
        },
        service: {
            type: String,
            required: true,
            enum: ['Nutrition Coaching', 'Mental Performance Coaching', 'Life Performance Coaching']
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
        }
    }]
},{
    timestamps: true,
})

module.exports = mongoose.model('Contract', contractSchema)