const bcrypt = require('bcrypt')
const mAnswer = require('../models/answer.model')
const mQuestion = require('../models/question.model')

module.exports = {
  allAnswer (req, res, next) {
    mAnswer
      .find({questionId: req.params.idquestion})
      .populate('userId')
      .exec()
      .then( answers => {
        res.status(200).json({
          message: 'all answer',
          answers
        })
      })
      .catch(err => {
        res.status(400).json({
          message: err
        })
      })
  },

  createAnswer (req, res, next) {
    let usrId = req.headers.decoded.id
    let answer = {
      content: req.body.content,
      userId: usrId,
      questionId: req.params.idquestion
    }
    mAnswer
      .create(answer)
      .then( newAnswer => {
        res.status(200).json({
          message: 'Thank you for your answer',
          answer : newAnswer
        })
      })
      .catch( err => {
        res.json({
          err
        })
      })
  },

  upVote (req, res, next) {
    let userId = req.headers.decoded.id
    mAnswer
      .findOne({_id: req.params.idAnswer})
      .then( answer => {
        if ( answer.userId == userId) {
          res.json({
            message:' Can not vote up your own answer '
          })
        } else {
          let voteLikes = answer.likes.indexOf(userId)
          let voteUnLikes = answer.unLikes.indexOf(userId)

          if ( voteLikes == -1 && voteUnLikes == -1) {
            answer.likes.push(userId)
            answer
              .save()
              .then(newAnswer => {
                res.status(200).json({
                  message: `id ${userId} voted up this answer`,
                  answer: newAnswer
                })
              })
          } else {
            res.json({
              message: 'You have voted this answer'
            })
          }
        }
      })
      .catch ( err => {
        res.json({
          error: err
        })
      })
  },

  downVote (req, res, next) {
    let userId = req.headers.decoded.id
    mAnswer
      .findOne({_id: req.params.idAnswer})
      .then( answer => {
        if ( answer.userId == userId) {
          res.json({
            message:' Can not vote up your own answer '
          })
        } else {
          let voteLikes = answer.likes.indexOf(userId)
          let voteUnLikes = answer.unLikes.indexOf(userId)

          if ( voteLikes == -1 && voteUnLikes == -1) {
            answer.unLikes.push(userId)
            answer
              .save()
              .then(newAnswer => {
                res.status(200).json({
                  message: `id ${userId} voted down this answer`,
                  answer: newAnswer
                })
              })
          } else {
            res.json({
              message: 'You have voted this answer'
            })
          }
        }
      })
      .catch ( err => {
        res.json({
          error: err
        })
      })
  },

  deleteAnswer (req, res, next) {

  }
}