import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    photo: {
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
      required: [true, 'Transaciton type required'],
    },
    property: {
      type: String,
      enum: ['apartment', 'house', 'condo', 'land'],
      required: [true, 'Property type required'],
    },
    // chaque post appartient à un User (relation N-1)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User required'],
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model('Post', postSchema); // créer un model appeller 'Post' basé sur le schéma postSchema
export default Post;
