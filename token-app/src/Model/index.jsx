const mongose = require('mongoose');

const tokenSchema=new mongose.Schema({
    
date:{
    type: Date,
    required: true
},

machineName:{
    type: String,
    required: true
},

customerName:{
    type: String,
    required: true
},
problemReportedBy:{
    type: String,
    required: true
},
tokenCreatedBy:{
    type: String,
    required: true
},
problemDescription:{
    type: String,
    required: true
},
imageUrl:{
    type: String,
    required: true
},
status:{
    type: String,
    required: true
},
comment:{   
type: String,
}

});

const TokenModel = mongose.model('tokens', tokenSchema);
module.exports = TokenModel;