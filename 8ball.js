/**/// Description: Magic 8 ball knows all
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = '8ball';
exports.listed = true;
exports.script = function(boombot, data) {
  //magic 8ball array
  var eightBallList = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes – definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ]
  var rndm = Math.floor(Math.random() * 20);
  boombot.bot.speak(":8ball: Says: " + eightBallList[rndm]);
}