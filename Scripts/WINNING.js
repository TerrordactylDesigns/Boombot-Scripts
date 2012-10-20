/**/// Description: #WINNING
/**///
/**/// Dependencies: http, TIGER BLOOD
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: duh, winning!
exports.trigger = '/winning';
exports.listed = true;
exports.script = function(boombot, data) {
  var http = require('http');
  var options = {
    host: 'sheenlipsum.com',
    port: 80,
    path: '/getquote'
  };
  http.get(options, function(res) {
    res.on('data', function(chunk) {
      boombot.bot.speak(chunk);
    });
  }).on('error', function(e) {
    boombot.bot.speak("Got error: " + e.message);
  });
}