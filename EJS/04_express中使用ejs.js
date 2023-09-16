//const ejs = require('ejs')
const path = require('path')
const express = require('express')
const app = express()
//設置模板引擎
app.set('view engine' , 'ejs')//pug twing
//設置模板引擎存放位置 ,模板文件:具有模板語法內容的文件
app.set('views' , path.resolve(__dirname,'./view'))
app.get('/home',(req,res)=>{
    let title = '謝謝你尚硅谷的老師們'
    res.render('home',{title})
})
app.listen(3002,()=>{
    console.log('已開啟3002端口號~鴻海300');
})