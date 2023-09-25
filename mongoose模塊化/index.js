const db = require('./db/db')
const mongoose = require('mongoose')
//導入BookModel
const BookModel = require('./models/BookModel')
//調用函數
db(() => {
   

    //新增
    const bookData = {
        name: '盧小銘',
        author: 'lusmallming',
        price: 7007
    };

    BookModel.create(bookData)
        .then(data => {
            // 如果没有出错，输出插入后的文档对象
            console.log(data, '創建成功');
            //關閉數據庫連接,項目運行中,不會添加該代碼
            mongoose.disconnect()
        })
        .catch(err => {
            console.error(err);
        });
}, () => { console.log('連接失敗'); })



