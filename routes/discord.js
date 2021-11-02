const getBotGuilds = require('../utils/api')
const User = require('../schemas/user')
const router = require('express').Router()
const { getMutualGuilds } = require('../utils/utils')

router.get('/guilds', async (req, res) => {
    const guilds = await getBotGuilds()
    const user = await User.findOne({ discordId: req.user.discordId })
    if(user) {
        const userGuilds = user.get('guilds')
        const mutualGuilds = getMutualGuilds(userGuilds, guilds)
        res.send(mutualGuilds)
    } else {
        return res.sendStatus(401)
    }
})

module.exports = router