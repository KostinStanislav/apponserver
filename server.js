var express = require('express');
var fs = require('fs');
var app = express();
app.set('view engine', 'jade');
app.use('/static', express.static('public'));
var dbFile = fs.readFileSync('./public/data.js');
var ourData = JSON.parse(dbFile);
app.get('/', function(req, res){
    res.render('tempe', {title: "CRUD APP", message: "Table Data 'USERS'", db: ourData});
});
app.listen(process.env.PORT, function(){
    console.log('We are listening some port');
});
