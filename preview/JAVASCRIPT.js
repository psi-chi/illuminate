const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (message.content === "!ping") {
    message.channel.send("Pong!");
  }
});

client.login("YOUR_BOT_TOKEN_HERE");
