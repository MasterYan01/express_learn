const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const app = express()
app.use(session({
    name:'sid',
    secret:'tim',
    saveUninitialized:false,
    resave:true,
    store:MongoStore.create({mongoUrl:'mongodb://127.0.0.1:27017/project'}),
    cookie:{}
}))
app.get('/', (req, res) => {
    res.send('home')
})

app.listen(3001, () => {
    console.log('端口已開啟3001,已監聽...');
})