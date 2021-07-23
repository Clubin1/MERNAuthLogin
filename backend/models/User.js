const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Credit Calc
function creditScoreCalc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getBank(){
    var myArray = ['Wells Fargo', 'Citigroup', 'Bank of America']; 
    var rand = myArray[(Math.random() * myArray.length) | 0]
    return rand
}

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
    },
    creditScore: {
        type: Number,
        default: creditScoreCalc(300, 800)
    },
    bankAccount: {
        type: String,
        default: getBank()
    }
})

module.exports = User = mongoose.model('users', UserSchema);