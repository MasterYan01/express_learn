const express = require('express')
const app = express()
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')
app.use(homeRouter)
app.use(adminRouter)
app.all('*',(req,res)=>{
    res.send('<h1>404 not found</h1>')
})
app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})