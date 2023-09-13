const express = require('express')
const app = express()

app.get('/other', (req, res) => {
    //res.redirect('http://www.google.com.tw')
    //json響應
    // res.json({
    //     "name":"盧彥銘",
    //     "slogon":"信耶穌得永生"
    // })
    //響應文件內容
    res.sendFile(__dirname+"/login.html")
})
app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})