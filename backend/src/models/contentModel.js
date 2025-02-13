import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Content = mongoose.model('Content', contentSchema);

export default Content;