const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');

const {
  createpetBuy,
  getpetBuy,
} = require('../controllers/petbuyController');

// Protected routes (user must be logged in)
router.route('/').get(isLoggedIn, getpetBuy).post(isLoggedIn, createpetBuy);

module.exports = router;
