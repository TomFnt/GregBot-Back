const express = require('express');

const router = express.Router();

const dialogController= require('../../controller/v1/index')

router.get('/', dialogController.home)
router.get('/test', dialogController.test)

router.get('/dialog/question', dialogController.findAllQuestion)

router.get('/dialog/answer/:id', dialogController.answer)

module.exports = router;
