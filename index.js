
const { Client, Events, GatewayIntentBits } = require('discord.js');
const lib = require("./src/helper.js")
const token = process.env["TOKEN"]
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", (message) => {
  lib.attack_brown(message);
});

// Log in to Discord with your client's token
client.login(token)


const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})