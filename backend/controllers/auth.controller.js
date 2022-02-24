require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

const register = async (req, res) => {

  try {

    // check if the email address or phone number provided already exist
    let user = await User.findOne({$or:[{ email: req.body.email },{ mobile:req.body.mobile}]}).lean().exec();

    // if it already exists then throw an error
    if (user)
      return res.status(200).json({ //using 200 instead of 400
        status: "failed",
        message: "Email or ContactNo. already exists",
      });

    // else we will create the user we will hash the password as plain text password is harmful
    user = await User.create(req.body);

    // we will create the token
    const token = newToken(user);

    // return the user and the token
    res.status(201).json({ 
        status:"success",
        message:"User successfully Registered",
     });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

const login = async (req, res) => {

  try {
    // check if the email address provided already exist
    let user = await User.findOne({ email: req.body.email});

    // if it does not exist then throw an error
    if (!user)
      return res.status(200).json({ // using 200 instead of 400
        status: "failed",
        message: "User doesn't exist",
      });

    // else we match the password
    const match = await user.checkPassword(req.body.password);


    // if not match then throw an error
    if (!match)
      return res.status(200).json({ // using 200 instead of 400
        status: "failed",
        message: " Please provide correct email address or password",
      });

    // if it matches then create the token
    const token = newToken(user);

    // return the user and the token
    res.status(201).json({
        status:"success",
        message:"Welcome to Practo"
    });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }

};


const loginMobile = async (req, res) => {

    try {
      // check if the mobile provided already exist
      let user = await User.findOne({mobile: req.body.mobile});
  
      // if it does not exist then throw an error
      if (!user)
        return res.status(200).json({ // using 200 instead of 400
          status: "failed",
          message: "User doesn't exist",
        });
  
      // else we match the password
      const match = await user.checkPassword(req.body.password);
  
      // if not match then throw an error
      if (!match)
        return res.status(200).json({ // using 200 instead of 400
          status: "failed",
          message: " Please provide correct contactNo or password",
        });
  
      // if it matches then create the token
      const token = newToken(user);
  
      // return the user and the token
      res.status(201).json({
          status:"success",
          message:"Welcome to Practo"
      });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  
  };


module.exports = { register, login, loginMobile, newToken };
