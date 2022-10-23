const mongoose = require('mongoose')
const userModel = require('./userModel')

const contractSchema = mongoose.Schema({
    users: {
        type: Array,
        required: true,
    },
    contractTerms: {
        type: Array,
        required: true,
    }
    // users: [{
    //     sender: {
    //         type: String,
    //         required: true,
    //         // type: mongoose.Schema.Types.ObjectId,
    //         // required: true,
    //         // ref: 'User'
    //     },
    //     receiver: {
    //         type: String,
    //         required: true,
    //     }
    // }],
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