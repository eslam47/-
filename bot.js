const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("591455960162107397")
setInterval(function() {
channel.send(`استغفر الله العلي العظيم ليه تنصبون ؟؟`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
