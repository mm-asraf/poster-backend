const PostModel = require('../model/PostModel')
const express = require('express')
const router = express.Router();


//crud 
router.post('',async (req,res,next) => {

    let requestPayload = req.body;

    try {
        const createPost = await PostModel.create(requestPayload);
        return res.status(200).send({data:createPost})
        
    } catch (error) {
        return res.status(500).json({error:error.message,status:"failed"})
    }
})

router.get('/getAllPosts', async (req, res, next) => {

    try {
       let getPostDataById =  await PostModel.find().lean().exec();
        
       return res.status(200).json({data: getPostDataById})
    } catch (error) {
        return res.status(500).json({error:error.message,status:"failed"})
    }

});


router.get('/:id', async (req, res, next) => {

    try {
       let getPostDataById =  await PostModel.findById(req.params.id).lean().exec();
        
       return res.status(200).json({data: getPostDataById})
    } catch (error) {
        return res.status(500).json({error:error.message,status:"failed"})
    }

});

router.patch('/:id',async(req,res,next)=> {

    try {
       let updatedPost = await PostModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

       return res.status(200).json({data: updatedPost})

    }catch(error){
        return res.status(500).json({error:error.message,status:"failed"})
    }

})

router.delete('/:id',async(req,res,next)=> {

    try {
       let deletePostById = await PostModel.findByIdAndDelete(req.params.id);
        
       return res.status(200).send("Post deleted successfully");
    } catch (error) {
        return res.status(500).json({error:error.message,status:"failed"})
    }
})






module.exports = router;