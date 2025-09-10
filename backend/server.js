const express = require('express');
const app = express();
const dotenv = require('dotenv');
const router = require('./routes/route.js');
dotenv.config();

require('./db.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
}); 