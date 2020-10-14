const Discord = require ("discord.js");
const bot = new Discord.Client();
const TOKEN = 'NTM0NDkyMTA3OTgxOTc5NjQ4.Dx_tPA.0N71Zrii11JtiP_4Sio7OXcAGpE'

bot.on('message', function(message){
    if(message.content == '£Hello')
    {
        message.reply('Hello I am EvilBot, how can I help?');
    }
});

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to Evil Clan");
    let memberRole = member.guild.roles.find("name", "💥・membre");
    member.addRole(memberRole);
});

bot.on('message', function(message){

    if(message.content == '£Claninfo')
    {
        message.reply('We are a sniping/modding clan. Homicide is the Founder of the clan and writer of me.');
    }
    if(message.content =='£Join')
    {
        message.member.send("Welcome to Evil Clan");
    }

});

    bot.on('ready', function(){
        console.log("Ready");
    });



client.login(process.env.BOT_TOKEN);
