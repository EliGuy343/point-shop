const User = require('../models/User');
const CryptoJS = require('crypto-js');

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
    res.status(201).json(savedUser);
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
    const {password, ...userData} = user._doc;
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  registerUser,
  loginUser
}