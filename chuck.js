/**/// Description: Return a Chuck Norris joke
/**///
/**/// Dependencies: http
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = '/chuck';
exports.listed = true;
exports.script = function(boombot, data) {
  var http = require('http');
  var options = {
    host: 'api.icndb.com',
    port: 80,
    path: '/jokes/random'
  };
  //make the API call and parse the JSON result
  http.get(options, function(res) {
    res.on('data', function(chunk) {
      var chuck = JSON.parse(chunk);
      boombot.bot.speak(chuck.value.joke);
    });
  }).on('error', function(e) {
    boombot.bot.speak("Got error: " + e.message);
  });
}