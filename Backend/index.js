//app.js

const cors = require("cors");
const express = require('express');//import the required package
const app = express();
const mongoose=require("mongoose")
const tokenRoutes = require('./Routes/tokenRoutes.js');//import the routes
const Users = require('./DBModel/Tokenmodel.js');//import the user model
app.use(cors());
app.use(express.json())// Parse JSON bodies (as sent by API clients)
const path = require('path');
app.use(
    express.urlencoded({ extended: true })
);
    


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

mongoose.connect("mongodb://0.0.0.0:27017/Token-app")
.then(() => console.log("MongoDB connected..."))

app.use("/token", tokenRoutes)

app.post('/users/add',(req, res) => {
    
    const { name, mobile, userName, password, repassword, type } = req.body;
 
    // if(Users.findOne({mobile:mobile}))
    // {
    //     return res.status(401).json({ message: "Mobile number already exists!!!" });
    // }
    const newUser = new Users({
        name,
        mobile,
        userName,
        password,
        repassword,
        type
    });
    //console.log("new User:", newUser);
    newUser.save()
        .then(() => res.status(200).json({ message: 'User registered successfully' }))
        .catch(error => res.status(400).json({ error: error.message }));
});

