// ==UserScript==
// @name           Pokemon CRPG Computer007
// @description    Aliyan.
// @author         Ma Champs
// @include        http://*pokecrpg.net/*
// @version        1
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js 
// ==/UserScript==
if(document.body.innerHTML.search(/(E|e)rror/) == -1)
{
if(document.body.innerHTML.search(/Submit/) == -1){
  if(document.body.innerHTML.search(/You have entered the correct code/) != -1) {
    window.location = "/battle.php?opp=Bird_Tamer"
  }
  if(window.location.pathname == "/battle.php") {
    if(document.body.innerHTML.search(/\./) != -1) {
      window.location = "/battle.php?opp=Bird_Tamer"
    }
    inputs = document.getElementsByTagName("input")
    for(i = 0; i < inputs.length; i++) {
      if(inputs[i].value == "Bolt Strike") { inputs[i].click() }
    }
    inputs = document.getElementsByTagName("input")
    for(i = 0; i < inputs.length; i++) {
      if(inputs[i].value == "Continue the Battle!") { inputs[i].click() }
    }
    inputs = document.getElementsByTagName("input")
    for(i = 0; i < inputs.length; i++) {
      if(inputs[i].value == "Bolt Strike") { inputs[i].click() 
    }
  }
}
else {
var captcha = $("div:contains(':  ')").text();
var textbox = document.getElementsByName("submit")[0];
delimiter = ':';
var captch = captcha.split(delimiter); 
captcha=captch[1];
captcha = captcha.replace(/ /gm, "");
captcha = captcha.replace(/\./gm, "");
captcha = captcha.replace(/(\r\n|\n|\r)/gm,"");
textbox.value = captcha;
$('input[value="Submit"]').click(); 

}
}
else
{
window.location = "/battle.php?opp=Bird_Tamer"
}

