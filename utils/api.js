// const fetch = require('node-fetch')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function getBotGuilds() {
    const response = await fetch('https://discord.com/api/v8/users/@me/guilds', {
        method: 'GET',
        headers: {
            Authorization: `Bot ${process.env.TOKEN}`
        }
    })
    return response.json()
}

module.exports = getBotGuilds