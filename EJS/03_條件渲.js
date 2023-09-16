const ejs = require('ejs')
const fs = require('fs')
 let isLgoin =true
let html=fs.readFileSync('./03_home.html').toString()
let result = ejs.render(html, { isLgoin: isLgoin })


console.log(result);