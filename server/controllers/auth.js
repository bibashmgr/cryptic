import bcrypt from 'bcrypt';

import User from '../models/User.js';

export const registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await new User({
      username: req.body.username,
      password: hashPassword,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json('Failed to register');
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(404).json('User not found');
    } else {
      const match = await bcrypt.compare(req.body.password, user.password);
      !match
        ? res.status(400).json('Invalid Password')
        : res.status(200).json('Login Successful');
    }
  } catch (err) {
    res.status(400).json('Failed to login');
  }
};
