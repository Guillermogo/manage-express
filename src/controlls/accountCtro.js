const express =  require('express')
const path = require('path')
var captchapng = require('captchapng');
// 登陆页
module.exports.getLogin = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'))
}
// 验证码
module.exports.getCode = (req,res)=>{
    // console.log(req.url);
    if(req.url.includes('/vcode')) {
        var p = new captchapng(80,30,parseInt(Math.random()*9000+1000)); // width,height,numeric captcha
        p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
        p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
 
        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        // res.writeHead(200, {
        //     'Content-Type': 'image/png'
        // });
        res.send(imgbase64);
    }
}