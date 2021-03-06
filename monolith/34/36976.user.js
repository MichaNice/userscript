// ==UserScript==
// @name          Post All Communities by Prudhvi
// @author        jeeshan
// @namespace     http://www.orkut.com/Community.aspx?cmm=48636221
// @description   Post a message in all the communities
// @include       http://www.orkut.*/*
// ==/UserScript==

window.addEventListener("load", function(e) {
if(document.location.href.indexOf("Communities.aspx")>=0)
{
	var anchorTags = document.getElementsByTagName('a');
	var communities = "";
	var j=0;
	for(var i=0;i<anchorTags.length-1;i++)
	{
		if(anchorTags[i].href.indexOf("Community.aspx")>=0)
		{
			if(j>0)
			{
				communities=communities+",";
			}
			communities=communities+anchorTags[i].href.split("cmm=")[1];
			j++;
		}	
	}
	GM_setValue("communities",communities);
	GM_setValue("postCount",0);
	document.location.href="http://www.orkut.com/CommMsgPost.aspx?cmm="+GM_getValue("communities").split(",")[GM_getValue("postCount")];
}
if(document.location.href.indexOf("CommMsgPost.aspx")>=0)
{
	GM_setValue("postCount",GM_getValue("postCount")+1);
	document.getElementById("subject").value="Test";
	document.getElementById("messageBody").value="Test Message. Ignore This";
			var form = document.forms[1];
		form.action=document.location.href+"&Action.submit=Submit+Query";
		form.submit();
		/*
	document.location.href="javascript:submitForm(document.getElementsByTagName('tr').item(15),'submit','');"*/
}
if(document.location.href.indexOf("CommMsgs.aspx")>=0)
{
	if(GM_getValue("communities").split(",").length>GM_getValue("postCount"))
	{
		document.location.href="http://www.orkut.com/CommMsgPost.aspx?cmm="+GM_getValue("communities").split(",")[GM_getValue("postCount")];
	}
	else
	{
		alert("All the communities have been posted with the message");
	}
}
}, false);