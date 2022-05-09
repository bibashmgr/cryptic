import express from 'express';

const router = express.Router();

import { welcomeUser } from '../controllers/index.js';

router.get('/', welcomeUser);

export default router;
