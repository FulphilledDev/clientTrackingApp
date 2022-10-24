const mongoose = require('mongoose')
const userSchema = require('./userModel')

const contractSchema = mongoose.Schema({
    // First way to set an array of objects to identify
    // users: [{
    //     type: String,
    //     required: true,
    //     enum: ['Sender', 'Receiver']
    // }],
    // Second way to set an array of objects to identify
    users: {
        type: Array,
        required: true,
    },
    // Third way to set an array of objects to identify
    // users: [
    //     {sender: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         required: true,
    //         ref: 'User',
    //     }},
    //     {receiver: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         required: true,
    //         ref: 'User',
    //     }}
    // ],
    
    details: {
        type: Array,
        required: true,
    },
    status: {
            type: String,
            required: true,
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
    
    
   
    // contractTerms: [{
        // sentAt: {
        //     type: Date
        // },
        // status: {
        //     type: String,
        //     required: true,
        //     enum: ['Pending', 'Active', 'Denied', 'Terminated'],
        //     default: 'Pending',
            // pending: {
            //     type: Boolean,
            //     required: true,
            //     default: false
            // },
            // approved: {
            //     type: Boolean,
            //     required: true,
            //     default: false
            // },
            // denied: {
            //     type: Boolean,
            //     required: true,
            //     default: false
            // }
        // },
        // service: {
        //     type: String,
        //     required: [true, 'Please select a service'],
        //     enum: ['Nutrition Coaching', 'Mental Performance Coaching', 'Life Performance Coaching']
        // },
        // length: {
        //     type: Number,
        //     required: true
        // },
        // startDate: {
        //     type: Number,
        //     required: true
        // },
        // completionDate: {
        //     type: Number,
        //     required: true
        // },
        // paymentInterval: {
        //     type: Number,
        //     required: true
        // },
        // paymentAmount: {
        //     type: Number,
        //     required: true
        // }
    // }]
},{
    timestamps: true,
})

module.exports = mongoose.model('Contract', contractSchema)