const express = require ("express");
const mongoose = require ("mongoose");
require("dotenv").config();
const userRoute =  require ("./routes/user");

//Settings
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use("/api", userRoute);




//Routes
app.get("/", (req,res) => {
    res.send("welcome to my api");

});

//Mongodb conexion
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("conected to mongodb"))
.catch ((error) => console.error(error));

//server listening
app.listen(port, () => console.log("Server listening to", port));