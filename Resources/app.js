Titanium.UI.setBackgroundColor('#000');
var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
	title:'Sugamo.cssについて',
	backgroundColor:'#fff',
	url: 'window/about/main.js'
});
var tab1 = Titanium.UI.createTab({  
	icon:'img/info.png',
	title:'About',
	window:win1
});

var win2 = Titanium.UI.createWindow({  
	title:'@Sugamo_css',
	backgroundColor:'#fff',
	url: 'window/twitter/main.js'
});
var tab2 = Titanium.UI.createTab({  
	icon:'img/twitter.png',
	title:'Twitter',
	window:win2
});

var win3 = Titanium.UI.createWindow({  
	title:'過去に参加した人',
	backgroundColor:'#fff',
	url: 'window/people/main.js'
});
var tab3 = Titanium.UI.createTab({  
	icon:'img/people.png',
	title:'People',
	window:win3
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();
