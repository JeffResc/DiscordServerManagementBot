module.exports = function(client, settings){
  client.on('message', msg => {
      if (msg.content === settings.defaultCommandPrefix + 'meminfo') {
        if (settings.authorizedUsers.indexOf(msg.author.id) > -1) {
          const { exec } = require('child_process');
          exec('free -h', (err, stdout, stderr) => {
          if (err) {
            msg.reply('Error: Unable to perform this command. Does the user running Node.js have access to `free -h`?');
            msg.reply(`stderr: ${stderr}`);
            return;
          }
          msg.reply(`\n${stdout}`);
        });
        } else {
          if (settings.showUserUnauthorizedMessage == true) {
            msg.reply('You are not authorized to perform this command');
          }
        }
      }
  });
};
