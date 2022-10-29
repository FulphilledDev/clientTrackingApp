const mongoose = require('mongoose')
const userSchema = require('./userModel')
const date = require('date-and-time')
const now = new Date()
const value = date.format(now,'MM/DD/YYYY')

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
    details: {
        sentAt: {
            type: Date
        },
        service: {
            type: String,
            required: [true, 'Please select a service'],
            enum: ['Nutrition Coaching', 'Mental Performance Coaching', 'Life Performance Coaching']
        },
        startDate: {
            type: Date,
            required: true,
        },
        completionDate: {
            type: Date,
            required: true,
        },
        length: {
            type: Number,
        },
        paymentInterval: {
            type: String,
            required: true,
            enum: ['Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly', 'Bi-Yearly','Yearly']
        },
        paymentAmount: {
            type: Number,
            required: true
        }
    },
    status: {
            type: String,
            enum: ['pending', 'approve', 'deny', 'terminate']
    },
},{
    timestamps: true,
})

module.exports = mongoose.model('Contract', contractSchema)