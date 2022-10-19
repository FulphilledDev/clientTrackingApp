const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
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
        required: [ true, 'Please add a number in inches for height']
    },
    weight: {
        type: Number,
        required: [ true, 'Please add a number in pounds for weight']
    },
    bmr: {
        type: Number,
        required: [ true, 'Please add a number of calories burned for BMR ']
    },
    // photo: {
    //     type: Image,
    //     required: [ true, 'Please add an Image. We would love to see your beautiful smile']
    // }
    },
{
    timestamps: true
})

module.exports = mongoose.model('Client', clientSchema)