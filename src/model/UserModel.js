const {model,Schema} = require('mongoose');
const bcrypt = require('bcryptjs')




const userSchema = new Schema({
    firstName:{type: 'string', required: true},
    lastName:{type: 'string', required: true},
    email:{type: 'string', required: true},
    password:{type: 'string', required: true},
    gender:{type: 'string', required: true},
},{
   versionKey:false,
   timestamps:true,
})



userSchema.pre("save", function(next) {
    if (!this.isModified("password")) {
        return next();
    }

    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        
        user.password = hash;
        next();
    });
});


userSchema.methods.checkPassword = function(password) {
 
    return new Promise((resolve, reject) => {
        bcrypt.compare(password,this.password,function(err,same)  {
            if(err) return reject (err);
           
            return resolve(same);
        })
    })
}




module.exports =  model('User',userSchema);


