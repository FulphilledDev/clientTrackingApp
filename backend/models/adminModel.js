const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
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
    phoneNumber: {
        type: Number(String),
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Enter a valid phone number'],
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: [ true, 'Please add a password']
    },
    socialMediaLinks: {
        instagram: {
            type: String,
            required: false
        },
        facebook: {
            type: String,
            required: false
        },
        tiktok: {
            type: String,
            required: false
        },
        twitter: {
            type: String,
            required: false
        },
        youtube: {
            type: String,
            required: false
        }
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }

},
{
    timestamps: true
})

module.exports = mongoose.model('Admin', adminSchema)