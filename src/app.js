var express = require('express');
var bodyParser = require('body-parser');

var pppoeCnt = require('./routes/mikrotik/pppoe.js')
var countRef = require('./routes/routerbox/clients.js') 

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/pppoecnt', pppoeCnt);
app.use('/clients', countRef);

app.listen(3000, '0.0.0.0',() => {
  console.log('App running on port 3000!');
})

module.exports = app;
