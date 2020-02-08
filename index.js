const Discord = require('discord.js');
 
const client = new Discord.Client();
 
var prefix = "G!"
 
client.login("Njc1NDg5NzE0NDA4NzgzODgy.Xj39zQ.k68r5LZ3QjDDGs4hl1uMOxG_8So")
 
client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("G!help")
});


client.on('message', async message => {
 
    if(message.content === "Bonjour"){
        message.reply("Salut")
        console.log("Le bot dit bonjour")
    }
 
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC0000")
        .setTitle("Voici mes commandes !")
        .setDescription("ceci sont mes commandes D:")
        .setThumbnail(message.author.avatarURL)
        .addField("Bonjour", "Le bot vous dit salut")
        .setTimestamp()
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
if(message.content === prefix + "invite"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#CC0000")
    .setTitle("invitation sur ton serveur")
    .setDescription("invite moi sur ton serveur")
    .setDescription("invite moi en cliquer sur le lien ci-dessous")
    .setDescription("https://discordapp.com/api/oauth2/authorize?client_id=675489714408783882&permissions=8&scope=bot")
    .setTimestamp()
    message.channel.send(help_embed);
    };
});