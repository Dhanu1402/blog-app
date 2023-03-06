const mongoose = require('mongoose');

const { Schema, model } = mongoose;

// defining schema
const PostSchema = new Schema(
  {
    title: String,
    summary: String,
    cover: String, // files / images
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

// defining model
const PostModel = model('Post', PostSchema);

// exporting model
module.exports = PostModel;
