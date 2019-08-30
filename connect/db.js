var mysql      = require('mysql');
module.exports = () => {
  return mysql.createConnection({
    host     : 'localhost',
    user     : 'localhost',
    password : '123',
    database : 'visibilidad'
  });
}

