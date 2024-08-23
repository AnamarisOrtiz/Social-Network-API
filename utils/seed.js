const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const thoughts = [];

  // Generate 20 users
  for (let i = 0; i < 20; i++) {
    const username = getRandomName().toLowerCase().replace(' ', '');
    const email = `${username}@example.com`;

    users.push({
      username,
      email,
      thoughts: [],
      friends: [],
    });
  }

  // Insert users into the database
  const createdUsers = await User.insertMany(users);

  // Generate 10 thoughts and randomly associate them with users
  for (let i = 0; i < 10; i++) {
    const thoughtText = getRandomThought();
    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const userId = createdUsers[randomUserIndex]._id;

    const newThought = await Thought.create({ thoughtText, username: createdUsers[randomUserIndex].username });

    // Add the thought to the user's thoughts array
    await User.findByIdAndUpdate(userId, { $addToSet: { thoughts: newThought._id } });

    thoughts.push(newThought);
  }

  // Randomly assign friends to each user
  for (let i = 0; i < createdUsers.length; i++) {
    const userId = createdUsers[i]._id;
    const friendsToAdd = createdUsers
      .filter((_, index) => index !== i) // Exclude the user itself from the list of potential friends
      .slice(0, Math.floor(Math.random() * 5)); // Select up to 5 friends randomly

    const friendIds = friendsToAdd.map(friend => friend._id);

    await User.findByIdAndUpdate(userId, { $addToSet: { friends: { $each: friendIds } } });
  }

  console.table(createdUsers);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
