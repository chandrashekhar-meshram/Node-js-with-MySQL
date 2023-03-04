const express = require("express");
const connection = require("./config");
const app = express();

app.get("/", (req, resp) => {
  connection.query("select * from products", (err, result) => {
    if (err) {
      resp.send("error in api");
    } else {
      resp.send(result);
    }
  });
});

app.post('/', (req, resp) => {
  const data = {id: "6", title: "shirt 5", price: "3000", description: "shirt", category: "clothing", image: "test image"};

  con.query('INSERT INTO products SET ?', data, (err, result, fields) => {
    if(err) throw err;
    resp.send(result);
  })
});

console.log("hi");

app.listen("5000");


