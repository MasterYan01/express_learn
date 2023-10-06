var express = require('express');
var router = express.Router();
//記帳本的列表
router.get('/account', function (req, res, next) {
  let accounts = db.get('accounts').value()
  //console.log(accounts);
  res.render('list',{accounts:accounts})
});
router.get('/account/create', function (req, res, next) {
  res.render('create')
});
router.post('/account', function (req, res, next) {
  //獲取請求體數據
  console.log(req.body);
  //生成id
  const id = shortid.generate()
  //寫入文件
  db.get('accounts').unshift({id:id,...req.body}).write()
  res.render('success',{msg:'添加成功了哦^0^',url:'/account'})
});
//刪除紀錄
router.get('/account/:id',(req,res)=>{
  //獲取params的id參數
  let id = req.params.id
  //刪除
  db.get('accounts').remove({id:id}).write()
  //提醒
  res.render('success',{msg:'刪除成功了哦^0^',url:'/account'})
})
module.exports = router;