import express from 'express';

const router = express.Router();

// controllers
import { loginUser, registerUser } from '../controllers/auth.js';

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;
