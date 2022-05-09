import User from '../models/User.js';

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const { password, createdAt, updatedAt, ...others } = user._doc;
    !user
      ? res.status(404).json('User not found')
      : res.status(200).json(others);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, createdAt, updatedAt, ...others } = user._doc;
    !user
      ? res.status(404).json('User not found')
      : res.status(200).json(others);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    const filterUsers = users.map((user) => {
      const { password, createdAt, updatedAt, ...others } = user._doc;
      return others;
    });
    res.status(200).json(filterUsers);
  } catch (error) {
    res.status(404).json(error);
  }
};
