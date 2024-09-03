const mongoose = require("mongoose");

const petbuySchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  pet: {
    type: mongoose.Schema.ObjectId,
    ref: "Pet",
    required: true,
  },
  numofpet: {
    type: Number,
    required: true,
  },
  
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default:Date.now
  },
});

const Petbuy = mongoose.model("PetBooking", petbuySchema);

module.exports = Petbuy;
