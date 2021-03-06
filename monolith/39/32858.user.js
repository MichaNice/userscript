// ==UserScript==
// @name		New AIO Links Checker
// @description	checks rapidshare, megaupload, filefactory, depositfiles, mediafire links
// @namespace	  http://userscripts.org/users/49758
// @include		http://*
// @exclude		http://depositfiles.com/*
// @exclude		http://*.depositfiles.com/*
// @exclude		http://mediafire.com/*
// @exclude		http://*.mediafire.com/*
// @exclude		http://search.huhiho.com/*
// @version		1.5

// ==/UserScript==

/* ---
Version : 1.5
Latest update : 26 Aug 2008

Version History :
	1.5 :
		- Fix bugs in RS Add .html & Remove .html
		- Add "Link to filename" option
	1.4	:
		- Fix bugs
	1.3 :
		- Add Rapidshare.com Auto Download option
	1.2 :
		- Fix bug while derefering links.Thanks to themabyss for reporting :)
		- Better "unbold" in Google Search / Google Blog Search
		- Unhighlight keyword in Google Cache page
	1.1 :
		- Add Preferences Box
		- Support more dereferer sites
		- Add "killDeferer", "addDereferer" and "derefererSite" options ( see in Preferences Box )
	1.0 :
		- Fix google and rapidshare bugs
		- Add search form ( to search file ) in rapidshare.com, megaupload.com and filefactory.com
	0.9 :
		- Fix bugs [ again =,= ]
		- Support rapidshare.com links like http://rs___.rapidshare.com/files/___
		- Support mediafire.com links like http://mediafire.com/download.php?____

	0.8 :
		- Support mediafire.com
	0.7 :
		- Add "extraInfo" option to show name and size of live links
		- Fix some bugs
	0.6	:
		- Improve "linkify" function
		- Add "Auto Check for Update" function
		- Add "clickableDeadLink" option to make dead links are clickable or not
		- Fix Status Box's bug
	0.5 :
		- Support depositfiles.com
	0.4 :
		- Support new Filefactory.com link (  http://www.filefactory.com/file/____/n/____ )
	0.3 :
		- Fix bugs
		- Add status box
		- Add "addHTML" and "removeHTML" options
		- Remove duplicate links before checking
	0.2 :
		- Fix some bugs
		- Replaces "×" to "x"
		- Support megaupload links like "http://megaupload.com/../?d=...."
	0.1 :
		First Version. Support rapidshare.com, megaupload.com and filefactory.com
	
--- */


const currentVersion = '1.5';

//------------------//
//   Preferences   //
//----------------//

var prefs = {	// Default Values
	linksPerRequest		:	100,	// total links per request
	deadBlackBg			:	false,
	deadLineThrough		:	true,
	rs_addHTML			:	false,	// true to add .html at the end of rapidshare.com links
	rs_removeHTML		:	true,	// true to remove .html at the end of rapidshare.com links
	rs_autoDownload		:	true,
	showStatusBox		:	true,	// true to show status box at the bottom-right of the screen
	hideStatusBoxAfter	:	10,		// seconds
	clickableDeadLink	:	false,	// true to make dead links are clickable
	extraInfo			:	true,	// name and size
	linkToFileName		:	true,
	killDereferer		:	true,
	addDereferer		:	false,
	derefererSite		:	'http://hide.huhiho.com/',
	autoCheckForUpdate	:	true,	// true to enable auto check for update
	debug				:	false	// debug mode
	
};

function getPrefs() {
	for (opt in prefs) {
		var val = GM_getValue(opt);
		if (val != undefined) {
			prefs[opt] = val;
		}
	}
}

function savePrefs(){
	if(!GM_setValue) return;
	for(opt in prefs){
		GM_setValue(opt, prefs[opt]);
	}
}

getPrefs();

if (prefs.debug){
	var today = new Date( );
	GM_log ('getTimeInMilliseconts(today) '+getTimeInMilliseconts(today));
	firsttime = getTimeInMilliseconts (today);
}


if (prefs.autoCheckForUpdate) {
	checkForUpdate(false);
}

if (GM_registerMenuCommand) {
	GM_registerMenuCommand( "AIO Links Checker : Preferences", function(){ showPreferencesBox(); });
	GM_registerMenuCommand( "AIO Links Checker : Check for Update", function(){ checkForUpdate(true); });
	
}


function checkForUpdate(a) {
	var date = new Date();
	var today = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
	var lastCheck = GM_getValue('lastCheck');

	if (a || !lastCheck || lastCheck != today) {
		GM_xmlhttpRequest({
        	method: "GET",
        	url: 'http://checker.huhiho.com/version.txt',
        	onload: function(results) {
				var version = results.responseText;
				if (version.length && version != currentVersion) {
					if (confirm('[ Greasemonkey ] AIO Links Checker : Version '+ version +' is now available. Update ?')) {
						GM_openInTab('http://checker.huhiho.com/script/');
					}
				}
				else if (a) {
					alert('[ Greasemonkey ] AIO Links Checker : No new version found');
				}
			},
        });
	}
	GM_setValue('lastCheck',today);
}

function showPreferencesBox() {
	if ($('aio_preferencesBox')) {
		if ($('aio_preferencesBox').style.display != 'none') hidePreferencesBox();
		else $('aio_preferencesBox').style.display = 'block';
		return;
	}
	
	var styles = [
		'#aio_preferencesBox { font-size:13px;font-family: Calibri,helvetica,arial,sans-serif;position:fixed;top:5%;left:30%;margin:5% auto;width:400px;border:5px solid #94D823;background-color:#FFFFFF;padding:10px;z-index:9999;float:left; }',
		'#aio_preferencesBox #aio_preferencesForm { padding:5px;margin:0px; }',
		'#aio_preferencesBox #aio_preferencesForm .input { width:200px;font-size:13px;font-family: Calibri,helvetica,arial,sans-serif; }',
		'#aio_preferencesBox #aio_preferencesButtons { text-align:center;padding:5px;margin:0px; }',
		'#aio_preferencesBox h1 { font-family: Calibri,helvetica,arial,sans-serif; color:#479422;padding:0px;margin:0px;font-size:20px; }',
		'#aio_preferencesBox label { float:left;width:150px;font-size:13px;font-family: Calibri,helvetica,arial,sans-serif; }',
		'#aio_preferencesBox div { clear:both;margin-top:2px; }',
		'#aio_preferencesBox .footer { font-size:12px;color:#999999;text-align:right; }',
	];
	
	GM_addStyle(styles.join("\r\n"));
	
	var preferencesBox = $$$('div');
	document.body.appendChild(preferencesBox);
	preferencesBox.id = "aio_preferencesBox";
	preferencesBox.appendChild($$$('h1')).textContent = "AIO Links Checker Preferences";
	
	var preferencesForm = $$$('form');
	preferencesForm.id = "aio_preferencesForm";
	with (preferencesForm) {
		setAttribute("onsubmit", "return false;");
		
		var options = $$$('div');
		
		options.appendChild(createOption("clickableDeadLink",prefs.clickableDeadLink,"Clickable Dead Link"));
		options.appendChild(createOption("extraInfo",prefs.extraInfo,"Show extra info"));
		options.appendChild(createOption("linkToFileName",prefs.linkToFileName,"Replace link to filename"));
		options.appendChild(createOption("rs_autoDownload",prefs.rs_autoDownload,"(RS.com) Auto Download"));
		options.appendChild(createOption("rs_addHTML",prefs.rs_addHTML,"(RS.com) Add .HTML"));
		options.appendChild(createOption("rs_removeHTML",prefs.rs_removeHTML,"(RS.com) Remove .HTML"));
		options.appendChild(createOption("showStatusBox",prefs.showStatusBox,"Show status box"));
		options.appendChild(createOption("hideStatusBoxAfter",prefs.hideStatusBoxAfter,"Hide status box after (s)"));
		options.appendChild(createOption("killDereferer",prefs.killDereferer,"Kill Dereferer Sites"));
		options.appendChild(createOption("addDereferer",prefs.addDereferer,"Add Dereferer Site"));
		options.appendChild(createOption("derefererSite",prefs.derefererSite,"Dereferer Site"));
		options.appendChild(createOption("autoCheckForUpdate",prefs.autoCheckForUpdate,"Auto Check for Update"));
		
		appendChild(options);
		
		var buttons = $$$('div');
		
		var saveButton = $$$('button');
		saveButton.type = "button";
		saveButton.textContent = "Save";
		
		var cancelButton = $$$('button');
		cancelButton.type = "button";
		cancelButton.textContent = "Cancel";
		buttons.id = "aio_preferencesButtons";
		buttons.appendChild(saveButton);
		buttons.appendChild(cancelButton);
		
		saveButton.addEventListener('click', savePreferencesBox, true);
		cancelButton.addEventListener('click', hidePreferencesBox, true);
		
		appendChild(buttons);
		
		var footer = $$$('div');
		footer.className = 'footer';
		footer.textContent = 'AIO Links Checker '+ currentVersion +' - redphoenix89@yahoo.com';
		
		appendChild(footer);
		
	}
	preferencesBox.appendChild($$$('div')).appendChild(preferencesForm);
	
}

function createOption(name,value,text) {
	var div = $$$('div');
	
	var label = $$$('label');
	label.textContent = text;
	
	div.appendChild(label);
	
	var elm = $$$('input');
	elm.className = "aio_preferencesInput";
	elm.name = name;
	switch(typeof value){
		case "string":
		case "number":
			elm.value = value;
			elm.type = "text";
			elm.className = "input";
			if (arguments[3]) elm.size = arguments[3];
		break;
		case "boolean":
			elm.type = "checkbox";
			elm.checked = value;
		break;
		case "object":
			elm.type = "radio";
			elm.value = value[0];
			elm.checked = value[1];
		break;
	}
	div.appendChild(elm);
	return div;
}

function hidePreferencesBox() {
	$('aio_preferencesBox').style.display = 'none';
}

function savePreferencesBox(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	with(evt.target.form){
		input = getElementsByTagName('input');
		for (var i=0;i<input.length;i++) {
			var type = input[i].getAttribute('type');
			var name = input[i].name;
			switch (type) {
				case 'checkbox':
					prefs[name] = input[i].checked;
					break;
				case 'text':
					prefs[name] = input[i].value;
			}
		}
	}
	savePrefs();
	hidePreferencesBox();
}


function $(id) {
	return document.getElementById(id);
}

function $$(name) {
	var elmt =  document.getElementsByName(name);
	if (!elmt.length) return false;
	if (elmt.length == 1) return elmt[0];
	return elmt;
}

function $$$(element) {
	return document.createElement(element);
}

function insertAfter(parent, newNode, refNode) {
	if(refNode.nextSibling) {
		return parent.insertBefore(newNode, refNode.nextSibling);
	}
	else {
		return parent.appendChild(newNode);
	}
}

//http://snipplr.com/view.php?codeview&id=1696
function getElementsByClassName(classname, tag, node)  {
	if (!tag) tag = '*';
	if(!node) node = document.getElementsByTagName('body')[0];
	var a = [];
	var re = new RegExp('\\b' + classname + '\\b');
	var els = node.getElementsByTagName(tag);
	for(var i=0,j=els.length; i<j; i++)
		if(re.test(els[i].className))a.push(els[i]);
	return a;
}

function createSearchForm() {
	GM_addStyle(".aioSearchForm {font-family: Calibri,helvetica,arial,sans-serif;font-size: 13px;color:#000000;padding:5px;width:100%;text-align:center}");
	GM_addStyle(".aioSearchForm form {padding:0px;margin:0px;}");
	GM_addStyle(".aioSearchInput {padding: 3px;	font-size: 126%; font-weight:bold; background-color: #FFFADB; background-image: url('http://search.huhiho.com/images/form-back.gif'); background-repeat: repeat-x; background-attachment: scroll; border: 1px solid #CBB945; color: #776B1B;width:30%}");
	GM_addStyle(".aioSearchSubmit {background: #FFFFFF;border:0px solid #FFFFFF;position:relative;top:4px;}");
	
	var div = $$$("div");
	div.className = 'aioSearchForm';
	div.innerHTML = '<form action="http://search.huhiho.com/search/" method="post">Search : <input name="keyword" class="aioSearchInput" type="text" value="" /> <input class="aioSearchSubmit" type="image" value="Search" src="http://search.huhiho.com/images/search.gif" /></form>';
	return div;
}

var WHERE;

var currentURL = window.location.href;

if (/^https?\:\/\/([a-z0-9A-Z]+\.)?rapidshare\.com/.test(currentURL)) {
	WHERE = 'rapidshare.com';
}
else if (/^http\:\/\/(www\.)?megaupload\.com/.test(currentURL)) {
	WHERE = 'megaupload.com';
}
else if (/^http\:\/\/(www\.)?filefactory\.com/.test(currentURL)) {
	WHERE = 'filefactory.com';
}

if (WHERE) {
	switch (WHERE) {
		case 'rapidshare.com':
			var menu = getElementsByClassName('hauptmenue','div');
			menu = menu[0];
			
			var searchForm = createSearchForm();
			insertAfter(menu.parentNode,searchForm,menu);
			
			if (prefs.rs_autoDownload) {
				var ff = $('ff');
				if (ff) {
					ff.name = 'ff';
					ff.submit();
				}
				else if (/^https?\:\/\/rs[a-z0-9A-Z]+\.rapidshare\.com\/files\/[0-9]+\//.test(currentURL) && $('dl')) {
					function rs_updateLink() {
						var dlf = $$('dlf');
						var input = dlf.getElementsByTagName('input');
						for (var i=0;i<input.length;i++) {
							if (input[i].type == 'radio' && input[i].checked) {
								var onclick = input[i].getAttribute("onclick");
								var link = onclick.match(/'([^']+)'/)[1];
								dlf.action = link;
								$('aio_downloadLink').href = link;
								break;
							}
						}
					}
					function rs_makeLink() {
						var dlf = $$('dlf');
						if (dlf) {
							var input = dlf.getElementsByTagName('input');
							for (var i=0;i<input.length;i++) {
								if (input[i].type == 'radio') {
									input[i].addEventListener('click',function() { rs_updateLink(); },false);
								}
							}
							
							var center = dlf.getElementsByTagName('center');
							center[0].innerHTML = '<p class="downloadlink"><a onclick="dlf.submit();return false;" id="aio_downloadLink" href="'+dlf.action+'">Click here to Download</a></p>';

							var dlf = $$('dlf');
							dlf.submit();
						}
						else {
							setTimeout(rs_makeLink,1000);
						}
					}
					setTimeout(rs_makeLink,1000);
				}
			}
			
			break;
		case 'megaupload.com':
			var m = $('main');
			if (m) {
				var searchForm = createSearchForm();
				m.parentNode.insertBefore(searchForm,m);
			}
			break;
		case 'filefactory.com':
			var m = $('header');
			if (m) {
				var searchForm = createSearchForm();
				insertAfter(m.parentNode,searchForm,m);
			}
			break;
	}

	return;
}

//////google de-bold 
//it's removing bold (<b> tags) from the results of google if you are serching for rapidshare files directly from google 
// I couldn't find more elegant or faster way. google de-bold costs 1 second for a 100 results google page	

var googleregex = new RegExp(/^http:\/\/(www\.|blogsearch\.)?google\.[^\/]+\/(blog)?search/);
//var rapideregex = new RegExp("rapideshare");
if ((googleregex.test(currentURL)) && (googleregex.test(currentURL))) {
	
	var links = document.evaluate(
		"id('res')/div[1]|/html/body/div[6]/div[2]",
		document,
		null,
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
		null);
	
		link = links.snapshotItem(0);

		with (link) {
			if (textContent.indexOf('rapidshare.com/files/') != -1 || textContent.indexOf('filefactory.com/file/') != -1 || ( (textContent.indexOf('megaupload.com/') != -1 || textContent.indexOf('megarotic.com/') != -1) && textContent.indexOf('/?d=') != -1) || textContent.indexOf('depositfiles.com/files/') != -1 || textContent.indexOf('mediafire.com/') != -1) {
				innerHTML = innerHTML.replace(/<em>/gi,'').replace(/<\/em>/gi,'').replace(/<b>/gi,'').replace(/<\/b>/gi,'').replace(/<wbr>/gi,''); // to show better the rapidshare links
			}
		}
}

var googleCacheRegEx = new RegExp("^http:\\/\\/[0-9\\.]+\\/search\\?q=cache:");

if (googleCacheRegEx.test(currentURL)) {
	var xpath = "//b[(contains(@style,'color: black; background-color: rgb('))]/..";
	var snapshot = document.evaluate(xpath,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	
	var len = snapshot.snapshotLength;
	for (var i=0;i<len;i++) {
		var bold = snapshot.snapshotItem(i);
		bold.innerHTML = bold.innerHTML.replace(new RegExp('<b style="color: black; background\\-color: rgb\\([0-9]+, [0-9]+, [0-9]+\\);">(.*?)<\\/b>','g'),'$1');
	}
}

/////google de-bold end

// Status Box
var totalDeleted = 0;
var totalLive = 0;


var all = [];
var all_2 = [];

// find the url and make them links
// new const with filefactory
var sitesRegex = {
	rapidshare	:	'([a-z0-9A-Z]+\.)?rapidshare\\.com\\/files\\/[\\d]*\\/.*?\\..*?[^"\\s\\<\\>]*[^.,;\\\'">\\:\\s\\<\\>\\\\)\\]\\!]',
	megaupload	:	'(megaupload|megarotic)\\.com\\/(\\w{2}\\/)?\\?d\\=[a-zA-Z0-9\\-]+',
	filefactory	:	'filefactory\\.com\\/file\\/[A-Fa-f0-9]{6,}\\/?(n\\/[a-zA-Z0-9\\-\\_]+\\/?)?',
	//turboupload	:	'turboupload\\.com\\/download\\/[a-zA-Z0-9]+\\/?(.*?\\..*?[^"\\s\\<\\>]*[^.,;\\\'">\\:\\s\\<\\>\\\\)\\]\\!])?',
	depositfiles:	'depositfiles\\.com\\/(\\w{2}\\/)?files\\/[0-9]+\\/?',
	mediafire	:	'mediafire\\.com\\/(download\\.php)?\\?[a-zA-Z0-9]+',
}

var derefererSites = new Array(
						'anonym.to/~?',
						'anonymz.com/~?',
						'anonymuz.com/~?',
						'anon.zipile.com/~?',
						'hiderefer.com/~?',
						'anonymity.com/',
						'z2g.org/~?'
					);

var derefererSites_str = '';

for (var i=0;i<derefererSites.length;i++) {
	derefererSites_str += derefererSites[i].replace(".","\\.").replace("?","\\?").replace("/","\\/").replace("~","?") + '|';
}

derefererSites_str = derefererSites_str.substr(0,derefererSites_str.length-1);

var urlRegex_str = '((http)?(\\:\\/\\/)?(www\\.)?(?:'+ derefererSites_str +'))?(?:h\\w{2}p|h\s{2}p|h\\*\\*p)?(\\:\\/\\/)?(www\\.)?(?:';

for (site in sitesRegex) {
	urlRegex_str += sitesRegex[site]+'|';
	//alert(sitesRegex[site]);
}
urlRegex_str = urlRegex_str.substr(0,urlRegex_str.length-1);
urlRegex_str += ')';

var urlRegex = new RegExp(urlRegex_str,"gi");

var drfRegEx = new RegExp('^(http)?(\\:\\/\\/)?(www\\.)?(?:'+ derefererSites_str +')?',"gi");

var notallowedParents = ['head', 'script', 'style', 'title', 'option', 'textarea'];
if (!prefs.killDereferer) {
	notallowedParents.unshift('a');
}

var xpath = "//text()[not(ancestor::" + notallowedParents.join(" or ancestor::") +")]"; // props Garthex 

var candidates = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

var ripped = "";

for (var cand = null, i = 0; (cand = candidates.snapshotItem(i)); i++) {

	if ((urlRegex.test(cand.nodeValue)) && (!cand.nodeValue.match(/killcode/))) {
		
		if (ripped) {
			cand.nodeValue = ripped + cand.nodeValue;
		}
		if (cand.nodeValue.length - ripped.length >= 4096) {
			val = cand.nodeValue;
			end = val.length - 1;
			for (x = end; x > end - 255; x--) {
				char = val.charAt(x);
				if (char == " " || char == "\n" || char == "\t") {
					ripped = val.substring(x+1);
					cand.nodeValue = val.substring(0,x+1);
					break;
				}
			}
		}
		
		cand.nodeValue = cand.nodeValue.replace(/h\w\wp:\/\/|h  p:\/\/|h\*\*p:\/\//gi,'http://');
		var span = $$$("span");
		span.id = 'aioLinkify';
		var source = cand.nodeValue;
		if (!prefs.killDereferer || (cand.parentNode && cand.parentNode.tagName != 'A')) {
			cand.parentNode.replaceChild(span, cand);
		}
		urlRegex.lastIndex = 0;
		for (var match = null, lastLastIndex = 0; (match = urlRegex.exec(source)); ) {
			
			url = match[0];
			if (prefs.killDereferer && match[1]) {
				url = url.replace(match[1],"");
			}
			
			
			href = url;
			if (/^\:\/\//.test(href)) {
				href = 'http'+href;
			}
			else if (!/^http\:\/\//.test(href)) {
				href = 'http://'+href;
			}
			
			if (prefs.killDereferer && match[1] && cand.parentNode && cand.parentNode.tagName == 'A') {
				cand.nodeValue = href;
				//alert(cand.href);
				cand.parentNode.href = href;
				//alert('a');
			}
			else {
				
				span.appendChild(document.createTextNode(source.substring(lastLastIndex, match.index)));
				var a = $$$("a");
				a.setAttribute("href", href);
				
				a.appendChild(document.createTextNode(url));
				span.appendChild(a);
			}
			
			lastLastIndex = urlRegex.lastIndex;
		}

		span.appendChild(document.createTextNode(source.substring(lastLastIndex)));
		span.normalize();
	}
}

Array.prototype.inArray = function (value,begin) {
	var begin = (begin)?begin:0;
	for (var i=begin; i < this.length; i++) {
		if (this[i] === value) {
			return i;
		}
	}
	return false;
};


var links = document.getElementsByTagName('a');

var numberOfLinks = 0;
var numberOfLinks_2 = 0;

var allRegExp = new RegExp('((http)?(\\:\\/\\/)?(www\\.)?(?:'+ derefererSites_str +'))?(http)?(\:\/\/)?(www\.)?(?:' + sitesRegex.rapidshare + '|' + sitesRegex.megaupload + '|' + sitesRegex.filefactory + ')');
var allRegExp_2 = new RegExp('((http)?(\\:\\/\\/)?(www\\.)?(?:'+ derefererSites_str +'))?(http)?(\:\/\/)?(www\.)?(?:' + sitesRegex.depositfiles + '|' + sitesRegex.mediafire + ')');


for (var i = links.length - 1; i >= 0; i--) {
	var matchType = false;
	if (links[i].href.search(allRegExp) != -1) {
		matchType = 1;
	}
	else if (links[i].href.search(allRegExp_2) != -1) {
		matchType = 2;
	}
	else continue;
	
	if (prefs.killDereferer) {
		links[i].href = links[i].href.replace(drfRegEx,'http://').replace('http://http://','http://');
	}
	
	if (prefs.addDereferer) {
		links[i].href = prefs.derefererSite + links[i].href;
	}
	
	var urll = links[i].href;
	if (urll.indexOf("...") != -1) continue;
	
	
	urll = urll.replace(/^.*?http:\/\//gi,'http://').replace(/^.*?http%3A%2F%2F/gi,'http://').replace(/\?killcode=[\d]*/gi,'').replace(/%2F/gi,'/').replace(/%3A/gi,':').replace(/%C3%97/gi,'x');
	
	if (prefs.rs_addHTML) {
		if (urll.search(/rapidshare\.com/i) != -1 && urll.search(/\.html$/i)  == -1) {
			urll += '.html';
			links[i].href = urll;
		}
	}
	else if (prefs.rs_removeHTML) {
		if (urll.search(/rapidshare\.com/i) != -1 && urll.search(/\.html$/i)  != -1) {
			urll = urll.substr(0,urll.length - 5);
			links[i].href = urll;
		}
	}
	
	if (matchType == 1) {
		if (urll && all.inArray(urll) === false) {
			numberOfLinks++;
			if (numberOfLinks % prefs.linksPerRequest == 0) {
				all.push('xxxczxczxcsasdasdasdx4234');
			}
			all.push(urll);
		}
	}
	else {
		if (urll && all_2.inArray(urll) === false) {
			numberOfLinks_2++;
			if (numberOfLinks_2 % prefs.linksPerRequest == 0) {
				all_2.push('xxxczxczxcsasdasdasdx4234');
			}
			all_2.push(urll);
		}
	}
}
if (numberOfLinks) {
	all = all.join();
	all = all.replace(/,/g,"\n");
	var all = all.split("xxxczxczxcsasdasdasdx4234");
}
if (numberOfLinks_2) {
	all_2 = all_2.join();
	all_2 = all_2.replace(/,/g,"\n");
	var all_2 = all_2.split("xxxczxczxcsasdasdasdx4234");
}

if (numberOfLinks == 0 && numberOfLinks_2 == 0) return;

var total_links = numberOfLinks + numberOfLinks_2;

var live_link_png = 'data:image/png;base64,'+	   // http://i28.tinypic.com/dq5emx.png
	'iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAAL'+
	'EwEAmpwYAAAAB3RJTUUH2AMJCQY36Sc4vgAAAlRJREFUeNpV0r9PE3EABfD3veu1lJYr15ZCoBHBqJBAMEbjL0hY'+
	'FAkyOAmJMUYd/Q+cXF1wYPQPILppYkKIRARiMDGoaAKimBaKHMWDXnu93venE0Tf9Ib3tg/BP7m3NGgwxtKcM4vy'+
	'IKSk4BBqnwux9/LGKjvckcNy9/1Akgk2ZJHMWNyw+qWUMSGZ51R2FzbdX1NSyOnZWznn6HRn8UqSCv6gLdz58GSs'+
	'L2voURJIirAWhh+U1fLO4tbKztdJIvHsw/1NR7/97pJBOR9tDXc+6rMGsg4vkd3AhkMdVJgLounkdKLHdL1S13Zp'+
	'dyMzbK5pnNF0I0mNn4r3Ze3AJrZvo0zL8KkPyil6rTOgipFzrRezLXVt4zWKtBbwWjIeTgyEQlHiUhepcBpNkSaY'+
	'ehxX20Yw2HYd3VYP6iNRYhrpAeojGfJqvs7rRIyKGpSUGOm4iYgWwX7wB72ps/hWXMZCbgaNkUYQrseUr3SNB0JQ'+
	'Rj0DBnSlYWN/DcfNEzifuYzVvS94vf4cVeoiBB2ScY8IiBBnytk7KM5XG8qj9SRClrbnUKNVZKLNWMjPwKkWkYk1'+
	'46BSUbZrz0PC0ZuHzaBYLokq9S90p3pMJRnJl35gtfgZQnAko0lY4WY1+2lu63s+N0EE+agXXrkydc3czjtF7noH'+
	'XccSx82mWIY0hBpgRVMIalK9WX67tfJzfZJo5EVuouAdieh4kk3KQA21J1rGmuoy/UToMSG5t+vaC5u/7Smikenc'+
	'04LzHyMAaH+cNcBVGgyWClSIgHAA+2DYy00Wjuz9Bce5MucW9xnuAAAAAElFTkSuQmCC';

var dead_link_png = 'data:image/png;base64,'+	   //http://i27.tinypic.com/t96wq8.png
	'iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAAL'+
	'EwEAmpwYAAAAB3RJTUUH2AMJCQkjdGXwDAAAAcpJREFUeNptkj9PFHEQhp/ZBcIhxyKHYgNCYUxogE0OpdDGxsQC'+
	'Y6e5ggS1Mn4Ce621u7MCYqOdX4DkSLTBqwyNiQmJBiJiDjmWP/ub1+IAMXGqmTx5M5nJY5wpwRiQHPfoL2rG8PVk'+
	'sDOBlKRYZWgwxcwkIQlc0o+fDe3sPu6E1dOQIGWg/yUT4zOUBiLtHYAHFBy6YvRrW+Hzl4/e/P2kAJ8iwRhJscrE'+
	'+AzDwxG3Z2E/oO9bKMvhzj104aLZ1dFr9PZUWzDWASQMDaYqDZjdvAWzd2HkMlpcJKpUsMlJdHiI3i1Ffr4v9d29'+
	'pEMnt7UyfOkNNjKKTU8Tl8tghq+sEGqvUZwjZA5EAiShPIetLXxhASSIY3An1Gr4xkabq70iar9OkOeoWCSqVMAM'+
	'8hzMiObnIUnQ0RFyR0DkgNylzhh7cB+bmsLrdQ7n5gj1OlG5TPxoHro7kUsC4mdQUB5u0NdziW/r5q2M/PkLfG2N'+
	'sLwMkRHevyVkWQib26t+FJYMIIOUvt5XdmXkunXEke/sQchRCNDdRfAQ8vXND97af1qCxqkRLUj9XKFq/cUUMMmR'+
	'QHKFZquh7OBhCRr/aATQ/I97foxKZ9z7A9QA5voyr3dtAAAAAElFTkSuQmCC';

GM_addStyle(".aioLiveLink {background:transparent url("+live_link_png+") no-repeat scroll 100% 50% !important;padding-right:17px;}");
GM_addStyle(".aioDeadLink {background:transparent url("+dead_link_png+") no-repeat scroll 100% 50% !important;padding-right:17px;}");



getlinkschecked(all);
getlinkschecked(all_2);

function showStatusBox(deleted,live,finished) {
	if (!document.getElementById("aioStatusBox")) {
		GM_addStyle("#aioStatusBox {cursor:default;border:1px solid #DDDDDD;padding:2px;font-family:Verdana;font-size: 9px;text-align: right;position: fixed; right: 5px; bottom: 5px; z-index: 100;color: black; background-color: white; opacity: 0.8;}");
		var statusBox = $$$('div');
		document.body.appendChild(statusBox);
		statusBox.id = "aioStatusBox";
		statusBox.title = "AIO Links Checker Status Box";
	}
	else {
		var statusBox = document.getElementById("aioStatusBox");
	}
	
	statusBox.textContent = '';
	
	if (!finished) {
		statusBox.appendChild($$$('div')).textContent = "Checking ...";
	}
	else {
		statusBox.textContent = '';
		if (prefs.hideStatusBoxAfter > 0) {
			setTimeout("document.getElementById('aioStatusBox').style.display = 'none'",prefs.hideStatusBoxAfter * 1000);
		}
	}
	if (deleted != undefined && live != undefined) {
		with (statusBox) {
			appendChild($$$('font')).textContent = "Live Links : ";
			appendChild($$$('b')).textContent = live;
			appendChild($$$('font')).textContent = "/";
			appendChild($$$('b')).textContent = live+deleted;
		}
	}
}

function getlinkschecked(all) {
	if (!all.length) return;
	if (prefs.showStatusBox) {
		showStatusBox();
	}

	for (var i = all.length - 1; i >= 0; i--) {
		GM_xmlhttpRequest({
			method: "POST",
			url: 'http://checker.huhiho.com/check.php',
			headers:{'User-agent': 'AIO Links Checker '+currentVersion,
						'Content-type':'application/x-www-form-urlencoded'},
			data:'type=short&extra=' + ((prefs.extraInfo)?1:0) + '&links='+encodeURIComponent(all[i]),  // or all.join('\n') is good also
			onload:function(result) {
				
				res=result.responseText;
				if (prefs.extraInfo) {
					matches = res.match(/<(?:a n=".*?" s=".*?"|d)>(.*)<\/[ad]>/g);
				}
				else {
					matches = res.match(/<[ad]>(.*)<\/[ad]>/g);
				}
				
				if (matches) {
					var deletedLinks = new Array();  
					var liveLinks = new Array(new Array(), new Array());
					
					for (var x = matches.length - 1; x >= 0; x--) {
						--total_links;
						if (prefs.extraInfo) {
							var mlink = /<(?:a n="(.*?)" s="(.*?)"|d)>(.*)<\/([ad])>/.exec(matches[x]);
							var stt_pos = 4;
							var link_pos = 3;
						}
						else {
							var mlink = /<([ad])>(.*)<\/[ad]>/.exec(matches[x]);
							var stt_pos = 1;
							var link_pos = 2;
						}
						if (mlink) {
							var stt=mlink[stt_pos];
							if (stt == 'd') {
								deletedLinks.push('http://'+unescape(mlink[link_pos]));
								totalDeleted++;
							}
							else if (stt == 'a') {
								liveLinks[0].push('http://'+mlink[link_pos]);
								if (prefs.extraInfo) {
									liveLinks[1].push(mlink[1],mlink[2]);
								}
								totalLive++;
							}
						}
					}
					if (deletedLinks.length) {
						displayLinks('d',deletedLinks);
					}
					if (liveLinks[0].length) {
						displayLinks('a',liveLinks);
					}
				}
				if (prefs.showStatusBox) {
					showStatusBox(totalDeleted,totalLive,(total_links <= 0));
				}
			}
 		});
	}
}

var notContains = new Array('?q=','%3Fq%3D','&q=','%26q%3D');

function displayLinks(type,links_arr) {
	var arr = (type=='a')?links_arr[0]:links_arr;

	var xpath = "//a[(contains(@href,'" + arr.join("') or contains(@href,'") +"')) and not(contains(@href,'" + notContains.join("') or contains(@href,'") +"'))]";
	
	var allLinks = document.evaluate(xpath,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	
	var x = 0;
	for (var i = 0; i < allLinks.snapshotLength; i++) {
		var thisLink = allLinks.snapshotItem(i);

		if (type == 'd') {
			if (prefs.deadBlackBg) {
				thisLink.style.backgroundColor = 'Black';
				thisLink.style.color = 'Azure';
			}
			if (prefs.deadLineThrough) {
				thisLink.style.textDecoration = 'line-through';
			}
			if (!prefs.clickableDeadLink) {
				thisLink.title = thisLink.href;
				thisLink.removeAttribute("href","");
			}
			
			thisLink.className = 'aioDeadLink';
			
		}
		else if (type == 'a') {
			thisLink.className = 'aioLiveLink';
			if (prefs.extraInfo) {
				var pos = arr.inArray(thisLink.href)*2;
				if (prefs.linkToFileName) {
					thisLink.textContent = links_arr[1][pos];
				}
				thisLink.title = 'Name : "' + links_arr[1][pos]  + '" - Size : '+ links_arr[1][pos+1];
			}
		}
	}
}

function getTimeInMilliseconts(date) {
	return date.getHours( )*60*60 + date.getMinutes( )*60 + date.getSeconds( ) + date.getMilliseconds( )/1000;
}	

if (prefs.debug) {	
	var today = new Date();
	var lasttime = getTimeInMilliseconts (today);
	var runningtime = lasttime - firsttime;
	runningtime = (Math.round(runningtime*1000))/1000; 


	if (numberOfLinks + numberOfLinks_2 > 0){
		GM_log ('runningtimeinminutes in sec '+runningtime+' numberOfLinks '+numberOfLinks + ' location '+document.location);
	}
}

/* RedPhoenix89@yahoo.com - 2008 */