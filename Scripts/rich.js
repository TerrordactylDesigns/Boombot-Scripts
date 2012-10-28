/**/// Description: Bender/Futurama quote
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = '/rich';
exports.listed = true;
exports.script = function(boombot, text, uname, uid, private) {
  boombot.respond(uid, "I don't think you realize how rich he really is. In fact, I should put on a monocle.  /monocle", private);
}