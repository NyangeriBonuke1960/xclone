const Tweet = require('../models/tweetSchema');
const TweetMetadata = require('../models/tweetMetadata');

class TweetRepository {
    async postTweet(tweetData){
        try{
            const tweet = new Tweet(tweetData);
            return await tweet.save();
        }
        catch(error){
            return { error: error.message };
        }
    }

    async createTweetMetadata(tweetId){
        try{
            if(!tweetId){
                return { error: 'Tweet id required' }
            }
            const metadata = new TweetMetadata({ tweet: tweetId });
            return await metadata.save();
        }
        catch(error){
            return { error: error.message}
        }
    }

    async postReply(replyTo, replyId){
        try{
            await TweetMetadata.findOneAndUpdate(
                {tweet: replyTo},
                {$push: { replies: replyId }}
            )
        }
        catch(error){
            return { error: error.message };
        }
    }
}

module.exports = new TweetRepository();