const jwt = require('jsonwebtoken')

// let token = jwt.sign({
//     username: '銘',
// }, 'ming', {
//     expiresIn: 60//單位是秒
// })

// console.log(token);

// let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuS7geWuiSIsImlhdCI6MTY5ODExNjExMywiZXhwIjoxNjk4MTE2MTczfQ.ddm2erDWrQFlt39NHtu6Zp3LgnzaiDb0UPswhf_GNi4'
let to = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IumKmCIsImlhdCI6MTY5ODExNjQzMSwiZXhwIjoxNjk4MTE2NDkxfQ.gn3Gpu7KaatRUKNoaIajdhymAm8Pf3c14aSLWn3u1KE'
// //校驗token
jwt.verify(to,'ming',(err,data)=>{
    if(err){
        console.log('校驗失敗');
        return
    }
    console.log(data);
})