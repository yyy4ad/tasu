const pool = require('../pool.js')
const express = require('express');
var userRouter = express.Router();
userRouter.post('/reg',function (req,res) {
    var obj = req.body;
    var uname = obj.uname;
    var upwd = obj.upwd;
    var phone = obj.phone;
    var gender = obj.gender;
    var email = obj.email;
   // var brithday = obj.brithday;
    var sql = 'insert into user(uname,upwd,phone,gender,email) values(?,?,?,?,?)';
    pool.query(sql,[uname,upwd,phone,gender,email],(err,result)=>{
        if(err) console.log(err);
        if(result.affectedRows>0){
            res.send(uname);
        };
    })
    //console.log(uname);
});
userRouter.post('/login',function (req,res) {
    var obj = req.body;
    var uname = obj.uname;
    var upwd = obj.upwd;
    var sql = 'select * from user where uname=? and upwd=?';
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) console.log(err);
        if(result.length>0){
            res.send(uname);
        }else{
            res.send({code:301,msg:'uname or upwd error'});
        }
    })
    //console.log(uname);
});
module.exports=userRouter;