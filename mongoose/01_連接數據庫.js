//npm 安裝mongoose
//導入 mongoose

const mongoose = require('mongoose')
//連接mongodb服務                            數據庫名稱
mongoose.connect('mongodb://127.0.0.1:27017/trymongo')

//設置回調   once一次 事件回調只執行一次
mongoose.connection.once('open', () => {
    console.log('連接成功');
})
mongoose.connection.once('error', () => {
    console.log('連接失敗');
})
mongoose.connection.once('close', () => {
    console.log('連接關閉');
})
// setTimeout(()=>{
//     mongoose.disconnect()
// },2000)