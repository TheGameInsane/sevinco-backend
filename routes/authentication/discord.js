const getBotGuilds = require('../../utils/api')
const User = require('../../schemas/user')
const router = require('express').Router()
const { getMutualGuilds } = require('../../utils/utils')
const prefixModel = require('../../model/guild-prefix')
const { MongoClient } = require('mongodb')

router.get('/guilds', async (req, res) => {
    const botGuilds = await getBotGuilds()
    const { discordId, discordUser, avatar, guilds, discordTag } = req.user

        const user = await User.findOneAndUpdate({discordId}, {
            discordUser,
            discordTag,
            avatar,
            guilds
        }, {new: true})
    if(user) {
        const userGuilds = user.get('guilds')
        const mutualGuilds = getMutualGuilds(userGuilds, botGuilds)
        res.send(mutualGuilds)
    } else {
        return res.sendStatus(401)
    }
})

router.get('/prefix', async (req, res) => {
    try {
        const dbName = 'myFirstDatabase'
        const db = global.client.db(dbName)
        const collection = db.collection('wokcommands-prefixes')
        let col = await collection.find({}).toArray()

        console.log('Data Sent')

        res.send(col)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router