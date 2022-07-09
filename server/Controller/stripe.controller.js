const stripe = require('stripe')(process.env.PAY_SECRET);

const payment = (req, res) => {
  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: 'usd',
  }, (stripeErr, stripeRes) => {
    if(stripeErr) {
      return res.status(500).json(stripeErr);
    }
    res.status(200).json(stripeRes);

  });
}

module.exports = {
  payment
}