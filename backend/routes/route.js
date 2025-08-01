const express = require('express');
const router = express.Router();
const TweetController = require('../controllers/tweetController');

router.post('/tweet', TweetController.postTweet);

module.exports = router;