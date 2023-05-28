const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        status: {
            type: String,
            enum: ["active", "inactive"],
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = todoSchema;
