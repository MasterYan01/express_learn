const express = require('express')
const app = express()
app.get('/home', (req, res) => {
    res.end('hello express')
})
let checkCodeMiddleWare = (req, res, next) => {
    //判斷 判斷 url 中是否 code 參數等於 521
    if (req.query.code === "521") {
        next()
    } else {
        res.send("暗號錯誤@.@")
    }
}
app.get('/admin', checkCodeMiddleWare, (req, res) => {
    res.send('後台首頁^.^')
})
app.all('/text', (req, res) => {
    res.end('text')
})
//404
// app.all('*', (req, res) => {
//     res.end('404 not found')
// })
app.get('/request', (req, res) => {
    //原生操作
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);
    //express操作
    console.log(req.path);
    console.log(req.query);
    //獲取ip
    console.log(req.ip);
    console.log(req.get('host'));
    res.end('hello express')
})
app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})