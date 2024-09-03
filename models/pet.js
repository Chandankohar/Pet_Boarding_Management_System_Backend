const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  photos: [{ type: String }],
  
  colour: { type: String },
description: {
    type: String,
  },
  breed: {
    type: String,
  },
  
  date: {
    type: Date,
    required: true,
    default:Date.now
  },
  price: {
    type: Number,
  },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
