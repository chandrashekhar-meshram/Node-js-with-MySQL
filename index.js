const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@123',
  database: 'siri_ecommerce_2',
});

// con.connect((err)=>{
//   if(err)
//   {
//     console.warn("not connect ", err)
//   }else{
//     console.warn("connected!!!")
//   }
// })

con.query('SELECT * FROM products', (err, result) => {
  if (err) {
    console.warn('some error ');
  } else {
    console.warn(result);
  }
});

console.log('hi');

/* 


*/
