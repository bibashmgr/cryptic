import express from 'express';

const router = express.Router();

import { getProfile, getUser, getUsers } from '../controllers/users.js';
import { getVerify } from '../middlewares/verify.js';

router.get('/profile', getVerify, getProfile);
router.get('/:id', getVerify, getUser);
router.get('/', getVerify, getUsers);

export default router;
