const Petbuy = require('../models/petbuy');

// Books a pet
exports.createpetBuy= async (req, res) => {
  try {
    const userData = req.user;
    const { pet,numofpet,name,address, phone, price } =
      req.body;

    const petbuy = await Petbuy.create({
      user: userData.id,
      pet,
      numofpet,
      name,
      address,
      phone,
      price,
    });

    res.status(200).json({
      petbuy,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Returns user specific pet bookings
exports.getpetBuy = async (req, res) => {
  try {
    const userData = req.user;
    if (!userData) {
      return res
        .status(401)
        .json({ error: 'You are not authorized to access this page!' });
    }

    const petbuy = await Petbuy.find({ user: userData.id }).populate('pet')

    res
      .status(200).json({ petbuy, success: true })


  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};
