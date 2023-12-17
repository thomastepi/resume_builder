require('dotenv').config();
const express = require('express');
const app = express();
const database = require('./database');
const userRoute = require('./routes/userRoute');
const port = process.env.PORT || 5000;



app.use(express.json());
app.use('/api/user', userRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});