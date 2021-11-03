const routes = require('./authentication/auth')
const router = require('express').Router()
const discordRoutes = require('./authentication/discord')

router.use('/auth', routes)
router.use('/discord', discordRoutes)

module.exports = router