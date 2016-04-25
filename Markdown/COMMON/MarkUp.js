Markdown.MarkUp = METHOD(function(cls) {
	'use strict';
	
	var
	// is done setting
	isDoneSetting = false;
	
	return {
		
		run : function(md) {
			//OPTIONAL: md
			
			var
			// html
			html,
			
			// footprint regex
			footprintRegex = /\[\^(\d)\]/g,
			
			// footprint match
			footprintMatch,
			
			// footprint bottom regex
			footprintBottomRegex = /\[\^(\d)\]:/g,
			
			// footprint bottom match
			footprintBottomMatch;
			
			if (isDoneSetting !== true) {
				
				__marked.setOptions({
					highlight : function(code) {
						return hljs.highlightAuto(code).value;
					}
				});
				
				isDoneSetting = true;
			}
			
			if (md !== undefined) {
				
				html = __marked(md);
					
				while(true) {
				
					footprintBottomMatch = footprintBottomRegex.exec(html);
					
					if (footprintBottomMatch === TO_DELETE) {
						break;
					}
					
					html = html.substring(0, footprintBottomMatch.index) + '<a href="#rfn-' + footprintBottomMatch[1] + '"><span id="fn-' + footprintBottomMatch[1] + '">[' + footprintBottomMatch[1] + ']</span></a>' + html.substring(footprintBottomMatch.index + footprintBottomMatch[0].length);
				}
				
				while(true) {
				
					footprintMatch = footprintRegex.exec(html);
					
					if (footprintMatch === TO_DELETE) {
						break;
					}
					
					html = html.substring(0, footprintMatch.index) + '<a href="#fn-' + footprintMatch[1] + '"><sup id="rfn-' + footprintMatch[1] + '">[' + footprintMatch[1] + ']</sup></a>' + html.substring(footprintMatch.index + footprintMatch[0].length);
				}
				
				html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
			}
			
			return html;
		}
	};
});
