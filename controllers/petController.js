const Pet = require('../models/pet');

// Adds a pet in the DB
exports.addPet = async (req, res) => {
  try {
    const userData = req.user;
    const {
      name,
      age,
      addedPhotos,
      colour,
      description,
      breed,
      price,
    } = req.body;
    const pet = await Pet.create({
      owner: userData.id,
      name,
      age,
      photos: addedPhotos,
      colour,
      description,
      breed,
      price,
    });
    res.status(200).json({
      pet,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Returns user specific pet
exports.userPet = async (req, res) => {
  try {
    const userData = req.user;
    const id = userData.id;
    res.status(200).json(await Pet.find({ owner: id }));
  } catch (err) {
    res.status(500).json({
      message: 'Internal serever error',
    });
  }
};

// Updates a pet
exports.updatePet = async (req, res) => {
  try {
    const userData = req.user;
    const userId = userData.id;
    const {
      id,
      name,
      age,
      addedPhotos,
      colour,
      description, 
      breed,
      price,
    } = req.body;

    const pet = await Pet.findById(id);
    if (userId === pet.owner.toString()) {
      pet.set({
        name,
        age,
        photos: addedPhotos,
        colour,
        description,
        breed,
        price,
      });
      await pet.save();
      res.status(200).json({
        message: 'pet detail updated!',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Returns all the places in DB
exports.getPet = async (req, res) => {
  try {
    const pet = await Pet.find();
    res.status(200).json({
      pet,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

// Returns single place, based on passed place id
exports.singlePet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    if (!pet) {
      return res.status(400).json({
        message: 'Place not found',
      });
    }
    res.status(200).json({
      pet,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal serever error',
    });
  }
};

// Search Places in the DB
exports.searchPet = async (req, res) => {
  try {
    const searchword = req.params.key;

    if (searchword === '') return res.status(200).json(await Pet.find())

    const searchMatches = await Pet.find({ description: { $regex: searchword, $options: "i" } })

    res.status(200).json(searchMatches);
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Internal serever error 1',
    });
  }
}