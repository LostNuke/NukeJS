const { Event } = require("nukejs");

module.exports = class extends Event {
    constructor() {
        super({
            // Event Options, refer to https://nukejs.xyz/#/event for more info and https://discord.js.org/#/docs/main/stable/class/Client
            // Name of the event refer to https://discord.js.org/#/docs/main/stable/class/Client to see what are the possible events
            name: "message",
            // Should it load true or false?
            enabled: true,
        });
    }

    async run(message) {
        // Logs the message onto the console
        console.log(message.content)
    }
};
