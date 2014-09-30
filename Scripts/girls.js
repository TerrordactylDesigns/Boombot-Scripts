/**/// Description: Absurdly good looking women for your viewing pleasure
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/allusis
/**///
/**/// Notes: None
exports.trigger = 'girls';
exports.listed = true;
exports.script = function(deathbot, text, uname, uid) {
  var girlsList = [
    "Danielle Lloyd: http://goo.gl/G4lrd", 
    "Danielle Lloyd: http://goo.gl/oxqVl",
    "Adriana Lima: http://goo.gl/Ux81J",
    "Adriana Lima: http://goo.gl/ZEinz",
    "Doutzen Kroes: http://goo.gl/EOS02",
    "Doutzen Kroes: http://goo.gl/T8KL8",
    "Krystal Forscutt: http://goo.gl/as09M",
    "Laila Rouass: http://goo.gl/zXQKw",
    "Keeley Hazell: http://goo.gl/sOJqI",
    "Alyssa Miller: http://goo.gl/5GoKl",
    "Bar Rafaeli: http://goo.gl/N1Env",
    "Jessica Jane Clement: http://goo.gl/0fpBZ",
    "Olivia Munn: http://goo.gl/0Ajgh",
    "Bar Rafaeli: http://goo.gl/CR54Q",
    "Bonus! - http://goo.gl/RQFUf",
    "Bonus! Get it? - http://goo.gl/Hhx46",
    "Bonus! Get it? - http://goo.gl/5y41m",
    "Kate Beckinsale: http://goo.gl/ueuqk"
  ];
  var rndm = Math.floor(Math.random() * 18);
  deathbot.respond(girlsList[rndm]);
}