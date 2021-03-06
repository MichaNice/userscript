// ==UserScript==
// @name           Umbrella Orders (eRep)
// @namespace      www.erepublik.com
// @description    Umbrella Orders (eRep)
// @version        0.1
// @include        http://www.erepublik.com/en
// @include        http://www.erepublik.com/es
// ==/UserScript==

GM_xmlhttpRequest({
	method: 'GET',
	url: 'http://erepublik-umbrella.forumotion.com/orders-h1.htm',

	onload:function(responseDetails){

			var responseText = responseDetails.responseText;
			var tags = responseText.split('|');
			var parancs = tags[0];
			var regio = tags[1];
			var link = tags[2]
			var ido = tags[3]

			latest=document.getElementById('latestnews')

			parancs_el = document.createElement("h3")
			parancs_el.textContent=parancs + '   (' + regio + ')'

			link_el = document.createElement("a"); 
			link_el.setAttribute('href',link)
			link_el.innerHTML = link

			ido_el=document.createElement("h3")
			ido_el.textContent ='Last Updated: ' + ido

			
			latest.parentNode.insertBefore(parancs_el, latest)
			
			latest.parentNode.insertBefore(ido_el, latest)	
			latest.parentNode.insertBefore(link_el, latest)
		}	
		}
	);