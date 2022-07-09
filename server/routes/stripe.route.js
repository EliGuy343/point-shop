const router = require('express').Router();
const {payment} = require('../controller/stripe.controller');
router.post('/', payment);
module.exports = router;