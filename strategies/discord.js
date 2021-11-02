const DiscordStrategy = require('passport-discord').Strategy
const passport = require('passport')
const User = require('../schemas/user')

passport.serializeUser((user, done) => {
    done(null, user.discordId)
})

passport.deserializeUser(async (discordId, done) => {
    const user = await User.findOne({ discordId })
    if(user)
        done(null, user)
})

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: ['identify', 'guilds']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const findUser = await User.findOneAndUpdate({ discordId: profile.id }, {
            discordUser: profile.username,
            discordTag: `${profile.username}#${profile.discriminator}`,
            avatar: profile.avatar,
            guilds: profile.guilds
        }, {new:true})
    
        if(findUser) {
            return done(null, findUser)
        } else {
            const newUser = await User.create({
                discordId: profile.id,
                discordUser: profile.username,
                discordTag: `${profile.username}#${profile.discriminator}`,
                avatar: profile.avatar,
                guilds: profile.guilds
            })
            return done(null, newUser)
        }
    } catch (error) {
        console.log(error)
    }
}))