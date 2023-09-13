const express = require('express')
const app = express()

app.get('/request', (req, res) => {
    //express
    // res.status(299)
    // res.set("xxx","yyy")
    // res.send("盧彥銘")
    res.status(299).set("xxx","yyy").send("盧彥銘")
})
app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})