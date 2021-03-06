// ==UserScript==
// @name		SHC admin tool
// @namespace		http://www.flickr.com/groups/superchallenge/
// @description		An admin tool for the Flickr Super Heroes Challenge group - V0.5b
// @version		0.95
// @identifier	
// @date		
// @modified by		RKho (pipeguru) for Ease SHC group
// @contributor     Alesa Dam (http://flickr.com/alesadam): v0.4
// @contributor     vispillo  (http://flickr.com/vispillo): v0.4 patched for SHC
// @modified date   	6 Oct. 2010
// 
// @include		http://www.flickr.com/groups/superchallenge/discuss/*
// @include		http://www.flickr.com/groups/superchallenge/discuss/        
// @include		http://flickr.com/groups/superchallenge/discuss/*
// @include		http://flickr.com/groups/superchallenge/discuss/
// @include		http://www.flickr.com/groups_newtopic.gne?id=1134256@N23
// @include		http://*flickr.com/photos/*/*
// @include		http://*flickr.com//photos/*/*
// @include		http://userscripts.org/*
// @include		http://www.flickr.com/groups/superchallenge/discuss/*/edit/
//
// Revision history
//
// v0.1: modified varibles for SHC group
// v0.1a: modified varibles for SHC group
// v0.2: add *G-Init button to initialise SHC Admin data
// v0.3: Sweep Medal Updated
// v0.4: remove conflict with UCP Admin script - use discussion thread as theme list - use discussion thread as header list
//       reinstate award functionality on photo pages (new layout) - bug fixes
//
// ==/UserScript==
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// --------------------------------------------------------------------

(function SHCadmintool( ) 
{
	var SHCStartTime = new Date( );
	var SHCtoolversion = "V0.95";
	var scriptNumber = '95563';

// version check code
function showUpdateNotification() {
    var color = 'white';
    var bgColor = 'black';
        // copied from Google++ userscript:
    var updatespan = document.createElement('span');
	updatespan.setAttribute('style',
            'padding: 2px 4px;' +
            'background: ' + bgColor + ' none repeat scroll 0% 0%;' +
            'display: block;' +
            '-moz-background-clip: border;' +
            '-moz-background-origin: padding;' +
            '-moz-background-inline-policy: continuous;' +
            'position: fixed;' +
            'opacity: 0.7;' +
            'z-index: 100;' +
            'bottom: 5px;' +
            'right: 5px'
        );
    document.body.appendChild(updatespan);
    var updateLink = document.createElement('a');
        updateLink.innerHTML = 'Game Admin Tool: update available';
        updateLink.setAttribute('href', 'http://userscripts.org/scripts/show/' + scriptNumber);
        updateLink.setAttribute('target', '_blank');
        updateLink.setAttribute('title', 'to the script\'s install page (opens in new tab)');
        updateLink.setAttribute('style', 'color: ' + color + ';text-decoration: none;');
    updatespan.appendChild(updateLink);
}

function storeVersion() {
    // only called on iframe containing script's meta data
    var onlineVersion = document.body.innerHTML.split(/@version\s*/)[1].split(/[\r\n]+/)[0];
    GM_setValue('onlineVersion', onlineVersion); // works only in FF 
}

function checkVersion() {
    var lastVersionCheckTime = GM_getValue("lastVersionCheckTime");
    var elapsedtime;
    var CPStartTime = new Date();
    if (lastVersionCheckTime) {
        elapsedtime = CPStartTime.getTime() - lastVersionCheckTime;
    }
   if (!lastVersionCheckTime || elapsedtime / 1000 > 60 * 60 * 12) { //more then 12h ago

        var iframe = document.createElement('iframe');
            iframe.setAttribute('src', "http://userscripts.org/scripts/source/" + scriptNumber + ".meta.js");
            iframe.setAttribute('style', 
                'width: 0;' +
                'height: 0;' +
                'display: none;' +
                'visibility: hidden'
            );
	document.body.appendChild(iframe);
        // the script also run within this iframe => storeVersion is called
        GM_setValue("lastVersionCheckTime", CPStartTime.getTime().toString());
    }

    var onlineVersion = GM_getValue("onlineVersion");
    if (onlineVersion) {
        var updateAvailable = false;
        var reVersionMatch      = /(\d+)\.(\d+)/;
        var onlineVersionParts  = reVersionMatch.exec(onlineVersion);
        var currentVersionParts = reVersionMatch.exec(SHCtoolversion);
        var onlineVersionMajor, onlineVersionMinor;
        //[ onlineVersion, onlineVersionMajor, onlineVersionMinor, onlineVersionBuild ] = onlineVersionParts; 'invalid left-hand side' in Chrome
        onlineVersionMajor = onlineVersionParts[1];
        onlineVersionMinor = onlineVersionParts[2];
        var currentVersionMajor, currentVersionMinor;
        //[ currentVersion, currentVersionMajor, currentVersionMinor, currentVersionBuild] = currentVersionParts;
        currentVersionMajor = currentVersionParts[1];
        currentVersionMinor = currentVersionParts[2];
        // first check major
        if (parseInt(onlineVersionMajor, 10) > parseInt(currentVersionMajor, 10)) {
            updateAvailable = true;
        } else if (parseInt(onlineVersionMajor, 10) === parseInt(currentVersionMajor, 10)) { // we don't want to downgrade
            if (parseInt(onlineVersionMinor, 10) > parseInt(currentVersionMinor, 10)) {
                updateAvailable = true;
            }
        }
        if (updateAvailable) {
            showUpdateNotification();
        }
    }
}

    // special case: iframe with meta data from userscripts.org
    if (document.location.href.match('http://userscripts.org/scripts/source/' + scriptNumber + '.meta.js')) {
        storeVersion();
        return;
    }

    checkVersion();

// script code

	var topicidpos = 9;
	var postidpos = 10;

	var help1;
	var help2;

	var iSHCVoteScore = 5;
	var sSHCVoteScore = "" + iSHCVoteScore;

  var iSHCX2VoteScore = 10;
  var sSHCX2VoteScore = "" + iSHCX2VoteScore;
  
  var iSHCX3VoteScore = 10;
  var sSHCX3VoteScore = "" + iSHCX3VoteScore;
  
	//global variables for adding new challenges
    var nHeaders = parseInt(GM_getValue("SHC.headers"));
    if (isNaN(nHeaders)) {
        alert("You will need to (re-)initialize the SHC Admin tool data");
    }

	var challengetxtnode;

	var challengethemeval;
	var challengethemenode;

	var node;
	var processforSHC;

	// *******************
	// start of some help functions copied out of inline forum post edit (steeev)
	// *******************

	function TrimString( str ) 
	{
		str = str.replace( /^[\s]+/, '' ); // Trims leading spaces
		str = str.replace( /[\s]+$/, '' ); // Trims trailing spaces
		return str;
	}

	function $x( xpath, root ) 
	{
		var doc = root ? ( root.evaluate ? root : root.ownerDocument ) : document;
		var got = doc.evaluate( xpath, root || doc, null, 0, null ), next;
		var result = [ ];
		while( next = got.iterateNext() )
		{
			result.push( next );
		}
		return result;
	}

	function detectNoSpaces( vote )
	{
		// inside challenge - decode last vote if no spaces
		var voteNoSpaces = parseInt( "9" + vote );
		var result = vote;
		if ( voteNoSpaces >= 9000 && voteNoSpaces <=9999 )
		{
			voteNoSpaces -= 9000;

			vote1 = parseInt( voteNoSpaces / 100 );
			voteNoSpaces -= vote1 * 100;

			vote2 = parseInt( voteNoSpaces / 10 );
			voteNoSpaces -= vote2 * 10;

			var splitvar = "-";
			result = "" + vote1 + splitvar + vote2;
			GM_log( "vote with no spaces detected! " + result );
		}
		return result;
	}

	// *******************
	// start of checkskipchallenge
	// *******************

	function checkskipchallenge( text )
	{
		var csc=0; 

		var checktext = new Array();
		checktext[ 0 ] = "Chat";
		checktext[ 1 ] = "Sweeps!!!!!";
		checktext[ 2 ] = "SHCX2 Winners Photo Gallery";
		checktext[ 3 ] = "SHCX3 Winners Photo Gallery";
		checktext[ 4 ] = "SHC Meet";
		checktext[ 5 ] = "SHC Icon";
		checktext[ 6 ] = "SHC On";
		checktext[ 7 ] = "SHC SWEEPS";
		checktext[ 8 ] = "Group Links";
		checktext[ 9 ] = "Showcase";
    checktext[ 10] = "Mission";


		var bMatch = false;
		for ( csc = 0; csc < checktext.length; csc++ )
		{
			if ( text.match( checktext[csc] ) == checktext [ csc ] )
			{
				bMatch = true;
				break;
			}
		}

		return bMatch;

	}

	// *******************
	// end of checkskipchallenge
	// *******************


	// *******************
	// start of convert to time functions
	// *******************

	function getTimeAgo( challengeopentime )
	{
		var addhours = 0;
		var splittext = "";
		if ( challengeopentime.match( "AM" ) == "AM" )
		{
			splittext = "AM";
		}
		else
		{
			splittext = "PM";
			addhours = 12;
		}
		var time = challengeopentime.split( splittext )[ 0 ];
		var date = challengeopentime.split( splittext )[ 1 ];
		date = date.substr( 2, date.length );
		var dateportions = date.split( " " );
		date = dateportions[ 0 ] + " " + dateportions[ 1 ] + " " + dateportions[ 2 ] + " ";
		
		if ( addhours > 0 )
		{
			var timeportions = time.split( ":" );
			time = "" + ( parseInt( timeportions[ 0 ] ) + addhours ) + ":" + timeportions[ 1 ];
		}
		date += time;
		var challengeopendate = Date.parse( date );
		return challengeopendate;
	}

	function converttoseconds( elaps )
	{
		if ( elaps == " " )
		{
			return elaps; //return if nothing filled in
		}

		var t = 0;
		timevalue = elaps.split( " " )[ 0 ];

		if ( elaps.match( "moment" ) == "moment" ) t = 0;
		else if ( elaps.match( "second" ) == "second" ) t = timevalue;
		else if ( elaps.match( "minute" ) == "minute" ) t = ( timevalue - 0.5 ) * 60;
		else if ( elaps.match( "hour" ) == "hour" ) t = ( timevalue - 0.5 ) * 60 * 60;
		else if ( elaps.match( "day" ) == "day" ) t = ( timevalue - 0.5 ) * 60 * 60 * 24;
		else if ( elaps.match( "week" ) == "week" ) t = ( timevalue - 0.5 ) * 60 * 60 * 24 * 7;
		else if ( elaps.match( "month" ) == "month" ) t = ( timevalue - 0.5 ) * 60 * 60 * 24 * 7 * 30;

		return t;
	}

	function converttotime( elaps )
	{
		if ( elaps == " " )
		{
			return elaps; //return if nothing filled in
		}

		var mytime = new Date( );
		var t = 0;
		SHCtime = SHCStartTime.getTime( );
		timevalue = elaps.split( " " )[ 0 ];

		if ( elaps.match( "moment" ) == "moment" ) t = SHCtime;
		else if ( elaps.match( "second" ) == "second" ) t = SHCtime - timevalue * 1000;
		else if ( elaps.match( "minute" ) == "minute" ) t = SHCtime - ( timevalue - 0.5 ) * 1000 * 60;
		else if ( elaps.match( "hour" ) == "hour" ) t = SHCtime - ( timevalue - 0.5 ) * 1000 * 60 * 60;
		else if ( elaps.match( "day" ) == "day" ) t = SHCtime - ( timevalue - 0.5 ) * 1000 * 60 * 60 * 24;
		else if ( elaps.match( "week" ) == "week" ) t = SHCtime - ( timevalue - 0.5 ) * 1000 * 60 * 60 * 24 * 7;
		else if ( elaps.match( "month" ) == "month" ) t = SHCtime - ( timevalue - 0.5 ) * 1000 * 60 * 60 * 24 * 7 * 30;

		mytime.setTime( t );
		x = mytime.toString( );

		split1 = x.split( " " )[ 0 ];
		split2 = x.split( " " )[ 5 ];

		y = x.split( split1 + " " )[ 1 ].split( split2 )[ 0 ];
		z = y.split( ":" )[ 0 ] + ":" + y.split( ":" )[ 1 ] + " " + y.split( " " )[ 4 ];

		return z;
	}

	// *******************
	// end of convert to time function
	// *******************


	// *******************
	// start of award functions
	// *******************

	Award = 
	{
		init: function Awardinit()
		{
			processforSHC = false;
			if ( ( document.referrer.match( "superchallenge/discuss" ) == "superchallenge/discuss" ) ||
				   ( document.referrer.match( "superchallenge/discuss" ) == "superchallenge/discuss" ) ||
				 ( GM_getValue( "SHC.paginate" ) == "true" )	) 
				 
			{
				processforSHC = true;
				
				GM_setValue( "SHC.paginate", "false" ); // switch off paginateswitch
				this.textarea = document.getElementById( 'comments' ).getElementsByTagName( 'TEXTAREA' )[ 0 ];
				posts = document.getElementById( 'comments' ).innerHTML;
				if ( posts.match( /<div.*class="Paginator"/ ))
				{
					alert( "photo has more then 1 page of posts, please check all pages for a medal" );

					//start checking for click on page hrefs to catch click on next page    
					window.addEventListener ( 'mousedown', function eventawardclickme(e) { Award.clickme (e); }, false );
				}
				// Check for medals
				chcktxt = '/groups/superchallenge';
				chcktxt21 = 'You have beaten two other Medal Winners and earned:';
				chcktxt22 = 'Your photo finished second in You Rock';
				chcktxt3 = 'Your photo won unanimously in You Rock'; //newer platinum
				alerttxt  ="";

				if ( ( posts.match( chcktxt ) == chcktxt ) ) 
				{
					if ( posts.match( chcktxt21 ) == chcktxt21 )
					{
						var since = posts.split( chcktxt21 )[ 1 ].split( "Posted" )[ 1 ].split( "ago" )[ 0 ];
						alerttxt = alerttxt + "PHOTO HAS MEDAL" +	"\nPosted" + since + "ago.";
					}
					else if( posts.match( chcktxt22 ) == chcktxt22 )
					{
						var since = posts.split( chcktxt22 )[ 1 ].split( "Posted" )[ 1 ].split( "ago" )[ 0 ];
						alerttxt = alerttxt + "PHOTO HAS MEDAL" + "\nPosted" + since + "ago.";
					}
					else if ( posts.match( chcktxt3 ) == chcktxt3 ) 
					{
						var since = posts.split( chcktxt3 )[ 1 ].split( "Posted" )[ 1 ].split( "ago" )[ 0 ];
						alerttxt = alerttxt + "\n\nPHOTO HAS MEDAL" + "\nPosted" + since + "ago.";
					}
				}


				if ( alerttxt != "" )
				{
					alert( alerttxt );
				}

                photoid = document.location.href.match(/.*flickr.com\/photos\/[^\/]+\/(\d+)/)[0];
				// Check for public: could be replaced with an API call
/*				photoid = unsafeWindow.page_photo_id;
				if ( unsafeWindow.global_photos[ unsafeWindow.page_photo_id ].isPublic == 0 ) 
				{
					alert( "PHOTO SEEMS NOT TO BE PUBLIC, PLEASE CHECK" );
				}
*/
				// Create medal award box
				var n = document.createElement ( 'SELECT' );
                // Clear 'history'
			    GM_setValue( "SHC.postedmedal", 0 );

				n.addEventListener ( 'change', function eventawardchangeaward(e) { Award.insertAward (); }, false );

        var htmlstring = '<option value="0"></option>';
        for (i=1;i<=GM_getValue("SHC.medals");i++) {
          htmlstring = htmlstring + '<option value="'+i+'">'+GM_getValue("SHC.medal."+i+".title")+'</option>';
        }
        n.innerHTML = htmlstring;

				/*n.innerHTML = '<option value="0"></option>'
					+ '<option value="1">SHC Award</option>'
					+ '<option value="2">SHCX2 Award</option>'
					+ '<option value="3">SHCX2 Sweep Award</option>'
					+ '<option value="4">SHCX3 Award</option>'
          + '<option value="5">SHC On Award</option>';*/

				//GM_log(document.getElementById ('DiscussPhoto').innerHTML);

				this.textarea.parentNode.insertBefore( document.createElement( "br" ), this.textarea );
				this.textarea.parentNode.insertBefore( document.createTextNode( 'SHC Awards: ' ), this.textarea );
				this.textarea.parentNode.insertBefore( n, this.textarea );
				this.textarea.parentNode.insertBefore( document.createElement( "br" ), this.textarea );
				this.textarea.parentNode.insertBefore( document.createElement( "br" ), this.textarea );

				node = n;

				//code to trap post button

        var postCommentButton = document.evaluate("//input[contains(@class, 'comment-button-post')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				/*document.getElementById( 'btn_post_comment' )*/
				postCommentButton.addEventListener( 'mousedown', function postcommentclickme(e) { Award.clickpostcomment (e); }, false );
			}

			// GM_log(document.getElementById ('DiscussPhoto').innerHTML);

		},

		insertAward: function Awardinsert( )
		{
		  chlg_id = GM_getValue('SHC.currentchallenge');
		  chlg_thread = 'http://www.flickr.com/groups/superchallenge/discuss/'+GM_getValue('SHC.'+chlg_id+'.threadnr')+'/';
		  chlg_theme = decodeURIComponent(GM_getValue('SHC.'+chlg_id+'.status')).split('Theme: ')[1];
		  string = '';
		  if (document.referrer.split('/')[6] == GM_getValue('SHC.'+chlg_id+'.threadnr')) {
  		  string = '<br />Congratulations, you won the <a href="'+chlg_thread+'">"'+chlg_theme+'"</a> challenge on <a href="http://www.flickr.com/groups/superchallenge/">Super Hero Challenges</a>!<br />';
  		}
			this.textarea.value = GM_getValue('SHC.medal.'+node.value+'.code') + string + this.textarea.value;
			GM_setValue( "SHC.postedmedal", node.value );
		},

		clickpostcomment: function Awardclickpostcomment( )
		{
			//alert( 'in postcomment' );
			  var tagtext = GM_getValue( 'SHC.medal.'+GM_getValue( "SHC.postedmedal" )+'.tag' );
			  chlg_id = GM_getValue('SHC.currentchallenge');
			  if (document.referrer.split('/')[6] == GM_getValue('SHC.'+chlg_id+'.threadnr')) {
  		    tagtext = tagtext + ' "'+ decodeURIComponent(GM_getValue('SHC.'+chlg_id+'.status')).split('Theme: ')[1]+'"';
  		  }
  			/*if ( GM_getValue( "SHC.postedmedal" ) == "1" ) tagtext = '"SHC Winner"'; //currently no tags set yet
  			if ( GM_getValue( "SHC.postedmedal" ) == "2" ) tagtext = '"SHCX2 Winner"';
  			if ( GM_getValue( "SHC.postedmedal" ) == "3" ) tagtext = '"SHCX2 Sweep Winner"';
  			if ( GM_getValue( "SHC.postedmedal" ) == "4" ) tagtext = '"SHCX3 Winner"';
  			if ( GM_getValue( "SHC.postedmedal" ) == "5" ) tagtext = '"SHC On Winner"';*/

        try {
        		groupid = GM_getValue( 'SHC.medal.'+GM_getValue( "SHC.postedmedal" )+'.groupid' );
        		//unsafeWindow.console.log(groupid);
  				if ( groupid ) 
  				{
  				  
  				  // We're adding a tag, so it's okay to send an admin invite too
  				  var photoid = document.location.href.split('/')[5];
			      sendAdminInvite(groupid,photoid);
				    document.getElementById( 'addtagbox' ).value = tagtext;
  				  //document.getElementById( 'tagadderform' ).submit( );
  				  document.getElementById( 'tagadderform' ).elements[ 2 ].click( );
  				}
        } catch (e) {
          GM_log("unable to add tag '" + tagtext + "'");
          GM_log(e);
        }
		},

		clickme: function Awardclickme( e ) 
		{
			//GM_log( "process: " + processforSHC );
			if ( processforSHC )
			{
				var targ;
				if ( !e ) 
				{
					var e = window.event;
				}

				if ( e.target ) 
				{
					targ = e.target;
				}
				else if ( e.srcElement )
				{
					targ = e.srcElement;
				}
				if ( targ.nodeType == 3 ) // defeat Safari bug
				{
					targ = targ.parentNode;
				}

				var tname = targ.tagName;
				reference = targ.href;
				if ( tname == "A" )
				{
					if ( reference.match( "/page" ) == "/page" )
					{
						GM_setValue( "SHC.paginate", "true" );
						//GM_log( tname + " : " + reference );
					}
					//alert( "You clicked on a " + tname + " element." );
				}
			}
		}
	}

	// *******************
	// end of award functions
	// *******************


	// *******************
	// Start of load theme list
	// *******************

	function loadthemelist( )
	{
		d = new Date( );
		thistime = d.getTime( ).toString( );
		GM_setValue( "SHC.themelisttime", thistime );

		GM_log( "SHC: Started loading new themelist (in background)" );

    var url = "http://www.flickr.com/groups/1129391@N22/discuss/72157625773661841/";

		GM_xmlhttpRequest(
			{
				method:"GET",
				url:url,
				headers:
				{
					"User-Agent":"monkeyagent",
					"Accept":"text/monkey,text/xml"
				},
				onload:function( responseDetails ) 
				{
					themelist = responseDetails.responseText.split( "===Start of theme list===" )[ 1 ].split( "===End of theme list===" )[ 0 ];
					var themearray = new Array( );
					themearray = themelist.split( "<br />" ); //into array
					themestring = themearray.join( "||" ).replace( /\n/g, "" ); //cleanup
					GM_setValue( "SHC.themelist", themestring );
					challengethemeval = themestring.split( "||" );

					GM_log( "SHC: Loading new themelist complete" );
				}
			} );
	}

	// *******************
	// end of load theme list
	// *******************

	// *******************
	// Start of load challenge headers
	// *******************

	function loadchlgheader( )
	{
		d = new Date( );
		thistime = d.getTime( ).toString( );
		GM_setValue( "SHC.themelisttime", thistime );

		GM_log( "SHC: Started loading new challengeheaders (in background)" );

		var url = "http://www.flickr.com/groups/1129391@N22/discuss/72157625898776350/";

		GM_xmlhttpRequest(
		{
			method:"GET",
			url:url,
			headers:{
				"User-Agent":"monkeyagent",
				"Accept":"text/monkey,text/xml"
		},

		onload:function( responseDetails ) 
		{
          try {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = responseDetails.responseText;

            var replies = document.evaluate(".//div[@id='DiscussTopic']//table[@class='TopicReply']//td[@class='Said']",
                tempDiv, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0, len = replies.snapshotLength; i < len; ++i) {
                var reply = replies.snapshotItem(i);
                var title = reply.innerHTML.split("===Start of Title===")[1]
                                           .split("===End of Title===")[0]
                                           .replace(/<[^>]+>/g, '');
                var header = reply.innerHTML.split("===Start of Header===")[1]
                                            .split("===End of Header===")[0];
                GM_setValue( "SHC.header." + (i+1) + ".title", title);
                GM_setValue( "SHC.header." + (i+1) + ".text", header); // 1-based
                if (reply.innerHTML.match("===Start of Theme===")) {
                    var theme = reply.innerHTML.split("===Start of Theme===")[1]
                                               .split("===End of Theme===")[0]
                                               .replace(/<[^>]+>/g, '');
                    GM_setValue( "SHC.header." + (i+1) + ".theme", theme);
                }
            }
            GM_setValue( "SHC.headers", replies.snapshotLength );
			//GM_setValue( "SHC.SHCchlgheader", headerSHC );

			GM_log( "SHC: Loading new challengeheaders complete" );
          } catch (e) {
            GM_log("error loading headers: " + e);
          }
		}} ); // end GM_xmlhttpRequest

	}

	// *******************
	// end of load challenge headers
	// *******************

	// *******************
	// Start of load challenge headers
	// *******************

	function loadchlgmedals( )
	{
		d = new Date( );
		thistime = d.getTime( ).toString( );
		GM_setValue( "SHC.themelisttime", thistime );

		GM_log( "SHC: Started loading new challengemedals (in background)" );

		var url = "http://www.flickr.com/groups/1129391@N22/discuss/72157625899025850/";

		GM_xmlhttpRequest(
		{
			method:"GET",
			url:url,
			headers:{
				"User-Agent":"monkeyagent",
				"Accept":"text/monkey,text/xml"
		},

		onload:function( responseDetails ) 
		{
          try {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = responseDetails.responseText;

            var replies = document.evaluate(".//div[@id='DiscussTopic']//table[@class='TopicReply']//td[@class='Said']",
                tempDiv, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0, len = replies.snapshotLength; i < len; ++i) {
                var reply = replies.snapshotItem(i);
                var title = reply.innerHTML.split("===Start of Title===")[1]
                                           .split("===End of Title===")[0]
                                           .replace(/<[^>]+>/g, '');
                var code = reply.innerHTML.split("===Start of Medal===")[1]
                                           .split("===End of Medal===")[0];
                var tag = reply.innerHTML.split("===Start of Tag===")[1]
                                         .split("===End of Tag===")[0]
                                         .replace(/<[^>]+>/g, '')
                                         .replace(/\n/g,'');
                if (reply.innerHTML.match("===Start of GroupID===")) {
	                var groupid = reply.innerHTML.split("===Start of GroupID===")[1]
                							 	 .split("===End of GroupID===")[0]
                							 	 .replace(/<[^>]+>/g, '').replace(/\n/g,'');
	                GM_setValue( "SHC.medal." + (i+1) + ".groupid",groupid);
                }
                GM_setValue( "SHC.medal." + (i+1) + ".code", code);
                GM_setValue( "SHC.medal." + (i+1) + ".tag", tag); // 1-based
                GM_setValue( "SHC.medal." + (i+1) + ".title", title)
            }
            GM_setValue( "SHC.medals", replies.snapshotLength );
			//GM_setValue( "SHC.SHCchlgheader", headerSHC );

			GM_log( "SHC: Loading new challengemedals complete" );
          } catch (e) {
            GM_log("error loading medals: " + e);
          }
		}} ); // end GM_xmlhttpRequest

	}

	// *******************
	// end of load challenge medals
	// *******************

  function loadvotetimes ( ) {
    trs = document.getElementsByClassName('TopicListing')[0].getElementsByTagName('tr')
    if (trs) {
      for (i=1;i<=trs.length;i++) {
        if (trs[i]) {
          title = trs[i].getElementsByTagName('td')[0].getElementsByTagName('b')[0].innerHTML;
          url   = trs[i].getElementsByTagName('td')[0].getElementsByTagName('a')[0].href;
          if(title) {
            ProcessDetailDocInline( url, title )
          }
        }
      }
    }
    //ProcessDetailDocInline( thread, title )
  }

	// *******************
	// Start of display functions
	// *******************

	function checkvotes( challenge, verbose ) 
	{
    //unsafeWindow.console.log( "checking: " + challenge );

		var mylist = new Array();

		mylist[ 0 ] = "SHC.01";
		mylist[ 1 ] = "SHC.02";
		mylist[ 2 ] = "SHC.03";
		mylist[ 3 ] = "SHC.04";
		mylist[ 4 ] = "SHC.05";
		mylist[ 5 ] = "SHC.06";
		mylist[ 6 ] = "SHC.07";
		mylist[ 7 ] = "SHC.08";
		mylist[ 8 ] = "SHC.09";
		mylist[ 9 ] = "SHC.10";
		mylist[ 10 ] = "SHC.11";
		mylist[ 11 ] = "SHC.12";
		mylist[ 12 ] = "SHC.50";
		mylist[ 13 ] = "SHC.51";
		mylist[ 14 ] = "SHC.52";
		mylist[ 15 ] = "SHC.53";
//		mylist[ 16 ] = "SHC.15";
		

		myalert1 = "";
		alert1count = 0;
		myalert2 = "";
		myalert = "";

		var x = 0;

		for ( x in mylist ) 
		{
		  GM_log('checking for vote status in '+mylist[x]);
			voted=false;
			//unsafeWindow.console.log('checking group ',mylist[x]);
			othertovotetime = new Date( "Jan 01, 2900 01:00:00" ); //init date

//			if ( ( GM_getValue( mylist[ x ] + ".chlgstatus" ) != "FIN" ) && ( GM_getValue( mylist[ x ] + ".chlgstatus" ) != "WT" ) )
			if ( GM_getValue( mylist[ x ] + ".chlgstatus" ) != "WT" )
			{
			  //unsafeWindow.console.log('that challenge is neither finished nor waiting...');
				ddtovotetime = GM_getValue( mylist[ x ] + ".tovotetime" );
				//unsafeWindow.console.log('votetime is ',ddtovotetime);
				if ( ddtovotetime != " " )
				{
					othertovotetime = new Date( GM_getValue( mylist[ x ] + ".tovotetime" ) );
				  //unsafeWindow.console.log('Setting othertovotetime to: ',othertovotetime);
				}

				//alert( mylist[ x ] + "\n" + othertovotetime );

				for ( voter = 1; voter <= 3; voter++ )    //rxk previous value 3
				{
					ddphototime = new Date( GM_getValue( challenge + ".photo" + voter + "time" ) );
					ddphoto = decodeURIComponent( GM_getValue( challenge + ".photo" + voter ) );
				  //unsafeWindow.console.log('for voter ',voter,', ddphoto is ',ddphoto,', and ddphototime is ',ddphototime);
				  //unsafeWindow.console.log('only proceed if othertovotetime: ',othertovotetime,' is smaller than ddphototime: ',ddphototime);
					if ( othertovotetime < ddphototime )
					{
						//alert( "checking photo" + voter );
						for ( num = 1; num <= 3; num++ )       //rxk previous value 3
						{
						  // Ignore this challenge if the person being examined is one of the players.
						  //unsafeWindow.console.log('photonum is %d',num);
							if ( ddphoto == decodeURIComponent( GM_getValue( mylist[ x ] + ".photo" + num ) ) ) 
							{
							  //unsafeWindow.console.log('found a match on %s, breaking...',ddphoto);
								voted = true;
								break;
							}
						}

						if ( decodeURIComponent( GM_getValue( mylist[x]+".photovoter" ) ).indexOf ( ddphoto ) !=-1 ) 
						{
						  //unsafeWindow.console.log('ddphoto value %s found in photovoter list for this challenge!',ddphoto);
							voted=true;
						}

						if ( voted == false ) 
						{
						  //unsafeWindow.console.log('looks as if %s may not have voted in this challenge yet.',ddphoto);
							myalert2 = myalert2 + ddphoto + " did possibly not vote in challenge " + mylist[ x ].split( "." )[ 1 ] + " ("+GM_getValue( mylist[ x ] + ".chlgstatus" )+") yet.\n";
						}

						voted = false;
					}
				}

			} // end of if chlgstatus == OK

			if ( GM_getValue( mylist[ x ] + ".chlgstatus" ) == "UPD" ) 
			{
				myalert1 = myalert1 + mylist[ x ].split( "." )[ 1 ] + " ";
				alert1count++;
			}

		} // end of challengesfor

		if ( verbose )
		{
			if ( alert1count > 1 ) 
				myalert1 = "Challenges " + myalert1 + "have";
			else if ( alert1count != 0 ) 
				myalert1 = "Challenge " + myalert1 + "has";
	
			if ( myalert1 != "" ) 
				myalert = myalert1 + " status UPD!\n" + "Update all challenges for a good votecheck\n\n";
			if ( myalert2 != "" ) 
				myalert = myalert + 
					myalert2 + "\nPlease check votes in these challenges and make sure\n" +
					"you allow for AT LEAST 30 minutes to pass before taking action\n" +
					"Above you see the photo posting times. If these are less then 30\n" +
					"minutes ago just keep an eye on the missed challenges for now\n";
	
			if ( myalert == "" ) 
				myalert = "Players voted in all challenges\n";
		}
		else
			myalert += myalert2;

		return myalert;
	}

	function checktriplephoto( ) 
	{
		var mylist = new Array( );

		mylist[ 0 ] = "SHC.01";
		mylist[ 1 ] = "SHC.02";
		mylist[ 2 ] = "SHC.03";
		mylist[ 3 ] = "SHC.04";
		mylist[ 4 ] = "SHC.05";
		mylist[ 5 ] = "SHC.06";
		mylist[ 6 ] = "SHC.07";
		mylist[ 7 ] = "SHC.08";
		mylist[ 8 ] = "SHC.09";
		mylist[ 9 ] = "SHC.10";
		/*mylist[ 10 ] = "SHC.11";
		mylist[ 11 ] = "SHC.12";
		mylist[ 12 ] = "SHC.50";
		mylist[ 13 ] = "SHC.51";
		mylist[ 14 ] = "SHC.52";
		mylist[ 15 ] = "SHC.53";*/

		myalert = "";
		myalert1 = "";
		alert1count = 0;

		var x=0;
		var y=0;
		photolist=new Array( );
		gotphoto=new Array( );

		for ( x in mylist ) 
		{
			if ( GM_getValue( mylist[ x ] + ".chlgstatus" ) != "FIN"  )
			{
				ddphoto1 = decodeURIComponent( GM_getValue( mylist[ x ] + ".photo1" ) );
				ddphoto2 = decodeURIComponent( GM_getValue( mylist[ x ] + ".photo2" ) );
				ddphoto3 = decodeURIComponent( GM_getValue( mylist[ x ] + ".photo3" ) );
				if ( ddphoto1 != " " ) photolist[ y++ ] = ddphoto1;
				if ( ddphoto2 != " " ) photolist[ y++ ] = ddphoto2;
				if ( ddphoto3 != " " ) photolist[ y++ ] = ddphoto3;
			}

			if ( GM_getValue( mylist[ x ] + ".chlgstatus" ) == "UPD" ) 
			{
				myalert1 = myalert1 + mylist[ x ].split( "." )[ 1 ] + " ";
				alert1count++;
			}
		}
		
		// Additional check in Ultra Hero Challenges #11 & #12
		myultralist = new Array();
  	ultraphotolist=new Array( );
		myultralist[ 0 ] = 'SHC.11';
  	myultralist[ 1 ] = 'SHC.12';
  	var u = 0;
		for ( x in myultralist) {
			if ( GM_getValue( myultralist[ x ] + ".chlgstatus" ) != "FIN"  )
			{
				ddphoto1 = decodeURIComponent( GM_getValue( myultralist[ x ] + ".photo1" ) );
				ddphoto2 = decodeURIComponent( GM_getValue( myultralist[ x ] + ".photo2" ) );
				ddphoto3 = decodeURIComponent( GM_getValue( myultralist[ x ] + ".photo3" ) );
				if ( ddphoto1 != " " ) ultraphotolist[ u++ ] = ddphoto1;
				if ( ddphoto2 != " " ) ultraphotolist[ u++ ] = ddphoto2;
				if ( ddphoto3 != " " ) ultraphotolist[ u++ ] = ddphoto3;
			}

			if ( GM_getValue( myultralist[ x ] + ".chlgstatus" ) == "UPD" ) 
			{
				myalert1 = myalert1 + myultralist[ x ].split( "." )[ 1 ] + " ";
				alert1count++;
			}
		}
		//GM_log( y );

		x = 0;
		for ( x=0; x < y; x++ )
		{
			//GM_log( photolist[ x ] );
			//GM_log( x );
			if ( gotphoto[ photolist[ x ] ] == undefined )
			{
				//GM_log( photolist[ x ] + " undefined");
				gotphoto[ photolist [ x ] ] = 1;
			}
			else 
			{
				gotphoto[ photolist [ x ] ] += 1;
			}

			if ( gotphoto[ photolist [ x ] ] > 3 ) 
			{
				myalert = myalert + photolist[ x ] + " entered in " + gotphoto[ photolist[ x ] ] + " challenges.\n";
			}
		}

    gotphoto=new Array( );
		x = 0;
		for ( x=0; x < u; x++ )
		{
			//GM_log( photolist[ x ] );
			//GM_log( x );
			if ( gotphoto[ ultraphotolist[ x ] ] == undefined )
			{
				//GM_log( photolist[ x ] + " undefined");
				gotphoto[ ultraphotolist [ x ] ] = 1;
			}
			else 
			{
				gotphoto[ ultraphotolist [ x ] ] += 1;
			}

			if ( gotphoto[ ultraphotolist [ x ] ] > 1 ) 
			{
				myalert = myalert + ultraphotolist[ x ] + " entered in " + gotphoto[ ultraphotolist[ x ] ] + " Ultra Hero challenges.\n";
			}
		}

		if ( alert1count > 1 )
		{
			myalert1 = "Challenges " + myalert1 + "have"
		}
		else if ( alert1count != 0 ) 
		{
			myalert1 = "Challenge " + myalert1 + "has"
		}

		if ( myalert1 != "" )
		{
			myalert1 = myalert1 + " status UPD!\n" + "Update all challenges for an up-to-date challenge overview\n\n";
		}

		if ( myalert != "" )
		{
			alert( myalert1 + myalert + "\nCheck on next page which ones...")
		}
		else if ( myalert1 != "" ) 
		{
			alert( myalert1 );
		}
	}

	function displayplatinumdata( e )
	{
		var targ;
		if ( !e )
		{
			e = window.event;
		}
		if ( e.target )
		{
			targ = e.target;
		}
		else if ( e.srcElement )
		{
			targ = e.srcElement;
		}
		if ( targ.nodeType == 3 ) // defeat Safari bug
		{
			targ = targ.parentNode;
		}

		e.stopPropagation( );

		SHCchlgnr = targ.id;
		url = targ.href;

		ddthreadnr = GM_getValue( SHCchlgnr + ".threadnr" );
		ddchlgnr = GM_getValue( SHCchlgnr + ".challengenr" );

		ddcommentcounter = GM_getValue( SHCchlgnr + ".commentcounter" );
		ddstatus = decodeURIComponent( GM_getValue( SHCchlgnr + ".status" ) );
		ddphoto1 = decodeURIComponent( GM_getValue( SHCchlgnr + ".photo1" ) );
		ddphotovoter = decodeURIComponent( GM_getValue( SHCchlgnr + ".photovoter" ) );

		myWindow = window.open( '', 'Stats page', 'top = 50, left = 100, width = 800, height = 600, scrollbars = yes, resizable = yes' )
		//myWindow.document.write( "This is 'myWindow'" )
		myWindow.document.open( "text/html", "replace" );
		myWindow.document.write( "<P><h1>Brackets voting board</h1></p><p>" + '<table border="1"><tr>' ); 
		myWindow.document.write( ddchlgnr + ": " + ddthreadnr + "</br>Title: " + ddstatus  );
		myWindow.document.write( "</tr><tr>" );
		myWindow.document.write( '<td valign="top"><table border="1"><tr>Players</tr><tr><td>' + ddphoto1.replace(/,/g,"</td></tr><tr><td>") + "</table></td>" );
		//myWindow.document.write( "</tr><tr>" );
		myWindow.document.write( '<td valign="top"><table border="1"><tr>Voters & votes</tr><tr><td>' + 
			ddphotovoter.replace(/:/g,"</td><td>").replace(/\n/g,"</td></tr><tr><td>")+"</table></td>");
		myWindow.document.write( "</tr></table></p>" );
		myWindow.document.close( );
		myWindow.focus( );
		//ddphotovoter.replace(/:/g,"&nbsp").replace(/\n/g,"</p><p>") + "</p>" );

	}


	displaydata = function displaydata( e )
	{
    GM_log( "Here - displaydata" );
		var targ;
		if ( !e )
		{
			e = window.event;
		}
		if ( e.target )
		{
			targ = e.target;
		}
		else if ( e.srcElement )
		{
			targ = e.srcElement;
		}
		if ( targ.nodeType == 3 ) // defeat Safari bug
		{
			targ = targ.parentNode;
		}

		e.stopPropagation( );

		SHCchlgnr = targ.id;
		url = targ.href;

		votealert = checkvotes( SHCchlgnr, true );

		ddthreadnr = GM_getValue( SHCchlgnr + ".threadnr" );
		ddchlgnr = GM_getValue( SHCchlgnr + ".challengenr" );
		ddcommentcounter = GM_getValue( SHCchlgnr + ".commentcounter" );
		ddstatus = decodeURIComponent( GM_getValue( SHCchlgnr + ".status" ) );
		ddwinner = decodeURIComponent( GM_getValue( SHCchlgnr + ".winner" ) );
		ddphoto1 = decodeURIComponent( GM_getValue( SHCchlgnr + ".photo1" ) );
		ddphoto2 = decodeURIComponent( GM_getValue( SHCchlgnr + ".photo2" ) );
   	ddphoto3 = decodeURIComponent( GM_getValue( SHCchlgnr + ".photo3" ) );
		ddphotovoter = decodeURIComponent( GM_getValue( SHCchlgnr + ".photovoter" ) );
		var ddlastvote = GM_getValue( SHCchlgnr + ".lastvote");
		ddchlgstatus = GM_getValue( SHCchlgnr + ".chlgstatus" );
		ddtovotetime = GM_getValue( SHCchlgnr + ".tovotetime" );
		ddphoto1time = GM_getValue( SHCchlgnr + ".photo1time" );
		ddphoto2time = GM_getValue( SHCchlgnr + ".photo2time" );
		ddphoto3time = GM_getValue( SHCchlgnr + ".photo3time" );

		if ( ( ( ddphoto1 != " " ) && ( ddwinner.indexOf( ddphoto1 ) != -1 ) ) ||
		     ( ( ddphoto2 != " " ) && ( ddwinner.indexOf( ddphoto2 ) != -1 ) ) ||
		     ( ( ddphoto3 != " " ) && ( ddwinner.indexOf( ddphoto3 ) != -1 ) ) )
		{
			alert( "WINNER POSTED PHOTO !!!" );
		}

		// if normal challenges
		if ( true )
		{
			var splitvar;

			if ( ddlastvote.match( "=" ) == "=" ) splitvar = "=";
			else if ( ddlastvote.match( " " ) == " " ) splitvar = " ";
			else if ( ddlastvote.match( "-" ) == "-" ) splitvar = "-";
			else if ( ddlastvote.match( "." ) == "." ) splitvar = ".";
//unsafeWindow.console.log(ddlastvote);
			var lastvotevalues = ddlastvote.split( splitvar );

			var winner = "";
			if ( lastvotevalues.length == 4 )
			{
				var challengenumber = parseInt( SHCchlgnr.split( "." )[ 1 ] );

				var requiredScore = iSHCVoteScore;
        //unsafeWindow.console.log(status);
				if ( ddstatus.toUpperCase( ).match( "ULTRA HERO CHALLENGE" ) == "ULTRA HERO CHALLENGE" ) {
					requiredScore = iSHCX2VoteScore;
  				//unsafeWindow.console.log('this is a uhc!');
				}
				else if  ( ddstatus.toUpperCase( ).match( "SHCX2 - SHC VS SHC" ) == "SHCX2 - SHC VS SHC" )
					requiredScore = iSHCX3VoteScore;

				for ( iVote = 0; iVote < 3; iVote++ )
				{
					if ( parseInt( lastvotevalues[ iVote ] ) >= requiredScore )
					{
						winner = "" + decodeURIComponent( GM_getValue( SHCchlgnr + ".photo" + ( iVote + 1 ) ) ) +
							" has won the challenge!!\n\n";
						break;
					}
				}
			}

			alert( "status: " + ddchlgstatus + "\n" +
				"thread: " + ddthreadnr + "\n" + 
				"challengenr: " + ddchlgnr + "\n" + 
				"commentcounter: " + ddcommentcounter + "\n" +
				"full challenge: " + ddstatus + "\n" + "\n" +
//rxk not required to display	"last change time: " + ddtovotetime + "\n" + "\n" +
//rxk not required to display	winner +
//rxk not required to display	"previous winner: " + ddwinner + "\n" + "\n" +
				"photo 1 (" + ddphoto1time + "): " + ddphoto1 + "\n" +
				"photo 2 (" + ddphoto2time + "): " + ddphoto2 + "\n" + 
				"photo 3 (" + ddphoto3time + "): " + ddphoto3 + "\n" + "\n" +
//rxk not required to display	"photo 3 (" + ddphoto3time + "): " + ddphoto3 + "\n" + "\n" +
				votealert + "\n" +
				"lastvote: " + ddlastvote + "\n\n" + 
				"voters: \n" + ddphotovoter );
		}
/*		else 
		{

			myWindow = window.open( '' , 'Stats page', 'top = 50, left = 300, width = 500, height = 600, scrollbars = yes, resizable = yes' )
			//myWindow.document.write( "This is 'myWindow'" )
			myWindow.document.open( "text/html","replace");
			myWindow.document.write( "<P><h1>Mother of the Month voting board</h1></p><p>" + '<table border="1"><tr>' ); 
			myWindow.document.write( ddchlgnr + ": " + ddchlgstatus + "</br>Title: " + ddstatus );
			myWindow.document.write( "</tr><tr>" );
			myWindow.document.write( '<td valign="top"><table border="1"><tr>Voters & votes</tr><tr><td>' 
				+ ddphotovoter.replace(/:/g,"</td><td>").replace(/<br>\n/g,'</td></tr><tr><td></td><td>').replace(/\n/g,'</td></tr><tr><td>')+"</table></td>" );
			myWindow.document.write( "</tr></table></p>" );
			myWindow.document.close( );
			myWindow.focus( );
			//ddphotovoter.replace(/:/g,"&nbsp").replace(/\n/g,"</p><p>")+"</p>");
		}*/
	}

	displayfulldata = function displayfulldata( )
	{
GM_log( "Here - displayfulldata" );
		checktriplephoto( );

		var mylist = new Array( );

		if ( GM_getValue( "SHC.brackets" ) != "false" )
		{
			var mybracketlist = new Array( );
			// do some specific brackets coding
		}

		mylist[ 0 ] = "SHC.01";
		mylist[ 1 ] = "SHC.02";
		mylist[ 2 ] = "SHC.03";
		mylist[ 3 ] = "SHC.04";
		mylist[ 4 ] = "SHC.05";
		mylist[ 5 ] = "SHC.06";
		mylist[ 6 ] = "SHC.07";
		mylist[ 7 ] = "SHC.08";
		mylist[ 8 ] = "SHC.09";
		mylist[ 9 ] = "SHC.10";
		mylist[ 10 ] = "SHC.11";
		mylist[ 11 ] = "SHC.12";
/*		mylist[ 12 ] = "SHC.50";
		mylist[ 13 ] = "SHC.51";
		mylist[ 14 ] = "SHC.52";
		mylist[ 15 ] = "SHC.53";*/

		myalert = "";

		var x = 0;

		for ( x in mylist ) 
		{
			ddstatus = decodeURIComponent( GM_getValue( mylist[ x ] + ".status" ) );
			ddwinner = decodeURIComponent( GM_getValue( mylist[ x ] + ".winner" ) );
			ddphoto1 = decodeURIComponent( GM_getValue( mylist[ x ] + ".photo1" ) );
			ddphoto2 = decodeURIComponent( GM_getValue( mylist[ x ] + ".photo2" ) );
			ddphoto3 = decodeURIComponent( GM_getValue( mylist[ x ] + ".photo3" ) );
//rxk not required	ddphoto3 = decodeURIComponent( GM_getValue( mylist[ x ] + ".photo3" ) );
			ddlastvote = GM_getValue( mylist[ x ] + ".lastvote" );
			ddchlgstatus = GM_getValue( mylist[ x ] + ".chlgstatus" );

			for ( i = 0, filler = ""; i < 20 - ddlastvote.length; i++ ) 
			{
				filler += " ";
			}

			myalert = myalert + ddchlgstatus + ":    " + ddstatus + "\n" + 
				"vote: " + ddlastvote + " " + filler +
//rxk not required		"prev. winner: " + ddwinner + "\n" + 
				"photos: " + ddphoto1 + " vs " +
				ddphoto2 + " vs " +ddphoto3+"\n";

//rxk remove ddphoto3 orig 	ddphoto2 + " - " + ddphoto3 + "\n";

			myalert += checkvotes( mylist[ x ], false );
			myalert += "\n";

		}

		var idleChallenges = "";
		for ( x in mylist ) 
		{
			var idleAlert = GM_getValue( mylist[ x ] + ".idleAlert", "" );
			if ( idleAlert.length > 1 )
			{
				idleChallenges += idleAlert + "\n";
			}
		}
		if ( idleChallenges.length > 1 )
		{
			myalert += "IDLE CHALLENGES:\n" + idleChallenges;
		}

		alert( myalert ); 
	}

	// *******************
	//  End of display functions
	// *******************


	// *******************
	// Start of update full data
	// *******************

	updatedata = function updatedata( e )
	{
		if ( !e )
		{
			e = window.event;
		}

		e.stopPropagation( );

		url=targ.id;
		GM_setValue( "SHC.update", "true" );
		thislocation.replace( url );

		return;
	}

	updatealldata = function updatealldata() 
	{
		GM_setValue( "SHC.updatealldata","true" );
		var updfound = false;

		maxupdates = parseInt(GM_getValue( "SHC.maxupdate" ));
		maxupdates++;
		//GM_log( maxupdates );

		if ( maxupdates > 15 ) 
		{
			GM_setValue( "SHC.maxupdate", 0 );
			GM_setValue( "SHC.updatealldata", "false" );
			alert( "Stopped updating: possible loop due to double challenges" );
			return;
		}
		else
		{
			GM_setValue( "SHC.maxupdate", maxupdates );
		}

		for ( i = 1; i < discusstrs.length; i++ )
		{
			//GM_log( "in updateall" );
			//GM_log( discusstrs[ i ].innerHTML );

			var tds = discusstrs[ i ].getElementsByTagName( "td" );
			var mnchlgnr=tds[ 0 ].innerHTML.split( "<b>" )[ 1 ].split( " " )[ 0 ];
			var SHCchlgnr = "SHC." + mnchlgnr;
			var chlgstatus = tds[ 4 ].innerHTML;
			var url = "http://www.flickr.com" + tds[ 0 ].innerHTML.split( "href=\"" )[ 1 ].split( "\"" )[ 0 ];
			//GM_log( "url: " + url );

			if ( chlgstatus.match( "UPD" ) == "UPD" )
			{
				GM_setValue( "SHC.update", "true" );
				updfound = true;
				thislocation.replace( url );
				break;
			}
		}
		if ( !updfound )
		{
			GM_setValue( "SHC.updatealldata", "false" );
		}
		//alert( GM_getValue( "SHC.updatealldata" ) );

		return;
	}


	// *******************
	// End of update full data
	// *******************


	// *******************
	// Start of init data
	// *******************

	initdatafrommenu = function initdatafrommenu( )
	{
		initdata( );
		alert( 'SHC data initialised.\nThemes and challenge headers are being loaded in background.'
			+ '\nThis may take up to half a minute depending on Flickr response times' 
			+ '\n\nPlease refresh the page to start using them.' );

	}

	initdata = function initdata( )
	{
		GM_log( "SHC: init data started" );

		var mylist = new Array( );

		mylist[ 0 ] = "SHC.01";
		mylist[ 1 ] = "SHC.02";
		mylist[ 2 ] = "SHC.03";
		mylist[ 3 ] = "SHC.04";
		mylist[ 4 ] = "SHC.05";
		mylist[ 5 ] = "SHC.06";
		mylist[ 6 ] = "SHC.07";
		mylist[ 7 ] = "SHC.08";
		mylist[ 8 ] = "SHC.09";
		mylist[ 9 ] = "SHC.10";
		mylist[ 10 ] = "SHC.11";
		mylist[ 11 ] = "SHC.12";
		mylist[ 12 ] = "SHC.50";
		mylist[ 13 ] = "SHC.51";
		mylist[ 14 ] = "SHC.52";
		mylist[ 15 ] = "SHC.53";

		myalert = "";

		GM_setValue( "SHC.updatealldata", "false" );
		GM_setValue( "SHC.update", "false" );
		GM_setValue( "SHC.maxupdate", 0 );
		GM_setValue( "SHC.version", SHCtoolversion );
		GM_setValue( "SHC.brackets", "false" );
		GM_setValue( "SHC.lastwinner", encodeURIComponent( " " ) );
GM_log( "Clearing last winner: " + decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );
		GM_setValue( "SHC.lastchallenge", "" );
		GM_setValue( "SHC.currentchallenge", "" );
		GM_setValue( "SHC.themelist", "" );
		GM_setValue( "SHC.themelisttime", "" );
		
        var x = 0;

		for ( x in mylist )
		{
			GM_setValue( mylist[ x ] + ".startdate", encodeURIComponent( "" ) );
			GM_setValue( mylist[ x ] + ".threadnr", x );
			GM_setValue( mylist[ x ] + ".challengenr", "99" );
			GM_setValue( mylist[ x ] + ".commentcounter", "100" );
			GM_setValue( mylist[ x ] + ".status", encodeURIComponent( mylist[ x ].split( "SHC." )[ 1 ] + " - not found or not updated with new info yet" ) );
			GM_setValue( mylist[ x ] + ".winner", encodeURIComponent( " " ) );
			GM_setValue( mylist[ x ] + ".photo1", encodeURIComponent( " " ) );
			GM_setValue( mylist[ x ] + ".photo2", encodeURIComponent( " " ) );
			GM_setValue( mylist[ x ] + ".photo3", encodeURIComponent( " " ) );
			GM_setValue( mylist[ x ] + ".photovoter", encodeURIComponent( " " ) );
			GM_setValue( mylist[ x ] + ".lastvote", " " );
			GM_setValue( mylist[ x ] + ".chlgstatus", "---" );
			GM_setValue( mylist[ x ] + ".tovotetime", " " );
			GM_setValue( mylist[ x ] + ".photo1time", " " );
			GM_setValue( mylist[ x ] + ".photo2time", " " );
			GM_setValue( mylist[ x ] + ".photo3time", " " );
			GM_setValue( mylist[ x ] + ".photo1timesince", " " );
			GM_setValue( mylist[ x ] + ".photo2timesince", " " );
			GM_setValue( mylist[ x ] + ".photo3timesince", " " );
		}

		GM_log( "SHC: init data complete" );

		loadthemelist( );
		loadchlgheader( );
		loadchlgmedals( );
		loadvotetimes( );
	}

	// *******************
	// End of init data
	// *******************


	// *******************
	// Start of write header
	// *******************

	addSHCheader = function addSHCheader( )
	{
		var topbar = thisdocument.getElementById( "TopBar" );
        if (topbar) { // don't show banner on photo pages (new layout)
    		var tables = topbar.getElementsByTagName( "table" );
	    	var trs = tables[ 0 ].getElementsByTagName( "tr" );
		var tds = trs[ 0 ].getElementsByTagName( "td" );
		var header = thisdocument.createElement('span');
		header.innerHTML = "SHC Admin " + SHCtoolversion + "&nbsp;-&nbsp;";
		tds[ 1 ].insertBefore(header,tds[1].firstChild);
        }
	}

	// *******************
	// End of write header
	// *******************


	// *******************
	// start of main discuss page processing
	// *******************

	function ProcessMainDoc( )
	{
		var foundchlg = new Array();

		// select main table

		var main = thisdocument.getElementById( "Main" );
		var tables = main.getElementsByTagName( "table" );
		var trs = tables[ 2 ].getElementsByTagName( "tr" );
		discusstrs = trs; // save trs for update function later on

		// add 5th element to the table
		var mylink = trs[ 0 ]; //.insertCell( 4 );
		// add new table header
		var tds = trs[ 0 ].getElementsByTagName( "th" );
		tds[ 3 ].width = "12%";
		myanchor = thisdocument.createElement( 'th' );
		myanchor.innerHTML = "status";
		myanchor.width = "5%";
		mylink.appendChild( myanchor );

		var ddlastvote = "";
		var i = 0;

		for ( i = 1; i < trs.length; i++ )
		{
			chlgstatus = "UPD";
			insertstatus = true;

			tds = trs[ i ].getElementsByTagName( "td" );
			mnchlgnr = tds[ 0 ].innerHTML.split( "<b>" )[ 1 ].split( " - " )[ 0 ]
			mnstatus = tds[ 0 ].innerHTML.split( "<b>" )[ 1 ].split( "</b>" )[ 0 ].replace(/&amp;/g,"&");
//rxk modified to fix UCI conflict
			if ( mnstatus.match( "Daily Chat" ) == "Daily Chat" )
			{
        var url = "http://www.flickr.com" + tds[ 0 ].innerHTML.split( /a\s[^>]*href=\"/ )[ 1 ].split( "\"><b>" )[ 0 ];
        GM_setValue( "SHC.DailyChatUrl", url );
			}

			if ( mnchlgnr.length == 2 ) //only process if chlgnr is correct format
			{
				SHCchlgnr = "SHC." + mnchlgnr;

				ddcommentcounter= GM_getValue( SHCchlgnr + ".commentcounter" );
				ddstatus 	= decodeURIComponent( GM_getValue( SHCchlgnr + ".status" ) );
				ddwinner 	= decodeURIComponent( GM_getValue( SHCchlgnr + ".winner" ) );
				ddphoto1 	= decodeURIComponent( GM_getValue( SHCchlgnr + ".photo1" ) );
				ddphoto2 	= decodeURIComponent( GM_getValue( SHCchlgnr + ".photo2" ) );
				ddphoto3 	= decodeURIComponent( GM_getValue( SHCchlgnr + ".photo3" ) );
				ddphoto1time 	= decodeURIComponent( GM_getValue( SHCchlgnr + ".photo1time" ) );
				ddphoto2time 	= decodeURIComponent( GM_getValue( SHCchlgnr + ".photo2time" ) );
				ddphoto3time 	= decodeURIComponent( GM_getValue( SHCchlgnr + ".photo3time" ) );
				ddlastvote 	= GM_getValue( SHCchlgnr + ".lastvote" );
				ddthreadnr 	= GM_getValue( SHCchlgnr + ".threadnr" );

				var votetime = decodeURIComponent( GM_getValue( SHCchlgnr + ".tovotetimesince" ) );
				var phototime1 = decodeURIComponent( GM_getValue( SHCchlgnr + ".photo1timesince" ) );
				var phototime2 = decodeURIComponent( GM_getValue( SHCchlgnr + ".photo2timesince" ) );
				var phototime3 = decodeURIComponent( GM_getValue( SHCchlgnr + ".photo3timesince" ) );

        // FIXME - done?

				var ddlastphototime = "";
				if ( phototime3.length < 2) 
				{
					if ( phototime2.length < 2 )
					{
						if ( phototime1.length < 2 )
						{
							challengeopendate = decodeURIComponent( GM_getValue( SHCchlgnr + ".startdate" ) );
							hours = ( SHCStartTime.getTime( ) - challengeopendate ) / ( 1000 * 60 * 60 );
							ddlastphototime = "" + hours + " hours ago";
						}
						else
						{
							ddlastphototime = phototime1;
						}	
					}
					else
					{
						ddlastphototime = phototime2;
					}
				}
				else {
				  ddlastphototime = phototime3;
				}
				
				var sAlert = "";

				if ( ddlastphototime.length > 2 )
				{
					if ( converttoseconds( ddlastphototime ) > 7200 )
					{
						 sAlert = ddstatus;// + "\nNo activity in past 2 hours";
					}
				}
				GM_setValue( SHCchlgnr + ".idleAlert", sAlert );

				ddlastvote = detectNoSpaces( ddlastvote );

				var thread = tds[ 0 ].innerHTML.split( "href" )[ 1 ].split( "/" )[ 4 ].split( "/" )[ 0 ];
// FIXME LOTS HERE.
				mncommentcounter = tds[ 2 ].innerHTML;
        var bSHCX2 = false;
				var bSHCX3 = false;
				var bSHCOn = false;
				var bSHCIc = false;
				if ( ddstatus.toUpperCase( ).match( "ULTRA HERO CHALLENGE" ) == "ULTRA HERO CHALLENGE" )
					bSHCX2 = true;
				else if ( ddstatus.toUpperCase( ).match( "SHCX3 - SHCX2 VS SHCX2" ) == "SHCX3 - SHCX2 VS SHCX2" )
					bSHCX3 = true;
			  else if ( ddstatus.toUpperCase( ).match( "SHCON FOR SHCX" ) == "SHCON FOR SHCX" )
			    bSHCOn = true;
			  else if ( ddstatus.toUpperCase( ).match( "ICON COMPETITION" ) == "ICON COMPETITION" )
			    bSHCIc = true;
				if ( checkskipchallenge( tds[ 0 ].innerHTML ) ) chlgstatus = "---";  //handle non challenges with a challenge number
				else if ( tds[ 0 ].innerHTML.toUpperCase( ).match( "AWARDED" ) == "AWARDED" ) chlgstatus = "---";
				else if ( tds[ 0 ].innerHTML.toUpperCase( ).match( "Daily Chat" ) == "Daily Chat" ) chlgstatus = "---";
				else if ( tds[ 0 ].innerHTML.toUpperCase( ).match( "VOID" ) == "VOID" ) chlgstatus = "---";
				else if ( tds[ 0 ].innerHTML.toUpperCase( ).match( "AWAITING" ) == "AWAITING" ) chlgstatus = "---";
				else if ( thread != ddthreadnr ) chlgstatus = "UPD";
				else if ( ( ddstatus.toUpperCase( ).match( "WAIT" ) == "WAIT" ) && ( mncommentcounter == ddcommentcounter ) ) chlgstatus = "WT";
				else if ( (!bSHCX2) && (!bSHCX3) &&( ddlastvote.match( sSHCVoteScore ) == sSHCVoteScore ) && ( mncommentcounter == ddcommentcounter ) && ( ddphoto3 != " " ) ) chlgstatus = "FIN";
		    else if ( ( ddlastvote.match( sSHCX2VoteScore ) == sSHCX2VoteScore ) && ( mncommentcounter == ddcommentcounter ) && ( bSHCX2 || ( ddphoto3 == " ") ) ) chlgstatus = "FIN";
				else if ( ( ddlastvote.match( sSHCX3VoteScore ) == sSHCX3VoteScore ) && ( mncommentcounter == ddcommentcounter ) && ( bSHCX3 || ( ddphoto3 == " ") ) ) chlgstatus = "FIN";
				else if ( bSHCOn ) chlgstatus = "OK";
				else if ( bSHCIc ) chlgstatus = "OK";
				else if ( ( ddphoto3 != " " ) && ( ddstatus.match( "TO VOTE" ) != "TO VOTE" ) && ( mncommentcounter == ddcommentcounter ) ) chlgstatus = "VOT";
				else if ( mncommentcounter == ddcommentcounter ) chlgstatus = "OK";


// rxk change ddphoto3 to ddphoto2 for 2 photos challenge

				//overruling statusses
				if ( chlgstatus != "---" )
				{ 
					if ( ( ( ddphoto1 != " " ) && ( ddwinner.indexOf( ddphoto1 ) != -1 ) ) ||
					     ( ( ddphoto2 != " " ) && ( ddwinner.indexOf( ddphoto2 ) != -1 ) ) ||
					     ( ( ddphoto3 != " " ) && ( ddwinner.indexOf( ddphoto3 ) != -1 ) ) )
					{
						chlgstatus="ERR";
					}
				}

				//check if somebody changed challenge title of a "VOT" challenge already      
				if ( chlgstatus == "VOT" )  
				{
					if ( mnstatus.match( "TO VOTE" ) == "TO VOTE" ) //TO VOTE found, so update needed
					{
						chlgstatus = "OK"; // set to OK (will be written later)
						GM_setValue( SHCchlgnr + ".status", encodeURIComponent( mnstatus ) ); // write new full status
					}
				} 

				//write status if there is a status & set challenge number to processed if status different from "---"
				if ( chlgstatus != "---" ) 
				{
					GM_setValue ( SHCchlgnr + ".chlgstatus", chlgstatus);
					foundchlg[ mnchlgnr ] = "OK";
				}


			}  // end of processing chlgnr
			else 
			{
				chlgstatus = "FMT"; // if chlgnr length not 2 then format issue.
			}

			// overwrite status for some threads
			if ( checkskipchallenge( tds[ 0 ].innerHTML ) ) 
			{
				chlgstatus = "---";
			}

			// add statusses  
			var url = "http://www.flickr.com" + tds[ 0 ].innerHTML.split( "href=\"" )[ 1 ].split( "\"" )[ 0 ]; // get URL
			mylink = trs[ i ].insertCell( tds.length ); 
			mylink.setAttribute( 'style', "text-align: center" );

			if ( chlgstatus == "---" )
			{
					mylink.innerHTML = "<small>" + chlgstatus + "</small>";
			}
			else if ( chlgstatus == "UPD" /*|| chlgstatus == "OK"*/ ) // xxx - do not need check for OK - debugging
			{
				myanchor = thisdocument.createElement( 'a' );
				myanchor.innerHTML = '<img src="http://l.yimg.com/www.flickr.com/images/pulser2.gif" ' + 'alt="" width="21" height="10" border="0">';
				myanchor.id = url;
				myanchor.href = "#";
				myanchor.setAttribute( 'style', 'text-decoration: none' );
				myanchor.setAttribute( 'onClick', 'return false;' );
				/*myanchor.addEventListener( 'click', function eventclickupdate( e ){ updatedata( e ); }, false );*/
				mysmall = thisdocument.createElement( 'small' );
				mysmall.appendChild( myanchor );
				mylink.appendChild( mysmall );
				//unsafeWindow.console.log('calling procdetdocinline for %s',mnstatus);
				ProcessDetailDocInline( url, mnstatus );
			}
			else if ( chlgstatus == "FMT" )
			{
				mylink.innerHTML = "<small><a href=\"\" onclick=\"alert(\'Challenge number formatted wrong," + 
					" please check challenge\');return false;\">" + chlgstatus + "</a></small>"; 
			}
			else 
			{   
				myanchor = thisdocument.createElement( 'a' );
				myanchor.innerHTML = chlgstatus;
				myanchor.title = ddlastvote;
				myanchor.id = SHCchlgnr;
				myanchor.href = url;
				myanchor.setAttribute( 'style', 'text-decoration: none' );
				myanchor.setAttribute( 'onClick', 'return false;' );
				myanchor.addEventListener( 'click', function eventclickmain( e ){ displaydata( e ); }, false );
				mysmall = thisdocument.createElement( 'small' );
				mysmall.appendChild( myanchor );
				mylink.appendChild( mysmall );
			}

		}

		// check for global update
		update = GM_getValue( "SHC.updatealldata" );
		if ( update.match( "true" ) == "true" )
			updatealldata( );
		else 
			GM_setValue( "SHC.maxupdate", 0 );

		// add SHC info & update headers
		var trs = tables[ 0 ].getElementsByTagName( "tr" );
		var tds = trs[ 0 ].getElementsByTagName( "td" );
		var h1 = tds[ 1 ].getElementsByTagName( "h1" );

		//add initialise SHC Admin Data
		h1[ 0 ].appendChild( thisdocument.createTextNode( ' / ' ) );
		myanchor = thisdocument.createElement( 'a' );
		myanchor.innerHTML = "SH-Init";
		myanchor.href = "#";
		myanchor.setAttribute( 'onClick', 'return false;' );
		myanchor.addEventListener( 'click', function eventclickmain( e ){ initdatafrommenu( ); }, false);
		h1[ 0 ].appendChild( myanchor );

		//add displayfulldata

		h1[ 0 ].appendChild( thisdocument.createTextNode( ' / ' ) );
		myanchor = thisdocument.createElement( 'a' );
		myanchor.innerHTML = "SH-Info";
		myanchor.href = "#";
		myanchor.setAttribute( 'onClick', 'return false;' );
		myanchor.addEventListener( 'click', function eventclickmain( e ){ displayfulldata( ); }, false);
		h1[ 0 ].appendChild( myanchor );

		//add updatealldata
		h1[ 0 ].appendChild( thisdocument.createTextNode( ' / ' ) );
		myanchor = thisdocument.createElement( 'a' );
		myanchor.innerHTML = "SH-Update";
		myanchor.href = "#";
		myanchor.setAttribute( 'onClick', 'return false;' );
		myanchor.addEventListener( 'click', function eventclickmain( e ){ updatealldata( ); }, false );
		h1[ 0 ].appendChild( myanchor );

		// erase statusses of challenges not found + set all active themes
		// only do this on the first page...
		if ( thislocation.href.match( "superchallenge/discuss/page" ) != "superchallenge/discuss/page" )
		{
			var activethemes = "";
			for ( i = 1; i < 13; i++ )
			{
				if ( i < 10 ) 
					chkchlg = "0" + i
				else
					chkchlg = i;

				if ( foundchlg[ chkchlg ] != "OK" )
				{
					GM_setValue( "SHC." + chkchlg + ".status", encodeURIComponent( chkchlg + " - not found or not updated with new info yet" ) );
					GM_setValue( "SHC." + chkchlg + ".winner", encodeURIComponent( " " ) );
					GM_setValue( "SHC." + chkchlg + ".photo1", encodeURIComponent( " " ) );
					GM_setValue( "SHC." + chkchlg + ".photo2", encodeURIComponent( " " ) );
					GM_setValue( "SHC." + chkchlg + ".photo3", encodeURIComponent( " " ) );
					GM_setValue( "SHC." + chkchlg + ".photovoter", encodeURIComponent( " " ) );
					GM_setValue( "SHC." + chkchlg + ".commentcounter", "100" );
					GM_setValue( "SHC." + chkchlg + ".lastvote", " " );
					GM_setValue( "SHC." + chkchlg + ".chlgstatus", "---" );
					GM_setValue( "SHC." + chkchlg + ".tovotetime", " " );
					GM_setValue( "SHC." + chkchlg + ".photo1time", " " );
					GM_setValue( "SHC." + chkchlg + ".photo2time", " " );
					GM_setValue( "SHC." + chkchlg + ".photo3time", " " );
					GM_setValue( "SHC." + chkchlg + ".photo1timesince", " " );
					GM_setValue( "SHC." + chkchlg + ".photo2timesince", " " );
					GM_setValue( "SHC." + chkchlg + ".photo3timesince", " " );
				}
				else
				{
					activethemes = activethemes + decodeURIComponent( GM_getValue( "SHC." + chkchlg + ".status" ) ).split( 'Theme: ' )[ 1 ] + "||";
				} 
			}

			GM_setValue( "SHC.activethemes", encodeURIComponent( activethemes ) );
		}

		//GM_log( "End of processing main discuss page" );
		return;
	}

	// *******************
	//  End of main discuss page processing
	// *******************


	// *******************

	//  Start of detail processing
	// *******************

	function ProcessDetailDoc( ) 
	{
GM_log( "Here - ProcessDetailDoc" );

		var threadnr = thislocation.href.split( '/' )[ 6 ];
		//GM_log( "detaildoc threadnr: " + threadnr );

		// select goodstuff

		var title = thisdocument.getElementById( "GoodStuff" ).innerHTML;

		// extract challengenr and status out of title

		var chlgnr = title.split( /<h2[^>]*>/ )[ 1 ].split( " " )[ 0 ];
		//unsafeWindow.console.log(chlgnr);
		//var status = title.split( /<h2[^>]*>/ )[ 1 ].split( "<" )[ 0 ].replace( /&amp;/g, "&" );
		var status = document.getElementsByTagName('h2')[0].innerHTML.replace(/(<([^>]+)>)/gi,'').replace( /&amp;/g, "&" );
		//var status = title.split( " - " )[ 1 ].split( " - " )[ 0 ];

    //unsafeWindow.console.log(status);

		// check for non challenge threads
		if ( checkskipchallenge( status ) )
		{
			return;
		}

		//check for correct challenge title
		var alerttxt = "";
		tst = status.split( " - " )[ 0 ].replace( " ", "" );

		if ( tst.length != 2 )
			alerttxt = "Challengenumber is not 2-digit\n";
		tst = 0;

		if ( status.match( "OPEN" ) == "OPEN" ) tst = 1;
		if ( status.match( "TO VOTE" ) == "TO VOTE" ) tst = 1;
		if ( status.match( "AWARDED" ) == "AWARDED" ) tst = 1;
		if ( status.match( "WAIT" ) == "WAIT" ) tst = 1;
		if ( status.match( "VOID" ) == "VOID" ) tst = 1;
		if ( tst == 0 ) 
			alerttxt = alerttxt + "Can't find OPEN, TO VOTE, AWARDED, VOID or WAIT in challenge\n";

		if ( alerttxt != "" )
		{
			alerttxt = alerttxt + "\nFormat should be:\n\nXX - YYYYYY - Theme: zzzzzzzzzzzz";
			alert( alerttxt );
		}

		//GM_log( chlgnr );

		// get td's out of discusstopic

		var discuss = thisdocument.getElementById( "DiscussTopic" );
        // only consider the Flickr tds, not the ones from the photo information table (UCP) !!
        var posts = document.evaluate("./table//td[@class='Said']", discuss, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		var tds = discuss.getElementsByTagName( "td" );

		// set commentcounter
		var commentcounter = posts.snapshotLength - 4; // -4: OP and 3 entries
		if ( commentcounter < 0 )
			//return; // no tds in discusstopic... shouldn't happen // - ? bug here - continue processing please!

		// get the winner out of the 2nd td

		//GM_log( discuss.innerHTML );
		var winner = " ";
		var votetime = " ";
//		var challengeopendate = getTimeAgo( discuss.innerHTML.split( "osted at " )[ 1 ].split( "\n" )[ 0 ] );
        var challengeOpenDateSmall = document.evaluate(".//small", posts.snapshotItem(0), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        var challengeopendate = getTimeAgo( challengeOpenDateSmall.innerHTML.split( /osted at /i )[ 1 ].split( "\n" )[ 0 ] );
		endofbrackets = 0;

		// start looping td's from number 3 [2] & fetch all photos
		var i = 0;
        var nrOfLastPostWithPhoto = 0;
		var photoposter = new Array( );
		photoposter[ 0 ] = " ";
		photoposter[ 1 ] = " ";
		photoposter[ 2 ] = " ";
		var phototime = new Array( );
		phototime[ 0 ] = " ";
		phototime[ 1 ] = " ";
		phototime[ 2 ] = " ";
		var photonumber = 0;
		var photovoter = "";
		var lastvote = "no votes";

		for (var i = 1, len = posts.snapshotLength; i < len; ++i) // posts[0]: OP
		{
            var reply = posts.snapshotItem(i);
			txt = reply.innerHTML;

			if ( txt.match( "says" ) == "says" )
			{
				txt2 = txt.split( "</h4>" )[ 1 ].split( "<small>" )[ 0 ]; //check on 2nd part because of extra img title for admins
				//alert( i + " / " + txt );
				//alert( i + " / " + txt2 );

				if ( txt2.match( "img" ) == "img" && txt2.match( "UCPANG:bump") != "UCPANG:bump" )
				{
					// photo found, now get username
					photoposter[ photonumber ] = txt.split( "<a href" )[ 1 ].split( ">" )[ 1 ].split( "<" )[ 0 ];
					photoposter[ photonumber ] = photoposter[ photonumber ].replace( /&amp;/g, "&" );
					phototime[ photonumber ] = txt.split( "osted " )[ 1 ].split( " ago." )[ 0 ];
					//alert( photonumber + " / " + photoposter[ photonumber ] );
					photonumber++;
					//remember position of last td
                    nrOfLastPostWithPhoto = i;

				}

			}
		}

		// get last comment if available
		if ( ( nrOfLastPostWithPhoto < posts.snapshotLength - 1 ) && ( commentcounter > 0 ) ) 
		{
            var lastReply = posts.snapshotItem(posts.snapshotLength - 1);
			var ptag = lastReply.getElementsByTagName( 'p' );
			lastvote = ptag[ 0 ].innerHTML.split( "\t" )[ 8 ].split( "\t" )[ 0 ].split( "\n" )[ 0 ];
			lastvote = lastvote.replace( /<br>/, "" ).replace( /\n/, "" ).replace( /&gt;/g, ">" ); //cleanup string
			if ( lastvote.match( "<img" ) == "<img" )	
				lastvote = "no votes"; //capture error lastvote when text comment before last photo
		} 
		else
			lastvote = "no votes";

		SHCchlgnr = "SHC." + chlgnr;

		//alert( SHCchlgnr );

		GM_setValue( SHCchlgnr + ".startdate", encodeURIComponent( challengeopendate ) );
		GM_setValue( SHCchlgnr + ".threadnr", threadnr );
		GM_setValue( SHCchlgnr + ".challengenr", chlgnr );
		GM_setValue( SHCchlgnr + ".commentcounter", commentcounter );
		GM_setValue( SHCchlgnr + ".status", encodeURIComponent( status ) );
		GM_setValue( SHCchlgnr + ".winner", encodeURIComponent( winner ) );
		GM_setValue( SHCchlgnr + ".photo1", encodeURIComponent( photoposter[ 0 ] ) );
		GM_setValue( SHCchlgnr + ".photo2", encodeURIComponent( photoposter[ 1 ] ) );
		GM_setValue( SHCchlgnr + ".photo3", encodeURIComponent( photoposter[ 2 ] ) );
		GM_setValue( SHCchlgnr + ".photovoter", encodeURIComponent( photovoter ) );

		// inside challenge - decode last vote if no spaces
		lastvote = detectNoSpaces( lastvote );

		GM_setValue( SHCchlgnr + ".lastvote", lastvote );
		GM_setValue( SHCchlgnr + ".chlgstatus", "OK" );
		GM_setValue( "SHC.currentchallenge", chlgnr );

		GM_setValue( SHCchlgnr + ".tovotetime", (votetime     ? converttotime( votetime )       : '' ));
		GM_setValue( SHCchlgnr + ".photo1time", (phototime[0] ? converttotime( phototime[ 0 ] ) : '' ));
		GM_setValue( SHCchlgnr + ".photo2time", (phototime[1] ? converttotime( phototime[ 1 ] ) : '' ));
		GM_setValue( SHCchlgnr + ".photo3time", (phototime[2] ? converttotime( phototime[ 2 ] ) : '' ));

		GM_setValue( SHCchlgnr + ".tovotetimesince", encodeURIComponent( votetime ) );
		GM_setValue( SHCchlgnr + ".photo1timesince", encodeURIComponent( phototime[ 0 ] ) );
		GM_setValue( SHCchlgnr + ".photo2timesince", encodeURIComponent( phototime[ 1 ] ) );
		GM_setValue( SHCchlgnr + ".photo3timesince", encodeURIComponent( phototime[ 2 ] ) );


		update = GM_getValue( "SHC.update" );

		if ( update.match( "true" ) == "true" )
		{
			GM_setValue( "SHC.update", "false" );
			thislocation.replace( "http://www.flickr.com/groups/superchallenge/discuss/" );
			return;
		}

		//if closed & in voting, let's autocopy winners
		maintext = thisdocument.getElementById( "Main" );
		closedtext = maintext.getElementsByTagName( "p" )[ 0 ].innerHTML;
        var closedtextP = document.evaluate("./p[@class='Focus']", maintext, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        var closedtext = "";
        try {
            closedtext = closedtextP.innerHTML;
        } catch (e) {
            // ignore
        }
		var isclosed = false;

		if ( closedtext.match( "This thread has been closed" ) == "This thread has been closed" )
			isclosed = true;

		if ( !isclosed )  //just reset lastwinners if challenge not closed
		{ 
			GM_setValue( "SHC.lastwinner", encodeURIComponent( " " ) );
GM_log( "Clearing last winner: " + decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );
			GM_setValue( "SHC.lastchallenge", "" );
		}

		if ( ( status.match( "TO VOTE" ) == "TO VOTE" ) && ( isclosed ) ) //only process if closed & in vote staus
		{
			GM_setValue( "SHC.lastwinner", encodeURIComponent( " " ) );
      GM_log( "Clearing last winner: " + decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );
			GM_setValue( "SHC.lastsecond", encodeURIComponent( " " ) );
			GM_setValue( "SHC.lastsecond2", encodeURIComponent( " " ) );
			if ( status.toUpperCase( ).match( "SHCX3 - SHCX2 VS SHCX2" )  == "SHCX3 - SHCX2 VS SHCX2" )
				GM_setValue( "SHC.lastmedalsplayers", encodeURIComponent( photoposter[ 0 ] + ' / ' + photoposter[ 1 ] + ' / ' + photoposter[ 2 ] ) );
			else
				GM_setValue( "SHC.lastmedalsplayers", encodeURIComponent( " " ) );
      GM_log( "Clearing last winner: " + decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );
			GM_setValue( "SHC.lastchallenge", chlgnr );

			//autocheck votes
			splitvar = "";
			vote1 = "0";
			vote2 = "0";
			vote3 = "0";

      // Catch modified votes? Seems hacky.
      if ( lastvote.match(" >> ") == " >> ") {
        lastvote = lastvote.split(' >> ')[1];
      }
		
			if ( lastvote.match( "=" ) == "=" ) splitvar = "=";
			else if ( lastvote.match( " " ) == " " ) splitvar = " ";
			else if ( lastvote.match( "-" ) == "-" ) splitvar = "-";
			else if ( lastvote.match( "." ) == "." ) splitvar = ".";

			//pick up votes
			if ( splitvar != "" )
			{
				vote1 = lastvote.split( splitvar )[ 0 ];
				vote2 = lastvote.split( splitvar )[ 1 ];
				vote3 = lastvote.split( splitvar )[ 2 ];
			}

			//create the input form
			myform = document.createElement( 'form' ); 
			myform.id = "Medalform";

			{
				//create table
				mytable = document.createElement( 'table' );

				//fill row 1
				mytr = mytable.insertRow( 0 );

				//fill cell 1
				mytd = mytr.insertCell( 0 ); 
				mytd.innerHTML = "<b>" + photoposter[ 0 ] + ": </b>";

				//fill cell 2
				mytd = mytr.insertCell( 1 );
				mytd = createCheckbox( "C11", "lastwinner", photoposter[ 0 ], " " + " WINNER " + " ", mytd );

				//fill cell 3
				mytd = mytr.insertCell( 2 ); 
				mytd.innerHTML = "<b>" + photoposter[ 1 ] + ": </b>";

				//fill cell 4
				mytd = mytr.insertCell( 3 );
				mytd = createCheckbox( "C21", "lastwinner", photoposter[ 1 ], " " + " WINNER " + " ", mytd );

				//fill cell 5
				mytd = mytr.insertCell( 4 ); 
				mytd.innerHTML = "<b>" + photoposter[ 2 ] + ": </b>";

				//fill cell 6
				mytd = mytr.insertCell( 5 );
				mytd = createCheckbox( "C31", "lastwinner", photoposter[ 2 ], " " + " WINNER " + " ", mytd );

			}


			//attach table to form
			myform.appendChild( mytable );

			//attach form to correct cell on page
			tds[ 1 ].appendChild( myform );

			//add eventhandlers (doesn't work if added during construction)
			for ( i = 0; i < myform.length; i++ )
			{
				myform.elements[ i ].addEventListener( 'click', function eventchangecheckbox( e ) { entermedal( ); }, false);
			}

			// set checked flags (also doesn't work if added during construction)
      // FIXME

      var requiredScore = iSHCVoteScore;
			if ( status.toUpperCase( ).match( "ULTRA HERO CHALLENGE" ) == "ULTRA HERO CHALLENGE" ) {
				requiredScore = iSHCX2VoteScore;
			}
			else if  ( status.toUpperCase( ).match( "SHCX2 - SHC VS SHC" ) == "SHCX2 - SHC VS SHC" )
				requiredScore = iSHCX3VoteScore;

			if ( ( vote1 == requiredScore ) ) 
			{
				document.getElementById( "C11" ).checked = true;
				GM_setValue( "SHC.lastwinner", encodeURIComponent( photoposter[ 0 ] ) );
        GM_log( "Setting last winner: " + decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );
			}

			if ( ( vote2 == requiredScore ) ) 
			{
				document.getElementById( "C21" ).checked = true; 
				GM_setValue( "SHC.lastwinner", encodeURIComponent( photoposter[ 1 ] ) );
        GM_log( "Setting last winner: " + decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );
			}
			
			if ( ( vote3 == requiredScore ) ) 
			{
				document.getElementById( "C31" ).checked = true; 
				GM_setValue( "SHC.lastwinner", encodeURIComponent( photoposter[ 2 ] ) );
        GM_log( "Setting last winner: " + decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );
			}


		} // end of if is closed & status vote

		//add headers

		var place = thisdocument.getElementById( "Tertiary" );

		//alert( place.innerHTML );

		//add SHC info
		place.appendChild( thisdocument.createTextNode( ' / ' ) );
		myanchor = thisdocument.createElement( 'a' );
		myanchor.innerHTML = "SH-Info";
		myanchor.id = SHCchlgnr;
		myanchor.href = "#";
		myanchor.setAttribute( 'onClick', 'return false;' );
		myanchor.addEventListener( 'click', function eventclickchallenge( e ) { displaydata( e ); }, false );
		place.appendChild( myanchor );

		return;
	}

	function ProcessDetailDocInline( thread, title )
	{
GM_log( "Here - ProcessDetailDocInline" );

		GM_xmlhttpRequest({
			method:"GET",
			url:thread,
			headers:{
				"User-Agent":"monkeyagent",
				"Accept":"text/monkey,text/xml"
			   },
			onload:function( responseDetails )
			{
				// extract challengenr and status out of title
				var threadnr = thread.split( '/' )[ 6 ];
				var chlgnr = title.split( " " )[ 0 ];
				var status = title;

				//GM_log( threadnr + "!" + chlgnr + "!" + status);

				// get td's out of discusstopic
				content = responseDetails.responseText.split('<div id="DiscussTopic">')[ 1 ].split('</div>')[ 0 ];
				tables = content.split('<table');
				challengetxt = tables[ 1 ].split('says:')[ 1 ].split('</small>')[ 0 ];
				tds = tables[ 2 ].split('<td class');

				// set commentcounter
				var commentcounter = ( tds.length - 1 ) / 2;

				// alert( tds.length );

				if ( tds[ 0 ] == null )
					return; // no tds in discusstopic... shouldn't happen

				// get the winner out of the 2nd td

				var winner = " ";
				var votetime = " ";
				var challengeopendate = getTimeAgo( content.split( "osted at " )[ 1 ].split( "\n" )[ 0 ] );

				/*if ( !inbrackets ) //stuff below doesn't exist in brackets
				{
					winner = challengetxt.split( "challenge is open" )[ 1 ].split( "<b>" )[ 1 ].split( "<" )[ 0 ];
					winner = winner.replace( /<br>/, "" ).replace( /\n/, "" ); //cleanup string removed .replace(" ","")*/
					//unsafeWindow.console.log('inside callback, checking for open challenge...');
					if ( status.match( "OPEN" ) != "OPEN" ) 
					{
					  //unsafeWindow.console.log('this challenge (%s) is not open, setting votetime',title);
						votetime = challengetxt.split( "edited this topic " )[ 1 ].split( " ago." )[ 0 ];
					}/*
				}*/

				endofbrackets = 0;
				/*if ( inbrackets && ( tds.length > 3 ) ) //happens only in brackets
				{
					votetime = tds[ 2 ].split( "osted " )[ 1 ].split( " ago." )[ 0 ];

					if ( commentcounter != Math.round( commentcounter ) ) // we get this when we overflow to page 2
					{
						commentcounter = Math.round( commentcounter );
						endofbrackets = 1;
					}
				}*/

				// start looping td's from number 3 [2] & fetch all photos
				var i = 0;
				var tdnr = 0;
				var photoposter = new Array( );
				photoposter[ 0 ] = " ";
				photoposter[ 1 ] = " ";
				photoposter[ 2 ] = " ";
				var phototime = new Array( );
				phototime[ 0 ] = " ";
				phototime[ 1 ] = " ";
				phototime[ 2 ] = " ";
				var photonumber = 0;
				var photovoter = "";
				var lastvote = "no votes"

				for ( i = 2; i < tds.length + endofbrackets; i++ )
				{
					txt = tds[ i ];

					if ( txt.match( "says" ) == "says" ) 
					{
						txt2 = txt.split( "</h4>" )[ 1 ].split( "<small>" )[ 0 ]; //check on 2nd part because of extra img title for admins
						//alert( i + " / " + txt );
						//alert( i + " / " + txt2 );

						if ( txt2.match( "img" ) == "img" && txt2.match( "UCPANG:bump") != "UCPANG:bump" ) 
						{
							// photo found, now get username
							photoposter[ photonumber ] = txt.split( "<a href" )[ 1 ].split( ">" )[ 1 ].split( "<" )[ 0 ];
							photoposter[ photonumber ] = photoposter[ photonumber ].replace( /&amp;/g, "&" );

							if ( txt.match( "osted " ) == ( "osted " ) )
							{
								phototime[ photonumber ] = txt.split( "osted " )[ 1 ].split( " ago." )[ 0 ];
								//alert(photonumber + " / " + photoposter[ photonumber ] );
								photonumber++;
								tdnr = i; //remember position of last td
								//alert( photonumber + " / " + tdnr );
							}

						}
            // FIXME (photonumber == 2 ) -> 3
						if ( ( tdnr != i ) && ( ( photonumber == 3 ) || ( status.match( "TO VOTE" ) == "TO VOTE" ) ) ) 
						{
							if ( !txt.match(/UCPANG:bump/) ) {
								// voter found, now get username
								photovoter = photovoter + txt.split( "<a href" )[ 1 ].split( ">" )[ 1 ].split( "<" )[ 0 ].replace( /&amp;/g, "&" ) + ": ";
								//alert( photovoter );
								// add the vote to string
								var ptag = tds[ i ].split( "<p>" )[ 1 ].split( "<small>" )[ 0 ];
								lastvote = ptag.split( "\t" )[ 8 ].split( "\t" )[ 0 ].replace( /&gt;/g, ">" );
								photovoter = photovoter + lastvote;
							}
						}
					}
				} //end of for

				// get last comment if available
				if ( ( tdnr < tds.length - 1 ) && ( commentcounter > 3 ) )
				{
					lastvote = lastvote.split( "\n" )[ 0 ];
					lastvote = lastvote.replace( /<br>/, "" ).replace( /\n/,"" ).replace( /&gt;/g, ">" ); //cleanup string
					if ( lastvote.match( "<img" ) == "<img" )
						lastvote = "no votes"; //capture error lastvote when text comment before last photo

					//.innerHTML.split( " " )[ 1 ].split( " " )[ 0 ];
				} 

				ddphoto1 = photoposter[ 0 ];
				ddphoto2 = photoposter[ 1 ];
				ddphoto3 = photoposter[ 2 ];

				if ( ddphoto1 != " " ) if ( ddwinner.indexOf( ddphoto1 ) != -1 ) chlgstatus = "ERR";
				if ( ddphoto2 != " " ) if ( ddwinner.indexOf( ddphoto2 ) != -1 ) chlgstatus = "ERR";
				if ( ddphoto3 != " " ) if ( ddwinner.indexOf( ddphoto3 ) != -1 ) chlgstatus = "ERR";

				// inside challenge - decode last vote if no spaces
				lastvote = detectNoSpaces( lastvote );

				if ( ( ddphoto3 != " " ) && ( status.match( "TO VOTE" ) != "TO VOTE" ) )
					chlgstatus = "VOT";
				else
					chlgstatus = "OK";

// rxk change ddphoto3 to ddphoto2 for 2 photos challenge

				SHCchlgnr = "SHC." + chlgnr;
				GM_setValue( SHCchlgnr + ".startdate", encodeURIComponent( challengeopendate ) );
				GM_setValue( SHCchlgnr + ".threadnr", threadnr );
				GM_setValue( SHCchlgnr + ".challengenr", chlgnr );
				GM_setValue( SHCchlgnr + ".commentcounter", commentcounter );
		 		GM_setValue( SHCchlgnr + ".status", encodeURIComponent( status ) );
				GM_setValue( SHCchlgnr + ".winner", encodeURIComponent( winner ) );
				GM_setValue( SHCchlgnr + ".photo1", encodeURIComponent( photoposter[ 0 ] ) );
				GM_setValue( SHCchlgnr + ".photo2", encodeURIComponent( photoposter[ 1 ] ) );
				GM_setValue( SHCchlgnr + ".photo3", encodeURIComponent( photoposter[ 2 ] ) );
				GM_setValue( SHCchlgnr + ".photovoter", encodeURIComponent( photovoter ) );

				// only tests these when new votes come in (others are cached)
				// have to bodge the string as it may start with a 0 which wont get counted
				lastvote = detectNoSpaces( lastvote );

				GM_setValue( SHCchlgnr+".lastvote", lastvote );
				GM_setValue( SHCchlgnr+".chlgstatus", chlgstatus );
				GM_setValue( "SHC.currentchallenge", chlgnr );

    		GM_setValue( SHCchlgnr + ".tovotetime", (votetime     ? converttotime( votetime )       : '' ));
	    	GM_setValue( SHCchlgnr + ".photo1time", (phototime[0] ? converttotime( phototime[ 0 ] ) : '' ));
	    	GM_setValue( SHCchlgnr + ".photo2time", (phototime[1] ? converttotime( phototime[ 1 ] ) : '' ));
	    	GM_setValue( SHCchlgnr + ".photo3time", (phototime[2] ? converttotime( phototime[ 2 ] ) : '' ));
		
				GM_setValue( SHCchlgnr + ".tovotetimesince", encodeURIComponent( votetime ) );
				GM_setValue( SHCchlgnr + ".photo1timesince", encodeURIComponent( phototime[ 0 ] ) );
				GM_setValue( SHCchlgnr + ".photo2timesince", encodeURIComponent( phototime[ 1 ] ) );
				GM_setValue( SHCchlgnr + ".photo3timesince", encodeURIComponent( phototime[ 2 ] ) );

				var anchor = thisdocument.getElementById( thread );
				// This function might have been called from init, so the anchor can't be found (but that doesn't matter)
				if (anchor) {
				  anchor.innerHTML = chlgstatus;
				  anchor.title = lastvote;
				  anchor.id = SHCchlgnr;
				  anchor.href = thread;
				  anchor.addEventListener( 'click', function eventclickmain( e ){ displaydata( e ); }, false );
				}
			}
		} ); // end of GM_xmlhttpRequest
	}

	// *******************
	//  End of detail processing
	// *******************

	createCheckbox = function createCheckbox( cid, cname, cvalue, cinner, cell )
	{
		mycheckbox = document.createElement( "input" );
		mycheckbox.id = cid;
		mycheckbox.type = "checkbox";
		mycheckbox.name = cname;
		mycheckbox.value = cvalue;
		cell.appendChild( mycheckbox );
		cell.innerHTML += cinner;
		return cell;
	}

	// *******************
	//  Start of winner processing
	// *******************

	entermedal = function entermedal( ) //gets called when tickboxes are changed
	{
		winner = " ";
		second = " ";

//rxk not required
//		second2 = " ";

		medalform = document.getElementById( "Medalform" );


		for ( i = 0; i < medalform.length; ++i ) // run thru winner
		{
			if ( medalform.elements[ i ].checked )
			{
				if ( medalform.elements[ i ].name == "lastwinner" ) 
				{
					if ( winner == " " )
						winner = medalform.elements[ i ].value;
					else
						alert( "You entered more then 1 winner. Please check" );
				}
			}
		}

//rxk not required
//		for ( i = 0; i < medalform.length; ++i ) // run thru second
//		{
//			if ( medalform.elements[ i ].checked )
//			{
//				if ( medalform.elements[ i ].name == "lastsecond" )
//				{
//					if ( winner == medalform.elements[ i ].value )
//						alert( "You cannot place somebody 1st and 2nd. Please check" );
//
//					if ( second == " " )
//						second = medalform.elements[ i ].value;
//					else if ( second2 == " " )
//						second2 = medalform.elements[ i ].value;
//					else 
//						alert( "You entered 3 photos in second place. Please check" );
//				}
//			}
//		}

		GM_setValue( "SHC.lastwinner",encodeURIComponent( winner ) );
GM_log( "Setting last winner: " + decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );

	}

	// *******************
	// End of winner processing
	// *******************

	function Editchallenge( ) //gets called after a page for editing a challenge is opened
	{
		titlearea = document.getElementById( 'GoodStuff' ).getElementsByTagName( 'INPUT' )[ 2 ];
		lastwinner = decodeURIComponent( GM_getValue( "SHC.lastwinner" ) );

		currentchlgnr = GM_getValue( "SHC.currentchallenge" );

		if ( ( titlearea.value.match( "TO VOTE" ) == "TO VOTE" ) && ( titlearea.name == "subject" ) && ( lastwinner != " " ) )
		{
			newtxt = "AWARDED (" + lastwinner;
			newtxt = newtxt + ")";
			titlearea.value = titlearea.value.replace( "TO VOTE", newtxt );
			document.getElementById('GoodStuff').getElementsByClassName('Butt')[1].addEventListener( 'click',function bar (e) { GM_setValue('SHC.makeUnSticky',1) },false );
		}
		//unsafeWindow.console.log(currentchlgnr);
    //unsafeWindow.console.log(GM_getValue("SHC."+currentchlgnr + ".photo3" ) );
		if ( decodeURIComponent( GM_getValue( "SHC." + currentchlgnr + ".photo3" ) ) != " " )   //rxk previous 3
			if ( titlearea.value.match( "OPEN" ) == "OPEN" )
				titlearea.value = titlearea.value.replace( "OPEN", "TO VOTE" );
	}

	Editchallengedeltarea = function Editchallengedeltarea( theeditor )
	{
		tas = theeditor.parentNode.getElementsByTagName( 'textarea' );
		theeditor.parentNode.innerHTML = tas[ 1 ].value;
	}

	Editchallengeinline = function Editchallengeinline( link,e ) //initially taken from inline forum edit post by Steeev
	{
		if ( !e )
		{
			var e = window.event;
		}

		e.stopPropagation( );

		SHCmotm = false;
		if ( link.getAttribute( 'href' ).match( "SHCmotm" ) == "SHCmotm" )
			SHCmotm = true;

		if ( document.getElementById( 'ined_' + link.getAttribute('href').split('/')[ topicidpos ] + link.getAttribute('href').split('/')[ postidpos ] ) )
			return false;

		if( link.parentNode.parentNode.innerHTML.match('<h4>') )
			blockquote = 1; //post contains a blockquote, which means the innerHTML is screwed up
		else
			blockquote = 0; 

		topicid = link.getAttribute('href').split('/')[ topicidpos ];
		postid = link.getAttribute('href').split('/')[ postidpos ];
		if( postid == 'edit' )
		{
			postid = '';
			mode = 'firstpost';
		}
		else
		{
			mode = 'anypost';
		}

		eddiv = document.createElement( 'div' );
		eddiv.setAttribute( 'id', 'ined_' + link.getAttribute( 'href' ).split( '/' )[ topicidpos ] + link.getAttribute( 'href' ).split( '/' )[ postidpos ] );
		eddiv.style.display = 'block !important';

		subbut = document.createElement( 'button' );
		subbut.setAttribute( 'class', 'Butt' );
		subbut.textContent = 'SAVE';
		subbut.addEventListener( "click", function( e ) { Editchallengepostitbaby( this.parentNode,link.getAttribute( 'href' ) ); }, false );
		//subbut.setAttribute('onclick','postitbaby(this.parentNode,"' + link.getAttribute('href') + '")');

		cancelbut = document.createElement( 'button' );
		cancelbut.setAttribute( 'class', 'DeleteButt' );
		cancelbut.textContent = 'Cancel';
		cancelbut.addEventListener( "click", function( e ) { Editchallengedeltarea( this.parentNode ); }, false );
		//cancelbut.setAttribute( 'onclick', 'deltarea( this.parentNode )' );

		fulledit = document.createElement( 'a' );
		fulledit.setAttribute( 'href', link );
		fulledit.textContent = 'Full Edit';

		tarea = document.createElement( 'textarea' );
		tarea.setAttribute( 'id', 'tarea' );
		tarea.setAttribute( 'name', 'textarea' );
		if ( mode == "firstpost" )
			tarea.setAttribute( 'rows', '15' );
		else
			tarea.setAttribute( 'rows', '4' );
		tarea.style.width = '410px';

		// store the old html in here
		tarea2 = document.createElement( 'textarea' );
		tarea2.setAttribute( 'id', 'tmptarea' );
		tarea2.style.display = 'none';
		//tarea2.setAttribute( 'rows', '10' );
		//tarea2.style.width = '400px';

		if ( mode == 'firstpost' )
		{
			topic_title = $x( "//td[@id='GoodStuff']/h2[1]" )[ 0 ].textContent;

			//SHC admin add ons
			titlearea = topic_title;

			lastwinner = decodeURIComponent( GM_getValue( "SHC.lastwinner" ) );
			currentchlgnr = GM_getValue( "SHC.currentchallenge" );

			if ( ( titlearea.match( "TO VOTE" ) == "TO VOTE" ) && ( lastwinner != " " ) && !SHCmotm )
			{
				newtxt = "AWARDED (" + lastwinner;
				document.getElementById('GoodStuff').getElementsByClassName('Butt')[1].addEventListener( 'click',function bar (e) { GM_setValue('SHC.makeUnSticky',1) },false );
				newtxt = newtxt + ")";
				titlearea = titlearea.replace( "TO VOTE", newtxt );
			}

			if ( decodeURIComponent( GM_getValue( "SHC." + currentchlgnr + ".photo3" ) ) != " " ) //rxk previous 3
				if ( ( titlearea.match( "OPEN" ) == "OPEN" ) && !SHCmotm )
					titlearea = titlearea.replace( "OPEN", "TO VOTE" );

			topic_title = titlearea;
			//SHC add ons till here

			subjbox = document.createElement( 'input' );
			subjbox.setAttribute( 'type', 'text' );
			subjbox.setAttribute( 'id', 'tbox' );
			subjbox.style.width = '400px';
			subjbox.value = topic_title;
			eddiv.appendChild( subjbox );
			eddiv.appendChild( document.createElement( '<br>' ) );
		}

		eddiv.appendChild( fulledit );
		eddiv.appendChild( document.createElement('<br>') );
		eddiv.appendChild( tarea );
		eddiv.appendChild( tarea2 );
		eddiv.appendChild( document.createElement('<br>') );
		eddiv.appendChild( subbut );
		eddiv.appendChild( document.createTextNode(' OR ') );
		eddiv.appendChild( cancelbut );

		if( blockquote )
		{
			link.parentNode.parentNode.setAttribute( 'id', ( 'td_' + topicid ) + postid );
			aitch4 = '<h4>' + TrimString( link.parentNode.parentNode.innerHTML.split( '<h4>' )[ 1 ].split( '</h4>' )[ 0 ] ) + '</h4>';
			small = '<small>' + TrimString( link.parentNode.innerHTML ) + '</small>';
			content = link.parentNode.parentNode.innerHTML.split( '</h4>' )[ 1 ].split( '<small>' )[ 0 ];
		}
		else
		{
			link.parentNode.parentNode.parentNode.setAttribute( 'id', ( 'td_' + topicid ) + postid );
			aitch4 = '<h4>' + TrimString( link.parentNode.parentNode.parentNode.innerHTML.split( '<h4>' )[ 1 ].split( '</h4>' )[ 0 ] ) + '</h4>';
			small = '<small>' + TrimString( link.parentNode.innerHTML ) + '</small>';
			content = link.parentNode.parentNode.parentNode.innerHTML.split('</h4>')[ 1 ].split('<small>')[ 0 ];
		}

		content = content.replace( /<span[^>]*/g, "<span", 'g' ).replace( /<span>|<\/span>/g, '', 'g' );
		content = content.replace( '<p>', '', 'g' );
		content = content.replace( '</p>', '', 'g' );
		content = content.replace( '<p/>' ,'' ,'g' );
		content = TrimString( content );

		tarea.innerHTML = TrimString( content.replace( '<br>', '', 'g' ).replace( '<br/>', '', 'g' ) );

		tdcontents = aitch4 + content + small;
		tarea2.innerHTML = tdcontents;
		thetd = document.getElementById( ( 'td_' + topicid ) + postid );
		thetd.innerHTML = aitch4 + small;
		theh4 = thetd.getElementsByTagName( 'h4' )[ 0 ];
		theh4.parentNode.insertBefore( eddiv, theh4.nextSibling );  

		tarea.focus( );

		return;

	} // end inlineedit function

	Editchallengepostitbaby = function Editchallengepostitbaby( node, editlink )
	{
		if( node.innerHTML.match( /<input/ ) )
		{
			subject = encodeURIComponent( node.getElementsByTagName( 'input' )[ 0 ].value );
			fullsubject = '&subject=' + subject;
		}
		else
		{
			subject = '';
			fullsubject = '';
		}

		message = encodeURIComponent( node.getElementsByTagName( 'textarea' )[ 0 ].value );

		fullmessage = '&message=' + message;

		data = 'magic_cookie=' + unsafeWindow.global_auth_hash + "&done=1" + fullmessage  + fullsubject;
		hostname = unsafeWindow.document.location.href.split( '/' )[ 2 ];

		apiurl = "http://" + hostname + editlink;

		p = new XMLHttpRequest( );
		p.open( "POST", apiurl, false );
		p.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
		p.setRequestHeader( "Referer", apiurl );
		p.setRequestHeader( "User-agent", "Mozilla/4.0 (compatible) Greasemonkey - Flickr Inline Forum Post Editor" );
		p.send( data );

		if( p.status != 200 )
		{
			alert( 'Error saving changes!' );
			//unsafeWindow.deltarea( node );
			//node.previousSibling.style.display = 'block';
			//node.parentNode.removeChild( node );
			return false;
		}

		//delete textarea + substitute old text with new;
		if( editlink.split( '/' )[ postidpos ] == 'edit' ) 
			postid = '';
		else
			postid = editlink.split( '/' )[ postidpos ];
		topicid = editlink.split( '/' )[ topicidpos ];


		aitch4 = '<h4>' + TrimString($x('//textarea',node)[ 1 ].value.split('<h4>')[ 1 ].split('</h4>')[ 0 ]) + '</h4>';
		small='<small>'+ TrimString($x('//textarea',node)[ 1 ].value.split('<small>')[ 1 ].split('</small>')[ 0 ]) +'</small>';
		//smallago=small.split( 'ago' )[ 1 ];
		//small=small.split('edited this ')[ 0 ] + " edited this post 1 nano second ago " + smallago;

		thetd = document.getElementById( ( 'td_' + topicid ) + postid );
		thetd.innerHTML = aitch4 + $x('//textarea',node)[ 0 ].value.replace('\n','\n<br\>','g') + "<br/>" +  small;

		if( !postid )
			$x("//td[@id='GoodStuff']/h2[1]")[ 0 ].innerHTML = decodeURIComponent( subject );

		if ( decodeURIComponent( subject ).indexOf( "TO VOTE" ) != -1 ) 
		{
			GM_setValue( "SHC." + decodeURIComponent( subject ).split( " " )[ 0 ] + ".tovotetime", converttotime( "a moment" ) );

			//GM_setValue( SHCchlgnr + ".tovotetime", converttotime( "Posted 1 second ago." ) );
		}

		return;
	}// end postitbaby function

	// *******************
	// Start of Createnewchallenge
	// *******************

	insertChallengetxt = function insertChallengetxt( )
	{
	  GM_log('inside insertchallengetxt');
		t = document.getElementById( 'typelist' );
        var header = GM_getValue("SHC.header." + t.value + ".text");
        this.textarea.innerHTML = "";
        if (header) {
            GM_log('header defined, setting it.');
            this.textarea.innerHTML = header;
        }
        var fixedTheme = GM_getValue("SHC.header." + t.value + ".theme");
        if (fixedTheme) {
          GM_log('found fixed theme, setting it');
          this.titlearea.value = fixedTheme;
        } else {
          GM_log('no fixed theme, setting temporary one, calling insertchallengetheme');
    		  this.titlearea.value = GM_getValue( "SHC.lastchallenge" ) + " - OPEN - Theme: "/* + t.options[ t.selectedIndex ].text*/;
          insertChallengetheme();
        }
	}
	
	insertChallengetheme = function insertChallengetheme( )
	{
	  GM_log('inside insertchallengetheme, setting theme.');
		t = document.getElementById( 'themeselect' );
		var sThemeString = t.options[ t.selectedIndex ].text;
		this.titlearea.value = this.titlearea.value.split( "Theme:" )[ 0 ] + "Theme: " + sThemeString;

		//this.textarea.value = GM_getValue( "SHC.SHCchlgheader" );

		// replace winner
//rxk			this.textarea.value = this.textarea.value.replace( "Previous Winner", decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );
	}


	Createnewchallenge = function Createnewchallenge( )
	{
		//myWindow = window.open( '', 'Log page', 'top=50, left=100, width=800, height=600, scrollbars=yes, resizable = yes' )
		//myWindow.document.open( "text/html", "replace" );
		//myWindow.document.write( "<P><h1>SHC Admin tool log</h1></p>" );

		themelist = GM_getValue( "SHC.themelist" );
		if ( themelist != "" )
			challengethemeval = themelist.split( "||" );

        if (challengethemeval == undefined) {
            alert('no theme data available\nhave you run the "Initialize data" script?"');
        }

		//myWindow.document.write( "<p>"+themelist+"</p>" );

		var activethemeval = new Array( );
		activethemes = decodeURIComponent( GM_getValue( "SHC.activethemes" ) );
		if ( activethemes != "" )
			activethemeval = activethemes.split( "||" );

		//myWindow.document.write( "<p>"+activethemes+"</p>" );

		var theme = "";
		var activetheme = "";

		//GM_log( "Start of Active themes" );
		//for ( j = 0; j < activethemeval.length - 1; j++ )
		//    {
		//    v2 = activethemeval[ j ].replace(/in /i,"In_").replace(/the /i,"the_").split(" ")[ 0 ].split("/s")[ 0 ];
		//    GM_log( v2 );
		//    }
		//GM_log( "End of Active themes" );

		//alert( encodeURI( challengethemeval[ 5 ].substr( 0, 4 ).replace(/\r/, "" ) ) );

		//GM_log("Start Comparison Themelist - Active themes");
		for ( i = 1; i < challengethemeval.length; i++ )
		{
			for ( j = 0; j < activethemeval.length - 1; j++ )
			{
				theme = challengethemeval[ i ].replace(/\r/,"").replace(/^\s+/, '').replace(/&amp;/g,"&").replace(/in /i,"In_").replace( /the /i, "the_" ).split( " " )[ 0 ].split( "/s" )[ 0 ];  //skip linefeed in first char
				activetheme = activethemeval[ j ].replace(/^\s+/, '').replace(/in /i,"In_").replace(/the /i,"the_").split( " " )[ 0 ].split( "/s" )[ 0 ];
				//myWindow.document.write("<p>|"+v1+"|"+v2+"|</p>");
				if ( theme == activetheme ) 
				{
					//myWindow.document.writeln("<p><h1>*"+challengethemeval[i]+"*"+activethemeval[j]+"*</h1></p>");
					//GM_log("Match found - Themelist: '" + v1 + "', from: '" + challengethemeval[i] + "'");
					//GM_log("Match found - Active: '" + v2 + "', Active: '" + activethemeval[j] + "'");

					challengethemeval[ i ] = "*** " + challengethemeval[ i ] + " *** (in play)";
				}
			}
		}

		//GM_log("End Comparison Themelist - Active themes");

		//myWindow.document.close( );
		//myWindow.focus( );

		lastchallenge = GM_getValue( "SHC.lastchallenge" );

		//check if variables are filled in + alert
//rxk
/*		if ( decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) == " " )
		{
			if ( lastchallenge == "" )
				alert( "No last challenge found: \nplease fill in challenge number \nand winner name or medals player names" ); 
			else
				alert( "Please fill in winner name" );
		}
*/
		//start inserting pull down lists
		this.textarea = document.getElementById( 'GoodStuff' ).getElementsByTagName( 'TEXTAREA' )[ 0 ];
		var typeList = document.createElement( 'SELECT' );
        typeList.id = 'typelist';

		this.titlearea = document.getElementById( 'GoodStuff' ).getElementsByTagName( 'INPUT' )[ 3 ];
		var themeList = document.createElement( 'SELECT' );

		typeList.addEventListener( 'change', function eventchangeinsertchallengetheme( e ){ insertChallengetxt( ); }, false );
		themeList.addEventListener( 'change', function eventchangeinsertchallengetheme( e ){ insertChallengetheme( ); }, false );
		document.getElementById('GoodStuff').getElementsByClassName('Butt')[1].addEventListener( 'click',function foo (e) { GM_setValue('SHC.makeSticky',1) },false );
        var challengeOption = document.createElement( 'option' ); // first is empty
        challengeOption.value = 0;
        typeList.appendChild(challengeOption);
        for (var i = 1; i <= nHeaders; ++i) { // 1-based
            var challengeOption = document.createElement( 'option' );
            challengeOption.value = i; // 0 is the empty one
            var title = GM_getValue("SHC.header." + i + ".title");
            challengeOption.appendChild(document.createTextNode(title));

            typeList.appendChild(challengeOption);
        }


		themeList.innerHTML = '';
		themeList.id = 'themeselect';

		for ( i = 0; i < challengethemeval.length; i++ )
		{
			themeList.innerHTML = themeList.innerHTML + '<option value="' + i + ">" + challengethemeval[ i ] + '</option>';
		}
//rxk
/*		var sRand = "0";
		if ( challengethemeval.length > 0 )
		{
			var bValid = false;
			while ( !bValid )
			{
				var iTheme = parseInt( Math.random( ) * challengethemeval.length );
				sRand = "" + iTheme;
				if ( challengethemeval[ iTheme ].length > 1 )
				{
					bValid = true;
				}
			}
		}
		themeList.value = sRand;
*/
		//start filling up textarea
		this.textarea.parentNode.insertBefore( document.createElement( "br" ), this.textarea );
		this.textarea.parentNode.insertBefore( document.createTextNode( 'SH challenge type: ' ), this.textarea );
		this.textarea.parentNode.insertBefore( typeList, this.textarea );
		this.textarea.parentNode.insertBefore( document.createElement( "br" ), this.textarea );
		this.textarea.parentNode.insertBefore( document.createElement( "br" ), this.textarea );

		challengetxtnode = typeList;

		//replace winner name
//rxk
/*		if ( decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) != " " )
		{
			if ( challengetxtnode.value == 1 )
				this.textarea.value = this.textarea.value.replace( "winner", decodeURIComponent( GM_getValue( "SHC.lastwinner" ) ) );

		}
*/		
		//start filling up textarea
		this.titlearea.parentNode.insertBefore( document.createElement( "br" ), this.titlearea );
		this.titlearea.parentNode.insertBefore( document.createTextNode( 'SH theme: ' ), this.titlearea );
		this.titlearea.parentNode.insertBefore( themeList, this.titlearea );
		this.titlearea.parentNode.insertBefore( document.createElement( "br" ), this.titlearea );
		this.titlearea.parentNode.insertBefore( document.createElement( "br" ), this.titlearea );

		this.titlearea.value = lastchallenge + " - OPEN - Theme: [select from list]";

		insertChallengetheme( );
	}

	// *******************
	//  End of Createnewchallenge
	// *******************

  function sendAdminInvite (groupid,photoid) {
    var magicCookie = getJSVariable(/\"?auth_hash\"?[ :]+[\'\"]([^\'\"]+)[\'\"],/);
    var listener = {
      flickr_groups_invite_photo_invite_onLoad: function(success, responseXML, responseText, params){
      	//unsafeWindow.console.log(responseText);
        if(success){
          frag_url = 'http://www.flickr.com/photo_group_invites_fragment.gne?id='+photoid+'&cachebust='+(new Date()).getTime();
    	  	GM_xmlhttpRequest({
						method:"GET",
						url:frag_url,
						onload:function (response) {
							document.getElementById('invites').setAttribute('class','');
							document.getElementById('invites').innerHTML=response.responseText;
						}
					});
    		}else{
   	    }
      }
    };    
    apiCall('flickr.groups.invite.photo.invite', {group_id:groupid,photo_id:photoid, auth_hash:magicCookie }, listener);  
  }
  
  function apiCall (apimethod, params , callback) {
    var self = this;
    var argstring = '';
    var key = getJSVariable(/\"?api_key\"?[ :]+[\'\"]([^\'\"]+)[\'\"],/);
    var callbackstring = apimethod.replace(/\./g,'_');
    callbackstring += '_onLoad';
    for (var arg in params) {
      argstring += '&'+arg+'='+params[arg];
    }
    url = 'http://www.flickr.com/services/rest/?method='+apimethod+argstring+'&api_key='+key;
    GM_xmlhttpRequest({
		  method:"GET",
		  url:url,
		  onload:function (response) {
			  var doc=(new DOMParser).parseFromString(response.responseText, "text/xml");
			  status_elem = doc.getElementsByTagName('rsp')[0];
			  status = status_elem.getAttribute('stat') == 'ok'? 1 : 0;
			  callback[callbackstring](status,doc,response.responseText,null);
		  }
	  });
  }

  function getJSVariable (regex) {
    // Credit for this function goes to Alesa Dam
    // Some slight modifications for use with jQuery
    // CAREFUL - this is a truncated version, it will only work from
    // a photopage. Do not use this elsewhere, it will break.
    var retval;
    var scripttags = document.getElementsByTagName('script');
    for (i=0;i<scripttags.length;i++) {
      if (retval != undefined) {
        return;
      }
      var html = scripttags[i].innerHTML;
      try {
        retval = html.match(regex)[1];
      } catch (e) {
      }
    }
    return retval;
  }

	// *******************
	//  Start of Platinum processing
	// *******************

	function ProcessPlatinumDetailDoc( )
	{
		var threadnr = thislocation.href.split( '/' )[ 6 ];
		//GM_log( "detaildoc threadnr: " + threadnr );

		// select goodstuff

		var title = thisdocument.getElementById( "GoodStuff" ).innerHTML;

		// extract challengenr and status out of title

		var chlgnr = title.split( "<h2>" )[ 1 ].split( " " )[ 0 ];
		var status = title.split( "<h2>" )[ 1 ].split( "<" )[ 0 ].replace( /&amp;/g, "&" );
		//var status = title.split( " - " )[ 1 ].split( " - " )[ 0 ];

		SHCchlgnr = "SHC." + chlgnr;

		//GM_log( chlgnr );

		if ( status.match( "Category" ) == "Category" ) //only process brackets
		{
			// get td's out of discusstopic

			var discuss = thisdocument.getElementById( "DiscussTopic" );
			var tds = discuss.getElementsByTagName( "td" );

			// set commentcounter
			var commentcounter = ( tds.length - 3 ) / 2;

			endofbrackets = 0;
			if ( commentcounter != Math.round( commentcounter ) ) // we get this when we overflow to page 2
			{
				commentcounter = Math.round( commentcounter );
				endofbrackets = 1;
			}

			// alert( tds.length );

			if ( tds[ 0 ] == null )
				return; // no tds in discusstopic... shouldn't happen

			// get the winner out of the 2nd td

			//GM_log( discuss.innerHTML );
			var winner = " ";
			var votetime = " ";
			var challengeopendate = getTimeAgo( discuss.split( "osted at " )[ 1 ].split( "\n" )[ 0 ] );

			// start looping td's from number 3 [2] & fetch all photos
			var i = 0;
			var tdnr = 0;
			var photoposter = new Array( );
			photoposter[ 0 ] = " ";
			photoposter[ 1 ] = " ";
			photoposter[ 2 ] = " ";
			var photonumber = 0;
			var photovoter = "";

			for ( i = 2; i < tds.length - 1 + endofbrackets; i++ )
			{
				txt = tds[ i ].innerHTML;

				if ( txt.match( "says" ) == "says" )
				{
					txt2 = txt.split( "</h4>" )[ 1 ].split( "<small>" )[ 0 ]; //check on 2nd part because of extra img title for admins
					//alert( i + " / " + txt );
					//alert( i + " / " + txt2 );

					if ( txt2.match( "img" ) == "img" && txt2.match( "UCPANG:bump") != "UCPANG:bump" )
					{
						// photo found, now get username
						photoposter[ photonumber ] = ( photonumber + 1 ) + ". " + txt.split( "<a href" )[ 1 ].split( ">" )[ 1 ].split( "<" )[ 0 ];
						photoposter[ photonumber ] = photoposter[ photonumber ].replace( /&amp;/g, "&" );
						//phototime[ photonumber ] = txt.split( "osted " )[ 1 ].split( " ago." )[ 0 ];
						//alert( photonumber + " / " + photoposter[ photonumber] );
						photonumber++;
						tdnr = i; //remember position of last td
						//alert( photonumber + " / " + tdnr );

					}
					else
					{
						if ( !txt.match( /UCPANG:bump/ ) ) {
							// voter found, now get username
							photovoter = photovoter + txt.split( "<a href" )[ 1 ].split( ">" )[ 1 ].split( "<" )[ 0 ].replace( /&amp;/g, "&" ) + ": ";
							//alert( photovoter );

							// add the vote to string
							var ptag = tds[ i ].getElementsByTagName( 'p' );
							photovoter = photovoter + ptag[ 0 ].innerHTML.split( "\t" )[ 8 ].split( "\t" )[ 0 ].replace( /&gt;/g, ">" );
						}
					}
				}
			}
unsafeWindow.console.log('platinum: '+chlgnr);
			GM_setValue( SHCchlgnr + ".startdate", encodeURIComponent( challengeopendate ) );
			GM_setValue( SHCchlgnr + ".threadnr", threadnr );
			GM_setValue( SHCchlgnr + ".challengenr", chlgnr );
			GM_setValue( SHCchlgnr + ".commentcounter", commentcounter );
			GM_setValue( SHCchlgnr + ".status", encodeURIComponent( status ) );
			GM_setValue( SHCchlgnr + ".photo1", encodeURIComponent( photoposter ) );
			GM_setValue( SHCchlgnr + ".photovoter", encodeURIComponent( photovoter ) );
			GM_setValue( "SHC.currentchallenge", chlgnr );

			//add headers

			var place = thisdocument.getElementById( "Tertiary" );

			//alert( place.innerHTML );

			//add SHC info
			place.appendChild( thisdocument.createTextNode( ' / ' ) );
			myanchor = thisdocument.createElement( 'a' );
			myanchor.innerHTML = "SH-Info";
			myanchor.id = SHCchlgnr;
			myanchor.href = "#";
			myanchor.setAttribute( 'onClick', 'return false;' );
			myanchor.addEventListener( 'click', function eventclickchallenge( e ){ displayplatinumdata( e ); }, false );
			place.appendChild( myanchor );

		}

		return;
	}

	runSHCTool = function runSHCTool( )
	{
		// check if we have GM variables
		if ( GM_getValue( "SHC.version" ) == undefined )
			initdata( );
	
		if ( GM_getValue( "SHC.version" ) != SHCtoolversion )
			initdata( );

		// check themelist & chlgheaders

		themelisttime = GM_getValue( "SHC.themelisttime" );
		if ( ( themelisttime == undefined ) || ( themelisttime == "" ) ) 
		{
			loadthemelist( );
			loadchlgheader( );
			loadchlgmedals();
		}  
		themelisttime = GM_getValue( "SHC.themelisttime" );
		elapstime = SHCStartTime.getTime( ) - themelisttime;
		if ( elapstime > 1000 * 60 * 60 * 24 ) 
		{
			loadthemelist( );
			loadchlgheader( );
			loadchlgmedals();
		}  

		if (GM_getValue("SHC.brackets")!="false")
		{
			GM_setValue("SHC.brackets","false"); //reset brackets status when we start
		}

		if ( ( thislocation.href.match( "flickr.com/photos/" ) == "flickr.com/photos/" ) ||
			( thislocation.href.match( "flickr.com//photos/" ) == "flickr.com//photos/" ) ) 
		{
			// ************************
			// check for awards on photo page
			// ************************
			Award.init( );
		}
		else if ( thislocation.href.match( "/groups/SHCplatinum/" ) == "/groups/SHCplatinum/" )
		{
			// in SHC platinum for brackets qualifying.
			if ( thisdocument.title.split( " " )[ 1 ] == "Discussing")
			{
				// ***********
				// detail page
				// ***********
				ProcessPlatinumDetailDoc( );
			}
		}
		else if ( thisdocument.title.match( "discussion topics" ) == "discussion topics" )
		{
			// ************************
			// main photo SHC page
			// ************************
			//alert( "in main" );
			ProcessMainDoc( );
		}
		else if ( thisdocument.title.split( " " )[ 1 ] == "Discussing" )
		{
			// ***********
			// detail page
			// ***********
			//alert( "in detail" );
			if (GM_getValue('Game.makeSticky',0) == 1) {
		    		GM_setValue('Game.makeSticky',0);
		    		document.location.href = document.location.href.split('?')[0] + 'stick/'
		  	}
		  	if (GM_getValue('Game.makeUnSticky',0) == 1) {
		    		GM_setValue('Game.makeUnSticky',0);
		    		document.location.href = document.location.href.split('?')[0] + 'unstick/'		  
		  	}
	
			ProcessDetailDoc( );
		}
		else if ( thislocation == "http://www.flickr.com/groups_newtopic.gne?id=1134256@N23" )
		{
			Createnewchallenge( );
		}
		else if ( thislocation.href.match( "/edit/" ) == "/edit/" )
		{
			Editchallenge( );
		}
	
		addSHCheader( );
	
		GM_registerMenuCommand( "Initialise SHC Admin data (themes, headers, ...)", initdatafrommenu );
	}


	// *******************
	// Start of processing
	// *******************

	if ( window.name == 'Log page' )
		return; //don't process log page

	var thislocation = location;
	var thisdocument = document;
	var discusstrs;

	runSHCTool( );

	return;

	// *******************
	//  End of processing
	// *******************

} )( );
