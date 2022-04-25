// at the top of your file
const { MessageEmbed } = require('discord.js');

function exampleEmbed(user) {
    const date_joined = Date.parse(user.joined);
    let date_joined_unix = new Date(date_joined)

    const date_seen = Date.parse(user.last_online);
    let date_seen_unix = new Date(date_seen)

    const message = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(user.username)
	.setURL(user.url)
	.addFields(
		{ name: 'Joined on:', value: date_joined_unix.toLocaleDateString(), inline: true },
		{ name: 'Last seen:', value: date_seen_unix.toLocaleDateString(), inline: true }
	)
	.setImage(user.images.jpg.image_url || 'https://i.imgur.com/mCHMpLT.png')
	.setTimestamp()

    return message;
}

module.exports = exampleEmbed