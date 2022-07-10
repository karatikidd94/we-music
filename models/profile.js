const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    artist: {
        name: String,
    },
    genres: {
        slot1: {
            type: String,
            enum: []
        },
        slot2: {
            type: String,
            enum: []
        },
        slot3: {
            type: String,
            enum: []
        },
    },
    img: {
        type: '???',
    },
    spotifyLink: {
        type: link,
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    userName: String,
    userAvatar: String


  }, {
    timestamps: true
  });
  
module.exports = mongoose.model('Profile', profileSchema);