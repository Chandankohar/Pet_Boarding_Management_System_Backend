const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');

const {
  addPet,
  getPet,
  updatePet,
  singlePet,
  userPet,
  searchPet
} = require('../controllers/petController');

router.route('/').get(getPet);

// Protected routes (user must be logged in)
router.route('/add-pet').post(isLoggedIn, addPet);
router.route('/user-pet').get(isLoggedIn, userPet);
router.route('/update-pet').put(isLoggedIn, updatePet);

// Not Protected routed but sequence should not be interfered with above routes
router.route('/:id').get(singlePet);
router.route('/search/:key').get(searchPet)


module.exports = router;
