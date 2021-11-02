const router = require('express').Router()
const passport = require('passport')

router.get('/discord', passport.authenticate('discord'))

router.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: '/forbidden'
}), (req, res) => {
    res.redirect('https://sevinco-backend.herokuapp.com/menu')
})

router.get('/', (req, res) => {
    if(req.user) {
        res.send(req.user)
    } else {
        res.sendStatus(401)
    }
})

module.exports = router