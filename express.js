const express = require('express')
const app = express()
app.get('/home', (req, res) => {
    res.end('hello express')
})
app.post('/login', (req, res) => {
    res.end('im login')
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