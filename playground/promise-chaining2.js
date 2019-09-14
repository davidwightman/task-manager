require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5d75a4cf3d79e7c56944b6f2
// ObjectId("5d7d12bec3eec5d49d702244")

// ObjectId("5d759f5e4082a3c55f318ec2")

// ObjectId("5d7d1678651df0d4d0e60cdc")


// Task.findByIdAndDelete("5d759f5e4082a3c55f318ec2").then((tasks) => {
//     console.log(tasks)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch(e => { console.log(e)})

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("5d7d1678651df0d4d0e60cdc").then(tasks => console.log(tasks)).catch(e => console.log(e))