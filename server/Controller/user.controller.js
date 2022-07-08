const User = require('../models/User');
const CryptoJS = require('crypto-js');

const updateUser = async (req, res) => {
  if(req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {$set: req.body},
      {new:true}
    );
    res.status(200).json(updatedUser);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...'); 
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const {password, ...userData} = user._doc;
    res.status(200).json(userData); 
  } 
  catch (err) {
    res.status(500).json(err);
  }
}

const getAllUsers = async (req, res) => {
  const query = req.query.new
  console.log(query);
  console.log(query === 'true')
  try {
    const users = query === 'true'
    ? await User.find().sort({_id: -1}).limit(5)
    : await User.find();
    res.status(200).json(users);    
  } catch (err) {
    res.status(500).json(err);
  }
}

const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() -1));
  try {
    const data = await User.aggregate([
      {$match:{createdAt:{$gte: lastYear}}},
      {
        $project:{
          month: {$month:"$createdAt"}
        }
      },
      {
        $group :{
          _id: "$month",
          total:{$sum: 1}
        }
      }
    ]);
    res.status(200).json(data);
  }
  catch(err) {
    res.status(500).json(err);
  }
}

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats
}