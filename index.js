const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require('./router/todoHandler');

const app = express();
app.use(express.json());
const port = 8000;

//Database Connection with Mongoose
mongoose
    .connect("mongodb://localhost/todos",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log("Connection Successfully!"))
    .catch((err)=> console.log(err))

//Routes
app.use('todo', todoHandler)

//Default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
