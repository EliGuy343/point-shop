const router = require('express').Router();

router.get('/',(req, res) => {
  return res.send('test');
})

module.exports = router;