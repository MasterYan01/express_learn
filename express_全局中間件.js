const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
function recordMiddleware(req,res,next){
    let { url, ip } = req
    //console.log(url, ip);
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}${ip}\r\n`)
    //調用next才能繼續執行
    next()
}
//使用中間件函數
app.use(recordMiddleware)
app.get('/home', (req, res) => {
    
    res.send('前台首頁')
})
app.get('/back', (req, res) => {
    
    res.send('這是後台')
})
app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})