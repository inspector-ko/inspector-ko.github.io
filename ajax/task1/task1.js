window.onload = function () {
	var num1 = document.querySelector('input[name=num1]');
	var num2 = document.querySelector('input[name=num2]');
	document.querySelector('#send2').onclick = function(){
		var params = 'num1=' + num1.value + '&' + 'num2=' + num2.value;
		ajaxPost(params);
	}
}
	function ajaxPost(params){
		var request = new XMLHttpRequest();
		request.onreadyStatechange = function() {
			document.querySelector('#summ').innerHTML = request.responseText;	
	}
request.open('POST','a1.php');
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.send(params);
}