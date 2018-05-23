const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = mongoose.Schema({
  content: {
    type: String,
    require: ['true', 'enter your answer']
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'question'
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  unLikes: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
}, {
  timestamps: true
})

let answer = mongoose.model('answer', answerSchema)

module.exports = answer
