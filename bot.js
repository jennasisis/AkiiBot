//Requirements
const Discord = require('discord.js');
const client = new Discord.Client();
const sleep = require('system-sleep');
const hastebin = require('hastebin-gen');
const reverse = require('reverse-string');
  //variables
var GQuotes = []
var pingBanUsers = ["<@107599228900999168>"]
var dadmode = 0
var akiiID = "107599228900999168"
var botBan = ["[Insert globally banned users here]"]
  //color variables
var green = 3329330
var red = 16711680
var yellow = 16776960
var burple = 7506394

//Boot Sequence
client.on('ready', () => {
  console.log("Bot is online | " + client.guilds.size + " servers");
});
client.on('error', () => {
  console.error("ERROR: BOT UNABLE TO START");
  console.error(err);
});
//The Good Stuff
var prefix = "a-"
client.on('message', message => {
if (message.author.bot) {return};

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var waitTime = ping
function wait(n){
  sleep(((waitTime + n) / 2) * 100^1000);
}

//Ping command
var ping = Math.round(client.ping);
if (message.content.startsWith(prefix + 'ping')) {
  const embed = {
  "title": "Pong! " + Math.round(client.ping) + "ms :ping_pong:",
  "color": burple
};
message.channel.send({ embed });
  console.log('Client Ping reported as ' + ping + 'ms.');
  }

if(message.content.startsWith("<@323213552695508993>")){
  const embed = {
    "title": ":x: Sorry! That's not my prefix!",
    "description": "Do \"a-help\" to find my commands!",
    "color": red
  };
  message.channel.send({ embed });
}

//PressF Command
  if (message.content === (prefix + 'pressF')) {
    const embed = {
      "title": "🇫",
      "color": burple
    };
    message.channel.send({ embed });
}
else if (message.content.startsWith(prefix + 'pressF')) {
  message.mentions.users.first().lastMessage.react("🇫");
}
//Help command
  if (message.content === (prefix + 'help')) {
    message.react('👌');
      const embed = {
  "title": "***Welcome back.***",
  "color": burple,
  "footer": {
    "text": "Help Menu"
  },
  "fields": [
    {
      "name": "**Commands:**",
      "value": "``-`` a-help: This, of course\n``-`` a-ping: Shows your ping\n``-`` a-pressF: Pays Respects to a user, defaults to you if no user is mentioned\n``-`` a-quote: Pull a quote\n``-`` a-storequote: Store a quote to pull later\n``-`` a-coin: Flips a coin\n``-`` a-about: DMs you with information on the bot\n``-`` a-serverinfo: Gives you information on the server\n``-`` a-bean: memey ban command **COMMAND INDEV** \n``-`` a-shame: Shames a mentioned user\n\nTrust me, there are so many other commands on this bot. I just haven't updated the help command in forever :blobsweats:"
    }
  ]
};
message.author.send({ embed });
}
//where does this belong?
Array.prototype.randomElement = function () {
    return GQuotes[Math.floor(Math.random() * GQuotes.length)]
}
//Quote commands
  //storequote command: stores a string to "GQuotes"
if (message.content.startsWith(prefix + 'storequote')) {
  var quote =(message.content.substring(13));
  const embed = {
  "title": "Stored quote in position "  + [GQuotes.length] + ".",
  "color": burple
  };
  message.channel.send({ embed });
GQuotes.push(quote);
}
  //quote command: pulls a random quote from "GQuotes"
if (message.content === (prefix + 'quote')) {
  const embed = {
  "title": GQuotes.randomElement(),
  "color": burple
  };
  message.channel.send({ embed });
}
//Coin command
if (message.content === (prefix + 'coin')) {
var random = Math.floor((Math.random() * 10) + 1);
if(random & 1){
  const embed = {
  "title": "The coin landed on **heads**.",
  "color": burple
  };
  message.channel.send({ embed });  // ODD
} else {
  const embed = {
  "title": "The coin landed on **tails**.",
  "color": burple
  };
  message.channel.send({ embed });    // EVEN
  }
}
//setgame command: This will set the "playing..." status of the bot
if (message.content.startsWith(prefix + 'setgame')){
  if (message.author.id != akiiID){
    const embed = {
    "title": ":x: You do not have permission to use this command.",
    "color": red
  };
  message.channel.send({ embed });
}
  else if(message.content.substring(10) === "" && message.author.id === akiiID){
    client.user.setGame("");
    const embed = {
      "title": ":white_check_mark: Game removed!",
      "color": green
    };
    message.channel.send({ embed });
  }
  else {
    game = message.content.substring(10);
    client.user.setGame(game);
    const embed = {
  "title": ":white_check_mark: New game set!",
  "color": green
};
message.channel.send({ embed });
  }
}
//kill command: This will turn the bot off.
if (message.content.startsWith(prefix + 'kill')){
  if (message.author.id != akiiID){
    const embed = {
    "title": ":x: You don't have permission to use this command.",
    "color": red
  };
  message.channel.send({ embed });
  }
  else {
    const embed = {
  "title": ":warning: Bot turning off. This might take a bit.",
  "color": yellow
};
message.channel.send({ embed });
    client.destroy((err) => {
      console.log(err);
    });
  }
}
//about command: Sends a DM to the user telling them what the bot does
if (message.content === (prefix + 'about')){
  message.react("👌")
  const embed = {
  "color": burple,
  "footer": {
    "text": "About Menu | To find the legal, type \"a-legal\""
  },
  "fields": [
    {
      "name": ":wave: **Hi there! I'm AkiiBot!** :smiley:",
      "value": "\<\<Local Version\>\> \n\nThis bot was made by **Gallium#1327**, hence why I used to be named \"GalliumBot!\" It was further developed by **『 Akii 』#2111**, just so that it would fit what his server needed. \n\nYou can find all the commands for this bot by typing a-help`. **Remember, this bot is still in development.** So most of its features are still buggy. If you encounter any problems, please feel free to contact Gallium or Akii, or open up a [GitHub Issue](http://github.com/jennasisis/AkiiBot/issues)\n\nIf you'd like to join the support server, [use this link!](http://discord.gg/54fVgRw) \n\n**Thanks for using the bot!**"
    }
  ]
};
message.author.send({ embed });
}

//legal command: A command that makes this bot legal, according to the Developers ToS
if(message.content === prefix + "legal"){
  const embed = {
    "title": "Legal Agreement:",
    "description": "By usage of this bot, in any way, shape, or form, you, " + message.author.tag + ", hereby acknowledge that this bot has the permission to log data provided by the [Discord API](https://discordapp.com/developers/docs/intro). This includes user ids, message content, user roles, message edits, etc. \n\nIf you disagree with this legal agreement, feel free to contact the author of this bot, **Akii#2111**, or anyone on your guild/server with the power to kick this bot.",
    "color": yellow
  };
  message.react("👌");
  message.author.send({ embed });
}

//guildinfo command: Shows server info
  if (message.content === (prefix + "guildinfo")) {
    var guildCreatedAt = new Date(message.guild.createdTimestamp);
    if (message.channel.type === "dm") {
      const embed = {
"title": ":x: Sorry! This command can't be used in DMs! It'll crash the bot.",
"color": red
};
message.channel.send({ embed });
       }
       else {
      const embed = {
       "color": 7506394,
       "thumbnail": {
         "url": message.guild.iconURL
       },
       "author": {
         "name": "Information on " + message.guild.name + ":"
       },
       "fields": [
         {
           "name": "Guild Owner:",
           "value": message.guild.owner.user.tag,
           "inline": true
         },
         {
           "name": "Guild ID:",
           "value": message.guild.id,
           "inline": true
         },
         {
           "name": "Members:",
           "value": message.guild.memberCount + " members",
           "inline": true
         },
         {
          "name": "Channels:",
          "value": message.guild.channels.size + " channels",
          "inline": true
         }, 
         {
           "name": "Region:",
           "value": message.guild.region,
           "inline": true
         },
         {
           "name": "Server Created:",
           "value": guildCreatedAt.toLocaleString(),
           "inline": true
         },
         {
           "name": "Emotes:",
           "value": message.guild.emojis.size + " emotes",
           "inline": true
         } 
       ]
     };
    message.channel.send({ embed });
   }
}
//setname command: Sets the bot's name.
if(message.content.startsWith(prefix + "setname")) {
  if (message.author.id != akiiID) {
    const embed = {
    "title": ":x: You do not have permission to use this command.",
    "color": red
  };
  message.channel.send({ embed });
}
  else {
      client.user.setUsername(message.content.substring(10));
      const embed = {
    "title": ":white_check_mark: New username set!",
    "color": green
  };
  message.channel.send({ embed });
    }
  }

//shame command: responds with ***S H A M E***, followed by a mention
if(message.content.startsWith(prefix + "shame")) {
 if (message.mentions.users.size < 1) {
   const embed = {
  "title": "Shame on...no one. You forgot to shame someone.",
  "color": red
};
message.channel.send({ embed });
}
else if (message.mentions.users.size > 1) {
  const embed = {
  "title": "Whoa, you're shaming too many people. One at a time please.",
  "color": red
};
message.channel.send({ embed });
}
  else {
    message.channel.send(message.mentions.users.first() + ", :bell: ***S H A M E*** :bell:")
}
}
//bean command: memey ban command
if(message.content.startsWith(prefix + "bean")){
  if(message.mentions.users.size > 1){
    const embed = {
      "title": ":x: You're mentioning too many people.",
      "color": red
    };
    message.channel.send({ embed });
  }
  else if(message.mentions.users.size < 1){
    const embed = {
      "title": ":x: You didn't mention anyone.",
      "color": red
    };
    message.channel.send({ embed });
  }
  else {
    const embed = {
      "title": "You've been beaned!",
      "color": burple
    };
    message.channel.send({ embed });
  }
}
//a-dadmode command: "Hi <string>, I'm Dad!"
if (message.content.startsWith(prefix + "dadmode")) {
  if (message.content.substring(10) === "off") {
  dadmode = 0;
  const embed = {
  "title": "Dad mode off. Dad must have gone on a business trip.."
};
message.channel.send({ embed });
}
else if (message.content.substring(10) === "on") {
  dadmode = 1;
  const embed = {
  "title": "Dad mode on. Send a message starting with \"I'm\" to begin.",
  "color": green
};
message.channel.send({ embed });
}
  else {
    const embed = {
  "title": "I couldn't understand.\nIf you would like to turn dad mode off, type a-dadmode off. If you want to turn it back on, type g-dadmode on`.",
  "color": yellow
};
message.channel.send({ embed });
  }
  }
if (message.content.startsWith("I'm") && dadmode == "1") {
  const embed = {
"title": "Hi, " + message.content.substring(4) + ", I'm Dad!",
"color": burple
};
message.channel.send({ embed });
}
//stats command: gives info on the stats of the bot
if(message.content === (prefix + "stats")){
  message.channel.send({embed: {
  color: burple,
  fields: [
    {
      name: 'Uptime:',
      value: (Math.round(client.uptime / (1000 * 60 * 60))) + ":" + (Math.round(client.uptime / (1000 * 60)) % 60) + ":" + (Math.round(client.uptime / 1000) % 60),
      inline: true
    },
    {
      name: 'Ping:',
      value: ping + "ms. :ping_pong:",
      inline: true
    },
    {
      name: 'Servers:',
      value: client.guilds.size,
      inline: true
    }
  ]
}});
}
//created command: quick access as to when a user's account was created
  if(message.content.startsWith(prefix + "created")){
    if(message.mentions.users.size < 1){
      const embed = {
        "title": "You didn't mention someone.",
        "color": red
      };
      message.channel.send({ embed });
    }
    else if(message.mentions.users.size > 1){
      const embed = {
        "title": "You're mentioning too many people.",
        "color": red
      };
      message.channel.send({ embed });
    }
    else {
    const embed = {
      "title": "Account Created: " + message.mentions.users.first().createdAt,
      "color": burple
    };
    message.channel.send({ embed });
    }
  }
//downloadram command: Memey command
function downloadRamWait(){
  sleep(((waitTime*10^100)+message.content.substring(14))/2);
}
if(message.content.startsWith(prefix + "downloadram")){
  if(message.content.substring(14) === ""){
    const embed = {
  "color": red,
  "fields": [
    {
      "name": "You didn't specify how much ram to download!",
      "value": "Please place a number after the command."
    }
  ]
};
message.channel.send({ embed });
  }
  else if(message.content.substring(14) > 30){
    message.channel.send({embed: {
  color: red,
  title: ':warning: You\'re downloading too much ram.'
}});
  }
  else {
    message.channel.send({embed: {
  color: yellow,
  title: ':gear: Downloading ram...',
  description: 'Depending on your ping, this might take a bit.'
}});
  downloadRamWait();
  const embed = {
    "color": green,
    "fields": [
      {
        "name": ":white_check_mark: Ram downloaded!",
        "value": "You can find the ram in your local directory."
      }
    ]
  };
  message.channel.send({ embed });
    }
}

//ban command
if(message.content.startsWith(prefix + "ban")){
  if(message.guild.me.permissions.has("BAN_MEMBERS")){
    if(message.member.permissions.has("BAN_MEMBERS")){
      if(message.mentions.users.size > 1){
        const embed = {
          "title": ":x: You are mentioning too many people!",
          "color": red
        };
        message.channel.send({ embed });
      }
      else if(message.mentions.users.size < 1){
        const embed = {
          "title": ":x: You didn't mention anyone.",
          "color": red
        };
        message.channel.send({ embed });
      }
      else if(message.mentions.members.first().bannable){
        message.mentions.members.first().ban();
        const embed = {
          "title": ":white_check_mark: User has been banned.",
          "color": green
        };
        message.channel.send({ embed });
      }
      else {
        const embed = {
          "title": ":x: User could not be banned.",
          "description": "Check my permissions, or check the user's permissions.",
          "color": red
        };
        message.channel.send({ embed });
      }
    }
    else {
      const embed = {
        "title": ":x: You do not have permission to use this command!",
        "description": "Missing Permission: `Ban Members`",
        "color": red
      };
      message.channel.send({ embed });
    }
  }
  else {
    const embed = {
      "title": ":x: I am missing the required permissions!",
      "description": "Missing Permission: `Ban Members`",
      "color": red
    };
    message.channel.send({ embed });
  }
}

//kick command
if(message.content.startsWith(prefix + "kick")){
  if(message.guild.me.permissions.has("KICK_MEMBERS")){
    if(message.member.permissions.has("KICK_MEMBERS")){
      if(message.mentions.users.size > 1){
        const embed = {
          "title": ":x: You are mentioning too many people!",
          "color": red
        };
        message.channel.send({ embed });
      }
      else if(message.mentions.users.size < 1){
        const embed = {
          "title": ":x: You didn't mention anyone.",
          "color": red
        };
        message.channel.send({ embed });
      }
      else if(message.mentions.members.first().kickable){
        message.mentions.members.first().kick();
        const embed = {
          "title": ":white_check_mark: User has been kicked.",
          "color": green
        };
        message.channel.send({ embed });
      }
      else {
        const embed = {
          "title": ":x: User could not be kicked.",
          "description": "Check my permissions, or check the user's permissions.",
          "color": red
        };
        message.channel.send({ embed });
      }
    }
    else {
      const embed = {
        "title": ":x: You do not have permission to use this command!",
        "description": "Missing Permission: `Kick Members`",
        "color": red
      };
      message.channel.send({ embed });
    }
  }
  else {
    const embed = {
      "title": ":x: I am missing the required permissions!",
      "description": "Missing Permission: `Kick Members`",
      "color": red
    };
    message.channel.send({ embed });
  }
}

//discord.gg/xx OR .gg/ --> [REMOVED]
if(message.content.includes(".gg/")){
  if(message.member.permissions.has("ADMINISTRATOR") || message.member.permissions.has("MANAGE_MESSAGES")) return;
  else {
  message.delete();
  const embed = {
    "title": ":x: Do not advertise!",
    "color": red
  };
  message.channel.send({ embed }).then(thismessage => {thismessage.delete(4000);});
}
}
//a-send command: Sends <string> to the channel
if(message.content.startsWith(prefix + "send")){
  message.delete();
  message.channel.send(message.content.substring(7));
}

//downloadinternet command: Memey command
function downloadInternetWait(){
  sleep(((waitTime*10^100)+message.content.substring(19))/2);
}
if(message.content.startsWith(prefix + "downloadinternet")){
  if(message.content.substring(19) === ""){
    const embed = {
  "color": red,
  "fields": [
    {
      "name": "You didn't specify how much internet to download!",
      "value": "Please place a number after the command."
    }
  ]
};
message.channel.send({ embed });
  }
  else if(message.content.substring(19) > 30){
    message.channel.send({embed: {
  color: red,
  title: ':warning: You\'re downloading too much internet.'
}});
  }
  else {
    message.channel.send({embed: {
  color: yellow,
  title: ':gear: Downloading internet...',
  description: 'Depending on your ping, this might take a bit.'
}});
  downloadInternetWait();
  const embed = {
    "color": green,
    "fields": [
      {
        "name": ":white_check_mark: Internet downloaded!",
        "value": "You can find the Internet in your local directory."
      }
    ]
  };
  message.channel.send({ embed });
    }
}
//If dotposter, then delete and DM reminder message.
if(message.content === "."){
  wait(10);
  message.delete();
  message.author.send({embed: {
  color: burple,
  title: 'Hey there!',
  description: 'I noticed you posted a dot! If it was because the unread notifier was there, just press ESC and it will go away. Thanks :D'
}});
}

//leave command
if(message.content === prefix + "leave"){
  if(message.author.id === akiiID){
    const embed = {
      "title": "Pssst!",
      "description": "Remember, `a-eval message.guild.leave();`!",
      "color": yellow
    };
    message.author.send({ embed });
  } else {
    const embed = {
      "title": ":x: You do not have permission to use this command.",
      "color": red
    };
    message.channel.send({ embed });
  }
}

//This function is part of the a-eval command
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  //this is the eval command
if (message.content.startsWith(prefix + "eval")) {
  const args = message.content.split(" ").slice(1);
if(message.author.id !== akiiID) return;
try {
const code = args.join(" ");
let evaled = eval(code);

if (typeof evaled !== "string")
evaled = require("util").inspect(evaled);
var evalOut = (clean(evaled))
if (evalOut.length > 2000) {
hastebin(evalOut, "js").then(r => {
message.channel.send("Output larger than 2000 characters, posted to " + r + " ."); //https://hastebin.com/someurl.js
}).catch(console.error);
}
else {
message.channel.send("```xl\n" + evalOut + "\n```")
}
} catch (err) {
message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
}
}

//"This is memedog." --> Delete, ban.
if(message.content.includes("This is memedog.")){
  message.delete();
}
if(message.content.includes("look out for a user by")){
  message.delete();
}
//suggestion command: DM's me with a bot suggestion
if(message.content.startsWith(prefix + "suggestion")){
  const embed = {
    "title": ":warning: This command is still in development and is not enabled currently.",
    "color": yellow
  };
  message.channel.send({ embed });
}

//sparkle command
if(message.content.startsWith(prefix + "sparkle")){
  if(message.guild.me.permissions.has("MANAGE_NICKNAMES")){
  if(message.author.username.size <= 27){
    const embed = {
      "title": ":x: Your username is too long!",
      "description": "Please set a username that is less than 27 characters.",
      "color": red
    };
    message.channel.send({ embed });
  }
  else {
  if(message.content.substring(10) === ""){
    message.member.setNickname("☆ ･*。" + message.author.username);
    const embed = {
      "title": ":white_check_mark: Sparkly Nickname Set",
      "description": "Nickname set to ☆ ･*。" + message.author.username,
      "color": green
    };
    message.channel.send({ embed });
  }
   else if(message.member.permissions.has("MANAGE_NICKNAMES")){
    if(message.mentions.users.size > 1){
      const embed = {
        "title": ":x: You're mentioning too many people!",
        "color": red
      };
      message.channel.send({ embed });
    }
    else if(message.mentions.users.size < 1){
      const embed = {
        "title": ":x: You didn't mention anyone!",
        "color": red
      };
      message.channel.send({ embed });
    }
    else {
      message.mentions.members.first().setNickname("☆ ･*。" + message.mentions.users.first().username).catch((err) => {
        const embed = {
          "title": "Something went wrong...",
          "description": "I couldn't set the nickname.\n" + err,
          "color": yellow
        };
        message.channel.send({ embed });
        console.log(err);
      });
      const embed = {
        "title": ":white_check_mark: Sparkly Nickname Set",
        "description": message.mentions.users.first().username + "'s nickname has been set to ☆ ･*。" + message.mentions.users.first().username,
        "color": green
      };
      message.channel.send({ embed });
    }
  }
  else if(!message.member.permissions.has("MANAGE_NICKNAMES")){
    const embed = {
      "title": ":x: You do not have permission to use this command.",
      "description": "Missing Permission: `Manage Nicknames`",
      "color": red
    };
    message.channel.send({ embed });
  }
  else {
    const embed = {
      "title": "...what",
      "description": "Honestly, I have no clue what you just did. If you are seeing this message, **contact Akii#2111.**",
      "color": yellow
    };
    message.channel.send({ embed });
  }
}
  }
  else {
    const embed = {
      "title": ":x: I'm missing the required permissions!",
      "description": "Missing Permission: `Manage Nicknames`",
      "color": red
    };
    message.channel.send({ embed });
  }
}

//reverse command
if(message.content.startsWith(prefix + "reverse")){
  if(message.content.substring(10) === ""){
    message.channel.send("Please enter some text after the command.");
  }
  else {
    message.channel.send(reverse(message.content.substring(10)));
  }
}

//prune command
if (message.content.startsWith(prefix + "prune")) {
  if(message.guild.me.permissions.has("MANAGE_MESSAGES")){  
  if (!message.member.permissions.has("MANAGE_MESSAGES")){
      const embed = {
        "title": ":x: You do not have permission to use this command.",
        "description": "Missing Permission: `Manage Messages`",
        "color": red
      };
      message.channel.send({ embed });
    }
    else {
    message.channel.bulkDelete(message.content.substring(8)).catch((err) => {
      const embed = {
        "title": ":warning: Something went wrong...",
        "description": err,
        "color": yellow
      };
      message.channel.send({ embed });
      console.log(err);
    });
    const embed = {
      "title": ":white_check_mark: Pruned **" + message.content.substring(8) + "** messages.",
      "color": green
    };
    message.channel.send({ embed });
    }
  }
  else {
    const embed = {
      "title": ":x: I'm missing the required permissions!",
      "description": "Missing Permission: `Manage Messages`",
      "color": red
    };
    message.channel.send({ embed });
  }
}

//info command
if(message.content === prefix + "info"){
  const embed = {
    "color": 7506394,
    "thumbnail": {
      "url": "https://images-ext-2.discordapp.net/external/f4nE1yU--tBEddfXaDtXrZaqG3mnpZYZmAoxEZMLMWc/%3Fsize%3D128/https/cdn.discordapp.com/avatars/336521813926346763/a10184ba9883b1adb735fe642f1fd95e.jpg"
    },
    "author": {
      "name": "AkiiBot",
      "url": "https://discord.gg/54fVgRw",
      "icon_url": "https://images-ext-2.discordapp.net/external/f4nE1yU--tBEddfXaDtXrZaqG3mnpZYZmAoxEZMLMWc/%3Fsize%3D128/https/cdn.discordapp.com/avatars/336521813926346763/a10184ba9883b1adb735fe642f1fd95e.jpg"
    },
    "fields": [
      {
        "name": "Version",
        "value": "α-0.0.5",
        "inline": true
      },
      {
        "name": "Library",
        "value": "[Discord.js](https://discordapp.com/invite/bRCvFy9)",
        "inline": true
      },
      {
        "name": "Creators",
        "value": "Akii#2111\nGallium#1327",
        "inline": true
      },
      {
        "name": "Servers",
        "value": message.client.guilds.size,
        "inline": true
      },
      {
        "name": "Users",
        "value": message.client.users.size,
        "inline": true
      },
      {
        "name": "Invite",
        "value": "[Click Here](https://discordapp.com/oauth2/authorize?permissions=2146954487&scope=bot&client_id=336521813926346763)",
        "inline": true
      },
      {
        "name": "Discord",
        "value": "[`54fVgRw`](https://discord.gg/54fVgRw)",
        "inline": true
      },
      {
        "name": "Contributors",
        "value": "`Gallium#1327` - Provided the template code for me to use, also a good friend of mine\n`Akii#2111` - Expanded on that code that Gallium gave me"
      },
      {
        "name": "Honorable Mentions",
        "value": "`OGNovuh#0014` - Added the Fight command, which I no longer use.. Sorry Novuh. Also cleaned up the template code a bit"
      }
    ]
  };
  message.channel.send({ embed });
}
  
/* //------------------ Dev commands ------------------\\ */

if(message.content === (prefix + "green")){
  const embed = {
    "title": "3329330",
    "color": green
  };
  message.channel.send({ embed });
}
if(message.content === (prefix + "red")){
  const embed = {
    "title": "16711680",
    "color": red
  };
  message.channel.send({ embed });
}
if(message.content === (prefix + "yellow")){
  const embed = {
    "title": "16776960",
    "color": yellow
  };
  message.channel.send({ embed });
}
if(message.content === (prefix + "burple")){
  const embed = {
    "title": "7506394",
    "color": burple
  };
  message.channel.send({ embed });
}

if(message.content === (prefix + "start typing")){
  message.channel.startTyping();
}
if(message.content === (prefix + "stop typing")){
  message.reply("I have stopped typing. It may take a while for the typing indicator to go away.")
  message.channel.stopTyping();
}

/* \\------------------ Dev commands ------------------// */
});

//Token
client.login("since I don't feel like memeing today, just \"token\" should do fine :P");
