const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login('BOT_TOKEN')

bot.on("ready", () => {
    console.log("Ready")
    bot.user.setStatus("online")
    bot.user.setActivity("n!help for a list of commands")
});

function discordNitroGen(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


var input = 24;

bot.on('message', message => {
if (message.content === 'n!react yes or no') {
    message.react(':heavy_check_mark:');
  message.react(':no_entry_sign:')
}});

const helpEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Commands')
    .setDescription('n!boost: Unchecked nitro boost gift command')
    .setThumbnail('https://cdn.discordapp.com/attachments/792672145661755392/792803776843087882/Screenshot_2020-11-28_at_10.33.00_PM.png')
    .setImage('https://cdn.discordapp.com/attachments/792672145661755392/792803776843087882/Screenshot_2020-11-28_at_10.33.00_PM.png')
    .addField("More Commands", "n!classic: Unchecked nitro classic gift command")
    .setFooter('Succesfully executed')

bot.on('message', message => {
if (message.content === 'n!boost')
message.author.send('[Generated] https://discord.gift/' + discordNitroGen(input))
});

bot.on('message', message => {
if (message.content === 'n!classic')
message.author.send('[Generated] https://discord.gift/' + discordNitroGen(16))
});

bot.on('message', message => {
  if (message.content === 'n!help')
  message.channel.send(helpEmbed)
  console.log(message.content)
});

bot.on('message', message => {
if (message.content === 'n!server') {
    message.channel.send(`Server name: ${message.guild.name} Total members: ${message.guild.memberCount}`);
}});
