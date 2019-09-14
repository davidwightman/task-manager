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
