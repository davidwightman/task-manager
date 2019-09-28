const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) =>{
//         res.status(503).send('error: site under work')
// })

// auto parse incoming json to object and acces in req handlers
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const main = async () => {
//     // const task = await Task.findById("5d8f8e608dec92f48fe02239")
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById("5d8f8d5dca9835f437189821")
//     // await user.populate('owner').execPopulate()
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()
