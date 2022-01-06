const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    // TODO: create username field
    username: {
      type: String,
      unique: true,
      required: true,
      
    }
    // TODO: create email field
    
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
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

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
