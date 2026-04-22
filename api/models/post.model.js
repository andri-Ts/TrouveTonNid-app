import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: String,
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    photos: {
      type: [String], // tab d'images
      default: [],
    },
    address: String,
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    bedroom: Number,
    bathroom: Number,
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    transaction: {
      type: String,
      enum: ['buy', 'rent'],
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
    // 🔥 AJOUT ICI de oistDetail
    postDetail: {
      desc: String,
      utilities: String,
      pet: String,
      income: String,
      size: Number,
      school: Number,
      bus: Number,
      restaurant: Number,
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model('Post', postSchema); // créer un model appeller 'Post' basé sur le schéma postSchema
export default Post;
