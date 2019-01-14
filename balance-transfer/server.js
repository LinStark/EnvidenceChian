//express_demo.js 文件
'use strict';
var express = require('express');
var app = express();
var mysql =require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var fm=require('formidable');
var fs=require('fs');

app.use(express.static(path.join(__dirname,'public')));
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server = http.createServer(app).listen(3000, function() {});
app.get('/', function (req, res) {
    res.send('Hello World');
})

console.log('3000 start');
var connection = mysql.createConnection({      //创建mysql实例
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'456789',
    database:'lawchain'
});
var save = async function(username,password,role,realname,mail)
{
    return new Promise((resolve,reject)=>
    {
        var sql = 'INSERT INTO user(username,password,role,realname,mail) VALUES(?,?,?,?,?)';
        var param=[username,password,role,realname,mail];
        connection.query(sql,param,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                resolve(false);
            }
            else {
                console.log('Insert susessful!');
                resolve(true);
            }
        });

    })


}
var search =async function(username,password)
{
    return new Promise((resolve,reject)=>
    {
        var sql = 'select count(*) from user where username=\''+username+'\' and password=\''+password+'\'';
        console.log(sql);
        connection.query(sql,function (err,result) {
            if(err)
            {
                console.log('[SELECT ERROR] - ',err.message);
                resolve(false);
            }
            else
            {
                console.log('Login Susessful!');
                resolve(true);
            }
        })
    })

}
app.post('/register',async function(req,res) {
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;
    var realname = req.body.realname;
    var mail = req.body.mail;

    var flag=await save(username,password,role,realname,mail);
    console.log(flag);
    res.send(flag);

})
app.post('/login',async function(req,res) {
    var username = req.body.username;
    var password = req.body.password;

    var flag = await search(username,password);

    res.send(flag);

})
app.post('/upload',async function(req,res) {
    var form=new fm.IncomingForm();
})