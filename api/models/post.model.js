import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  illustration: {
    type: String,
    default: null,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  bedroom: {
    type: Number,
  },
  bathroom: {
    type: Number,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  transaction: {
    type: String,
    enum: ['byu', 'rent'],
    required: true,
  },
  proprety: {
    type: String,
    enum: ['apartement', 'house', 'condo', 'land'],
    required: true,
  },
  // chaque post appartient à un User (relation N-1)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});
