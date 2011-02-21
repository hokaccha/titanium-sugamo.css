var data = [];
'sigwyg Takazudo kosei27 yomotsu tacamy kotarok hokaccha nekomeg sakaki0214 redmountain ayaxx ksk songmu neotag miyazakiryo seckie_ taku_eof louiselouisa Funky4692 vant Stryfy _kojika_ kzms2 kazumich hitoyam vladaruz myakura kyosuke Jxck_ koba LinearNS cheesepie kyou uri a_t iwaim hamashun keno42 nagomu negiyama tobotoboto dearhearts doke kuruma hinatami asita_hmt yukop mattari_panda kotarochiba IMAGEDRIVE taiju kawagooch namutaka taku_o sugyan kana1 soh335 thinca caravaco yoppiblog Stocker_jp tsmd57 2k54 hiloki magi1125 skuare debiru ventboys mackey405 asu_chap skyguild yunozy kazuyaYoshi otsuno kyo_ago oku_chan tsuruta_m stripejam hamaco nazomikan makiobiz basyura h2ham fleshkine super_rti Tkashiro masudaK run67 yuxu os0x codeaholic1210 saucerjp seijimomoto rika_t MrAdults_taka'.split(' ').forEach(function(user) {
	data.push({title: user});
});
var tableview = Titanium.UI.createTableView({data:data});
Titanium.UI.currentWindow.add(tableview);
