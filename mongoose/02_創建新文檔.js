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
        name:String,
        author:String,
        price:Number
    })
    //創建模型物件,對文檔操作的封裝物件
    let BookModel = mongoose.model('books',BookSchema)

    //新增
    // BookModel.create({
    //     name:'西遊記',
    //     author:'盧彥銘',
    //     price:19.9
    // },(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         return
    //     }
    //     //如果沒有出錯,則輸出插入後的文檔物件
    //     console.log(data);
    // })
    const bookData = {
        name: '小銘',
        author: 'ming',
        price: 7
    };
    
    BookModel.create(bookData)
        .then(data => {
            // 如果没有出错，输出插入后的文档对象
            console.log(data,'創建成功');
            //關閉數據庫連接,項目運行中,不會添加該代碼
            mongoose.disconnect()
        })
        .catch(err => {
            console.error(err);
        });
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