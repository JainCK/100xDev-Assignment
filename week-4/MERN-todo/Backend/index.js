const express = require("express");
const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {

});

app.put('/completed', (req, res) => {

});

app.listen(3000)