const { 
  createOrder, 
  editOrder, 
  deleteOrder,
  getOrder,
  getAllOrders
} = require('../controller/order.controller');
const { 
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAutorization
} = require('../middleware/verify');

const router = require('express').Router();

router.post('/:id', verifyToken, createOrder);
router.put('/:id', verifyTokenAndAdmin, editOrder);
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);
router.get('/find/:id', verifyTokenAndAutorization, getOrder);
router.get('/', verifyTokenAndAdmin, getAllOrders);
module.exports = router;