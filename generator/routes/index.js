var express = require('express');
const formidable = require('formidable');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//顯示表單
router.get('/portrait',(req,res)=>{
  res.render('portrait')
})
//處理文件上傳
router.post('/portrait',(req,res)=>{
  const form = formidable({multiples:true});

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields);
    console.log(files);
    res.send('ok')
  });
})
module.exports = router;
