// ==UserScript==
// @name           NG Stormy
// @namespace      stormyjet.newgrounds.com
// @description    Gives StormyJet a sky blue username when he is online
// @include        http://*newgrounds.com/bbs/*
// @include        http://*newgrounds.com/bbs/forum/*
// ==/UserScript==



var modArray = new Array("StormyJet" 
 );


function dotest() {
	var allElements = document.getElementsByTagName("*");
	var thediv;
	var headingCount = 0;
	var inForum = false;
	if(window.location.toString().length > 30) inForum = true;
	var dottedCount = 0;

	for(i=0; i<allElements.length; i++) {
		if(allElements[i].className == "heading") {
			headingCount++
			if(headingCount == 2) addLabel(allElements[i]);
		}
		
		if(inForum) {
		
			if(allElements[i].className == "dotted") {
				dottedCount++;
				if(dottedCount == 4) thediv = allElements[i];
			}
		} else {
			if(allElements[i].className == "dottedtall") thediv = allElements[i];
		}
	}
	var thelinks = thediv.getElementsByTagName("a");
	for(i=0; i<thelinks.length; i++) {
		var thelink = thelinks[i].href;
		var endPos;
		thelink = thelink.slice(7);
		for(j=0; j<thelink.length; j++) {
			if(thelink.charAt(j) == ".") {
				endPos = j;
				break;
			}
		}
		thelink = thelink.substring(0,endPos);
		if(isIconMod(thelink) && thelinks[i].className != "moderator") thelinks[i].style.color = "#0000FF";
	}
}


function isIconMod(n) {
	for(h=0; h<modArray.length; h++){
		if(n == modArray[h].toLowerCase()) return true;
	}
	return false;
}

function addLabel(labelDiv) {
	var old = labelDiv.getElementsByTagName('ul')[0].getElementsByTagName('li')[2];
	var e = document.createElement('li');
	e.innerHTML = "<img src='http://img.ngfiles.com/ficons/bull-adm.gif' alt='Cool User Pill' /> StormyJet";
	labelDiv.getElementsByTagName('ul')[0].insertBefore(e, old);;
}

dotest();