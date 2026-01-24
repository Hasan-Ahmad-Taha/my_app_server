const { Schema, model } = require("mongoose");
const PRODUDUCT_SCHMA= new Schema({
name:{
    type:String,
    required: true,
},
price:{
    type:Number
},
image:{
    type: String
},
category:{
type:String
},

});
const productModele = model("product",PRODUDUCT_SCHMA);
module.exports=productModele