const express = require('express')
const router = express.Router()
const { 
  allAnswer,
  createAnswer,
  upVote,
  downVote,
  deleteAnswer
} = require ('../controllers/answer')
const {auth} = require('../middleware/auth')


/* GET users listing. */
router.get('/:idquestion', auth, allAnswer)
router.post('/:idquestion/add-answer', auth, createAnswer)
router.put('/:idquestion/voteup/:idAnswer', auth, upVote)
router.put('/:idquestion/votedown/:idAnswer', auth, downVote)
router.delete('/:idquestion/delete/:idAnswer', auth, deleteAnswer)

module.exports = router;
