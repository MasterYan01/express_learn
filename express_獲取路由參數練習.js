const express = require('express')
const { data } = require('./person.json')
const app = express()
//console.log(data);
app.get('/person/:id.html', (req, res) => {
    let { id } = req.params
    let result = data.find(item => {
        if (item.id === Number(id))
            return true
    })
    
    //console.log(result);
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${result.name}</h1>
    <h1>${result.address}</h1>
</body>
</html>`)

})
app.listen(3009, () => {
    console.log('端口已開啟3005,已監聽...');
})

