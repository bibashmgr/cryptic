import express from 'express';

const router = express.Router();

// controllers
import { welcomeUser } from '../controllers/index.js';

router.get('/', welcomeUser);

export default router;
