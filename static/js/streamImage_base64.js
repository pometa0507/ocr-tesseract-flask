

function StreamImageToBase64(img, mime_type) {
	// New Canvas
	var canvas = document.createElement('canvas');		
	//大きめにとってpython側で余白のトリミング
	canvas.width  = window.parent.screen.width;
	canvas.height  = window.parent.screen.height;
	
	// Draw Image
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	
	// To Base64
	return canvas.toDataURL(mime_type);
}

document.getElementById("text-button").onclick = function() {
	var img = document.getElementById('video');
	var b64 = StreamImageToBase64(img, "image/jpeg"); 
	post(b64);
}

