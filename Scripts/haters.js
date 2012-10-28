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
   "http://www.hatersgoingtohate.com/wp-content/uploads/2010/06/haters-gonna-hate-rubberband-ball.jpg"
  , "http://www.hatersgoingtohate.com/wp-content/uploads/2010/06/haters-gonna-hate-cat.jpg"
  , "http://jesad.com/img/life/haters-gonna-hate/haters-gonna-hate01.jpg"
  , "http://i671.photobucket.com/albums/vv78/Sinsei55/HatersGonnaHatePanda.jpg"
  , "http://24.media.tumblr.com/tumblr_lltwmdVpoL1qekprfo1_500.gif"
  , "http://s3.amazonaws.com/kym-assets/photos/images/newsfeed/000/087/536/1292102239519.gif"
  , "http://i391.photobucket.com/albums/oo351/PikaPow3/squirtle.gif"
  , "http://c.static.memegenerator.net/cache/instances/500x/13/13355/13676320.jpg"
  , "http://icanhasinternets.com/wp-content/uploads/2010/05/haters.gif"
  , "http://icanhasinternets.com/wp-content/uploads/2010/05/haters5.jpg"
  ];
  var rndm = Math.floor(Math.random() * 10);
  boombot.respond(uid, hatersList[rndm], private);
}