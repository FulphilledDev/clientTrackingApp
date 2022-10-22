const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    // For Registration
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
    password: {
        type: String,
        required: [ true, 'Please add a password']
    },
    // For Profile Customization
    phoneNumber: {
        type: String,
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Enter a valid phone number'],
        required: false,
        unique: true
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
    // isAdmin: {
    //     type: Boolean,
    //     default: true
    // },

},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)