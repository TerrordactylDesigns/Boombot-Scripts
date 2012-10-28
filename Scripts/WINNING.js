/**/// Description: #WINNING
/**///
/**/// Dependencies: http, TIGER BLOOD
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: duh, winning!
exports.trigger = '/winning';
exports.listed = true;
exports.script = function(boombot, text, uname, uid, private) {
  var http = require('http');
  var options = {
    host: 'sheenlipsum.com',
    port: 80,
    path: '/getquote'
  };
  http.get(options, function(res) {
    res.on('data', function(chunk) {
      boombot.respond(uid, chunk, private);
    });
  }).on('error', function(e) {
    boombot.respond(uid, "Got error: " + e.message, private);
  });
}