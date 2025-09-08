const mongoose = require('mongoose');

const TweetMetadataSchema = new mongoose.Schema({
    tweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        required: true,
        unique: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    retweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    replies: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Tweet'
    }],
    views: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

},
{
    timestamps: true
})

const TweetMetadata = mongoose.model('TweetMetadata', TweetMetadataSchema);
module.exports = TweetMetadata;