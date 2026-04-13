import express from 'express';
import { shbeAdmin, shbeLoggedIn } from '../controllers/test.controllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const testRouter = express.Router();

testRouter.get('/shbe-logged-in', verifyToken, shbeLoggedIn);

testRouter.get('/shbe-admin', shbeAdmin);

export default testRouter;
