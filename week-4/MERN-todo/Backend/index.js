const express = require("express");
const { createTodo } = require("./types");
const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {
    const createPayload = req.body;
    const parsedTodo = createTodo;

    
});

app.put('/completed', (req, res) => {

});

app.listen(3000)