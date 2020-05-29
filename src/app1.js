const express = require('express');
const bodyParser = require('body-parser');
const RosApi = require('node-routeros').RouterOSAPI;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

app.get('/pppoecnt', function(req, res) {
  var services = []

  var ip = req.body.ip
  var ifn = req.body.ifn

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
}) 

app.listen(3000, () => {
  console.log('App running on port 3000!');
})
