const mongoose = require('mongoose')

const entrySchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{
        timestamps: true
    })

module.exports = mongoose.model('Entry', entrySchema)