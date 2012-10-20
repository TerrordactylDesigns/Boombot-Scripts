/**/// Description: Cheer for the song/Dj
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = '/cheer';
exports.listed = true;
exports.script = function(boombot, data) {
  //cheer array
  var cheerList = [
  'I <3 this song!!',
  'GET GET GETTTTTTTIN IT!!',
  'This is the best DJ EVER!'
  ];
  var rndm = Math.floor(Math.random() * 3);
  boombot.bot.speak(cheerList[rndm]);
}