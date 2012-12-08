/**/// Description: Quotes from Clerks
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/allusis
/**///
/**/// Notes: None
exports.trigger = 'savages';
exports.listed = false;
exports.script = function(boombot, text, uname, uid, private) {
  var savagesList = [
    "Yeah. Silent Bob, you're a rude motherfucker, you know that? But you're cute as hell. I could go down on you, suck you, line up three other guys, make like a circus seal.", 
    "Are there any balls down there?",
    "Hermaphroditic porn. Starlets with both organs. You should see the box. Beautiful chicks with dicks that put mine to shame.",
    "I'm offering you my body and you're offering me semantics.",
    "I'm not even supposed to be here today!",
    "What kind of convenience store do you run here?",
    "Bunch of savages in this town.",
    "People say crazy shit during sex. One time I called this girl Mom.",
    "Hey, try not to suck any dick on the way through the parking lot!",
    "It's important to have a job that makes a difference, boys. That's why I manually masturbate caged animals for artificial insemination.",
    "I don't care if she's my cousin or not, I'm gonna knock those boots again tonight.",
    "[singing] My love for you is like a truck, BERZERKER! Would you like some making fuck, BERZERKER!",
    "My love for you is ticking clock BERSERKER! Would you like to suck my cock BERSERKER!",
    "Melodrama coming from you seems about as natural as an oral bowel movement.",
    "http://www.youtube.com/watch?v=io94LB3kH44",
    "http://goo.gl/jsB4Z",
    "http://goo.gl/HiuQF",
    "http://goo.gl/st2VT"
  ];
  var rndm = Math.floor(Math.random() * 18);
  boombot.respond(uid, savagesList[rndm], private);
}