const express = require('express')
const app = express()


//靜態資源中間件設置
app.use((req, res, next) => {
    //檢測請求頭的referer是否為127.0.0.1
    //獲取referer
    let referer = req.get('referer')
    if (referer) {
        //實例化
        let url = new URL(referer)
        //獲取
        let hostname = url.hostname
        //判斷
        if (hostname !== '127.0.0.1') {
            res.status(404).send('<h1>404 ot found</h1>')
            return
        }
    }
    next()
})
app.use(express.static(__dirname + '/public'))



app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})