const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

var learning = express();

var urlEncodedParser = bodyParser.urlencoded({extended: false});

learning.set('view engine', 'ejs');
learning.use('/styles', express.static('styles'));

learning.get('/', function(req,res){
    res.render('index');
});

learning.get('/contact', function(req,res){
    console.log(req.query);
    res.render('contact', {qs: req.query});
});

learning.post('/contact', urlEncodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

learning.get('/profile/:id', function(req, res){
    var data = {age: '16', job: 'TKS', hobbies: ['rugby', 'rowing', 'basketball']};
    res.render('profile',{id: req.params.id, data});
});

module.exports.handler = serverless(app);
// var http = require('http');
// var fs = require('fs');


// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Contect-Type': 'text/html'});
//         fs.createReadStream(__dirname+'/index.html').pipe(res);
//     }
//     else if(req.url === '/contacts'){
//         res.writeHead(200, {'Contect-Type': 'text/html'});
//         fs.createReadStream(__dirname+'/contacts.html').pipe(res);
//     }
//     else{
//         res.writeHead(404, {'Contect-Type': 'text/html'});
//         fs.createReadStream(__dirname+'/404.html').pipe(res);
//     }
// });
// server.listen(3000, '192.168.1.101');
// console.log('yo bish');

// var server = http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var readStream = fs.ReadStream(__dirname + '/index.html', 'utf8');
//     readStream.pipe(res)
// });

// server.listen(5500, '192.168.1.101');
// console.log("Server running on port 5500")

// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('yo bois');   
// });

// var numDirs = 2;
// for(let i = 1; i < numDirs+1; i++){

//     fs.mkdir('stuff: ' + i, function(){
//         fs.readFile('read.txt', 'utf8', function(err, data){
//             fs.writeFile('./stuff' + i + '/write.txt', data, function(){});
//         })
//     });
// To remove the write.txt files from the stuff: int directories
//     fs.unlink('./stuff: ' + i + '/write.txt', function(){});

// same code except to remove directories so mkdir is rmdir
//     fs.rmdir('stuff: ' + i, function(){
//         fs.readFile('read.txt', 'utf8', function(err, data){
//             fs.writeFile('./stuff' + i + '/write.txt', data, function(){});
//         })
//     });
// }

//read and write data from and between files without slowing down the rest of the program, aka making it async with callbacks
//fs.readFile('read.txt', 'utf8', function(err, data){
//    fs.writeFile('test.txt ' ,data, (err)=>{ })
//});
