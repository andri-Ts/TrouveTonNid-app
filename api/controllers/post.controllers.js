import Post from '../models/post.model.js';

export const getPosts = async (req, res) => {
  const query = req.query; // contient les requêtes avec les filtres
  // console.log('query:', query);

  try {
    const filter = {}; // objet filtre à utiliser pour filtrer dans mongoose

    if (query.city && query.city.trim() !== '') filter.city = query.city; // .trim() : supprime les espaces vides début et fin => si query n'est pas vide
    if (query.transaction && query.transaction !== '')
      filter.transaction = query.transaction;
    if (query.bedroom) filter.bedroom = parseInt(query.bedroom);
    if (query.minPrice || query.maxPrice) {
      filter.price = {};
      if (query.minPrice) filter.price.$gte = parseInt(query.minPrice); // price >= minPrice
      if (query.maxPrice) filter.price.$lte = parseInt(query.maxPrice);
    }

    const posts = await Post.find(filter)
      .select('-postDetail') // enlève l'objet postDetail de post
      .limit(10); // récup tous les posts (10 posts max), peut ajouter sort() pour mettre les récents en premier
    // console.log(posts);
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
    const post = await Post.findById(idPost).populate({
      path: 'user', // transforme user (ObjectId) en objet User complet
      select: 'username avatar', // on ne récupère que ces champs du user
    });

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
