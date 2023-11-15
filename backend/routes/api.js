const express = require('express');
const router = express.Router();
const YourModel = require('../models/YourModel'); // Replace with your model

// Fetch all items from the database
router.get('/items', async (req, res) => {
  try {
    const items = await YourModel.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;