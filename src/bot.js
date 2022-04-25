const { getAnime, getUser, getUserList } = require('./calls.js')

const { Client, Intents } = require('discord.js');
const { DISCORD_API_KEY } = require('./../config.json');
const exampleEmbed = require('./embedMessage.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const PREFIX = '/';

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', async (message) => {
    console.log(message.content);
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);

        if(CMD_NAME === 'user') {
            getUser(args[0]).then(async (data) => {
                const user = data;
                const embedMessage = exampleEmbed(user);
                console.log(data);
                message.channel.send({embeds: [embedMessage]})
            });
        }
        if(CMD_NAME === 'anime') {
            getAnime("naruto")
        }

        if(CMD_NAME === 'list') {
            getUserList(args[0]).then(async (data) => {
                const list = data;
                // const embedMessage = exampleEmbed(user);
                console.log(list);
                // message.channel.send({embeds: [embedMessage]})
            });
        }
    }
})

// Login to Discord with your client's token
client.login(DISCORD_API_KEY);