const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
router.get('/', async (req, res) => {
  const { q = '', start = 0, limit = 10 } = req.query;
  try {
    const users = await User.find({
      $or: [{ name: new RegExp(q, 'i') }, { email: new RegExp(q, 'i') }]
    }).skip(parseInt(start)).limit(parseInt(limit));
    const totalCount = await User.countDocuments({
      $or: [{ name: new RegExp(q, 'i') }, { email: new RegExp(q, 'i') }]
    });
    res.setHeader('x-total-count', totalCount);
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: err.message });
  }
});

// Get user by id
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: err.message });
  }
});

// Create user
router.post('/', async (req, res) => {
  const { name, age, email, avatarUrl } = req.body;
  if (typeof age !== 'number') return res.status(400).json({ message: 'Age must be a number' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return res.status(400).json({ message: 'Invalid email' });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const user = new User({ name, age, email, avatarUrl });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: err.message });
  }
});

// Update user by id
router.put('/:userId', async (req, res) => {
  const { name, age, email, avatarUrl } = req.body;
  if (typeof age !== 'number') return res.status(400).json({ message: 'Age must be a number' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return res.status(400).json({ message: 'Invalid email' });

  try {
    const user = await User.findByIdAndUpdate(req.params.userId, { name, age, email, avatarUrl }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: err.message });
  }
});

// Delete user by id
router.delete('/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
