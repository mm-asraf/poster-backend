const Comment = require('../model/CommentModel')
const express = require('express');
const router = require('./UserController');
const app = express.Router();



router.post('',async (req,res,next)=> {

    try {

      let createComment = await  Comment.create(req.body);

      return res.status(201).send(createComment)

        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

router.get('',async (req,res,next)=> {

    try {

        let getCommentById = await Comment.findById(req.params.id).lean().exec();
        
        if(!getCommentById){
            return res.status(404).json({error:"Comment not found"})
        }

        return res.status(200).send(getCommentById);
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }

})

router.patch('',async (req,res,next)=> {

    try {
        let updateCommentById = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        return res.status(200).send(updateCommentById)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


router.delete('',async(req,res,next)=> {

    try {

        await Comment.findByIdAndDelete(req.params.id);
        return res.status(200).send("comment deleted successfully")
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})




module.exports = router;