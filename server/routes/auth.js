import express from 'express';

import { getVerify } from '../middlewares/verify.js';

const router = express.Router();

import { loginUser, registerUser } from '../controllers/auth.js';

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;
