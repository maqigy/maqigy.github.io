var express = require('express');
var port = 3001;
var app = express();

app.get('/', function(req,res) {
    res.send('this is the homepage hello')
})

app.listen(port);
console.log('listening to port ' + port);