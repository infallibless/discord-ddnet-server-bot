const { Client } = require('discord.js');
const axios = require('axios');
const client = new Client({ intents: 513 });
const botoken = "HERE"
const ip = 'SERVER_IP';
const port = 8341; // port
const api = `http://${ip}:${port}/api/`;
console.log("enjoy")
client.once('ready', () => {
    console.log(`${client.user.tag} online`);
    up();
    setInterval(up, 10 * 60 * 1000); 
});

async function up() {
    try {
        const response = await axios.get(`${api}status`);
        const data = response.data;
        const playerCount = data?.players?.count;
        client.user.setActivity(`${playerCount} players active`, { type: 'PLAYING' });
        console.log(`playing status updated`);
    } catch (error) {
        console.error('failed to retrieve server status:', error.message);
        client.user.setActivity(`unknown server`, { type: 'PLAYING' });
    }
}




client.login(botoken);
