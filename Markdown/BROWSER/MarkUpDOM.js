Markdown.MarkUpDOM = METHOD({
	
	run : (params) => {
		//REQUIRED: params
		//REQUIRED: params.dom
		//OPTIONAL: params.md
		
		let dom = params.dom;
		let md = params.md;
		
		let el = dom.getEl();
		
		el.setAttribute('class', 'markdown-body');
		
		if (md === undefined) {
			el.innerHTML = '';
		} else {
			el.innerHTML = Markdown.MarkUp(md);
		}
	}
});
