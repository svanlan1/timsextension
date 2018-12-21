function start(tab) {
	chrome.tabs.sendRequest(tab, {greeting: "start", data: localStorage.getItem('saved')}, function(response) {});
}

chrome.browserAction.onClicked.addListener(function(tab) {
	start(tab.id);
})

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request);
	}
)