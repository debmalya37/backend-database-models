import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      require: [true, "password can't be empty"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
