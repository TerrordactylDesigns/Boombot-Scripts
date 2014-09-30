/**/// Description: Listens for the word meow and returns a random Super Troopers meow quote
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = 'meow';
exports.listed = true;
exports.script = function(deathbot, text, uname, uid) {
  //meow array
  var meowList = [
      "Do I look like a cat to you, boy? Am I jumpin' around all nimbly bimbly from tree to tree?",
      "Meow. What is so damn funny?",
      "http://goo.gl/TJhkg",
      "All right meow. Hand over your license and registration.",
      "All right meow, where were we? ",
      "Excuse me, are you saying meow?",
      "Meow, I'm gonna have to give you a ticket on this one. No buts meow. It's the law.",
      "Not so funny meow, is it?",
      "http://goo.gl/13H9p",
      "http://goo.gl/doLg5"
  ];
  var rndm = Math.floor(Math.random() * 10);
  deathbot.respond(meowList[rndm]);
}