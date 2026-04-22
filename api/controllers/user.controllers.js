import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // récup tous les users
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get users!' });
  }
};

// ----------------------------------------------------------------------------

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get user!' });
  }
};

// ----------------------------------------------------------------------------

export const updateUser = async (req, res) => {
  // Comparer le id cookie et id user
  const id = req.params.id;
  const tokenUserId = req.user.id; // changement de "place" via verifyToken (donc pas dans res.cookies)
  const { password, avatar, ...restBody } = req.body;

  if (id != tokenUserId)
    return res
      .status(403)
      .json({ success: false, message: 'False ID! Not Authorized!' }); // si c'est pas le même id, on throw

  try {
    const updateData = { ...restBody };

    if (password) updateData.password = await bcrypt.hash(password, 5);

    if (avatar) updateData.avatar = avatar;

    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData }, // met à jour uniquement les champs envoyés
      { new: true, runValidators: true }, // retourne la version mise à jour, pas l’ancienne | applique les règles de ton schema Mongoose
    );

    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to udapte user!' });
  }
};

// ----------------------------------------------------------------------------

export const deletUser = async (req, res) => {
  // Comparer le id cookie et id user
  const id = req.params.id;
  const tokenUserId = req.user.id; // changement de "place" via verifyToken (donc pas dans res.cookies)

  if (id != tokenUserId) {
    return res.status(403).json({
      success: false,
      message: 'Not Authorized',
    }); // si c'est pas le même id, on throw
  }

  try {
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deletUser) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }

    res
      .status(200)
      .json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};
