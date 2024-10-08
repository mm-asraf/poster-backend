const AppError = require("../errorHandlers/AppErrorHandler");
const authticationToken = require("../middlewares/authenticateToken");
const User = require("../model/UserModel");
const express = require("express");
const generateToken = require("../utils/generateToken");

const router = express.Router();


//register user
router.post("/register", async (req, res, next) => {
  let requestPayload = req.body;

  try {
    const isUserExit = await User.findOne({ email: req.body.email });

    if (isUserExit) {
      return next(new AppError("User Already Exists",404,"USER_ALREADY_EXISTS"));
    }

    const createUser = await User.create(requestPayload);

    const token = generateToken(createUser);
    return res.status(201).send({ token: token,status: "success" });
  } catch (err) {
    return res.status(500).json({ message: err.message ,status:"failed"});
  }
});

//login user
router.post("/login", async (req, res, next) => {
  let requestPayload = req.body;

  try {
    let password = req.body.password;

    // retrieve user information from db
    let user = await User.findOne({ email: req.body.email });

    //if user not exit return user not found error
    if (!user) {
      return next(new AppError("User not found", 404, "USER_NOT_FOUND"));
    }

    // check request password with db password
    let match = await user.checkPassword(password);

    //if password didn't match return a authentication error
    if (!match) {
      return res.status(401).json({ message: "Password does not match" });
    }

    // generate token
    const token = generateToken(user);

    return res.status(200).send({ token: token ,status:"success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

//get user by Id
router.get("/:id", authticationToken, async (req, res, next) => {
  let userId = req.params.id;

  try {
    const getUserById = await User.findById(userId);
    if (getUserById) {
      return res.status(200).json({data:getUserById,status:"success"});
    } else {
      return next(new AppError("User not found", 404, "USER_NOT_FOUND"));
    }
  } catch (error) {
    // Pass error to the global error handler
    return res.status(500).json({message: "Something went wrong" ,status:"failed"});
  }
});

//get user by Id
router.get("/firstName/:firstName", async (req, res, next) => {
  let firstName = req.params.firstName;
  console.log(firstName);

  try {
    if (!firstName) {
      return next(new AppError("Invalid request", 400, "BAD_REQUEST"));
    }
    const user = await User.find({ firstName: new RegExp(firstName, "i") });


    if (user.length > 0) {
      return res.status(200).send(user);
    } else {
      return next(
        new AppError("User Not found with this name", 404, USER_NOT_FOUND)
      );
    }
  } catch (error) {
    // Pass error to the global error handler
    return res.status(500).send({error: error.message,status:"failed"});
  }
});

module.exports = router;
