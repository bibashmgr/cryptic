import express from 'express';

const router = express.Router();

// controllers
import { getUser, getUsers } from '../controllers/users.js';

router.get('/:id', getUser);
router.get('/', getUsers);

export default router;
