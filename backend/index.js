const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://127.0.0.1:27017/mydatabase';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });