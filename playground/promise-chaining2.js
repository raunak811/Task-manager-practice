require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d7623a01ee7fc0f3cd493f7').then(res=>{
//     console.log(res)
//     return Task.countDocuments({completed:false})
// }).then(count=>{
//     console.log(count)
// }).catch(e=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id,completed) =>{
    const deleted = await Task.findByIdAndDelete(id)
    console.log(deleted)
    const count = await Task.countDocuments({completed})

    return count;
}

deleteTaskAndCount('5d7623a01ee7fc0f3cd493f7', false).then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e)
})