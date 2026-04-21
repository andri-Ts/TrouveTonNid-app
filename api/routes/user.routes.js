import express from 'express';
import {
  deletUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/user.controllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const userRouter = express.Router();

userRouter.get('/', verifyToken, getUsers);
userRouter.get('/:id', verifyToken, getUser);
userRouter.put('/:id', verifyToken, updateUser);
userRouter.delete('/:id', verifyToken, deletUser);

export default userRouter;
