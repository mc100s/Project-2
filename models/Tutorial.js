const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorialSchema = new Schema(
  {
    category: {
      type: String,
      enum: ['html/css', 'javascript', 'react', 'nodejs', 'express', 'mongodb']
    },
    imgUrl: { type: String },
    color: { type: String },
    type: { type: String, enum: ['article', 'video'] },
    link: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    nbOfLikes: { type: Number, default: 0 },
    _creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const Tutorial = mongoose.model('Tutorial', tutorialSchema);
module.exports = Tutorial;
