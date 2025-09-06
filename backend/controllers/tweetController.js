const TweetUsecase = require('../usecases/tweetUsecase');

class TweetController {
    async postTweet(req, res){
        try{
            const {content, author, imageUrl, videoUrl, quotedTweet} = req.body;
            const result = await TweetUsecase.postTweet({content, author, imageUrl, videoUrl, quotedTweet})
            if(result.error) {
                return res.status(400).json({error: result.error});
            }
            return res.status(201).json(result);
        }
        catch(error){
            res.status(500).json({error: error.message});
        }
    }

 
}

module.exports = new TweetController();