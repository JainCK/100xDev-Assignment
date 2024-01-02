const express = require("express");
const { createTodo } = require("./types");
const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {
    const createPayload = req.body;
    const parsedTodo = createTodo.safeParse(createPayload);
    if(!parsedTodo.success){
        res.status(411).json({
            msg: "wrong inputs"
        })
    }

});

app.put('/completed', (req, res) => {

});

app.listen(3000)