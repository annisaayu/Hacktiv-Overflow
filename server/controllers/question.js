const bcrypt = require('bcrypt')
const mQuestion = require('../models/question.model')
const mAnswer = require('../models/answer.model')
const mongoose = require('mongoose')

module.exports = {
  findAll (req, res, next) {    
    let user = req.headers.decoded.id
    mQuestion
      .find()
      .populate('userId')
      .exec()
      .then(questions => {
        res.status(200).json({
          message: 'all questions',
          questions
        })
      })
      .catch( err => {
        res.status(400).json({err})
      })
  },
  detailQuestion (req, res, next) {
    mQuestion
      .findOne({_id: req.params.id})
      .populate('userId')
      .exec()
      .then(question => {
        message: `question with id ${id}`
        question
      })
      .catch( err => {
        res.status(400).json({
          error: err
        })
      })
  },
  create (req, res, next) {
    const userId = req.headers.decoded.id
    let question = req.body
    question.userId = userId
    console.log(userId);
    
    mQuestion
      .create(question)
      .then( question => {
        res.status(200).json({
          message: 'success add question',
          question
        })
      })
      .catch( err => {
        res.status(400).json({err})
      })
  },
  upVote (req, res, next) {
    let user = req.headers.decoded.id
    mQuestion
      .findOne({_id: req.params.id})
      .then( question => {
        if( user == question.userId ) {          
          res.json({
            message: 'Can not vote up your own question'
          })
        } else {
          let voteLikes = question.likes.indexOf(user)
          let voteUnLikes = question.unLikes.indexOf(user)
          
          if ( voteLikes == -1 && voteUnLikes == -1) {
            question.likes.push(user)
            question
              .save()
              .then(newQ => {
                res.status(200).json({
                  message: `id ${user} voted up this question`,
                  question: newQ
                })
              })
          } else {
            res.json({
              message: 'You have voted this question'
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
    let user = req.headers.decoded.id
    mQuestion
      .findOne({_id: req.params.id})
      .then( question => {
        if( user === question.userId ) {
          res.json({
            message: 'Can not vote down your own question'
          })
        } else {
          let voteLikes = question.likes.indexOf(user)
          let voteUnLikes = question.unLikes.indexOf(user)
          
          if ( voteUnLikes == -1 && voteLikes == -1) {
            question.unLikes.push(user)
            question
              .save()
              .then(newQ => {
                res.status(200).json({
                  message: `id ${id} voted down this question`,
                  question: newQ
                })
              })
          } else {
            res.json({
              message: 'You have voted this question'
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
  deleteQuestion (req, res, next) {
    mQuestion
      .findOne({_id: req.params.id})
      .then( question => {
        if (!question) {
          res.status(404).json({message: 'not found'})
        } else {
          mAnswer
            .remove({ questionId: question.id })
            .then( result => {
              res.status(200).json({
                message: 'question and answers of this question has been delete',
                result
              })
            })
            .catch( err => {
              res.status(400).json({err})
            })

        }
      })
  }
}