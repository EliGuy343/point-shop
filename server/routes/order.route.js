const { 
  createOrder, 
  editOrder, 
  deleteOrder,
  getOrder,
  getAllOrders,
  getMonthlyIncome
} = require('../controller/order.controller');
const { 
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAutorization
} = require('../middleware/verify');

const router = require('express').Router();

router.post('/', verifyToken, createOrder);
router.put('/:id', verifyTokenAndAdmin, editOrder);
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);
router.get('/find/:id', verifyTokenAndAutorization, getOrder);
router.get('/', verifyTokenAndAdmin, getAllOrders);
router.get('/stats', verifyTokenAndAdmin, getMonthlyIncome);
module.exports = router;