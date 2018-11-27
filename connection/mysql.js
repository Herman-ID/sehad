const mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user :'root',
    password : '',
    database : 'sehad'
  });
// con.connect(function(err) {
//     if(err) console.dir(err);
// })
module.exports = con;
