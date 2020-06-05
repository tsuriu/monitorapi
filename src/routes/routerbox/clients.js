var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const db = require('../../config.js');


router.get('/cntref', function(req, res, next) {
  const knex = require('knex') ({
    client: 'mysql',
    connection: {
      host : '172.31.254.41',
      user : 'squid',
      password : '***root*fistel@kaua2020dbrbx',
      database : 'isupergaus'
      }
  });

  var ifn = req.query.ifn;
  var sit = req.query.sit;

  console.log("Reference Counter Qry: ", ifn, sit)

  knex.select().from('ClientesUsuarios').where('Porta',ifn).where('Situacao',sit).where('MAC','!=','undefined')
    .then(cnt =>{
      res.json(cnt.length);
      console.log(ifn,sit,cnt.length)
    }).catch((err) => {
      console.log( err);
    }).finally(() => {
      knex.destroy();
    });
});

module.exports = router;
