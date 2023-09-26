const mongoose = require('mongoose')
//創建文檔結構
const MovieSchema = new mongoose.Schema({
    title: String,
    director: String
})
//創建模型物件
const MovieModel = mongoose.model('movie', MovieSchema)
module.exports = MovieModel