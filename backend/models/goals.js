const mongoose = require('mongoose')

const goalScema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    completed: {
        type: Boolean,
        default: false,
        required: [true, 'Please add a completed']
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please add an owner']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('Goal', goalScema)