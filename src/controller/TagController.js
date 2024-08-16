const TagModel = require('../model/TagModel')
const express = require('express');
const router = express.Router();



//crud

router.post('',async(req,res,next)=> {

    const requestPayload = req.body;

    try {

       let tagData = await TagModel.create(requestPayload);
       return res.status(200).send({data:tagData});
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }

});

router.get('/getAllTags',async(req,res,next)=> {

    try {
        let allTags = await TagModel.find().lean().exec();
        return res.status(200).send({data:allTags});
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})

router.get('/:id',async(req,res,next)=> {

    try {
        let tagDataById = await TagModel.findById(req.params.id).lean().exec();
        return res.status(200).send({data:tagDataById})
        
    } catch (error) {
        return res.status(500).json({error:error.message,status:"failed"});
    }
})

router.patch('/:id',async(req,res,next)=> {

    try {
        let updateTagDataById = await TagModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({data:updateTagDataById});
        
    } catch (error) {
        return res.status(500).json({error:error.message,status:"failed"});
    }
})

router.delete('/:id',async(req,res,next)=> {

    try {
        await TagModel.findByIdAndDelete(req.params.id);
        return res.status(200).send("Tag data deleted successfully!")
        
    } catch ({error}) {
        return res.status(500).send({error:error.message,status:"failed"})
        
    }
})


module.exports = router;