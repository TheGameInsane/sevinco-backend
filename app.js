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
const path = require('path')
const { MongoClient } = require('mongodb')

try {
    try {
        const url = process.env.ALT_MONGO_URI
        const client = new MongoClient(url)

        global.client = client;

        client.connect();
        console.log('Connected successfully to server');
    } catch (error) {
        console.log(error)
    }

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Connected to Database.')
} catch (error) {
    console.log('Error occured while connecting to Database.')
}

app.use(cors({
    origin: [
        // 'http://localhost:3000',
        'https://sevinco.herokuapp.com'],
    credentials: true,
}))

app.use(session({
    secret: 'theDevIsVinayLonpande',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());

app.use('/api', routes)

app.get('/forbidden', (req, res) => {
    // res.redirect('http://localhost:3000/menu')
    res.redirect('https://sevinco.herokuapp.com/menu')
})


app.use(express.static(path.join(__dirname, 'build')))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => console.log(`Listening to Port : ${port}`))