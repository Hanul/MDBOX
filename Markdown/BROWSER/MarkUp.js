OVERRIDE(Markdown.MarkUp, function(origin) {
	'use strict';
	
	Markdown.MarkUp = METHOD({
		
		run : function(md) {
			'use strict';
			//OPTIONAL: md
			
			var
			// browser info
			browserInfo = INFO.getBrowserInfo();
			
			if (browserInfo.name === 'Internet Explorer' && browserInfo.version < 9) {
				return md;
			} else {
				return origin(md);
			}
		}
	});
});
