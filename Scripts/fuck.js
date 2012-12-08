/**/// Description: The list of fucks not given
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/allusis
/**///
/**/// Notes: None
exports.trigger = 'fuck';
exports.listed = false;
exports.script = function(boombot, text, uname, uid, private) {
  var fuckList = [
    "http://goo.gl/ZZA5D", 
    "http://goo.gl/LC1qn",
    "http://goo.gl/u9Xfc",
    "http://goo.gl/8xGqC",
    "http://goo.gl/rQojn",
    "http://goo.gl/JjwNK",
    "http://goo.gl/MKIYY",
    "http://goo.gl/e8BAb",
    "Shut the fuck up... No one gives fucks!",
    "What the fuck?"
  ];
  var rndm = Math.floor(Math.random() * 10);
  boombot.respond(uid, fuckList[rndm], private);
}