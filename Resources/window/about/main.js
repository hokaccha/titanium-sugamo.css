// About window 

var webview = Ti.UI.createWebView({
	url:'main.html',
	width: '100%',
	height:'100%'
});

Titanium.UI.currentWindow.add(webview);
