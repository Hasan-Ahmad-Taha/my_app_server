
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./api/rout/route");
const app = express();
app.use(express.json());
app.use(cors());
app.use(route);

const mongooseURL = "mongodb+srv://hasan:1234@cluster0.0ugr31b.mongodb.net/"
mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected")
})

mongoose.connection.on("error", () => {
    console.error("MongoDB connection error:", err);
});

app.get("/", (req, res) => {
    res.status(200).json({
       message:"server is live✅"
    })
}
)

app.get("/main", (req, res) => {
    res.status(200).json({
        name: "Hasan",
        age: 9,
    })
}
)
app.post("/order", (req, res) => {

    const { order } = req.body;
    if (!order.amaunt) {
        return res.status(500).json({
            errror: true,
            errrormeseg: "amount is must"




        })
    }
    res.status(200).json({
        message: "order resived",
        price: order.amount * order.price
    })

})

module.exports = app
