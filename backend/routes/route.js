const express = require('express');
const router = express.Router();
const TweetController = require('../controllers/tweetController');
const upload = require('../utils/multer.js')

router.post('/tweet', upload.fields([
    { name: 'imageUrl', maxCount: 1 },
    { name: 'videoUrl', maxCount: 1 }
]), TweetController.postTweet);

module.exports = router;