import express from 'express';

const router = express.Router();

// controllers
import { loginUser, registerUser } from '../controllers/auth.js';

router.get('/login', loginUser);
router.post('/register', registerUser);

export default router;
