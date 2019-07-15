const config = require('./config/config.json');

const { AkairoClient } = require('discord-akairo');

const client = new AkairoClient({
    ownerID: [config.botOwnerId],
    prefix: 'l>',
    commandDirectory: './commands/'
}, {
    disableEveryone: true
});

client.login(config.token);
