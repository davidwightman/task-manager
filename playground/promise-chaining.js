require('../src/db/mongoose')
const User = require('../src/models/user')

// 5d75a4cf3d79e7c56944b6f2
// ObjectId("5d7d12bec3eec5d49d702244")

// User.findByIdAndUpdate("5d7d12bec3eec5d49d702244", {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch(e => { console.log(e)})

const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('5d7d12bec3eec5d49d702244', 2).then(count => {
    console.log(count)
}).catch(e => console.log(e))