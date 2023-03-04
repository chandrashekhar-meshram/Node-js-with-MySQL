const express = require('express');
const app = express();

app.get('/', (req, resp) => {
  resp.send("route working...");
})

app.listen(5000);

console.log('hi !')