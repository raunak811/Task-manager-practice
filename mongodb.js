const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) =>{
    if(error) {
       return console.log('unable to connect to database')
    }

    console.log('connected corrrectly')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Raunak',
    //     age : 24
    // }, (error, result) =>{
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'JEN',
    //         age: 29
    //     },
    //     {
    //         name: 'Hari',
    //         age: 45
    //     }
    // ], (error, result)=>{
    //     if(error) {
    //         return console.log('unable to insert')
    //     }
    //     console.log(result.ops)
    // })

    //  db.collection('users').updateOne(
    //     {
    //     _id: new mongodb.ObjectID("5d5009dd2472983f24a6702c")
    //     },
    //     {
    //         $set:{
    //             name:'Mike'
    //         }
    //     }

    // ).then((res)=>{
    //     console.log(res)

    // }).catch((error)=>{
    //     console.log(error)
    // })

    

    db.collection('users').deleteOne(
        {
            age:25
        }
    ).then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
    })
})