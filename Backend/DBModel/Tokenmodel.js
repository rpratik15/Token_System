//token contains date,machine name,Customer name,Problem reported and token created by,problem description and image
const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    date: { type: String, required: true ,default: new Date().toISOString().split('T')[0] }, // Default to current date in YYYY-MM-DD format
    machineName: { type: String, required: true },
    customerName: { type: String, required: true },
    problemReportedBy: { type: String, required: true },
    tokenCreatedBy: { type: String, required: true },
    problemDescription: { type: String, required: true },
    imageUrl: { type: String},
    status: { type: String, default: 'Pending' }, // Added status field with default value
    comment:{ type: String,default: 'No comment' } // Added comment field with default value

},{
    collection: 'tokens',
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

const Tokenmodel = mongoose.model('users', tokenSchema);
module.exports= Tokenmodel;





const Token = mongoose.model('tokens', tokenSchema);
// const Users = mongoose.model('users', userSchema);
module.exports= Token;
// module.exports= Users;