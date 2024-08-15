const {model,Schema}  = require('mongoose');



const postSchema = new Schema({

    title:{type:'string',required:true},
    body:{type:'string',required:true},
    user_id:{type:Schema.Types.ObjectId,
            ref:'user'
        },
    comment_ids:[{type:Schema.Types.ObjectId,ref:'comment'}],
    tag_ids:{type:Schema.Types.ObjectId,ref:'tag'},

    
},{
    versionKey:false,
    timestamps:true,
})

module.exports = model('post', postSchema);