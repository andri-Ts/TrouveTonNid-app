import express from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/post.controllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.get('/:id', getPost);
postRouter.post('/', verifyToken, createPost);
postRouter.put('/:id', verifyToken, updatePost);
postRouter.delete('/:id', verifyToken, deletePost);

export default postRouter;
