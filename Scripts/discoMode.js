/**/// Description: Turn on disco mode!
/**/// Switches through available avatars once per second until
/**/// disco mode is turned off (by repeating the command)
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/ZECTBynmo
/**///
/**/// Notes: None
// var isDiscoOn = false,
// 	iCurrentAvatar = 0,
// 	discoInterval;

// exports.trigger = '.disco';
// exports.listed = true;
// exports.script = function( deathbot, text, uname, uid ) {
// 	isDiscoOn = !isDiscoOn;

// 	if( typeof(discoInterval) == "undefined" ) {
// 		discoInterval = setInterval( function() {
// 			// Make sure disco mode is on
// 			if( isDiscoOn ) {
// 				// Get the list of available avatars
// 				deathbot.bot.getAvatarIds( function(data) {
// 					iCurrentAvatar++;
					
// 					if( iCurrentAvatar >= data.ids.length ) {
// 						iCurrentAvatar = 0;
// 					}
					
// 					deathbot.bot.setAvatar( iCurrentAvatar );
// 				});
// 			}
// 		}, 1000);
// 	}
// }

// not compatible with plug yet