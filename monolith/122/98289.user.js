﻿// ==UserScript==
// @name          4ionline
// @namespace     http://4ionline.ru/user/ClaimsList.aspx
// @description   Фильтрация запросов
// @include       http://4ionline.ru/user/ClaimsList.aspx
// ==/UserScript==

var script = document.createElement('script');
var line1 = document.createTextNode("var links = document.getElementsByTagName('a'); var viewstate = theForm.__VIEWSTATE.value; function inArray(needle, haystack) { var length = haystack.length; for(var i = 0; i < length; i++) { if(haystack[i] == needle) return true; } return false; }"); script.appendChild(line1);
var line2 = document.createTextNode("function insertAfter(newElement,targetElement) { var parent = targetElement.parentNode; if(parent.lastchild == targetElement) { parent.appendChild(newElement); } else { parent.insertBefore(newElement, targetElement.nextSibling); } }"); script.appendChild(line2);
var line3 = document.createTextNode("var fuuu_r = localStorage.getItem('fuuu_r'), fuuu_a = localStorage.getItem('fuuu_a'); fuuu_s = localStorage.getItem('fuuu_s'); if(fuuu_r) fuuu_r = fuuu_r.split(','); else fuuu_r = []; if(fuuu_a) fuuu_a = fuuu_a.split(','); else fuuu_a = []; if(fuuu_s) fuuu_s = fuuu_s.split(','); else fuuu_s = [];"); script.appendChild(line3);
var line4 = document.createTextNode("function unsee_requests() { if(fuuu_r.length) { var tds = document.getElementsByTagName('td'); for(var i in tds) { if(inArray(tds[i].innerHTML, fuuu_r)) tds[i].parentNode.style.display = 'none'; } } }"); script.appendChild(line4);
var line5 = document.createTextNode("function unsee_requests_by_author() { if(fuuu_a.length) { for(var i in links) { if(links[i] && links[i].innerHTML && inArray(links[i].innerHTML, fuuu_a)) links[i].parentNode.parentNode.parentNode.style.display = 'none'; } } }"); script.appendChild(line5);
var line6 = document.createTextNode("function unsee_requests_by_status() { if(fuuu_s.length) { var imgs = document.getElementsByTagName('img'); for(var i in imgs) { if(imgs[i].getAttribute && imgs[i].getAttribute('title') && inArray(imgs[i].getAttribute('title'), fuuu_s)) imgs[i].parentNode.parentNode.style.display = 'none'; } } }"); script.appendChild(line6);
var line7 = document.createTextNode("function add_buttons_to_requests() { for(var i in links) { if(links[i] && links[i].id && links[i].id.match(new RegExp('(\\s|^)ctl00_ctl00_MainContent_ListContent_GridView1_ctl([0-9]+)_nameHyperLink(\\s|$)'))) { var unsee_request = document.createElement('span'); var unsee_request_text = document.createTextNode(' [x]'); unsee_request.appendChild(unsee_request_text); unsee_request.style.cursor  = 'pointer'; unsee_request.style.color = '#777777'; unsee_request.setAttribute('title', 'Скрыть этот запрос'); var request_id = links[i].getAttribute('href'); request_id = request_id.substr(request_id.indexOf('=')+1); unsee_request.setAttribute('onclick', \"fuuu_r.push('\" + request_id + \"'); localStorage.setItem('fuuu_r', fuuu_r); this.parentNode.parentNode.style.display='none'; return false;\"); insertAfter(unsee_request,links[i]); } } }"); script.appendChild(line7);
var line8 = document.createTextNode("function add_buttons_to_authors() { for(var i in links) { if(links[i] && links[i].id && links[i].id.match(new RegExp('(\\s|^)ctl00_ctl00_MainContent_ListContent_GridView1_ctl([0-9]+)_ContactNameHyperLink(\\s|$)'))) { var unsee_author = document.createElement('span'); var unsee_author_text = document.createTextNode(' [x]'); unsee_author.appendChild(unsee_author_text); unsee_author.style.cursor  = 'pointer'; unsee_author.style.color = '#777777'; unsee_author.setAttribute('title', 'Скрыть запросы этого автора'); var author = links[i].innerHTML; if(author) { unsee_author.setAttribute('onclick', \"fuuu_a.push('\" + author + \"'); localStorage.setItem('fuuu_a', fuuu_a); unsee_requests_by_author(); return false;\"); insertAfter(unsee_author,links[i]); } } } }"); script.appendChild(line8);
var line9 = document.createTextNode("function add_buttons_to_status() { var imgs = document.getElementsByTagName('img'); for(var i in imgs) { if(imgs[i].id && imgs[i].id.match(new RegExp('(\\s|^)ctl00_ctl00_MainContent_ListContent_GridView1_ctl([0-9]+)_statusImage(\\s|$)'))) { var unsee_status = document.createElement('div'); var unsee_status_text = document.createTextNode(' [x]'); unsee_status.appendChild(unsee_status_text); unsee_status.style.cursor  = 'pointer'; unsee_status.style.color = '#777777'; unsee_status.setAttribute('title', 'Скрыть запросы в этом статусе'); var status = imgs[i].getAttribute('title'); unsee_status.setAttribute('onclick', \"fuuu_s.push('\" + status + \"'); localStorage.setItem('fuuu_s', fuuu_s); unsee_requests_by_status(); return false;\"); insertAfter(unsee_status,imgs[i]); } } }"); script.appendChild(line9);
var line10 = document.createTextNode("function wait_for_update() { if(viewstate == theForm.__VIEWSTATE.value) window.setTimeout(\"wait_for_update()\", 100); else { yarrr(); } }"); script.appendChild(line10);
var line11 = document.createTextNode("function update_links() { for(var i in links) { if(links[i] && links[i].getAttribute && links[i].getAttribute('href') && links[i].getAttribute('href').indexOf(\"javascript:__doPostBack('ctl00$ctl00$MainContent$ListContent$GridView1'\") == 0) links[i].setAttribute('onclick', 'wait_for_update();'); } }"); script.appendChild(line11);
var line12 = document.createTextNode("function yarrr() { links = document.getElementsByTagName('a'); viewstate = theForm.__VIEWSTATE.value; unsee_requests(); unsee_requests_by_author(); unsee_requests_by_status(); add_buttons_to_requests(); add_buttons_to_authors(); add_buttons_to_status(); update_links(); }"); script.appendChild(line12);
document.getElementsByTagName('head')[0].appendChild(script);
document.body.setAttribute('onload', "yarrr()");

var tds = document.getElementsByTagName('td'); 
for(var i in tds) {
   if(tds[i] && tds[i].getAttribute && tds[i].getAttribute('style') == 'width: 100%; height: 42px') {
      var ununsee = document.createElement('div'); 
      ununsee.appendChild(document.createTextNode('Показать скрытые запросы'));
      ununsee.setAttribute('style', "display: inline-block; cursor: pointer; font: normal 10px Tahoma; color: #777; margin-top: 25px;");
      ununsee.setAttribute('onclick', "localStorage.setItem('fuuu_r', ''); localStorage.setItem('fuuu_a', ''); localStorage.setItem('fuuu_s', ''); location.reload();");
      tds[i].appendChild(ununsee);
      tds[i].setAttribute('style', 'width: 100%; text-align: right;');
   }
}
