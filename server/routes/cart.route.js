const router = require('express').Router();
const {
  createCart,
  editCart,
  deleteCart,
  getCart,
  getAllCarts
} = require('../controller/cart.controller');
const { 
  verifyToken,
  verifyTokenAndAutorization,
  verifyTokenAndAdmin
} = require('../middleware/verify');

router.post('/', verifyToken, createCart);
router.put('/:id', verifyTokenAndAutorization, editCart);
router.delete('/:id', verifyTokenAndAutorization, deleteCart);
router.get('/:id', verifyTokenAndAutorization, getCart);
router.get('/:id', verifyTokenAndAdmin, getAllCarts);
module.exports = router;