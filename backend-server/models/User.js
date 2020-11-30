const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },

    status: {
        type: String,
        default: 'A'
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'role'
    },
})
mongoose.pluralize(null)
module.exports = mongoose.model('user', UserSchema)