const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@123',
  database: 'siri_ecommerce_2',
});

connection.connect((err) => {
    if(err){
        console.log("error !")
    }
});

module.exports = connection;

