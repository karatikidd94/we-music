const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    artist: {
        type: String,

    },
    genre: {
        type: String,
    },
    spotifyLink: {
        type: String,
    },
    // user: {
    //     type: Schema.Types.ObjectId, 
    //     ref: 'User', 
    //     required: true
    // },
    // userName: String,
    // userAvatar: String

  }, {
    timestamps: true
  });
  
module.exports = mongoose.model('Profile', profileSchema);