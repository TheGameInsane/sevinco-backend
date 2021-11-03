require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const routes = require('./routes')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const discordStrat = require('./strategies/discord')
const MongoStore = require('connect-mongo')
const cors = require('cors')

try {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Connected to Database.')
} catch (error) {
    console.log('Error occured while connecting to Database.')
}

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}))

app.use(session({
    secret: 'SECRETS',
    cookie: {
        maxAge: 60000 * 60 * 24,
        sameSite: "false"
    },
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api', routes)

app.listen(port, () => console.log(`Listening to Port : ${port}`))