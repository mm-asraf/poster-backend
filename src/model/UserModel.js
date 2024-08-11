const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{type: 'string', required: true},
    lastName:{type: 'string', required: true},
    email:{type: 'string', required: true},
    password:{type: 'string', required: true},
    gender:{type: 'string', required: true},
},{
   versionKey:false,
   timestamps:true,
})


const User = mongoose.model('user',userSchema)

module.exports = User;


