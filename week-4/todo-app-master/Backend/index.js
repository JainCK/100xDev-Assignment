const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require('./db');
const app = express();

app.use(express.json());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    
await todo.create({
    title: createPayload.title,
    desc: createPayload.desc,
    compeleted: false,
})

res.json({
    msg: "Todo created"
})

})


app.get("/todos", async function(req, res) {
    const todo = await todo.find({});

    res,json({
        todo
    })
})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "wrong inputs"
        });
        return;
    }
    await todo.update({
        _id: req.body._id
    })
    res.json({
        msg: "marked completed"
    })
})

app.listen(3000);