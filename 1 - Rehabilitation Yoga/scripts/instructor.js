function imageShow(){
	var messageBox = document.getElementById('aboutMessage');
	var images = messageBox.getElementsByTagName('img');
	for(var i = 0; i < images.length;i++){
		images[i].onmouseover = function(){
			this.style.width = "200px";
		}
		images[i].onmouseout = function(){
			this.style.width = "150px";
		}
	}
}
addLoadEvent(imageShow);