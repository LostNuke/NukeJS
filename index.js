// Imports the Client and CommandLoader from NukeJS
const { Client, CommandLoader, EventLoader } = require("nukejs");
// Imports the token and prefix from the config.json
const { prefix, token } = require("./config.json");

// Initializes the client from NukeJS
const client = new Client({
    // NukeJS Client Options Goes here
    // Refer to https://nukejs.xyz/#/client for more information

    // This will specify what prefix the bot will be able to respond to
    discordOptions: {
        // DiscordJS Options goes here
        // Refeer to https://discord.js.org/#/docs/main/stable/typedef/ClientOptions for more information
    },
});

// What the command loader does it tell NukeJS to load and listen to commands in that folder (You can specify options so commands in that folder loaded by the loader can behave differently)
// Refer to https://nukejs.xyz/#/loader_cmd for more information
const normalCommands = new CommandLoader(client, {
    directory: "./commands",
    prefix: prefix,
    allowMention: true,
});

// What the events loader does it tell NukeJS to load and listen to event in that folder (You can specify options so events in that folder loaded by the loader can behave differently)
// Refer to https://nukejs.xyz/#/loader_events for more information
const normalEvents = new EventLoader(client, {
    directory: "./events",
    extensions: ['js']
});

// Login the bot
client.login(token);
