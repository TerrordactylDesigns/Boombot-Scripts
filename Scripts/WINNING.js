/**/// Description: #WINNING
/**///
/**/// Dependencies: http, TIGER BLOOD
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: duh, winning!
exports.trigger = '.winning';
exports.listed = true;
exports.script = function(deathbot, text, uname, uid) {
  var http = require('http');
  var options = {
    host: 'sheenlipsum.com',
    port: 80,
    path: '/getquote'
  };
  http.get(options, function(res) {
    res.on('data', function(chunk) {
      deathbot.respond(chunk);
    });
  }).on('error', function(e) {
    deathbot.respond("Got error: " + e.message);
  });
}