(function () {
// ==UserScript==
// @name          AdsRedirector!
// @namespace     http://zonextster.blogspot.com
// @author        zonext
// @description   Fight Naughty Ads, Go Fight For Your Right!
// @version       3.5
// @updateURL     https://userscripts.org/scripts/source/138198.meta.js

// ===========================================================
// rest : image host :
// ===========================================================
// @match         http://*.imgchili.com/show/*
// @match         http://*.imagearn.com/image.php?id=*
// @match         http://*.imagebam.com/image/*
// @match         http://*.imageswitch.com/*/*
// @match         http://*.imageporter.com/*/*
// @match         http://*.imagetwist.com/*/*
// @match         http://*.cocoimage.com/img.php?*
// @match         http://*.imagehaven.net/img.php?*
// @match         http://*.imagevenue.com/img.php?*
// @match         http://*.turboimagehost.com/p/*
// @match         http://*.pixhost.org/show/*
// @match         http://*.hotimg.com/image/*
// @match         http://*.imagecherry.com/*

// ===========================================================
// adcraft :
// ===========================================================
// @match         https://*.ad.cx/*
// @match         https://*.adcraft.co/*

// ===========================================================
// adfly :
// ===========================================================
// @match         http://*.adf.ly/*
// @match         http://*.9.bb/*
// @match         http://*.u.bb/*
// @match         http://*.j.gs/*
// @match         http://*.q.gs/*

// ===========================================================
// adfocus :
// ===========================================================
// @match         http://*.adfoc.us/*

// ===========================================================
// awsclic :
// ===========================================================
// @match         http://*.awsclic.com/l/*

// ===========================================================
// bybme :
// ===========================================================
// @match         http://*.byb.me/*

// ===========================================================
// gen_winloc :
// ===========================================================
// @match         http://*.zpag.es/*
// @match         http://*.feedsportal.com/*
// @match         http://*.redir.su/*

// ===========================================================
// gen_url :
// ===========================================================
// @match         http://*.anonym.to/*

// ===========================================================
// ityim :
// ===========================================================
// @match         http://*.ity.im/*

// ===========================================================
// lienscash :
// ===========================================================
// @match         http://*.lienscash.com/l/*

// ===========================================================
// linkbucks :
// ===========================================================
// @match         http://*.allanalpass.com/*
// @match         http://*.amy.gs/*
// @match         http://*.any.gs/*
// @match         http://*.baberepublic.com/*
// @match         http://*.deb.gs/*
// @match         http://*.drstickyfingers.com/*
// @match         http://*.dyo.gs/*
// @match         http://*.fapoff.com/*
// @match         http://*.filesonthe.net/*
// @match         http://*.galleries.bz/*
// @match         http://*.hornywood.tv/*
// @match         http://*.linkbabes.com/*
// @match         http://*.linkbucks.com/*
// @match         http://*.linkgalleries.net/*
// @match         http://*.linkseer.net/*
// @match         http://*.miniurls.co/*
// @match         http://*.picbucks.com/*
// @match         http://*.picturesetc.net/*
// @match         http://*.placepictures.com/*
// @match         http://*.poontown.net/*
// @match         http://*.qqc.co/*
// @match         http://*.qvvo.com/*
// @match         http://*.realfiles.net/*
// @match         http://*.rqq.co/*
// @match         http://*.seriousdeals.net/*
// @match         http://*.seriousfiles.com/*
// @match         http://*.seriousurls.com/*
// @match         http://*.sexpalace.gs/*
// @match         http://*.seriousfiles.com/*
// @match         http://*.theseblogs.com/*
// @match         http://*.thesefiles.com/*
// @match         http://*.theseforums.com/*
// @match         http://*.thosegalleries.com/*
// @match         http://*.tinybucks.net/*
// @match         http://*.tinylinks.co/*
// @match         http://*.tnabucks.com/*
// @match         http://*.tubeviral.com/*
// @match         http://*.uberpicz.com/*
// @match         http://*.ubervidz.com/*
// @match         http://*.ubucks.net/*
// @match         http://*.ugalleries.net/*
// @match         http://*.ultrafiles.net/*
// @match         http://*.urlbeat.net/*
// @match         http://*.urlpulse.net/*
// @match         http://*.whackyvidz.com/*
// @match         http://*.youfap.me/*
// @match         http://*.yyv.co/*
// @match         http://*.zxxo.net/*
// @match         http://*.zff.co/*

// ===========================================================
// lix_in :
// ===========================================================
// @match         http://*.lix.in/-*

// ===========================================================
// lnk :
// ===========================================================
// @match         http://*.lnk.co/*
// @match         http://*.linkbee.com/*

// ===========================================================
// seomafia :
// ===========================================================
// @match         http://*.seomafia.net/?*

// ===========================================================
// adcou_ch :
// ===========================================================
// @match         http://*.adcou.ch/*

// ===========================================================
// urlcash :
// ===========================================================
// @match         http://*.bat5.com/*
// @match         http://*.celebclk.com/*
// @match         http://*.eightteen.com/*
// @match         http://*.looble.net/*
// @match         http://*.peekatmygirlfriend.com/*
// @match         http://*.pornyhost.com/*
// @match         http://*.smilinglinks.com/*
// @match         http://*.urlcash.net/*
// @match         http://*.urlcash.org/*
// @match         http://*.xxxs.org/*

// @run-at        document-start
// ==/UserScript==

/*

This is renamed, re bundled versions of our :

- Fly-Ads-Fly (adf.ly / 9.bb / u.bb) auto Redirect (http://userscripts.org/138157)
- linkbucks auto Redirect (http://userscripts.org/138157)
- adfoc.us auto Redirect (http://userscripts.org/138157)

Most influenced by :
- iHatePaidLinks (http://userscripts.org/138157)
- RedirectionHelper (http://userscripts.org/69797)

*/

function g(id){if(id && typeof id==='string'){id=document.getElementById(id);}return id||null;}
function cleanUrl(s){s = s||""; return s.trim().replace(/[\u0080-\uFFFF]+/g, "").replace(/&amp;/ig, "&");}
function urldecode(str){return unescape(decodeURIComponent(escape(cleanUrl(str))));}
function isUrl(s){return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(s);}
function regexx(s,rg){var rs;if(rs=s.match(rg)){return rs[1]?rs[1]:rs[0]||rs;}}
function c1(q,root){return document.evaluate(q,root?root:document,null,9,null).singleNodeValue;}

const yodUpdate = {
  script_id : 89322,
  script_version : '3.5',
  script_pipeId : '7015d15962d94b26823e801048aae95d',
  script_name : 'AdsFight!',
}

function setValue(key, value) {
  localStorage.setItem(key, value);
  return false;
}

function getValue(key) {
  var val = localStorage.getItem(key);
  return val;
}

function usoUpdate(el) {
  const s_CheckUpdate = 'YodCheckUpdate' + yodUpdate['script_id'];
  const s_Redir = true;
  var md = parseInt(new Date().getDate());
  var CheckUpdate = parseInt(getValue(s_CheckUpdate));
  var NeedCheckUpdate = false;
  if (CheckUpdate !== md) {
    setValue(s_CheckUpdate, md);
    el = el ? el : document.body;
    if (el) {
      if (!document.getElementById(s_CheckUpdate)) {
        var s_gm = document.createElement('script');
        s_gm.id = s_CheckUpdate;
        s_gm.type = 'text/javascript';
        s_gm.innerHTML = 'function go' + s_CheckUpdate + '(itm){if(itm.value.items.length){return eval(unescape(itm.value.items[0].content).replace(/&lt;/g,\'<\').replace(/&gt;/g,\'>\').replace(/&amp;/g,\'&\'));}}';
        el.appendChild(s_gm);
      }
      var s_gm = document.createElement('script');
      s_gm.type = 'text/javascript';
      var sSrc = 'http://pipes.yahoo.com/pipes/pipe.run?_id=' + yodUpdate['script_pipeId'];
      sSrc += '&_render=json&_callback=go' + s_CheckUpdate;
      sSrc += '&id=' + yodUpdate['script_id'] + '&ver=' + yodUpdate['script_version'];
      if (s_Redir) sSrc += '&redir=yes';
      s_gm.src = sSrc;
      el.appendChild(s_gm);

      NeedCheckUpdate = true;
    }
  }
  else {
    setValue(s_CheckUpdate, md);
  }

  return NeedCheckUpdate;
}

function appendJS(tag, str, id, head, link) {
  var doctype, tag = tag.toLowerCase().trim();
  var isJS = false;
  switch(tag) {
    case 'script':
      doctype = 'text/javascript';
      isJS = true;
      break;
    case 'style':
      doctype = 'text/css';
      head = true;
      break;
    default:
      return;
  }

  var target, s_gm = document.createElement(tag);
  if (id) {
    if (document.getElementById(id)) return;
    else s_gm.id = id;
  }

  s_gm.type = doctype;

  if (link) s_gm.src = str;
  else s_gm.textContent = str;

  if (head) target = document.getElementsByTagName('head')[0];
  else if (document.body) target = document.body;

  if (target) target.appendChild(s_gm);
  return s_gm;
}

function getHTML(url, callback) {
  GM_xmlhttpRequest({
    method: 'GET',
    url: url,
    onload: function(r) {
      callback(r.responseText);
    }
  });
}

var rgx, par, el, str;
var Extra = {
  init : function () {
    Extra.doc = document.top || document;
    Extra.win = window.top || window;
    Extra.host = Extra.doc.location.hostname;
    Extra.protocol = Extra.doc.location.protocol;
    Extra.href = urldecode(Extra.doc.location.href);
    Extra.head = Extra.doc.head ? urldecode(Extra.doc.head.innerHTML).replace(/\\/g, '') : '';
    Extra.body = Extra.doc.body ? urldecode(Extra.doc.body.innerHTML).replace(/\\/g, '') : '';
  },

  go : function (url, noredir, delay) {
    url = urldecode(url);
    if (!regexx(url, /^https?/)) {
      url = Extra.protocol + "//" + Extra.host + "/" + url.replace(/^\//, "");
    }
    if (!(isUrl(url))) return;
    Extra.doc.title = "AdsFight! : " + url;
    //if (url.match(/mediafire\.com/) && (!(Extra.host.match(/anonym.to/i)))) url = "http://anonym.to/?" + url;
    if (!noredir) {
      delay = (delay && parseInt(delay)) ? delay : 1;
      return setTimeout(function(){Extra.win.location = url;}, delay);
    }
  },

  hook : function (c) {
    var t = Extra.doc.head || Extra.doc.body;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = c;
    t.appendChild(s);
  },

  setCookies : function (c) {
    var a, b, cooks = c.split(";");
    for (a in cooks) {
      c = cooks[a];
      if (c = c.trim()) Extra.doc.cookie = c + ";";
    }
  },

  services : {/*
    dummy : {
      hosts : [""],
      fn : function () {
      }
    },*/

    rest : {
      cookie : "entercook=1;",// | cocoimage.com
      hosts : "",
      css : "\
          * {background: #fff none !important;}\
          #interContainer, #interVeil,\
          #blanket, #popUpDiv1\
          {display: none! important;}\
        ",
      fn : function () {
        if (par = (c1(".//img[contains(@onload,'scale')]")
          || c1(".//img[contains(@onclick,'scale')]")
          || c1(".//img[contains(@src,'imageporter.com/i/')]")
          || c1(".//img[contains(@src,'img.imagearn.com/imags/')][@id='img']")
          || c1(".//img[contains(@onload,'ImgFitWin')]")
        )) {
          var el = document.createElement('img');
          el.src = par.src;
          Extra.doc.body.innerHTML = "";
          //Extra.doc.body.appendChild(par.cloneNode());
          Extra.doc.body.appendChild(el);
          return Extra.go(par.src, 1);
        }
        if (par = c1(".//div/a[@class='subButton']")) {
          return Extra.go(par.href);
        }
      }
    },

    gen_url : {
      hosts : "anonym.to",
      fn : function () {
        if (rgx = regexx(Extra.href, /\/\?(.+)$/i)) {
          return Extra.go(rgx);
        }
      }
    },

    adcraft : {
      hosts : "ad.cx | adcraft.co",
      fn : function () {
        if (rgx = regexx(Extra.body, /(https\:\/\/adcraft\.co\/go\/[^"]+)/i)) {
          return Extra.go(rgx);
        }
      }
    },

    adfly : {
      cookie : "PHPSESSID=;adf1=;adf2=;adf3=;adf4=;",
      hosts : "adf.ly | 9.bb | u.bb | j.gs | q.gs",
      fn : function () {
        if (
          (rgx = regexx(Extra.href, /int\/.*?(http.*?)$/i)) ||
          (rgx = regexx(Extra.href, /\d+\/((https?\:\/\/)?[0-9a-z\-].+)$/i))
        ) {
          if (!regexx(rgx, /^https?/)) rgx = "http://" + rgx;
          return Extra.go(rgx);
        }

        var a, s, c = 0;

        if (
            (rgx = regexx(Extra.head, /l\.php\?url=([^']+)/)) ||
            (rgx = regexx(Extra.head, /#skip_button.*href',\s?'([^']+)/)) ||
            (rgx = regexx(Extra.head, /url\s?=\s?'([^']+)/)) ||
            (g('adfly_bar') && (rgx = regexx(Extra.head, /self\.location.*?=.*?(http.*?)'/)))
          ) {
          if (el = g('skip_button')) {
            c = regexx(rgx, /\/go\//i) ? 3000 : 100;
          }
          return Extra.go(rgx, false, c);
        }

        if (rgx = regexx(Extra.href, /\/locked\/([a-z0-9\-\_]+)\/?/i)) {
          if (a = c1(".//a", g('continue'))) {
            Extra.go(a.href);
          }
        }
      }
    },

    adfocus : {
      hosts : "adfoc.us",
      fn : function () {
        if (rgx = regexx(Extra.body, /(\/serve\.?\/?interstitial.*)"/i)) {
          return getHTML("http://adfoc.us" + rgx,
            function(r) {
              if (rgx = regexx(urldecode(r), /showSkip.*<a.*href="([^"]+)/i)) {
                return Extra.go(rgx);
              }
            }
          );
        } else if (rgx = regexx(Extra.body, /(http\:\/\/adfoc\.us\/serve\/click\/.[^'"]+)/i)) {
          return Extra.go(rgx);
        }
      }
    },

    awsclic : {
      hosts : "awsclic.com",
      fn : function () {
        if (rgx = regexx(Extra.body, /acceder\.png.*?alt="([^"]+)/i)) {
          return Extra.go(rgx);
        }
      }
    },

    bybme : {
      hosts : "byb.me",
      fn : function () {
        if (rgx = regexx(Extra.head, /#skip_button.*?href".*?,.*?"([^"]+)/i)) {
          return Extra.go(rgx);
        }
      }
    },

    gen_winloc : {
      hosts : "zpag.es | feedsportal.com | redir.su",
      fn : function () {
        if (
          (rgx = regexx(Extra.head, /window\.location\s?=\s?"([^"]+)/i))
          || (rgx = regexx(Extra.body, /location\.href\s?=\s?'([^']+)/i))
          //|| (rgx = regexx(Extra.body, /var\slink\s?=\s?'([^']+)/i))
          || (rgx = regexx(Extra.body, /href="([^"]+).*redirected/i))
        ) {
          return Extra.go(rgx);
        }
      }
    },

    ityim : {
      hosts : "ity.im",
      fn : function () {
        if (par = c1(".//frameset[contains(@id,'topandbottom')]")) {
          if (el = c1(".//frame[contains(@id,'main')]", par) || c1(".//frame[contains(@src,'interheader.php')]")) {
            return Extra.go(el.src);
          }
        }
        Extra.hook('if(typeof redirect===\'function\'){if(parent)redirect();}');
      }
    },

    lienscash : {
      hosts : "lienscash.com",
      fn : function () {
        if (el = c1(".//span/a[@class='redirect']")) {
          return Extra.go(el.href);
        }
      }
    },

    linkbucks : {
      hosts : "allanalpass.com | amy.gs | any.gs | baberepublic.com | deb.gs | drstickyfingers.com | dyo.gs | fapoff.com | filesonthe.net | galleries.bz | hornywood.tv | linkbabes.com | linkbucks.com | linkgalleries.net | linkseer.net | miniurls.co | picbucks.com | picturesetc.net | placepictures.com | poontown.net | qqc.co | qvvo.com | realfiles.net | rqq.co | seriousdeals.net | seriousfiles.com | seriousurls.com | sexpalace.gs | theseblogs.com | thesefiles.com | theseforums.com | thosegalleries.com | tinybucks.net | tinylinks.co | tnabucks.com | tubeviral.com | uberpicz.com | ubervidz.com | ubucks.net | ugalleries.net | ultrafiles.net | urlbeat.net | urlpulse.net | whackyvidz.com | youfap.me | yyv.co | zxxo.net | zff.co",
      fn : function () {
        Extra.hook('Lbjs.IsClick=1;');
        if (rgx = regexx(Extra.href, /(\/verify\/+)$/i)) {
          return Extra.go(Extra.href.replace(rgx, ''));
        }
        if (rgx = regexx(Extra.body, /Lbjs\.TargetUrl\s?=\s?'([^']+)/i)) {
          return Extra.go(rgx);
        }
      }
    },

    lix_in : {
      hosts : "lix.in",
      fn : function () {
        if ((par = c1(".//form/input[@name='tiny']")) && (a = c1(".//input[@type='submit']", par.parentNode))) {
          a.click();
        } else if (a = c1(".//iframe[@name='ifram']")) {
          return Extra.go(a.src);
        }
      }
    },

    lnk : {
      hosts : "linkbee.com | lnk.co",
      fn : function () {
        if (
            (rgx = regexx(Extra.body, /id="urlholder"\svalue="([^"]+)/i)) ||
            (rgx = regexx(Extra.body, /id="dest"\ssrc="([^"]+)/i))
          ) {
            return Extra.go(rgx);
        }
      }
    },

    seomafia : {
      hosts : "seomafia.net",
      fn : function () {
        if (a = c1(".//a[contains(@title,'Click to proceed')]")) {
          return Extra.go(a.href);
        }
      }
    },

    adcou_ch : {
      hosts : "adcou.ch",
      fn : function () {
        if (a = c1(".//div[contains(@id,'SkipAd')]/a")) {
          return Extra.go(a.href);
        }
      }
    },

    urlcash : {
      hosts : "bat5.com | celebclk.com | eightteen.com | looble.net | peekatmygirlfriend.com | pornyhost.com | smilinglinks.com | urlcash.net | urlcash.org | xxxs.org",
      fn : function () {
        if (rgx = regexx(Extra.body, /linkDestUrl\s?=\s?'([^']+)/i)) {
          return Extra.go(rgx);
        }
      }
    },
  }
}

function checkRest() {
  if (regexx(Extra.host, /(img|image|pix)/i)) doExec(true);
}

function doExec(rest) {
  var fn, css;
  for (i in Extra.services) {
    var doc, service = Extra.services[i];
    var hosts = service.hosts.replace(/\s/g, "") || "";
    if (!rest && !hosts) continue;
    if (hosts) {
      var pattern = new RegExp(".?(" + hosts + "+)$", "i");
      doc = regexx(Extra.host, pattern);
    }
    if (rest || doc) {
      if (fn = service.fn) fn.apply(Extra);
      if (css = service.css) appendJS("style", css, "adsfight_css");
      if (cookie = service.cookie) Extra.setCookies(cookie);
      return;
    }
  }

  checkRest();
}

function doStuff() {
  Extra.init();
  usoUpdate();
  doExec();
  //setTimeout(doExec, 5000); // 5" re fire!
}

function yodStart() {
  if (regexx(navigator.userAgent, /opera/i)) {
    return doStuff();
  }
  document.addEventListener("DOMContentLoaded", doStuff, true);
}

yodStart();
})();