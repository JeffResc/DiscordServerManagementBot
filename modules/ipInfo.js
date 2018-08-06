module.exports = function(client, settings){
  client.on('message', msg => {
      if (msg.content === settings.defaultCommandPrefix + 'ipinfo') {
        if (settings.authorizedUsers.indexOf(msg.author.id) > -1) {
          const { exec } = require('child_process');
          exec('ip addr show | grep \'inet \' | awk \'{ print $2 }\' | awk -F\/ \'{ print $1 }\' | grep -v \'^127\' | awk \'{ print $0 } END { if (!NR) print "N/A" }\'', (err, stdout, stderr) => {
          if (err) {
            msg.reply('Error: Unable to perform this command. Does the user running Node.js have access to `ip addr show`?');
            msg.reply(`stderr: ${stderr}`);
            return;
          }
          msg.reply(`IPv4: ${stdout}`)
          });
          exec('ip addr show | grep \'inet6 \' | awk \'{ print $2 }\' | awk -F\/ \'{ print $1 }\' | grep -v \'^::\' | grep -v \'^0000:\' | grep -v \'^fe80:\' | awk \'{ print $0 } END { if (!NR) print "N/A" }\'', (err, stdout, stderr) => {
          if (err) {
            msg.reply('Error: Unable to perform this command. Does the user running Node.js have access to `ip addr show`?');
            msg.reply(`stderr: ${stderr}`);
            return;
          }
          msg.reply(`IPv6: ${stdout}`)
          });
        } else {
          if (settings.showUserUnauthorizedMessage == true) {
            msg.reply('You are not authorized to perform this command');
          }
        }
      }
  });
}
