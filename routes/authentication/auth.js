const router = require('express').Router()
const passport = require('passport')
const User = require('../../schemas/user')

router.get('/discord', passport.authenticate('discord'))

router.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: '/forbidden'
}), (req, res) => {
    res.redirect("https://sevinco.herokuapp.com/")
    // res.redirect('http://localhost:3000/menu')
})

router.get('/', async (req, res) => {
    if(req.user) {
        const { discordId, discordUser, avatar, guilds, discordTag } = req.user

        await User.findOneAndUpdate({discordId}, {
            discordUser,
            discordTag,
            avatar,
            guilds
        }, {new: true}).then(res.send(req.user))
        
    } else {
        res.sendStatus(401)
    }
})

module.exports = router