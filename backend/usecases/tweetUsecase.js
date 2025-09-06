const TweetRepository = require('../repositories/tweetRepository');

class TweetUsecase {
    async postTweet({ content, author, imageUrl, videoUrl, quotedTweet }) {
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

            const result = await TweetRepository.postTweet(tweetData);
            return result;
        } catch (error) {
            return { error: error.message };
        }
    }

   
}

module.exports = new TweetUsecase();