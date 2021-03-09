// Import the Command class from NukeJS
const { Command } = require('nukejs');

module.exports = class extends Command {
    constructor(file) {
        super(file, {
            // Command Options refer to https://nukejs.xyz/#/command for more info
            // Command Name
            name: "test",
            // Should it be ran in a guild only or text only or both
            runIn: ["text"],
            // Any aliases that will refer to this command
            aliases: ["pang"],
            // Description of the command
            description: "ping pong; ching chong",
        });
    }

    async run(message, args, client) {
        // When the command runs
        message.channel.send("Pong!");
    }
}