var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const dns = require('dns'); 

router.get('/', function(req, res, next) {
  var domain = req.query.domain;

  dns.lookup(domain, {all: true, },(err, addresses) => {
    console.log(domain);
    var ret = {"data":addresses};
    console.log(ret);

    res.json(ret);
  });

});

module.exports = router;
