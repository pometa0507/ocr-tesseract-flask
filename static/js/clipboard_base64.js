window.onload = function() {

	var element =  document.querySelector("[contenteditable]");

	element.addEventListener("input", function(e){
		var temp = document.createElement("div");
		temp.innerHTML = this.innerHTML;
		var pastedImage = temp.querySelector("img");
		
		if (pastedImage) {
			var base64 = pastedImage.src;
			document.querySelector("#outputImage").src = base64;
			post(base64);
		}
		
		// return the text
		this.innerHTML = "<b>Paste Image here.</b>";
	})
	
};

