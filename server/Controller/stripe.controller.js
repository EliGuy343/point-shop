const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

const payment = (req, res) => {
  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: 'usd',
  }, (stripeErr, stripeRes) => {
    if(stripeErr) {
      console.log(stripeErr);
      return res.status(500).json(stripeErr);
    }
    res.status(200).json(stripeRes);

  });
}

module.exports = {
  payment
}