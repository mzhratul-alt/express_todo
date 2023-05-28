const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchemas");
const todo = new mongoose.model("Todo", todoSchema);

//Get All Todo

router.get("/", async (req, res) => {
});

//Get A Todo

router.get("/:id", async (req, res) => {});

//Insert A Todo

router.post("/", async (req, res) => {
    const newTodo = new todo(req.body);
    await newTodo.save()
    .then(()=>{
        res.status(201).json({
            message: "Todo Inserted Successfully",
        });
    })
    .catch((err)=>{
        (err) => {
            
            res.status(500).json({
                error: "There was a server side error",
            });
        }
    })
});

module.exports = router;
