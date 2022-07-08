const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const registerUser = async (req,res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
      ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    const accessToken = jwt.sign({
      id:savedUser._id,
      isAdmin: savedUser.isAdmin,
    }, 
    process.env.JWT_SECRET,
    {expiresIn:'2d'}
    )
    const {password, ...userData} = savedUser._doc;
    res.status(200).json({...userData, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }

}

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if(!user) {
      return res.status(401).json('wrong credentials!');
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password, 
      process.env.SECRET
    );
    const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if(userPassword !== req.body.password) {
      return res.status(401).json('wrong credentials!');
    }
    const accessToken = jwt.sign({
      id:user._id,
      isAdmin: user.isAdmin,
    }, 
    process.env.JWT_SECRET,
    {expiresIn:'2d'}
    )
    const {password, ...userData} = user._doc;
    res.status(200).json({...userData, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  registerUser,
  loginUser
}