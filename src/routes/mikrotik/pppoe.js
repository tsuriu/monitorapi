var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var RosApi = require('node-routeros').RouterOSAPI;


router.get('/', function(req, res, next) {
    var services = []

  console.log("Online Users Qry", req.query)

  var ip = req.query.ip
  var ifn = req.query.ifn


  const conn = new RosApi({
    host: ip,
    user: 'tulio',
    password: '64eu.7!4eu#',
    keepalive: true
  });
  conn.connect()
    .then(() => {
      conn.write('/interface/pppoe-server/print')
        .then(data => {
          const cnt = data.filter(item => item.service === ifn).length;
          res.json(cnt)
          console.log(ip,ifn,cnt)
          conn.close()
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;
