import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 6,
      max: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
    avatar: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('Users', UserSchema);

export default User;
