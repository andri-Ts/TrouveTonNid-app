import User from '../models/user.model.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // récup tous les users
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get users!' });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get user!' });
  }
};

export const updateUser = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to udapte user!' });
  }
};

export const deletUser = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete users' });
  }
};
