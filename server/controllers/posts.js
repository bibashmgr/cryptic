import Post from '../models/Post.js';

export const createPost = async (req, res) => {
  try {
    const newPost = await new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getMyPosts = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getSavedPosts = async (req, res) => {
  try {
    const filterPosts = [];
    const posts = await Post.find();
    const savedPosts = posts.map((post) => {
      if (post.saved.includes(req.params.id)) {
        filterPosts.push(post);
      }
    });
    res.status(200).json(filterPosts);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const likePost = async (req, res) => {
  try {
    const filterPost = await Post.findById(req.params.id);
    if (!filterPost.likes.includes(req.body.userId)) {
      await filterPost.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('Liked');
    } else {
      await filterPost.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('Disliked');
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const savePost = async (req, res) => {
  try {
    const filterPost = await Post.findById(req.params.id);
    if (!filterPost.saved.includes(req.body.userId)) {
      await filterPost.updateOne({ $push: { saved: req.body.userId } });
      res.status(200).json('Saved');
    } else {
      await filterPost.updateOne({ $pull: { saved: req.body.userId } });
      res.status(200).json('Unsaved');
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
