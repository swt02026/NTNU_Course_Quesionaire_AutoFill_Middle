(function(){
	var frame=document.getElementById('55_iframe');
	var each_row=frame.contentDocument.getElementsByTagName("table")[0].tBodies[0].getElementsByTagName("tr");
	var inputframe = frame.contentDocument.getElementsByTagName("iframe")[0];
	inputframe.contentDocument.getElementsByTagName("textarea")[0];
	for (var i = 0; i < each_row.length; i++) {
		if(each_row[i].cells[15].getElementsByTagName("div")[0].innerHTML!="是"){
			each_row[i].click();
			setTimeout(function(){
				frame.contentDocument.getElementById("button-1010-btnEl").click();
				setTimeout(function(){
					inputframe = frame.contentDocument.getElementsByTagName("iframe")[0];
					setTimeout(function(){
						console.log(inputframe.contentDocument.getElementsByTagName("textarea")[0].innerHTML="無意見");
						setTimeout(function(){
							inputframe.contentDocument.getElementById("mb1").click();
							setTimeout(function(){
								inputframe.contentDocument.getElementById("button-1006-btnIconEl").click();
								setTimeout(function(){
									inputframe.contentDocument.getElementById("button-1005-btnIconEl").click();
								},300);
							},150);
						},150);
					},200);
				},150);
			},150);
		}
	}
})();