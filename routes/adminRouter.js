const express = require('express')
const router = express.Router()
router.get('/admin',(req,res)=>{
    res.send('我是後台admin')
})
router.get('/setting',(req,res)=>{
    res.send('我是後台setting')
})
module.exports=router