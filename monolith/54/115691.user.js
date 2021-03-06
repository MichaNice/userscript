// ==UserScript==
// @name          Glitch Favor Checker (Updated by Siguy for non-beta addresses)
// @namespace     http://www.glitch.com/profiles/PHFSU76H52D2201/
// @description   Adds info about the favor you've accumulated with each giant to the leaderboards page
// @include       http://www.glitch.com/leaderboards/*
// ==/UserScript==
function checkFavor(){
	jQuery(document).ready(function(){
					var giants = ['alph','cosma','friendly','grendaline','humbaba','lem','mab','pot','spriggan','ti','zille'],
						$giantBox = jQuery('.sub-menu h2:contains("Giants")').next();

					function toTitle(str){
						return str.charAt(0).toUpperCase() + str.slice(1);
					}
					
					function getRanking(giant,url,baseUrl,index){
						baseUrl = baseUrl || url;
						index = index || 1;
						jQuery.get(url,function(data){
						   var lb = jQuery(data).find('.full.leaderboard'),
							   youTr = lb.find('tr.you');
						   if(youTr.length == 0){
							 index++;
							 getRanking(giant,baseUrl + 'page' + index + '/',baseUrl,index);
						   }
						   else {
							 printRanking(giant,youTr.find('.count span').html());
						   }
						});
					}

					
					function printRanking(giant,count){
						/*jQuery('#'+giant).html(giant + ': ' + count);*/
						giant = toTitle(giant);
						$giantBox.find('a:contains("'+giant+'")').append('<span style="float:right;margin: -5px 28px 0 0">'+ count + '</span>');
					}
					
					for(i = 0; i< giants.length; i++){
						/*jQuery('#results').append('<li id="'+giants[i]+'"></li>');*/
						getRanking(giants[i],'http://www.glitch.com/leaderboards/'+giants[i]+'/');
					}
	});
}
	
var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + checkFavor + ')();'));
 (document.body || document.head || document.documentElement).appendChild(script);

