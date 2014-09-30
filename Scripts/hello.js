/**/// Description: Say hello to the bot
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = '.hello';
exports.listed = true;
exports.script = function(deathbot, text, uname, uid) {
  deathbot.bot.speak(uid, 'Hai '+uname+'!');
}