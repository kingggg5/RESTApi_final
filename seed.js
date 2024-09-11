const mongoose = require('mongoose');
const User = require('./models/user');

const users = [
  { name: 'Test Smith', age: 30, email: 'test@example.com', avatarUrl: 'https://exampele.com/alice.jpg' },
  { name: 'Bobt Johnson', age: 25, email: 'bowb@example.com', avatarUrl: 'https://example.com/bob.jpg' }
];

mongoose.connect('mongodb://mongo:27017/userdb')
  .then(() => {
    console.log('Connected to MongoDB');
    return User.deleteMany({}); // Clear existing users to avoid duplicates
  })
  .then(() => User.insertMany(users))
  .then(() => {
    console.log('Database seeded');
    mongoose.disconnect();
  })
  .catch(err => {
    if (err.code === 11000) {
      console.error('Duplicate key error:', err.message);
    } else {
      console.error('Error seeding database:', err);
    }
    mongoose.disconnect();
  });
