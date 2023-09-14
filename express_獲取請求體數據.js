const express = require('express')
const bodyParser = require('body-parser')
const app = express()


// create application/json parser
//解析json
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
//解析urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/login.html")
})
app.post('/login', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send('獲取用戶數據')
})

app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})