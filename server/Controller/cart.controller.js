const Cart = require('../models/Cart');

const createCart = async (req, res) => {
  await Cart.findOneAndDelete({userId: req.user.id});
  console.log(req.user);
  const newCart = new Cart({
    userId: req.user.id,
    quantity: req.body.quantity,
    total: req.body.total,
    products:req.body.products
  });
  console.log(newCart);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } 
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
}

const editCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      {userId:req.params.id},
      {$set: req.body},
      {new:true}
    );
    res.status(200).json(updatedCart);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const deleteCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({userId: req.params.id})
    res.status(200).json('Cart has been deleted...'); 
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({userId: req.user.id});
    console.log(cart);
    res.status(200).send(cart); 
  } 
  catch (err) {
    res.status(500).json(err);
  }
}

const getAllCarts = async (req, res) => {
  try {
    const carts =  await Cart.find();
    res.status(200).json(carts);    
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  createCart,
  editCart,
  deleteCart,
  getCart,
  getAllCarts
}