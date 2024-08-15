const {Schema,model} = require('mongoose');


const commentSchema = new Schema({
    body:{type:'string',required:true},
    user_id:{
        type:Schema.Types.ObjectId,ref:'user'
    },
    post_id:{type:Schema.Types.ObjectId,ref:'post'},

},{
    versionKey:false,
    timestamps:true
})

module.exports = model('comment', commentSchema)