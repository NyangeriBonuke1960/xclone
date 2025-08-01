const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    content: {
        type: String,
        requied: true,
        maxLength: 280
    },
    imageUrl: {
        type: String
    },
    videoUrl: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    quotedTweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        default: null
    }
})

const Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;