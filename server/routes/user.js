const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats
} = require('../Controller/user.controller');
const { 
  verifyToken,
  verifyTokenAndAutorization,
  verifyTokenAndAdmin
} = require('../middleware/verify');

const router = require('express').Router();
router.put('/:id',verifyTokenAndAutorization, updateUser);
router.delete('/:id',verifyTokenAndAdmin, deleteUser);
router.get('/find/:id', verifyTokenAndAdmin, getUser);
router.get('/', verifyTokenAndAdmin, getAllUsers);
router.get('/stats', verifyTokenAndAdmin, getUserStats);
module.exports = router;