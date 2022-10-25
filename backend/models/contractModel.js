const mongoose = require('mongoose')
const userSchema = require('./userModel')

const contractSchema = mongoose.Schema({
    users: {
        sender: {
            type: String,
            required: true,
        },
        receiver: {
            type: String,
            required: true,
    }},
    status: {
            type: String,
            enum: ['pending', 'approved', 'denied']
    },
    details: {
        sentAt: {
            type: Date
        },
        service: {
            type: String,
            required: [true, 'Please select a service'],
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
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('Contract', contractSchema)