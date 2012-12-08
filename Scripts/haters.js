/**/// Description: Haters gonna hate...
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = '/haters';
exports.listed = true;
exports.script = function(boombot, text, uname, uid, private) {
  //haters array
  var hatersList = [
    "http://goo.gl/sr4HT",
    "http://goo.gl/aoxRu",
    "http://goo.gl/gYQzk",
    "http://goo.gl/6JoI3",
    "http://goo.gl/CMVyJ",
    "http://goo.gl/2IaJe",
    "http://goo.gl/xJLXk",
    "http://goo.gl/xSwCf",
    "http://goo.gl/1H556",
    "http://goo.gl/4EWoM",
    "http://goo.gl/6nf46"
  ];
  var rndm = Math.floor(Math.random() * 11);
  boombot.respond(uid, hatersList[rndm], private);
}