/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'remit-webicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'dribbble': '&#xe900;',
		'social': '&#xe900;',
		'yelp': '&#xe901;',
		'brand': '&#xe901;',
		'social1': '&#xe901;',
		'foursquare': '&#xe902;',
		'brand1': '&#xe902;',
		'social2': '&#xe902;',
		'flattr': '&#xe903;',
		'brand2': '&#xe903;',
		'donate': '&#xe903;',
		'social3': '&#xe903;',
		'xing': '&#xe904;',
		'brand3': '&#xe904;',
		'social4': '&#xe904;',
		'xing1': '&#xe905;',
		'brand4': '&#xe905;',
		'social5': '&#xe905;',
		'pinterest': '&#xe906;',
		'brand5': '&#xe906;',
		'social6': '&#xe906;',
		'pinterest1': '&#xe907;',
		'brand6': '&#xe907;',
		'social7': '&#xe907;',
		'stackoverflow': '&#xe908;',
		'brand7': '&#xe908;',
		'social8': '&#xe908;',
		'stumbleupon': '&#xe909;',
		'brand8': '&#xe909;',
		'social9': '&#xe909;',
		'stumbleupon1': '&#xe90a;',
		'brand9': '&#xe90a;',
		'social10': '&#xe90a;',
		'delicious': '&#xe90b;',
		'brand10': '&#xe90b;',
		'social11': '&#xe90b;',
		'lastfm': '&#xe90c;',
		'brand11': '&#xe90c;',
		'social12': '&#xe90c;',
		'lastfm1': '&#xe90d;',
		'brand12': '&#xe90d;',
		'social13': '&#xe90d;',
		'linkedin': '&#xe90e;',
		'brand13': '&#xe90e;',
		'social14': '&#xe90e;',
		'linkedin1': '&#xe90f;',
		'brand14': '&#xe90f;',
		'social15': '&#xe90f;',
		'hackernews': '&#xe910;',
		'brand15': '&#xe910;',
		'ycombinator': '&#xe910;',
		'yc': '&#xe910;',
		'social16': '&#xe910;',
		'reddit': '&#xe911;',
		'brand16': '&#xe911;',
		'social17': '&#xe911;',
		'skype': '&#xe912;',
		'brand17': '&#xe912;',
		'social18': '&#xe912;',
		'soundcloud': '&#xe913;',
		'brand18': '&#xe913;',
		'social19': '&#xe913;',
		'soundcloud1': '&#xe914;',
		'brand19': '&#xe914;',
		'social20': '&#xe914;',
		'yahoo': '&#xe915;',
		'brand20': '&#xe915;',
		'social21': '&#xe915;',
		'tumblr': '&#xe916;',
		'brand21': '&#xe916;',
		'social22': '&#xe916;',
		'tumblr1': '&#xe917;',
		'brand22': '&#xe917;',
		'social23': '&#xe917;',
		'blogger': '&#xe918;',
		'brand23': '&#xe918;',
		'social24': '&#xe918;',
		'blogger1': '&#xe919;',
		'brand24': '&#xe919;',
		'social25': '&#xe919;',
		'ello': '&#xe91a;',
		'brand25': '&#xe91a;',
		'social26': '&#xe91a;',
		'wordpress': '&#xe91b;',
		'brand26': '&#xe91b;',
		'social27': '&#xe91b;',
		'cms': '&#xe91b;',
		'github': '&#xe91c;',
		'brand27': '&#xe91c;',
		'octacat': '&#xe91c;',
		'social28': '&#xe91c;',
		'steam': '&#xe91d;',
		'brand28': '&#xe91d;',
		'social29': '&#xe91d;',
		'steam1': '&#xe91e;',
		'brand29': '&#xe91e;',
		'social30': '&#xe91e;',
		'500px': '&#xe91f;',
		'brand30': '&#xe91f;',
		'social31': '&#xe91f;',
		'deviantart': '&#xe920;',
		'brand31': '&#xe920;',
		'social32': '&#xe920;',
		'behance': '&#xe921;',
		'brand32': '&#xe921;',
		'social33': '&#xe921;',
		'behance1': '&#xe922;',
		'brand33': '&#xe922;',
		'social34': '&#xe922;',
		'dribbble1': '&#xe923;',
		'brand34': '&#xe923;',
		'social35': '&#xe923;',
		'flickr': '&#xe924;',
		'brand35': '&#xe924;',
		'social36': '&#xe924;',
		'flickr1': '&#xe925;',
		'brand36': '&#xe925;',
		'social37': '&#xe925;',
		'flickr2': '&#xe926;',
		'brand37': '&#xe926;',
		'social38': '&#xe926;',
		'flickr3': '&#xe927;',
		'brand38': '&#xe927;',
		'social39': '&#xe927;',
		'vimeo': '&#xe928;',
		'brand39': '&#xe928;',
		'social40': '&#xe928;',
		'vimeo1': '&#xe929;',
		'brand40': '&#xe929;',
		'social41': '&#xe929;',
		'twitch': '&#xe92a;',
		'brand41': '&#xe92a;',
		'social42': '&#xe92a;',
		'youtube': '&#xe92b;',
		'brand42': '&#xe92b;',
		'social43': '&#xe92b;',
		'feed': '&#xe92c;',
		'rss': '&#xe92c;',
		'social44': '&#xe92c;',
		'feed1': '&#xe92d;',
		'rss1': '&#xe92d;',
		'social45': '&#xe92d;',
		'sina-weibo': '&#xe92e;',
		'brand43': '&#xe92e;',
		'social46': '&#xe92e;',
		'renren': '&#xe92f;',
		'brand44': '&#xe92f;',
		'social47': '&#xe92f;',
		'vk': '&#xe930;',
		'brand45': '&#xe930;',
		'social48': '&#xe930;',
		'vine': '&#xe931;',
		'brand46': '&#xe931;',
		'social49': '&#xe931;',
		'twitter': '&#xe932;',
		'brand47': '&#xe932;',
		'tweet': '&#xe932;',
		'social50': '&#xe932;',
		'telegram': '&#xe933;',
		'brand48': '&#xe933;',
		'social51': '&#xe933;',
		'spotify': '&#xe934;',
		'brand49': '&#xe934;',
		'social52': '&#xe934;',
		'whatsapp': '&#xe935;',
		'brand50': '&#xe935;',
		'social53': '&#xe935;',
		'instagram': '&#xe936;',
		'brand51': '&#xe936;',
		'social54': '&#xe936;',
		'facebook': '&#xe937;',
		'brand52': '&#xe937;',
		'social55': '&#xe937;',
		'facebook1': '&#xe938;',
		'brand53': '&#xe938;',
		'social56': '&#xe938;',
		'hangouts': '&#xe939;',
		'brand54': '&#xe939;',
		'social57': '&#xe939;',
		'google-plus': '&#xe93a;',
		'brand55': '&#xe93a;',
		'social58': '&#xe93a;',
		'google-plus1': '&#xe93b;',
		'brand56': '&#xe93b;',
		'social59': '&#xe93b;',
		'google-plus2': '&#xe93c;',
		'brand57': '&#xe93c;',
		'social60': '&#xe93c;',
		'mail': '&#xe93d;',
		'contact': '&#xe93d;',
		'support': '&#xe93d;',
		'newsletter': '&#xe93d;',
		'letter': '&#xe93d;',
		'email': '&#xe93d;',
		'envelop': '&#xe93d;',
		'social61': '&#xe93d;',
		'mail1': '&#xe93e;',
		'contact1': '&#xe93e;',
		'support1': '&#xe93e;',
		'newsletter1': '&#xe93e;',
		'letter1': '&#xe93e;',
		'email1': '&#xe93e;',
		'envelop1': '&#xe93e;',
		'social62': '&#xe93e;',
		'mail2': '&#xe93f;',
		'contact2': '&#xe93f;',
		'support2': '&#xe93f;',
		'newsletter2': '&#xe93f;',
		'letter2': '&#xe93f;',
		'email2': '&#xe93f;',
		'envelop2': '&#xe93f;',
		'social63': '&#xe93f;',
		'mail3': '&#xe940;',
		'contact3': '&#xe940;',
		'support3': '&#xe940;',
		'newsletter3': '&#xe940;',
		'letter3': '&#xe940;',
		'email3': '&#xe940;',
		'envelop3': '&#xe940;',
		'social64': '&#xe940;',
		'share': '&#xe96c;',
		'social65': '&#xe96c;',
		'books': '&#xe96d;',
		'files-empty': '&#xe984;',
		'navigation-2': '&#xe985;',
		'New-Project-21-7F19A4F': '&#xe986;',
		'New-Project-21-2F51344': '&#xe987;',
		'New-Project-21-73A4B83': '&#xe988;',
		'New-Project-21-8897C69': '&#xe989;',
		'New-Project-18-C7FD4F8': '&#xe98a;',
		'arrow-90deg-down': '&#xe941;',
		'arrow-90deg-left': '&#xe942;',
		'arrow-90deg-right': '&#xe943;',
		'arrow-90deg-up': '&#xe944;',
		'arrow-bar-down': '&#xe945;',
		'arrow-bar-left': '&#xe946;',
		'arrow-bar-right': '&#xe947;',
		'arrow-bar-up': '&#xe948;',
		'arrow-clockwise': '&#xe949;',
		'arrow-counterclockwise': '&#xe94a;',
		'arrow-down-circle-fill': '&#xe94b;',
		'arrow-down-circle': '&#xe94c;',
		'arrow-down-left-circle-fill': '&#xe94d;',
		'arrow-down-left-circle': '&#xe94e;',
		'arrow-down-left-square-fill': '&#xe94f;',
		'arrow-down-left-square': '&#xe950;',
		'arrow-down-left': '&#xe951;',
		'arrow-down-right-circle-fill': '&#xe952;',
		'arrow-down-right-circle': '&#xe953;',
		'arrow-down-right-square-fill': '&#xe954;',
		'arrow-down-right-square': '&#xe955;',
		'arrow-down-right': '&#xe956;',
		'arrow-down-short': '&#xe957;',
		'arrow-down-square-fill': '&#xe958;',
		'arrow-down-square': '&#xe959;',
		'arrow-down-up': '&#xe95a;',
		'arrow-down': '&#xe95b;',
		'arrow-left-circle-fill': '&#xe95c;',
		'arrow-left-circle': '&#xe95d;',
		'arrow-left-right': '&#xe95e;',
		'arrow-left-short': '&#xe95f;',
		'arrow-left-square-fill': '&#xe960;',
		'arrow-left-square': '&#xe961;',
		'arrow-left': '&#xe962;',
		'arrow-repeat': '&#xe963;',
		'arrow-return-left': '&#xe964;',
		'arrow-return-right': '&#xe965;',
		'arrow-right-circle-fill': '&#xe966;',
		'arrow-right-circle': '&#xe967;',
		'arrow-right-short': '&#xe968;',
		'arrow-right-square-fill': '&#xe969;',
		'arrow-right-square': '&#xe96a;',
		'arrow-right': '&#xe96b;',
		'arrow-up-circle-fill': '&#xe96e;',
		'arrow-up-circle': '&#xe96f;',
		'arrow-up-left-circle-fill': '&#xe970;',
		'arrow-up-left-circle': '&#xe971;',
		'arrow-up-left-square-fill': '&#xe972;',
		'arrow-up-left-square': '&#xe973;',
		'arrow-up-left': '&#xe974;',
		'arrow-up-right-circle-fill': '&#xe975;',
		'arrow-up-right-circle': '&#xe976;',
		'arrow-up-right-square-fill': '&#xe977;',
		'arrow-up-right-square': '&#xe978;',
		'arrow-up-right': '&#xe979;',
		'arrow-up-short': '&#xe97a;',
		'arrow-up-square-fill': '&#xe97b;',
		'arrow-up-square': '&#xe97c;',
		'arrow-up': '&#xe97d;',
		'arrows-angle-contract': '&#xe97e;',
		'arrows-angle-expand': '&#xe97f;',
		'arrows-collapse': '&#xe980;',
		'arrows-expand': '&#xe981;',
		'arrows-fullscreen': '&#xe982;',
		'arrows-move': '&#xe983;',
		'box-arrow-down-left': '&#xea00;',
		'box-arrow-down-right': '&#xea01;',
		'box-arrow-down': '&#xea02;',
		'box-arrow-in-down-left': '&#xea03;',
		'box-arrow-in-down-right': '&#xea04;',
		'box-arrow-in-down': '&#xea05;',
		'box-arrow-in-left': '&#xea06;',
		'box-arrow-in-right': '&#xea07;',
		'box-arrow-in-up-left': '&#xea08;',
		'box-arrow-in-up-right': '&#xea09;',
		'box-arrow-in-up': '&#xea0a;',
		'box-arrow-left': '&#xea0b;',
		'box-arrow-right': '&#xea0c;',
		'box-arrow-up-left': '&#xea0d;',
		'box-arrow-up-right': '&#xea0e;',
		'box-arrow-up': '&#xea0f;',
		'boxes': '&#xea18;',
		'buildings-fill': '&#xea48;',
		'clipboard-check': '&#xeb16;',
		'clipboard': '&#xeb23;',
		'clipboard2': '&#xeb33;',
		'cloud-arrow-down-fill': '&#xeb37;',
		'cloud-arrow-down': '&#xeb38;',
		'cloud-arrow-up-fill': '&#xeb39;',
		'cloud-arrow-up': '&#xeb3a;',
		'cursor': '&#xeb90;',
		'file-arrow-down-fill': '&#xec41;',
		'file-arrow-down': '&#xec42;',
		'file-arrow-up-fill': '&#xec43;',
		'file-arrow-up': '&#xec44;',
		'file-earmark-arrow-down-fill': '&#xec51;',
		'file-earmark-arrow-down': '&#xec52;',
		'file-earmark-arrow-up-fill': '&#xec53;',
		'file-earmark-arrow-up': '&#xec54;',
		'file-earmark-bar-graph': '&#xec56;',
		'file-earmark-font': '&#xec67;',
		'file-earmark-post-fill': '&#xec7c;',
		'file-earmark-post': '&#xec7d;',
		'file-post': '&#xecad;',
		'filetype-css': '&#xecc7;',
		'filetype-html': '&#xecce;',
		'globe': '&#xed2e;',
		'graph-down-arrow': '&#xed33;',
		'graph-up-arrow': '&#xed35;',
		'house-fill': '&#xed81;',
		'house': '&#xed8e;',
		'info-square': '&#xeda3;',
		'journal-arrow-down': '&#xedaa;',
		'journal-arrow-up': '&#xedab;',
		'layout-sidebar-inset-reverse': '&#xedcc;',
		'layout-text-window-reverse': '&#xedd3;',
		'layout-text-window': '&#xedd4;',
		'menu-button-wide-fill': '&#xee03;',
		'postcard': '&#xeebf;',
		'rewind-btn-fill': '&#xeef5;',
		'rewind-btn': '&#xeef6;',
		'rewind-circle-fill': '&#xeef7;',
		'rewind-circle': '&#xeef8;',
		'rewind-fill': '&#xeef9;',
		'rewind': '&#xeefa;',
		'search': '&#xef14;',
		'share1': '&#xef26;',
		'shop-window': '&#xef3a;',
		'signpost': '&#xef69;',
		'tag': '&#xefdc;',
		'wind': '&#xf081;',
		'window-dash': '&#xf082;',
		'window-desktop': '&#xf083;',
		'window-dock': '&#xf084;',
		'window-fullscreen': '&#xf085;',
		'window-plus': '&#xf086;',
		'window-split': '&#xf088;',
		'window-stack': '&#xf089;',
		'window-x': '&#xf08a;',
		'window': '&#xf08b;',
		'copyright': '&#xe98b;',
		'bars': '&#xe98c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
