const routes = require('./auth')
const router = require('express').Router()
const discordRoutes = require('./discord')

router.use('/auth', routes)
router.use('/discord', discordRoutes)

module.exports = router