module.exports = function(client, settings){
  client.on('message', msg => {
      if (msg.content === settings.defaultCommandPrefix + 'nettest') {
        if (settings.authorizedUsers.indexOf(msg.author.id) > -1) {
          const { exec } = require('child_process');
          exec('ping -c 2 -w 2 ping-eu.nodequery.com | grep rtt | cut -d\'/\' -f4 | awk \'{ print $3 }\'', (err, stdout, stderr) => {
          if (err) {
            msg.reply('Error: Unable to perform this command. Does the user running Node.js have access to `ping`?');
            msg.reply(`stderr: ${stderr}`);
            return;
          }
          msg.reply(`Europe: ${stdout}`);
          });
          exec('ping -c 2 -w 2 ping-us.nodequery.com | grep rtt | cut -d\'/\' -f4 | awk \'{ print $3 }\'', (err, stdout, stderr) => {
          if (err) {
            msg.reply('Error: Unable to perform this command. Does the user running Node.js have access to `ping`?');
            msg.reply(`stderr: ${stderr}`);
            return;
          }
          msg.reply(`United States: ${stdout}`);
          });
          exec('ping -c 2 -w 2 ping-as.nodequery.com | grep rtt | cut -d\'/\' -f4 | awk \'{ print $3 }\'', (err, stdout, stderr) => {
          if (err) {
            msg.reply('Error: Unable to perform this command. Does the user running Node.js have access to `ping`?');
            msg.reply(`stderr: ${stderr}`);
            return;
          }
          msg.reply(`Australia: ${stdout}`);
          });
        } else {
          if (settings.showUserUnauthorizedMessage == true) {
            msg.reply('You are not authorized to perform this command');
          }
        }
      }
  });
};
