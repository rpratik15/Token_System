const mongose = require('mongoose');

const userSchema = new mongose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },   
    userName: { type: String, required: true },
    password: { type: String, required: true },
    repassword: { type: String, required: true },
    type:{type:String, required: true, default: 'user'}
});

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
const UserModel = mongose.model('users', userSchema);

module.exports = UserModel;
module.exports = TokenModel;