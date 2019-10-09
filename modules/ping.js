module.exports = function(client, settings){
  client.on('message', msg => {
      if (msg.content === settings.defaultCommandPrefix + 'ping') {
          msg.reply('Pong!');
        }
      });
};
