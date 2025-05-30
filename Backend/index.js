//app.js
const multer = require("multer");
const cors = require("cors");
const express = require('express');//import the required package
const app = express();
const mongoose=require("mongoose")
const tokenRoutes = require('./Routes/tokenRoutes.js');//import the routes
app.use(cors());
app.use(express.json())// Parse JSON bodies (as sent by API clients)




app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

mongoose.connect("mongodb://0.0.0.0:27017/Token-app")
.then(() => console.log("MongoDB connected..."))

app.use("/token", tokenRoutes)