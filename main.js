const Discord = require('discord.js'); 
const Manager = new Discord.ShardingManager('./akiibot.js');
Manager.spawn(2);