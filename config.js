exports.settings = {
	defaultCommandPrefix: "!",
  discordClientID: "", // https://discordapp.com/developers/applications/
  discordBotToken: "", // https://discordapp.com/developers/applications/
	authorizedUsers: ["", ""], // User ID of the Discord member(s) that are authorized to use this bot. Choose wisely.
  showUserUnauthorizedMessage: true, // Will show a "user unauthorized to perform this command" when they are not part of the authorizd users. If false, the bot will just ignore them.
  showLink: true // Show the link to add the bot to a server. You can probably disable this after first use.
};

exports.modules = {
    enabled: ['ping', 'uptime', 'diskInfo', 'memInfo', 'reboot', 'sysInfo', 'cpuType', 'ipInfo', 'nettest'], // Enabled modules
};
