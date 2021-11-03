const getBotGuilds = require('../../utils/api')
const User = require('../../schemas/user')
const router = require('express').Router()
const { getMutualGuilds } = require('../../utils/utils')

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

module.exports = router