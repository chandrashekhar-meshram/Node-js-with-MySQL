const express = require("express");
const con = require("./config");
const app = express();

//required to pass data from body
app.use(express.json());

app.get("/", (req, resp) => {
  con.query("select * from products", (err, result) => {
    if (err) {
      resp.send("error in api");
    } else {
      resp.send(result);
    }
  });
});

app.post('/', (req, resp) => {
  const data = req.body;

  con.query('INSERT INTO products SET ?', data, (err, result, fields) => {
    if (err) throw err;
    resp.send(result);
  })
});

app.put('/:id', (req, resp) => {
  const data = [req.body.id, req.body.title, req.body.price, req.body.description, req.body.category, req.body.image, req.params.id];

  con.query("UPDATE products SET id = ?, title = ?, price = ?, description = ?, category = ?, image = ? where id = ?", data, (err, result, fields) => {
    if (err) throw err;
    resp.send(result);
  })
})

console.log("hi");

app.listen("5000");


