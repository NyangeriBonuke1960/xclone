const Tweet = require('../models/tweetSchema');

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
}

module.exports = new TweetRepository();