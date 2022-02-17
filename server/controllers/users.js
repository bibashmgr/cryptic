// import bcrypt from 'bcrypt';

import Users from '../models/users.js';

export const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const registerUser = async (req, res) => {
  const user = req.body;
  const newUser = new Users(user);
  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(newUser.password, salt);
    // newUser.password = hashPassword;
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
