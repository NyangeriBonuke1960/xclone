class UserMeta{
    constructor({user, followers = [], following = [], likedTweets = [], bio = '', location = '', website = '', birthdate = null, profileImageUrl = '', coverImageUrl = ''}){
        this.user = user;
        this.followers = followers;
        this.following = following;
        this.likedTweets = likedTweets;
        this.bio = bio;
        this.location = location;
        this.website = website;
        this.birthdate = birthdate;
        this.profileImageUrl = profileImageUrl;
        this.coverImageUrl = coverImageUrl    
    }
}

module.exports = UserMeta