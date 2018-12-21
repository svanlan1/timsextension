var content = {
	run: function() {
		console.log('this fuckin thing');
	}
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if(request.greeting === "start") {
		content.run();
	}
})