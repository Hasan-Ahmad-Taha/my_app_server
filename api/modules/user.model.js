const { Schema, model } = require("mongoose");

const USER_SCHEMA = new Schema({
    name: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
        unique:true,
        mact:[/^\d{10}$/, "phone number must be 10 digits"]
    },
   age: {
        type:Number,
        min:15
    },
    password:{
        type:String,
        required: true,
    }
});

const USERMODEL =  model("user", USER_SCHEMA)

module.exports = USERMODEL