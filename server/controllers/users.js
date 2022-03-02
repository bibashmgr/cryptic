import User from '../models/User.js';

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, createdAt, updatedAt, ...others } = user._doc;
    !user
      ? res.status(404).json('User not found')
      : res.status(200).json(others);
  } catch (err) {
    res.status(404).json(err);
  }
};
