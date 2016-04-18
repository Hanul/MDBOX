MD.MarkUpDOM = METHOD({
	
	run : function(params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.dom
		//OPTIONAL: params.md
		
		var
		// dom
		dom = params.dom,
		
		// md
		md = params.md,
		
		// el
		el = dom.getEl();
		
		el.setAttribute('class', 'markdown-body');
		
		if (md === undefined) {
			el.innerHTML = '';
		} else {
			el.innerHTML = MD.MarkUp(md);
		}
	}
});
