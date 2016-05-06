var _DEFAULT_PORT = 3001;

var express = require('express');
var path = require('path');

var index = require('./routes/index.js');

var app = express();

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.use('/', index);
app.use('/public', express.static('./public'));
app.use('/components', express.static('./public/components'));
app.use('/frontEndServices', express.static('./public/frontEndServices'));
app.use('/vendor', express.static('./node_modules'));
require('./server/controllers/loginController.js')(app);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


var server = app.listen(_DEFAULT_PORT, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
