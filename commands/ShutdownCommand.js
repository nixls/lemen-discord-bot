const { Command } = require('discord-akairo');

class ShutdownCommand extends Command {
    constructor() {
        super('shutdown', {
            aliases: ['shutdown', 'off'],
            ownerOnly: true
        });
    }

    async exec(message) {
        console.log('Bot shutdown executed by ' + message.author.username);
        await message.reply('Lemen shutdown.');
        await this.client.destroy();
        process.exit(0);
    }
}

module.exports = ShutdownCommand;
