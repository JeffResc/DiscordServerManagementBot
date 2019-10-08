module.exports = function(client, settings){
  client.on('message', msg => {
    if (msg.content === settings.defaultCommandPrefix + 'topproc') {
      if (settings.authorizedUsers.indexOf(msg.author.id) > -1) {
        const { exec } = require('child_process');
        exec('ps -Ao user,uid,comm,pid,pcpu,tty --sort=-pcpu | head -n 6', (err, stdout, stderr) => {
          if (err) {
            msg.reply('Error: Unable to perform this command. Does the user running Node.js have access to `ps`?');
            msg.reply(`stderr: ${stderr}`);
            return;
          }
          msg.reply(`\n${stdout}`);
        });
      } else {
        if (settings.showUserUnauthorizedMessage === true) {
          msg.reply('You are not authorized to perform this command');
        }
      }
    }
  });
};
