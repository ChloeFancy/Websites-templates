function labelFocus(){
	var labels = document.getElementsByTagName('label');
	var inputs = document.getElementsByTagName('input');
	for(var i = 0 ; i < inputs.length ; i++){
		if(inputs[i].type!='submit'){
			inputs[i].onfocus = function(){
				if(this.value==this.defaultValue){
					this.value = "";
				}
			}
			inputs[i].onblur = function(){
				if(this.value==""){
					this.value = this.defaultValue;
				}
			}
		}
	}
	for(var i = 0 ; i < labels.length ; i++){

		var str = labels[i].lastChild.nodeValue;

		labels[i].onclick = function(){
			var inputStr = inputs.getElementById('str');
			inputStr.focus();
		}
	}
}
addLoadEvent(labelFocus);

function regCheckEmail(){
	var e = document.getElementById('Email');
	var mailPattern = /\w{1,64}@([-0-9a-zA-z]{1,63}\.)+([0-9a-zA-z]{1,63})/;
	if(mailPattern.test(e.value)==false){
		alert("Email Error!");
	}
}


function validateForm(){
	var inputs = document.getElementsByTagName('input');
	var send = document.getElementById('send');
	var err;
	send.onclick = function(){
		err = '';
		regCheckEmail();
		for(var i = 0 ; i < inputs.length ; i++){
			if(inputs[i].type!='submit'){
				if(inputs[i].value==inputs[i].defaultValue){
					err+=inputs[i].id+' ';
				}
			}
		}
		if(err!='')
			alert(err+'invalid!');
	}
}
addLoadEvent(validateForm);