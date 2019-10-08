# DiscordServerManagementBot

Install discord.js from NPM then edit config.js to get started.

# Configuration
To configure your Bot you need to change those settings in `config.js` file.

| setting | type | description |
|-----------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| defaultCommandPrefix | string | prefix for each command |
| discordClientId | string | client id of your app (https://discordapp.com/developers/applications/) |
| discordBotToken | string | bot token of your app (https://discordapp.com/developers/applications/) |
| authorizedUsers | string[] | User ID of the Discord member(s) that are authorized to use this bot. Choose wisely. |
| showUserUnauthorizedMessage | boolean | Will show a "user unauthorized to perform this command" when they are not part of the authorizd users. If false, the bot will just ignore them. |
| showLink | boolean | Show the link to add the bot to a server. You can probably disable this after first use. |

To enable modules add it to `exports.modules`.

# Commands / Modules

help: Display this help dialog

reboot: Reboot the machine using `reboot`

diskinfo: View disk information using `df -H`

meminfo: View memory information using `free -h`

uptime: View current system uptime using `reboot`

sysinfo: View system information using `uname -a`

cputype: View CPU type using `cat /proc/cpuinfo`

ipinfo: Show IP address information using `ip addr show`

nettest: Perform a ping test (measured in miliseconds) to Europe, the United States and Australia

ping: Test if the bot can read/send messages. Bot *should* respond with `Pong!`)
