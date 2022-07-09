const Order = require('../models/Order');

const createOrder = async (req, res) => {
  const newOrder = new Order({userId:req.user.id, ...req.body});
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } 
  catch(err) {
    res.status(500).json(err);
  }
}

const editOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findOneAndUpdate(
      {userId:req.params.id},
      {$set: req.body},
      {new:true}
    );
    res.status(200).json(updatedOrder);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const deleteOrder = async (req, res) => {
  try {
    await Order.findOneAndDelete({userId: req.params.id})
    res.status(200).json('Order has been deleted...'); 
  }
  catch (err) {
    res.status(500).json(err);
  }
}

const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({userId: req.params.id});
    res.status(200).json(order); 
  } 
  catch (err) {
    res.status(500).json(err);
  }
}

const getAllOrders = async (req, res) => {
  try {
    const orders =  await Order.find();
    res.status(200).json(orders);    
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  createOrder,
  editOrder,
  deleteOrder,
  getOrder,
  getAllOrders
}