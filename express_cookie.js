const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
//新增cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('name','ming',{maxAge:30*1000})
    res.cookie('theme','blue')
    res.send('home')
})
//刪除cookie
app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name')
    res.send('刪除成功')
})
app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    res.send(`我拿到了${req.cookies.theme}`)
})
app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})