const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = process.env["TOKEN"]
const myExports = require('./src/helper.js');
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
  myExports.attack_brown(message)
  myExports.pray(message)
  myExports.runCompletion(message,message.content.toUpperCase())
});


client.login(token)

//Used to keep the program "alive"
const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})