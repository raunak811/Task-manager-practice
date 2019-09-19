const express = require('express')
const Task = require('../models/task')
const router = new express.Router()


router.get('/tasks', async (req,res)=>{

    try{
        const data = await Task.find({})
        res.send(data)
    }catch(e){
        res.status(500).send()
    }

    // Task.find({}).then(task=>{
    //     res.send(task);
    // }).catch(e=>{
    //     res.status(500).send()
    // })
})

router.get('/tasks/:id', async (req,res)=>{
    const _id = req.params.id

        try{
            const data = await Task.findById(_id)
            if(!data){
                return res.status(404).send()
            }
            res.send(data)

        } catch(e) {
            res.status(500).send()
        }
    
    // Task.findById(_id).then(task=>{
    //     if(!task){
    //         return res.status(404).send()
    //     }

    //     res.send(task)
    // }).catch(e=>{
    //     res.status(500).send()
    // })
})



router.patch('/tasks/:id', async (req,res)=>{
    
    console.log(isvalid)
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})




router.delete('/tasks/:id', async (req,res)=>{
    console.log(req.params.id)
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch(e) {
        res.status(500).send()
    }
    
})

module.exports = router