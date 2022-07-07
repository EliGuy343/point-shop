const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user.js');
require('dotenv').config();

PORT = process.env.PORT || 8000
mongoose
  .connect(process.env.DB_URL)
  .then(() =>console.log('Sever Successfully connected to database'))
  .catch(err=>console.log(err)); 

app.use(express.json());
app.use('/api/users', userRoute);
app.listen(PORT, () => {
  console.log(`backend is running on server ${PORT}`);
});