const express = require('express')
const app = express()

app.get('/:id.html', (req, res) => {
    console.log(req.params.id);
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('商品詳情')
})
app.listen(3005, () => {
    console.log('端口已開啟3005,已監聽...');
})