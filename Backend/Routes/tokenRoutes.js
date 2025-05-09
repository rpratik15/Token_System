const express = require('express');//import the required package
const router = express();
const mongoose=require("mongoose")
const Token = require('../DBModel/model.js');//import the model


router.use(express.json())// Parse JSON bodies (as sent by API clients)

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

router.post('/add', async (req, res) => {
    const { date, machineName, customerName, problemReportedBy, tokenCreatedBy, problemDescription, imageUrl } = req.body;
    try {
        res.send(req.body)
        const newToken = new Token({ date, machineName, customerName, problemReportedBy, tokenCreatedBy, problemDescription, imageUrl });
        await newToken.save();
        res.status(201).json(token);
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