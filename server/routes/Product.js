const router = require('express').Router();
const { 
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getAllProducts
} = require('../Controller/product.controller');
const { 
  verifyToken,
  verifyTokenAndAutorization,
  verifyTokenAndAdmin
} = require('../middleware/verify');

router.post('/', verifyTokenAndAdmin, createProduct);
router.put('/:id', verifyTokenAndAdmin, editProduct);
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);
router.get('/:id', getProduct);
router.get('/', getAllProducts);
module.exports = router;