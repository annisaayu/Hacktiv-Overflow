const express = require('express');
const router = express.Router()
const { 
        findAll,
        detailQuestion,
        create, upVote,
        downVote,
        deleteQuestion
      } = require ('../controllers/question')
const {auth} = require('../middleware/auth');


/* GET users listing. */
router.get('/', auth, findAll)
router.get('/:id', auth, detailQuestion)
router.post('/add', auth, create)
router.put('/:id/voteup', auth, upVote)
router.put('/:id/votedown', auth, downVote)
router.delete('/:id/delete', auth, deleteQuestion)

module.exports = router;
