function addLoadEvent(func){
	var cur = window.onload;
	if(typeof cur != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			cur();
			func();
		}
	}
}

function highlightNav(){
	var cur = document.location.href;
	var nav = document.getElementById('navigator');
	var links = nav.getElementsByTagName('a');

	for(var i = 0 ; i < links.length ; i++){
		var alink = links[i].getAttribute('href');
		if(cur.indexOf(alink) != -1){
			links[i].style.color = "#99fa99";
			break;
		}
	}
}

function hideInstructors(){
	var insList = document.getElementById('instructor');
	insList.style.display = "none";
	var li_class = document.getElementById('li_class');

	li_class.onmouseover = function(){

		li_class.style.position = "relative";
		//由于之前使用了id，优先权值太高，在这里修改className就没办法应用样式
		insList.style.display = "block";
		insList.style.position = "absolute";
		insList.style.left = "0";
		insList.style.top = "100%";
		insList.style.backgroundColor = "#077054";
		insList.style.zIndex = "30";
		insList.style.padding = "10px";
	}
	li_class.onmouseout = function(){
		insList.style.display = "none";
	}
}

addLoadEvent(hideInstructors);
addLoadEvent(highlightNav);



