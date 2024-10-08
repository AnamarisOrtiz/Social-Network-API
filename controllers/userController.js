const User = require('../models/User');
const Thought = require('../models/Thought');
module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate('thoughts')
        .populate('friends');
      res.json(users);
    } catch (err) {
      console.log({ err });
      res.status(500).json(err);
    }
  },

  // Get a single user by its ID and also populate friends and thoughts
  async getSingleUser(req, res) {
    try {
      const user = await User.findById({_id:req.params.userId})
        .populate('thoughts')
        .populate('friends');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a user by its ID
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate({_id: req.params.userId}, req.body, { new: true });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a user by its ID and associated thoughts 
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({_id:req.params.userId});

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      await Thought.deleteMany({ _id: { $in: user.thoughtId } });
      res.json({ message: 'User and associated thoughts deleted!' })
     
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a friend to a user's friend list
  ///api/users/:userId/friends/:friendId ref
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
         req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      ).populate('friends');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove a friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      ).populate('friends');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user), ({message: 'Friend Deleted'});
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
