import Post from '../models/post.model.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().limit(10); // récup tous les posts (10 posts max), peut ajouter sort() pour mettre les récents en premier
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to get posts' });
  }
};

// ----------------------------------------------------------------------------

export const getPost = async (req, res) => {
  const idPost = req.params.id;

  try {
    const post = await Post.findById(idPost);
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to get post' });
  }
};

// ----------------------------------------------------------------------------

export const createPost = async (req, res) => {
  const postBody = req.body;
  const userId = req.user.id; // déjà ajouter par le middleware (verifytoken)

  try {
    const newPost = await Post.create({
      ...postBody,
      user: userId,
    });
    res
      .status(201)
      .json({ success: true, message: 'Post created', data: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to create post' });
  }
};

// ----------------------------------------------------------------------------

export const updatePost = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to update post' });
  }
};

// ----------------------------------------------------------------------------

export const deletePost = async (req, res) => {
  const idPost = req.params.id;

  try {
    const deletePost = await Post.findByIdAndDelete(idPost);
    if (!deletePost) {
      return res
        .status(404)
        .json({ success: false, message: 'Post not found' });
    }
    res
      .status(200)
      .json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to delete post' });
  }
};
