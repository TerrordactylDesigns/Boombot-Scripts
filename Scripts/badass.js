/**/// Description: Listens for the word badass and returns a random badass meme
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = 'badass';
exports.listed = true;
exports.script = function(deathbot, text, uname, uid) {
  var badList = ['http://i3.kym-cdn.com/entries/icons/original/000/007/508/watch-out-we-got-a-badass-over-here-meme.png'
                ,'Watch out, we got a badass over here....'
                ,'http://weknowmemes.com/wp-content/uploads/2011/12/watch-out-badass-obi-over-here.png'];
  var rndm = Math.floor(Math.random() * 3);
  deathbot.respond(badList[rndm]);
}