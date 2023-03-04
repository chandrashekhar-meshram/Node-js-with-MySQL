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

console.log("hi");

app.listen("5000");


