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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quotedTweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        default: null
    }
},
{
    timestamps: true
})

const Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;