const db = require('./db/db')
const MovieModel = require('./models/MovieModel')
//調用函數
db(() => {
    //電影的模型物件
    MovieModel.create({ title: 'fast10', director: '盧耶穌' })
        .then(() => {
            console.log('插入成功~~~');
        })
        .catch(() => {
            console.log('插入失敗~~~');
        })
})