
xhr = new XMLHttpRequest();

// receiving data from the server
xhr.onload = function (e) {
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
			document.querySelector("#outputText").textContent = xhr.responseText; 
			console.debug(xhr.responseText);
		}
	}
};

// POST function
function post(data) {
	xhr.open('POST', '/post', true);
	xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	var request = "data=" + data;
	xhr.send(request);
}