const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : '172.31.254.41',
    user : 'squid',
    password : '***root*fistel@kaua2020dbrbx',
    database : 'isupergaus'
  }
});

knex.select().from('ClientesUsuarios').where('Porta','ftth_arvores').where('MAC','!=','undefined').count()
  .then((rows) => {
    console.log(rows)
  }).catch((err) => { 
    console.log( err);
    throw err;
  }).finally(() => { 
    knex.destroy();
  });
