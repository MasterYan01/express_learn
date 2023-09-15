const ejs = require('ejs')
const fs = require('fs')
let taiwan = '台灣'
let house = '台南北區'
//let str = `我愛你 ${taiwan}`
const str = fs.readFileSync('./01_html.html').toString()

//使用ejs渲染
const result = ejs.render(str, { taiwan: taiwan,house:house })
console.log(result);