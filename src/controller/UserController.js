const AppError = require('../errorHandlers/AppErrorHandler');
const User = require('../model/UserModel')
const express = require('express');


const router = express.Router();


//user crud

//create user
router.post('/register',async (req,res,next)=> {
    
    let requestPayload = req.body;

    try{
        const createUser = await User.create(requestPayload);
        return res.status(201).send(createUser);
    }catch(err){
        return res.status(500).json({message: err.message});
    }

})


router.post('/login', async (req, res, next) => {
    let requestPayload = req.body;

    try {
        let password = req.body.password;

        // retrieve user information from db
        let user = await User.findOne({ email: req.body.email });

        //if user not exit return user not found error
        if (!user) {
            return next(new AppError("User not found", 404, 'USER_NOT_FOUND'));
        }

        // check request password with db password
        let match = await user.checkPassword(password);

        //if password didn't match return a authentication error
        if (!match) {
            return res.status(401).json({ message: 'Password does not match' });
        }

        // generate token

        return res.status(200).send("Login successful");

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
});


//get user by Id
router.get('/:id',async (req,res,next)=> { 

    let userId = req.params.id;

    try {
        const getUserById = await User.findById(userId);
        if (getUserById) {
            return res.status(200).json(getUserById);
        } else {
            return next(new AppError("User not found", 404, 'USER_NOT_FOUND'));
        }
    } catch (error) {
        // Pass error to the global error handler
        return next(error);
    }
})

//get user by Id
router.get('/firstName/:firstName',async (req,res,next)=> { 

    let firstName = req.params.firstName;
    console.log(firstName)

    try {

        if(!firstName){
            return next(new AppError("Invalid request",400,"BAD_REQUEST"))
        }
        console.log("----")
        const user = await User.find({ firstName: new RegExp(firstName, 'i') });

        console.log("after User.find ");
        if(user.length > 0){
            return res.status(200).send(user)
        }else{
            return next(new AppError("User Not found with this name",404,USER_NOT_FOUND))
        }

    
    } catch (error) {
        // Pass error to the global error handler
        return next(error);
    }
})


module.exports = router;