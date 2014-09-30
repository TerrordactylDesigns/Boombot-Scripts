/**/// Description: I'm an example of how to make your own script!
/**///
/**/// Dependencies: None (if you require a package/import please tell us)
/**///
/**/// Author: https://github.com/TerrordactylDesigns (become famous!)
/**///
/**/// Notes: These comments here are all required information if you
/**///        submit scripts to be published. Just give us the basics,
/**///        so it's easiest on people new to your command.
exports.trigger = '.example';
exports.listed = true;
exports.script = function(deathbot, text, uname, uid) {
  deathbot.respond('What a lame example!');
}
/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
  trigger - if your trigger has a . in front it will only trigger on
            that exact match. If there is no . it will find that word
            ANYWHERE in a chat sentence.

  listed  - If set true the script trigger will be listed automatically
            when .help is called. If false the script still runs, just
            will not be added to your bots help command.

  script  - What you came to do. an entire Boombot object is passed in.
            Go wild. Along with a Boombot is the text said in chat or
            PM, the users name, and the users id. Lastly a boolean
            value for whether or not the command will be returned via
            chat or PM.
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/