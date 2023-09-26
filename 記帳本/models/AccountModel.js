const mongoose = require('mongoose')
//創建文檔的結構物件
//設置集和中文檔的屬性以及屬性的類型
let AccountSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    time: Date,
    type: {
        type: Number,
        default: -1
    },
    amount: {
        type: Number
    },
    remarks: {
        type: String
    }
})
//創建模型物件,對文檔操作的封裝物件
let AccountModel = mongoose.model('accounts', AccountSchema)
module.exports = AccountModel