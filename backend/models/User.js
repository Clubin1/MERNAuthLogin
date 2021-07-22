const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    studentAcc: {
        type: Boolean,
        required: false,
        default: false
    },
    personalAcc: {
        type: Boolean,
        required: false,
        default: false
    },
    homeAcc: {
        type: Boolean,
        required: false,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema);