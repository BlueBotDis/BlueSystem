const prefix ="!";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});


 
 client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
}
});

client.on('ready',async () => {
let streaming = [`BlueBot`, `System`];
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
setInterval(() => {
client.user.setActivity(streaming[Math.floor(Math.random() * streaming.length)], {type: 1, url: "https://twitch.tv/6xlez1"});
}, 5000);
});
 


client.on('guildMemberAdd', member => {
if(member.guild.id === "498078431972556800") {
let role = member.guild.roles.find(r => r.name === "•Blues💎");
member.addRole(role).catch(e => console.log(`Error Detected: ${e.message}`));
}
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '•🌷welcome»الترحيب');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
    .addField('مدة انشاء حسابك', member.user.createdAt.toLocaleString(), true)
 
                                       
     .setFooter("•BlueBotServer•")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
 
 
 
 
 client.on('ready',async () => {
  let guild = client.guilds.get("505067777795686457");
  let cMembers = guild.channels.get("506881201944920079"); // Members
  let cBots = guild.channels.get("506881094629457921"); // Bots
  let cUser = guild.channels.get("506885705558130688"); // Bots
  setInterval(() => {
    cMembers.setName(`Members : ${guild.memberCount} `);
    cBots.setName(`Servers : ${client.guilds.size} `);
    cUser.setName(`Users: ${client.users.size} `);
  }, 5000);
});

 



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 







client.login(process.env.BOT_TOKEN);
