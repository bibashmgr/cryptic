import express from 'express';

const router = express.Router();

// controllers
import { getUser } from '../controllers/users.js';

router.get('/:id', getUser);

export default router;
