//Constants
const Discord = require('discord.js');
const client = new Discord.Client();
const sleep = require('system-sleep');
var GQuotes = []
var pingBanUsers = ["<@107599228900999168>"]
var dadmode = 0
var akiiID = "107599228900999168"
  //color variables
var green = 3329330
var red = 16711680
var yellow = 16776960
var burple = 7506394

//Boot Sequence
client.on('ready', () => {
  console.log("Bot is online");
  client.user.setGame("a-help on " + client.guilds.size + " servers");
  //a-help in " + client.guilds.size + " servers
});
client.on('error', () => {
  console.log("ERROR: BOT UNABLE TO START");
});
//The Good Stuff
var prefix = "a-"
client.on('message', message => {
if (message.author.bot) {return};

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var waitTime = ping
function wait(){
  sleep(waitTime*100);
}

//Ping command
var ping = Math.round(client.ping);
if (message.content.startsWith (prefix + 'ping')) {
  const embed = {
  "title": "Pong! " + ping + "ms :ping_pong:",
  "color": burple
};
message.channel.send({ embed });
  console.log('Client Ping reported as ' + ping + 'ms.');
  }

if(message.content.startsWith("<@323213552695508993>")){
  message.channel.startTyping(4000);
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
    if (message.author.id != akiiID){
      const embed = {
  "title": "***Welcome back.***",
  "color": burple,
  "footer": {
    "text": "Help Menu"
  },
  "fields": [
    {
      "name": "**Commands:**",
      "value": "``-`` a-help: This, of course\n``-`` a-ping: Shows your ping\n``-`` a-pressF: Pays Respects to a user, defaults to you if no user is mentioned\n``-`` a-quote: Pull a quote\n``-`` a-storequote: Store a quote to pull later\n``-`` a-coin: Flips a coin\n``-`` a-about: DMs you with information on the bot\n``-`` a-serverinfo: Gives you information on the server\n``-`` a-bean: memey ban command **COMMAND INDEV** \n``-`` a-shame: Shames a mentioned user"
    }
  ]
};
message.author.send({ embed });
    }
    else {
      const embed = {
  "title": "***Welcome back, Akii***",
  "color": burple,
  "footer": {
    "text": "Help Menu"
  },
  "fields": [
    {
      "name": "**Commands everyone has access to:**",
      "value": "``-`` a-help: This, of course\n``-`` a-ping: Shows your ping\n``-`` a-pressF: Pays Respects to a user, defaults to you if no user is mentioned\n``-`` a-quote: Pull a quote\n``-`` a-storequote: Store a quote to pull later\n``-`` a-coin: Flips a coin\n``-`` a-about: DMs you with information on the bot\n``-`` a-serverinfo: Gives you information on the server\n``-`` a-bean: memey ban command **COMMAND INDEV** \n``-`` a-shame: Shames a mentioned user"
    },
    {
      "name": "**Commands only you have access to:**",
      "value": "``-`` a-setname: Set the bot's name \n``-`` a-setgame: Sets the bot's game \n``-`` a-kill: Shuts down the bot \n``-`` beta:a-lockdown: Locks down server **COMMAND IN-DEV** "
    }
  ]
};
message.author.send({ embed });
    }
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
  "title": "Stored quote in position"  + [GQuotes.length] + ".",
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
    "title": ":x: **Ya dingus.** You don't have permission to use this command.",
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
    "title": ":x: **Ya dingus.** You don't have permission to use this command.",
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
    "text": "About Menu"
  },
  "fields": [
    {
      "name": ":wave: **Hi there! I'm AkiiBot!** :smiley:",
      "value": "This bot was made by **Gallium#1327**, hence why I used to be named \"GalliumBot!\" It was further developed by **Akii#2111**, just so that it would fit what his server needed. \n\nYou can find all the commands for this bot by typing ``a-help``. **Remember, this bot is still in development.** So most of its features are still buggy. If you encounter any problems, please feel free to contact Gallium or Akii, or open up a (GitHub Issue)[http://github.com/jennasisis/AkiiBot/issues]\n\n If you'd like to join the support server, (use this link!)[] \n\n**Thanks for using the bot!**"
    }
  ]
};
message.author.send({ embed });
}
//ayy => lmao
if (message.content.startsWith("ayy")){
  message.channel.send("lmao!");
}
//lockdown command: Adds the "lockdown" role to everyone on the server
if (message.content.startsWith("beta:" + prefix + "lockdown")){
  const embed = {
  "title": ":warning: This command is still in development and is not enabled currently.",
  "color": yellow
};
message.channel.send({ embed });
  }
//serverinfo command: Shows server info
  if (message.content === (prefix + "serverinfo")) {
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
           "name": "Region:",
           "value": message.guild.region,
           "inline": true
         },
         {
           "name": "Server Created:",
           "value": message.guild.createdAt,
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
      newUsername = message.content.substring(10);
      client.user.setUsername(newUsername);
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
      value: (Math.round(client.uptime / (1000 * 60 * 60))) + " h, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " m, " + (Math.round(client.uptime / 1000) % 60) + " s.",
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
//commend command: congratulates a user; defaults to nothing if no user is mentioned
if (message.content === (prefix + 'commend')) {
  const embed = {
    "title": "Congratulations! :tada:",
    "color": green
  };
  message.channel.send({ embed });
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
//@AkiiBot --> 😃 reaction
if(message.content.includes("<@323213552695508993>")){
  message.react('😃')
}
//kick command: kicks a user
if(message.content.startsWith(prefix + "kick")){
  if(message.mentions.users.size > 1){
    const embed = {
      "title": ":x: You are mentioning too many users.",
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
  if(message.member.permissions.has("KICK_MEMBERS") || message.author.id === akiiID){
    message.mentions.members.first().kick();
    const embed = {
      "title": ":white_check_mark: User has been kicked.",
      "color": green
    };
    message.channel.send({ embed });
  }
  else {
    const embed = {
      "title": ":x: You do not have permission to kick users.",
      "color": red
    };
    message.channel.send({ embed });
  }
}
}
//ban command: bans a user
if(message.content.startsWith(prefix + "ban")){
  if(message.mentions.users.size > 1){
    const embed = {
      "title": ":x: You are mentioning too many users.",
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
  if(message.member.permissions.has("BAN_MEMBERS") || message.author.id === akiiID){
    message.mentions.members.first().ban();
    const embed = {
      "title": ":white_check_mark: User has been banned.",
      "color": green
    };
    message.channel.send({ embed });
  }
  else {
    const embed = {
      "title": ":x: You do not have permission to ban users.",
      "color": red
    };
    message.channel.send({ embed });
  }
}
}
//unban OR pardon command: unbans a user
if(message.content.startsWith(prefix + "unban")){
  if(message.mentions.users.size > 1){
    const embed = {
      "title": ":x: You are mentioning too many users.",
      "color": red
    };
    message.channel.send({ embed });
  }
  else if(message.mentions.users.size < 1){
    const embed = {
      "title": ":x: You didn't mention anyone",
      "color": red
    };
    message.channel.send({ embed });
  }
  else {
  if(message.member.permissions.has("BAN_MEMBERS") || message.author.id === akiiID){
    message.guild.unban(message.content.substring(8));
    const embed = {
      "title": ":white_check_mark: User has been unbanned.",
      "color": green
    };
    message.channel.send({ embed });
  }
  else {
    const embed = {
      "title": ":x: You do not have permission to unban users.",
      "color": red
    };
    message.channel.send({ embed });
  }
}
}

//discord.gg/xx OR .gg/xx --> [REMOVED]
if(message.content.includes(".gg/")){
  message.delete();
  const embed = {
    "title": ":x: Do not advertise!",
    "color": red
  };
  message.channel.send({ embed }).then(thismessage => {thismessage.delete(4000);});
}
//a-send command: Sends <string> to the channel
if(message.content.startsWith(prefix + "send")){
  message.delete();
  message.channel.send(message.content.substring(7));
}

//This is nothing special, really.
//net-neutrality command
if(message.content === (prefix + "net neutrality")){
  message.channel.send("***Join us.*** http://battleforthenet.com \n\n(Version that explains a bit more: https://netneutrality.internetassociation.org/action/)");
}

//Dev commands: Normal users don't need them
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

//testing commands:
if(message.content === (prefix + "start typing")){
  message.channel.startTyping();
}
if(message.content === (prefix + "stop typing")){
  message.channel.stopTyping();
}
});

//Token
client.login("hehe you thought <3");
