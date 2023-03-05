const mongoose = require('mongoose');

const { Schema, model } = mongoose;

// defining schema
const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, min: 10 }, // min is for min length of string(username)
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// defining model
const UserModel = model('User', UserSchema);

// exporting model
module.exports = UserModel;
