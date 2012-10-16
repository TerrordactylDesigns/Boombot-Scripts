/**/// Description: Boo the current song/Dj
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = '/boo';
exports.listed = true;
exports.script = function(boombot, data) {
  //boo array
  var booList = [
    'Boo this man! BOOOOOOOOOO!',
    'This song sucks!',
    'Who picked this song? Cause its terrible'
  ];
  var rndm = Math.floor(Math.random() * 3);
  boombot.bot.speak(booList[rndm]);
}