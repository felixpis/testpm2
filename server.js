var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send("app is working");
})
app.get('/user', function(req, res){
    res.send({name: 'felix'});
})

app.listen(3001, function(){
    console.log('application runs');
})
