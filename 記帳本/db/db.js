module.exports = function (success, error) {
    if (typeof error !== 'function') {
        error = () => {
            console.log('連接失敗~~~');
        }
    }
    //npm 安裝mongoose
    //導入 mongoose
    const mongoose = require('mongoose')
    const {DBHOST,DBPORT,DBNAME} = require('../config/config')
    //連接mongodb服務
    mongoose.set('strictQuery', true)
    
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)
    //設置回調   once一次 事件回調只執行一次
    mongoose.connection.once('open', () => { success() })
    mongoose.connection.once('error', () => {
        error()
    })
    mongoose.connection.once('close', () => {
        console.log('連接關閉');
    })
}