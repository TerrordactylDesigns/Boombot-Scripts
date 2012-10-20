/**/// Description: Let me Google that for you.....
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: None
exports.trigger = 'google:';
exports.listed = true;
exports.script = function(boombot, data) {
  //chop out the query and parse it
  try {
    var searchQueryArray = data.text.split('google: ');
    var searchQuery = searchQueryArray[1];
    //replace the most common special characters and turn spaces into +
    searchQuery = searchQuery.replace(/\'/g,"%27").replace(/;/g,"%3B").replace(/#/g,"%23").replace(/@/g,"%40").replace(/&/g,"%26").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/=/g,"%3D").replace(/\+/g,"%2B");
    //replace spaces with +
    searchQuery = searchQuery.split(' ').join('+');
    boombot.bot.speak("http://lmgtfy.com/?q=" + searchQuery); //returns a link to let me google that for you for both your search and my amusement of delivery method
  } catch (ex) {
    //sometimes people just put /google with no search terms.....
    boombot.bot.speak("google what? Don't make me pick, you won't like what you see.....");
  }
}