const multer = require("multer");
const cors = require("cors");
const express = require('express');//import the required package
const router = express();
const mongoose=require("mongoose")
const Token = require('../DBModel/model.js');//import the model

router.use(cors());
router.use(express.json())// Parse JSON bodies (as sent by API clients)


// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Append timestamp to the original file name
    }
});
const upload = multer({ storage: storage });
router.get('/get', async (req, res) => {
    try {
        const tokens = await Token.find();
        
        if (tokens.length === 0) {
            return res.status(404).json({ message: 'No tokens found' });
        }
        res.status(200).json(tokens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//upload.single("singleFile")
router.post('/add',upload.single("singleImage"), async (req, res) => {
    // const { date, machineName, customerName, problemReportedBy, tokenCreatedBy, problemDescription } = req.body;
    const imageUrl = req.file ? req.file.filename : null; // Get the filename from the uploaded file
 
    try {
        const existingToken={...req.body, imageUrl};
        console.log(existingToken);
         res.send(existingToken)
        const newToken = new Token(existingToken);
        await newToken.save();
        // await Token.create({ date, machineName, customerName, problemReportedBy, tokenCreatedBy, problemDescription, imageUrl });
        res.status(201).json({ message: 'Token created successfully' });
        // res.status(200).json(newToken);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



router.put('/update/:id',async(req,res)=>{
    const { id } = req.params;
    const { status,comment } = req.body;
    try {
        const token = await Token.findByIdAndUpdate(id,{status,comment}, { new: true });
        if (!token) {
            return res.status(404).json({ message: 'Token not found' });
        }
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
});

router.delete('/delete/:id',async(req,res)=>{
    const { id } = req.params;
    try {
        const token = await Token.findByIdAndDelete(id);
        if (!token) {
            return res.status(404).json({ message: 'Token not found' });
        }
        res.status(200).json({ message: 'Token deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;//export the router