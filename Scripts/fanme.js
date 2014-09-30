/**/// Description: Make the bot fan you
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: user must fan the bot first
exports.trigger = '.fanme';
exports.listed = true;
exports.script = function(deathbot, text, uname, uid) {
  deathbot.bot.getFans(function (data) {
    if (data.fans.indexOf(uid) != -1) {
      deathbot.bot.becomeFan(uid, function(res) {
        if (res.success) {
          deathbot.respond('Here\'s your free fan point!');
        } else {
          deathbot.respond('I already fanned you!. Greedy....');
        }
      });
    } else {
      deathbot.respond('Not until you fan me first!');
    }
  });
}