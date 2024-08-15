const {Schema,model} = require('mongoose');



const tagSchema = new Schema({ 
    
    tagname:{type:'string',required:false}


},{
    versionKey:false,
    timestamps:true,
})


module.exports = model('tag',tagSchema)