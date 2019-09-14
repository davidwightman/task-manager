// // crud
// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) =>{
//     if (error) {
//         return console.log('unable to connect to database')
//     }
    
//     const db = client.db(databaseName)

//     db.collection('tasks').deleteOne({
//         description: 'Run'
//     }).then((result) => {
// console.log(result)
//     }).catch((err) => {
//         console.log(err)
//     })

// //     db.collection('users').deleteMany({
// //         age: 26
// //     }).then((result) => {
// // console.log(result)
// //     }).catch((err) => {
// //         console.log(err)
// //     })

//     // db.collection('tasks').updateMany({
//     //     completed: false},
//     //        { $set: {
//     //     completed: true
//     //     }

//     // }).then((result)=>{
//     //     console.log('success', result)
//     // }).catch(err => {
//     //     console.log(err)
//     // })

//     // db.collection('users').updateOne({
//     //     _id: new ObjectID("5d7522c7bdc205c4042cf2e8")
//     // }, {
//     //     $inc: {
//     //     age: 1
//     //     }
//     // }).then((result)=>{
//     //     console.log('success', result)
//     // }).catch(err => {
//     //     console.log(err)
//     // })

//     // db.collection('tasks').findOne({ _id: new ObjectID('5d7535e2c779dfc42a7cb125')}, (error, task) => {
//     //             if (error) {
//     //                 return console.log('unable to find user or users')
//     //             }
        
//     //             console.log(task)
//     //         })


//     //         db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
//     //             if (error) {
//     //                 return console.log('unable to find tasks')
//     //             }
        
//     //             console.log(tasks)
//     //         })

// //     db.collection('users').findOne({ _id: new ObjectID('5d753ae5264369c4355ea025')}, 
// //     (error, user) => {
// //             if (error) {
// //                 return console.log('unable to find user')
// //             }
    
// //             console.log(user)
// //         }
// // )

// // db.collection('users').find({ name: 'Andrew'}).toArray((error, user) => {
// //                 if (error) {
// //                     return console.log('unable to find user or users')
// //                 }
        
// //                 console.log(user)
// //             })



//     // db.collection('users').insertOne({
//     //     name: 'Vick',
//     //     age: 26
//     // }, (error, result) => {
//     //     if (error) {
//     //         return console.log('unable to insert user')
//     //     }

//     //     console.log(result.ops)
//     // })


// //     db.collection('users').insertMany([{name: 'Jen', age: 26}, {name: 'Gunther', age: 46}], (error, result) => {
// //             if (error) {
// //                 return console.log('unable to insert documents')
// //             }
// //             console.log(result.ops)
// //         }
// // )

//     // db.collection('tasks').insertMany([
//     //     {description: 'Run', completed: false},
//     //     {description: 'Code', completed: true}
//     // ], (error, result) => {
//     //         if (error) {
//     //             return console.log('unable to insert documents')
//     //         }
//     //         console.log(result.ops)
//     //     })
// })