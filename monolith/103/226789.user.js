// ==UserScript==
//
//Displayable Name of your script 
// @name           My First Script 
//
// brief description
// @description    Alerts Hello   
//
//URI (preferably your own site, so browser can avert naming collisions
// @namespace      http://www.sarathonline.com/dyn/userscripts/hello/
//
//
//
//(optional) may be used by browsers to display an about link
// @homepage       http://www.sarathonline.com/dyn/userscripts/hello/ 
//
//Version Number
// @version        1.2
//
// Urls process this user script on
// @include        http://*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js
//
// @history        1.0 first version
// @history        1.0b first beta version, who knew!!
//
// ==/UserScript==


//And of course your code!!
$(function(){
window.alert("Hello.. My Extension processed you..");
});