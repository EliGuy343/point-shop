const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
const cartRoute = require('./routes/cart.route');
const orderRoute = require('./routes/order.route');
require('dotenv').config();

PORT = process.env.PORT || 8000
mongoose
  .connect(process.env.DB_URL)
  .then(() =>console.log('Sever Successfully connected to database'))
  .catch(err=>console.log(err)); 

app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(PORT, () => {
  console.log(`backend is running on server ${PORT}`);
});