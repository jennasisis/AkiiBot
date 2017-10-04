//shards the bot
const Discord = require('discord.js'); 
const Manager = new Discord.ShardingManager('./akiibot.js');
Manager.spawn(2);

//keeps the bot online because glitch doeSNT ALLOW IT OFFLINE FOR MORE THAN 5 MINUTES :hyperree:
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
