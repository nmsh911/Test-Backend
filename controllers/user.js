const User = require('../models/user');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const newUser = new User({ username, email, password, phone });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};