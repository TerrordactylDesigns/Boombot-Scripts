/**/// Description: Classic quotes from Duke3D
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/allusis
/**///
/**/// Notes: None
exports.trigger = 'nukem';
exports.listed = true;
exports.script = function(deathbot, text, uname, uid) {
  var nukemList = [
    "Get back to work, you slacker!", 
    "Damn, those alien bastards are gonna pay for shooting up my ride.",
    "Damn... I'm looking good!",
    "Ive got balls of steel!",
    "I like a good cigar...and a bad woman...",
    "What are you? Some bottom-feeding, scum-sucking algae eater?",
    "Who wants some?",
    "Your face, your ass - what's the difference?",
    "You're an inspiration for birth control.",
    "Come get some!"
  ];
  var rndm = Math.floor(Math.random() * 10);
  deathbot.respond(nukemList[rndm]);
}