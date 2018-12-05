Markdown.MarkUp = METHOD((cls) => {
	
	let isDoneSetting = false;
	
	return {
		
		run : (md) => {
			//OPTIONAL: md
			
			let footprintRegex = /\[\^(\d)\]/g;
			let footprintBottomRegex = /\[\^(\d)\]:/g;
			
			if (isDoneSetting !== true) {
				
				__marked.setOptions({
					highlight : (code) => {
						return hljs.highlightAuto(code).value;
					}
				});
				
				isDoneSetting = true;
			}
			
			let html;
			
			if (md !== undefined) {
				
				html = __marked(md);
					
				while(true) {
				
					let footprintBottomMatch = footprintBottomRegex.exec(html);
					
					if (footprintBottomMatch === TO_DELETE) {
						break;
					}
					
					html = html.substring(0, footprintBottomMatch.index) + '<a href="#rfn-' + footprintBottomMatch[1] + '"><span id="fn-' + footprintBottomMatch[1] + '">[' + footprintBottomMatch[1] + ']</span></a>' + html.substring(footprintBottomMatch.index + footprintBottomMatch[0].length);
				}
				
				while(true) {
				
					let footprintMatch = footprintRegex.exec(html);
					
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
