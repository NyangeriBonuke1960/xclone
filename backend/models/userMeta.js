const mongoose = require('mongoose');

const UserMetaSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    likedTweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        default: []
    }],
    bio: {
        type: String,
        maxLength: 160,
        default: ''
    },
    location: {
        type: String,
        maxLength: 30,
    },
    website: {
        type: String,
        maxLength: 100,
        default: ''
    },
    birthdate: {
        type: Date,
        default: null
    },
    profileImageUrl: {
        type: String,
        default: ''
    },
    coverImageUrl: {
        type: String,
        default: ''
    },
},
{
    timestamps: true
})