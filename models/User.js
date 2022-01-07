const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    // TODO: create username field
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true // ask about trimmed
    },
    // TODO: create email field
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        isEmail: true  // might be correct
      },
    },
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
