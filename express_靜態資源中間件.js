const express = require('express')
const app = express()


//靜態資源中間件設置
app.use(express.static(__dirname+'/public'))
//創建路由
app.get('/',(req,res)=>{
    res.send('<h1>我是路由</h1>')
})

app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})