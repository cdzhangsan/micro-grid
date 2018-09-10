var express = require('express');
var ejs = require('ejs');
var routers = require('./routers/mainRouter');


var app = express();
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);


routers.router(app);
app.use(express.static('public'));

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});