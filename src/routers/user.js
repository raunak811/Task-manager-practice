const express = require('express')
const User = require('../models/user')
const router = new express.Router()


router.post('/users',  async (req,res) =>{
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(500).send(e)
    }
    

    // user.save().then(()=>{
    //     res.send(user)
    // }).catch(error=>{
    //     res.status(400).send(error)
    // })
})

router.get('/users', async (req,res)=>{

    try{
        const users = await  User.find({});
        res.send(users)
    } catch (e){
        res.status(500).send()
    }

    // User.find({}).then(users=>{
    //     res.send(users)
    // }).catch(error=>{
    //     res.status(500).send()
    // })
})

router.get('/users/:id', async (req,res)=>{
    const _id =  req.params.id
    console.log('iii',_id)
    try{
        const data = await User.findById(_id)
        //console.log(data)
        if(!data){
            return res.status(404).send()
        }
        res.send(data)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/users/:id', async (req,res)=>{
    const updates = Object.keys(req.body)
    console.log(updates)
    const allowedUpdates = ['name','email','password','age']
    const isvalid = updates.every(update=>{
        //console.log(update)
       return  allowedUpdates.includes(update)
    })
    console.log('final', isvalid)
    if(!isvalid){
        return res.status(400).send("error:invalid updates")
    }
    console.log(isvalid)
    try{

        //findByIdAndUpdate bypass middleware before save

        const user = await User.findById(req.params.id)
        updates.forEach(update=>{
            user[update] = req.body[update]
        })

        await user.save()

        //const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req,res)=>{
    console.log(req.params.id)
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        console.log(e)
        res.status(500).send()
    }
    
})

module.exports = router