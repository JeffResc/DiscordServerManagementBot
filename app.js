require('events').EventEmitter.prototype._maxListeners = 100;
var settings = require("./config.js").settings;
var modules = require("./config.js").modules;

if (!settings.defaultCommandPrefix) {
    console.log('Error, exiting: You didn\'t specify a default command prefix');
} else if (!settings.discordClientID) {
    console.log('Error, exiting: You didn\'t specify a Discord Client ID');
} else if (!settings.discordBotToken) {
    console.log('Error, exiting: You didn\'t specify a Discord Bot Token');
} else if (!settings.authorizedUsers) {
    console.log('Error, exiting: You didn\'t specify any authorized users');
} else if (!settings.showUserUnauthorizedMessage) {
    console.log('Error, exiting: You didn\'t specify if we should show the user unauthorized message');
}

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Successfully logged in as ${client.user.tag}\n`);
    if (settings.showLink === true) {
      console.log('Use this link to add the bot to your Discord server:');
      console.log('https://discordapp.com/oauth2/authorize?client_id=' + settings.discordClientID + '&scope=bot\n');
      console.log('(You can disable this message by setting showLink to false in config.js)');
    }
});

var helpCMD = [];

modules.enabled.forEach(function (moduleName) {
  require("./modules/"+moduleName+".js")(client, settings);
  helpCMD.push(moduleName);
});

client.on('message', msg => {
  if (msg.content === settings.defaultCommandPrefix + 'help') {
    var displayHelp = ['\n'];
    displayHelp.push(settings.defaultCommandPrefix+'help: Display this help dialog');
    if (helpCMD.indexOf("reboot") > -1) {displayHelp.push(settings.defaultCommandPrefix+'reboot: Reboot the machine using `reboot`.');}
    if (helpCMD.indexOf("diskInfo") > -1) {displayHelp.push(settings.defaultCommandPrefix+'diskinfo: View disk information using `df -H`.');}
    if (helpCMD.indexOf("memInfo") > -1) {displayHelp.push(settings.defaultCommandPrefix+'meminfo: View memory information using `free -h`.');}
    if (helpCMD.indexOf("reboot") > -1) {displayHelp.push(settings.defaultCommandPrefix+'uptime: View current system uptime using `reboot`.');}
    if (helpCMD.indexOf("sysInfo") > -1) {displayHelp.push(settings.defaultCommandPrefix+'sysinfo: View system information using `uname -a`.');}
    if (helpCMD.indexOf("cpuType") > -1) {displayHelp.push(settings.defaultCommandPrefix+'cputype: View CPU type using `cat /proc/cpuinfo`.');}
    if (helpCMD.indexOf("ipInfo") > -1) {displayHelp.push(settings.defaultCommandPrefix+'ipinfo: Show IP address information using `ip addr show`.');}
    if (helpCMD.indexOf("nettest") > -1) {displayHelp.push(settings.defaultCommandPrefix+'nettest: Perform a ping test (measured in miliseconds) to Europe, the United States and Australia.');}
    if (helpCMD.indexOf("ping") > -1) {displayHelp.push(settings.defaultCommandPrefix+'ping: Test if the bot can read/send messages. Bot *should* respond with `Pong!`');}
    msg.reply(displayHelp.join('\n'));
  }
});

client.login(settings.discordBotToken);
