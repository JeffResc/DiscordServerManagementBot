module.exports = function(client, settings){
  client.on('message', msg => {
      if (msg.content === settings.defaultCommandPrefix + 'cputype') {
        if (settings.authorizedUsers.indexOf(msg.author.id) > -1) {
          const { exec } = require('child_process');
          exec('cat /proc/cpuinfo | grep \'model name\' | awk -F\: \'{ print $2 }\'', (err, stdout, stderr) => {
          if (err) {
            msg.reply('Error: Unable to perform this command. Does the user running Node.js have access to `cat /proc/cpuinfo`?');
            msg.reply(`stderr: ${stderr}`);
            return;
          }
          msg.reply(`${stdout}`);
        });
        } else {
          if (settings.showUserUnauthorizedMessage == true) {
            msg.reply('You are not authorized to perform this command');
          }
        }
      }
  });
}
