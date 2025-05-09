//token contains date,machine name,Customer name,Problem reported and token created by,problem description and image
const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    machineName: { type: String, required: true },
    customerName: { type: String, required: true },
    problemReportedBy: { type: String, required: true },
    tokenCreatedBy: { type: String, required: true },
    problemDescription: { type: String, required: true },
    imageUrl: { type: String},
    status: { type: String, default: 'Pending' }, // Added status field with default value
    comment:{ type: String,default: 'No comment' } // Added comment field with default value

});

module.exports = mongoose.model('tokens', tokenSchema);
