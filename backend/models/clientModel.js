const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client'
    },
    firstName: {
        type: String,
        required: [ true, 'Please add a first name']
    },
    lastName: {
        type: String,
        required: [ true, 'Please add a last name']
    },
    email: {
        type: String,
        required: [ true, 'Please add an email'],
        unique: true
    },
    // phoneNumber: {
    //     type: Number(String),
    //     match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Enter a valid phone number'],
    //     required: false,
    //     unique: true
    // },
    password: {
        type: String,
        required: [ true, 'Please add a password']
    },
    occupation: {
        type: String,
        required: [ true, 'Please add an occupation']
    },
    height: {
        type: Number,
        required: [ true, 'Please add your height (inches)']
    },
    weight: {
        type: Number,
        required: [ true, 'Please add your current weight (pounds)']
    },
    goal: {
        type: String,
        required: [ true, 'Please select a goal'],
        enum: ['Lose Weight/Fat', 'Gain Weight/Muscle', 'Maintain Weight', 'Increase Overall Energy', 'Regulate Hormones', 'General Nutrition Knowledge', 'Longevity'],
        default: 'General Nutrition Knowledge'
    },
    bmr: {
        type: Number,
        required: [ true, 'Please add a number of calories burned for BMR ']
    },
    // photo: {
    //     type: Image,
    //     required: [ true, 'Please add an Image. We would love to see your beautiful smile']
    // }
    status: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive', 'Terminated'],
        default: 'Active'
    }
    },
{
    timestamps: true
})

module.exports = mongoose.model('Client', clientSchema)