const multer = require("multer");
const cors = require("cors");
const express = require('express');//import the required package
const router = express();
const mongoose=require("mongoose")
const Token = require('../DBModel/Tokenmodel.js');//import the model
const bodyParser = require("body-parser");
router.use(express.json());
//router.use(express.urlencoded({ extended: true }));
router.use(cors());



// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
        file=file.originalname.replaceAll(' ','_');
        cb(null, Date.now() + '-' + file); // Append timestamp to the original file name
    }
});
const upload = multer({ storage: storage });
router.get('/get', async (req, res) => {
    try {
        console.log(Token);
        const tokens = await Token.find();
        
        if (tokens.length === 0) {
            return res.status(404).json({ message: 'No tokens found' });
        }
        res.status(200).json(tokens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// router.post('/add',async (req, res) => {
//     console.log(req.body);
    // const { date, machineName, customerName, problemReportedBy, tokenCreatedBy, problemDescription,imageUrl } = req.body;
//     const image = req.file ? req.file.filename : null;
    // try {

    //     const newToken =  new Token({
    //         date,
    //         machineName,
    //         customerName,
    //         problemReportedBy,
    //         tokenCreatedBy,
    //         problemDescription,
    //         imageUrl});
    //     await newToken.save();
    //      res.send({message:"Token generated successfully"});
    //     res.status(201).json({ message: 'Token created successfully' });
    // } catch (error) {
    //     res.status(400).json({ error: error.message });
    // }
// ?});?
// //upload.single("singleFile")
router.post('/add',upload.single("singleImage"), async (req, res) => {
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);
       const { date, machineName, customerName, problemReportedBy, tokenCreatedBy, problemDescription } = req.body;

    const imageUrl = req.file ? req.file.filename : null; // Get the filename from the uploaded file
 
    try {
 
        await Token.create({ date, machineName, customerName, problemReportedBy, tokenCreatedBy, problemDescription, imageUrl });
        res.send({message:"Token generated successfully"});
        // res.status(201).json({ message: 'Token created successfully' });
        // res.status(200).json(newToken);
    } catch (error) {
        res.status(400).json({ error: error.message });
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