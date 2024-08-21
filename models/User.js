const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = Schema(
  { 
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
 },
  email: {
        type: String,
        required: true,
        unique: true,
        match: [`/^\S+@\S+\.\S+$/`, 'Please enter a valid email address'],
 },
    thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  ], 
 },
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);
    
  
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
  

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })


// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
