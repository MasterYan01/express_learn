//npm 安裝mongoose
//導入 mongoose

const mongoose = require('mongoose')
//連接mongodb服務                            數據庫名稱
mongoose.connect('mongodb://127.0.0.1:27017/trymongo')

//設置回調   once一次 事件回調只執行一次
mongoose.connection.once('open', () => {
    //創建文檔的結構物件
    //設置集和中文檔的屬性以及屬性的類型
    let BookSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true, //該屬性不為空
            unique: true //設置為獨一無二
        },
        author: {
            type: String,
            default: '匿名'
        },
        style: {
            type: String,
            enum: ['言情', '城市', '台南']
        },
        price: Number,
        is_hot: Boolean,
        pub_time: Date
    })
    //創建模型物件,對文檔操作的封裝物件
    let BookModel = mongoose.model('books', BookSchema)
    // //刪除單條
    // BookModel.deleteOne({ _id: '650ceb4c66023744be7f5149' }).then(data => {
    //     console.log(data, '刪除成功');
    // }).catch(err => {
    //     console.error(err, '刪除失敗');
    // });

    //批量刪除
    BookModel.deleteMany({ __v: 0 }).then(data => {
        console.log(data, '刪除成功');
    }).catch(err => {
        console.error(err, '刪除失敗');
    });

})
// mongoose.connection.once('error', () => {
//     console.log('連接失敗');
// })
// mongoose.connection.once('close', () => {
//     console.log('連接關閉');
// })