import express from 'express';
import { shbeAdmin, shbeLoggedIn } from '../controllers/test.controllers.js';

const testRouter = express.Router();

testRouter.get('/shbe-logged-in', shbeLoggedIn);

testRouter.get('/shbe-admin', shbeAdmin);

export default testRouter;
