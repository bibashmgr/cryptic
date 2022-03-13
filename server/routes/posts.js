import express from 'express';

const router = express.Router();

// controllers
import {
  createPost,
  getPosts,
  likePost,
  savePost,
  getMyPosts,
  getSavedPosts,
} from '../controllers/posts.js';

router.post('/', createPost);
router.get('/', getPosts);
router.put('/:id/like', likePost);
router.put('/:id/save', savePost);
router.get('/myposts/:id', getMyPosts);
router.get('/saved/:id', getSavedPosts);

export default router;
