const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // access_token: {
    //     type: String,
    //     required: true
    // },
    // refresh_token: {
    //     type: String,
    //     required: true
    // },
    discordId: {
        type: String,
        required: true,
        unique: true
    },
    discordUser: {
        type: String,
        required: true
    },
    discordTag: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    guilds: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)