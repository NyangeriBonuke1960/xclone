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

    async likeTweet(tweetId, userId){
        try{
           const tweetMetadata = await TweetMetadata.findOne({tweet: tweetId})
           if(!tweetMetadata){
                return { error: 'Tweet metadata not found' }
           }
           const alreadyLiked = tweetMetadata.likes.includes(userId)
           if(alreadyLiked){
                metadata.likes.pull(userId)
           }
           else{
                metadata.likes.push(userId)
           }
           await metadata.save()
           return metadata
        }
        catch(error){
            return { error: error.message }
        }
    }
}

module.exports = new TweetRepository();