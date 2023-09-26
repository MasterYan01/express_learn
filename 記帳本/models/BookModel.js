 const mongoose = require('mongoose')
 //創建文檔的結構物件
    //設置集和中文檔的屬性以及屬性的類型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })
    //創建模型物件,對文檔操作的封裝物件
    let BookModel = mongoose.model('books', BookSchema)
    module.exports= BookModel