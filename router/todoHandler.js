const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchemas");
const todo = new mongoose.model("Todo", todoSchema);

//Get All Todo

router.get("/", async (req, res) => {
    await todo
        .find(
            {
                status: "inactive",
            },
            {
                title:1
            }
        )
        .then((allData) => {
            res.status(201).json({
                result: allData,
            });
        })
        .catch((err) => {
            (err) => {
                res.status(500).json({
                    error: "There was a server side error",
                });
            };
        });
});

//Get A Todo

router.get("/:id", async (req, res) => {});

//Insert A Todo

router.post("/", async (req, res) => {
    const newTodo = new todo(req.body);
    await newTodo
        .save()
        .then(() => {
            res.status(201).json({
                message: "Todo Inserted Successfully",
            });
        })
        .catch((err) => {
            (err) => {
                res.status(500).json({
                    error: "There was a server side error",
                });
            };
        });
});

//Insert Many Todo

router.post("/all", async (req, res) => {
    await todo
        .insertMany(req.body)
        .then(() => {
            res.status(201).json({
                message: "Todo Inserted Successfully",
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: "There was a server side error",
            });
        });
});

//Update Todo
router.put("/:id", async (req, res) => {
    await todo
        .findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $set: {
                    status: "active",
                },
            },
            {
                new: true,
                useFindAndModify: false,
            }
        )
        .then((result) => {
            console.log(result);
            res.status(201).json({
                message: "Todo Updated Successfully!",
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: "There was a server side error",
            });
        });
});

//Delete Todo

router.delete("/:id", async(req, res)=>{
    await todo.deleteOne({_id:req.params.id})
    .then((result) => {
        console.log(result);
        res.status(200).json({
            message: "Todo Deleted Successfully!",
        });
    })
    .catch((err) => {
        res.status(500).json({
            error: "There was a server side error",
        });
    });
})
module.exports = router;
