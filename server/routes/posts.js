import express from 'express';

const router = express.Router();

import { getVerify } from '../middlewares/verify.js';

import {
  createPost,
  getPosts,
  likePost,
  savePost,
  getMyPosts,
  getSavedPosts,
} from '../controllers/posts.js';

router.post('/', getVerify, createPost);
router.get('/', getVerify, getPosts);
router.put('/like', getVerify, likePost);
router.put('/save', getVerify, savePost);
router.get('/myposts', getVerify, getMyPosts);
router.get('/savedposts', getVerify, getSavedPosts);

export default router;
