const {model,Schema}  = require('mongoose');



const postSchema = new Schema({

    title:{type:'string',required:true},
    body:{type:'string',required:true},
    user_id:{type:Schema.Types.ObjectId,
            ref:'user',
            required:true
        },
    comment_ids:[{type:Schema.Types.ObjectId,ref:'comment',required:false}],
    tag_ids:{type:Schema.Types.ObjectId,ref:'tag',required:true},

    
},{
    versionKey:false,
    timestamps:true,
})

module.exports = model('post', postSchema);