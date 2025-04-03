require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');
const { AttachmentBuilder, EmbedBuider } = require('discord.js'); 


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) =>{
    console.log(' Diddy is here!!!! 😱😱😱 ');
});

client.on('messageCreate', (message) => {
    console.log('Content: ' + message.content + '\n' + 
        'Author{ ' + '\n' + message.author + '\n' + 
        message.username + '\n' + 
        message.author.bot + '\n' + 
        message.roleSubscriptionData + '\n' + '}' + '\n' +
        message.channel
        );

        if(message.author.bot){
            return;
        }

        let msg = (message.content);

        if(msg.toUpperCase === 
            'cum', 
            '',
            ''
            ){
            const imageReply = new EmbedBuilder()
                .setTitle('Imma Cum On YOUR Face')
                .setDescription('YOU have been cummed')
                .setColor('Random')
                .setImage('https://i.imgur.com/wSoPuUu.gif')
            message.reply({embeds: [imageReply] });
        }
});


client.login(process.env.TOKEN);