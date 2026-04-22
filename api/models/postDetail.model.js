import mongoose from 'mongoose';

const postDetailSchema = new mongoose.Schema({
  desc: {
    type: String,
  },
  utilities: {
    type: String,
  },
  pet: {
    type: String,
  },
  income: {
    type: String,
  },
  size: {
    type: Number,
  },
  school: {
    type: Number,
  },
  bus: {
    type: Number,
  },
  restaurant: {
    type: Number,
  },
  // Chaque detail de post n'appartine qu'à un post (et vice versa)
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: [true, 'Post required'],
    unique: true, // garantit la relation 1-1
  },
});

const PostDetail = mongoose.model('PostDetail', postDetailSchema);
export default PostDetail;
