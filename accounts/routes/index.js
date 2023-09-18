var express = require('express');
var router = express.Router();
//登入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync(__dirname+'/../data/db.json')
const db = low(adapter)
const shortid = require('shortid')
//記帳本的列表
router.get('/account', function (req, res, next) {
  res.render('list')
});
router.get('/account/create', function (req, res, next) {
  res.render('create')
});
router.post('/account', function (req, res, next) {
  //獲取請求體數據
  //console.log(req.body);
  //生成id
  const id = shortid.generate()
  //寫入文件
  db.get('accounts').unshift({id:id,...req.body}).write()
  res.send('添加紀錄')
});
module.exports = router;
