require('../src/db/mongoose')
const User = require('../src/models/user')

//5d71561114a66707a0fa76a3

// User.findByIdAndUpdate('5d75406b4da01b2bd826af45', {age: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then(res=>{
//     console.log(res)
// }).catch(e=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age:age})
    const count = await User.countDocuments({age:1})
    return count
}
updateAgeAndCount('5d75406b4da01b2bd826af45',1).then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e)
})


updateAgeAndCount()