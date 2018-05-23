const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: String,
  description: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  unLikes: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
},{
  timestamps: true
});

const question = mongoose.model('question', questionSchema);
module.exports = question
