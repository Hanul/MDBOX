Markdown.MarkdownSample = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self) => {
		
		let editor;
		let content;
		
		inner.setDom(DIV({
			c : [editor = TEXTAREA({
				style : {
					position : 'fixed',
					left : 0,
					top : 0,
					backgroundColor : '#000',
					color : '#fff',
					lineHeight : '1.4em',
					padding : 10,
					onDisplayResize : (width, height) => {
						return {
							width : width / 2 - 20,
							height : height - 20
						};
					}
				},
				on : {
					keyup : (e, textarea) => {
						
						Markdown.MarkUpDOM({
							dom : content,
							md : textarea.getValue()
						});
					},
					change : (e, textarea) => {
						
						Markdown.MarkUpDOM({
							dom : content,
							md : textarea.getValue()
						});
					}
				}
			}), content = P({
				style : {
					position : 'fixed',
					right : 0,
					top : 0,
					backgroundColor : '#fff',
					color : '#000',
					fontSize : 14,
					padding : 10,
					overflowY : 'scroll',
					onDisplayResize : (width, height) => {
						return {
							width : width / 2 - 20,
							height : height - 20
						};
					}
				}
			})]
		}));
		
		Markdown.R('sample.md', (md) => {
			editor.setValue(md);
		});
	}
});
