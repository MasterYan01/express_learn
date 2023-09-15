const express = require('express')
//創建路由物件
const router = express.Router()
router.get('/home', (req, res) => {
    res.send('我是home')
})
module.exports = router