// ==UserScript==
// @name          Floating CommtBox
// @namespace     http://www.myspace.com/squirrelslax
// @description   Places a Comment Box in top left of profile
// @include       http://*.myspace.com/index.cfm?fuseaction=*&friendid=*
// ==/UserScript==

// find friendID

var path = location.href;
var query = '';
if(path.indexOf('friendID=') > 0)
	query = 'friendID=';
if(path.indexOf('friendid=') > 0)
	query = 'friendid=';
var section = path.split(query);
var friendID = '';
if(section.length > 1)
        friendID = section[1];
section = friendID.split('&');
if(section.length > 1)
        friendID = section[0];
//alert('|'+path+'|'+friendID+'|');

// add menu

var myHaxMenu = document.createElement("div");
myHaxMenu.innerHTML = '<style type="text/css">'
+'<!--'
+'#myhaxlayer #table1 a {'
+'text-decoration: none !important;'
+'color: #000000 !important;'
+'font-family: Verdana, Arial, Helvetica, sans-serif !important;'
+'font-size: 10px !important;'
+'font-weight: bold !important;'
+'font-style: normal !important;'
+'}'
+'#myhaxlayer #table1 a:hover {'
+'text-decoration: none !important;'
+'color: #0000FF !important;'
+'font-family: Verdana, Arial, Helvetica, sans-serif !important;'
+'font-size: 10px !important;'
+'font-weight: bold !important;'
+'font-style: normal !important;'
+'}'
+'#myhaxlayer #table1 {'
+'background-color: #CCCCCC !important;'
+'}'
+'textarea.CommentBox {'
+'width:150px;'
+'height:50px;'
+'padding:5px;'
+'color:FFFFFF;'
+'font-size:8pt;'
+'font-family:Verdana;'
+'border-color:959385;'
+'border-style:solid;'
+'background-color:333333;'
+'}'
+'input.SubmitButton {'
+'width:150px;'
+'padding:0px;'
+'background-color:d5d2c2;'
+'border-color:a6a498;'
+'border-style:solid;'
+'border-width:1;'
+'}'
+'-->'
+'</style>'
+'<div style="position: fixed; width: 100px; height: 100px; z-index: 100; right; top: 0pt; left: 0pt" id="myhaxlayer">'
+'<table border="0" width="100%" id="table1" bgcolor="#C0C0C0">'
+'<tr><td><p align="left">'
+'<form method="post" action="http://comments.myspace.com/index.cfm?fuseaction=user.ConfirmComment"  "return lengthCheck(this);">'
+'<input type="hidden" name="friendID" value="'+friendID+'">' 
+'<input type="hidden" name="Mytoken" value="20041116012729">'
+'<textarea class="CommentBox" id="textarea" name="f_comments" cols="10" rows="3"></textarea><br>'
+'<input class="SubmitButton" id="buttons" type="submit" value="Post">'
+'</form>'
+'CommtBox By: <a href="http://profile.myspace.com/index.cfm?fuseaction=user.viewprofile&friendid=23556599">Marshall</a>'
+'</font></td></tr></table></div>'
document.body.insertBefore(myHaxMenu, document.body.firstChild);
