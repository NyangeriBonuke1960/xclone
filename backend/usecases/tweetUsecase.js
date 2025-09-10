const TweetRepository = require('../repositories/tweetRepository');

class TweetUsecase {
    async postTweet({ content, author, imageUrl, videoUrl, quotedTweet, replyTo }) {
        try {
            if(!content || !author){
                return {error: 'Content and author are required'};
            } 
            const tweetData = {
                content,
                author,
            }

            if(imageUrl) tweetData.imageUrl = imageUrl;
            if(videoUrl) tweetData.videoUrl = videoUrl;
            if(quotedTweet) tweetData.quotedTweet = quotedTweet
            if(replyTo) tweetData.replyTo = replyTo

            const result = await TweetRepository.postTweet(tweetData);
            console.log(result);
            console.log(result._id)
            const tweetMeta = await TweetRepository.createTweetMetadata(result._id);
            console.log(tweetMeta)

            if (result.replyTo !== null){
                await TweetRepository.postReply(result.replyTo, result._id);
            }

            return result;
        } catch (error) {
            return { error: error.message };
        }
    }

   
}

module.exports = new TweetUsecase();