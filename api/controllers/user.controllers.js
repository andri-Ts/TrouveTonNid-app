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
  const tokenUserId = req.userId; // changement de "place" via verifyToken (donc pas dans res.cookies)
  const { password, ...restBody } = req.body;

  if (id != tokenUserId)
    // si c'est pas le même id, on ne throw
    return res.status(403).json({ success: false, message: 'Not Authorized' });

  try {
    const updateData = { ...restBody };

    if (password) updateData.password = await bcrypt.hash(password, 5);

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

export const deletUser = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete users' });
  }
};
