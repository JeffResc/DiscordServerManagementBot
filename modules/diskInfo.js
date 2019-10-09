module.exports = function(client, settings){
  client.on('message', msg => {
      if (msg.content === settings.defaultCommandPrefix + 'diskinfo') {
        if (settings.authorizedUsers.indexOf(msg.author.id) > -1) {
          const { exec } = require('child_process');
          exec('df -H', (err, stdout, stderr) => {
          if (err) {
            msg.reply('Error: Unable to perform this command. Does the user running Node.js have access to `df -H`?');
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
