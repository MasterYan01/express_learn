const ejs = require('ejs')
const fs = require('fs')
const chineseNames = ["張三", "李四", "王五", "陳六", "劉七", "趙八", "吳九", "林十", "蔡十一", "楊十二"];
let html = fs.readFileSync('./02_chineseNames.html').toString()
let result = ejs.render(html, { chineseNames: chineseNames })
console.log(result);