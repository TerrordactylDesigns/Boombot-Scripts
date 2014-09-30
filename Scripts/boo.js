/**/// Description: Boo the current song/Dj
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = '.boo';
exports.listed = true;
exports.script = function(deathbot, text, uname, uid) {
  //boo array
  var booList = [
    'Boo this man! BOOOOOOOOOO!',
    'This song sucks!',
    'Who picked this song? Cause its terrible'
  ];
  var rndm = Math.floor(Math.random() * 3);
  deathbot.respond(booList[rndm]);
}