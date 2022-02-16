import express from 'express';

const router = express.Router();

// controllers
import { getUsers, registerUser } from '../controllers/users.js';

router.get('/', getUsers);
router.post('/', registerUser);

export default router;
