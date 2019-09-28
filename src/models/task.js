const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task

// const run = new Task({
//     description: 'Code'
  
// })

// run.save().then(() => {
//     console.log(run)
// }).catch(error => {
//     console.log(error)
// })
