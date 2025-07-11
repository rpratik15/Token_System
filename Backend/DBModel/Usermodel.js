







const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true, unique: true, validate: {
        validator: function(v) {
            return /\d{10}/.test(v); // Validate that the mobile number is 10 digits
        },
        message: props => `${props.value} is not a valid mobile number!`
    }},
    userName: { type: String, required: true },
    password: { type: String, required: true },
    repassword: { type: String, required: true },
    type:{type:String, required: true, default: 'user'}
},{
    collection: 'users',
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

const Usersmodel = mongoose.model('users', userSchema);
module.exports= Usersmodel;