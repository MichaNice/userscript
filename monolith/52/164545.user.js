// ==UserScript==
// @name 百变饼
// @author 谷哥卫士
// @version 2.0
// @include http://www.baidu.com/
// @include http://www.baidu.com/home*
// @include http://www.baidu.com/index.php*
// @run-at document-start
// @grant none
// ==/UserScript==

(function(c){
	var t=document.createTextNode(c),
	s=document.createElement('style');
	s.type='text/css';
	s.appendChild(t);
	document.documentElement.appendChild(s)
})('P#lg,A#sh_igf,A#sh_igl,A#sh_igr,A#sh_cp,SPAN.btn_wr{background:url("data:image/png;base64,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") no-repeat}html{overflow:auto!important}body{overflow:hidden;height:100%!important;min-width:1000px;min-height:562px!important;background:#666!important}html,P#u,DIV#bottom_container{border:0px!important;background:#333}a{text-decoration:none!important}DIV#hp_container{position:absolute;top:0;left:0;width:100%;height:100%;min-width:1000px;min-height:562px;overflow:hidden}DIV#bgDiv{overflow:hidden;margin:auto;position:relative;width:2560px;height:1440px;min-width:1000px;min-height:562px;background-color:#666;background-repeat:no-repeat;background-size:cover}DIV.hp_bottomCell{position:absolute;top:0;width:100%;height:100%}DIV.hp_ctrls{margin:auto;position:relative;height:100%;max-width:2560px;min-width:1000px}DIV#sh_rdiv{position:absolute;right:15px;bottom:46px}DIV#sh_rdiv A{position:relative;width:29px;height:29px;margin:0 5px;float:left}A#sh_igf{background-position:-119px -37px}A#sh_igl{background-position:-29px -37px}A#sh_igr{background-position:0px -37px}A#sh_cp{background-position:-59px -37px}A#sh_cp>SPAN{position:absolute;bottom:1.82em;right:-1px;width:500px;visibility:hidden;color:#150417;font-size:small}A#sh_cp>SPAN>P{padding:.45em;background:#fff;border:1px solid #555;float:right}DIV#sc_hst1,DIV#sc_hst2,DIV#sc_hst3,DIV#sc_hst4{z-index:6;position:absolute;top:-90px;opacity:0}DIV.sh_hto{width:39px;height:39px;opacity:.4;background:#000;padding:1px}DIV.hp_hot{height:37px;width:37px;border:1px solid #fff}A#sc_hs1,A#sc_hs2,A#sc_hs3,A#sc_hs4{position:absolute;width:205px;z-index:6;padding:3px 8px 6px;visibility:hidden;opacity:0;font-size:small;color:#FFF;text-align:left;line-height:1.4em}A#sc_hs1>P,A#sc_hs2>P,A#sc_hs3>P,A#sc_hs4>P{margin:0 0 .2em}SPAN.sh_hq{text-decoration:underline}SPAN.sh_hi{font-size:medium;color:#ffa500}DIV.sh_ho{position:absolute;top:0;left:0;z-index:-1;width:100%;opacity:.6;padding:1px;background:#000}DIV.sh_ho>DIV{border:1px solid #FFF}DIV#m{position:relative;top:-35px;width:100%!important;height:100%;max-width:2560px;min-width:1000px;min-height:562px;margin:auto}P#lg{position:absolute;top:20%;left:8%;width:175px;height:35px;z-index:6}DIV#fm{position:absolute;top:20%;left:8%;z-index:6;width:421px;padding:0;margin:0 0 0 155px;background-color:#FFF}DIV#fm>FORM>DIV{border:0;width:421px!important}INPUT#kw{width:375px!important;height:28px;border:0;background:none}SPAN.btn_wr{position:relative;top:-32px;left:-1px;width:28px;float:right;background-position:-149px -37px}SPAN.btn_wr>INPUT{width:28px;height:28px;opacity:0}P#u{margin:auto;position:relative;min-height:28px;min-width:1000px;max-width:2560px;padding:7px 20px 0 0;z-index:9}P#nv{margin:auto;position:relative;top:0;padding:8px 0 0 0;text-indent:0px;z-index:9}P#u>A{padding-right:0;background:none}P#u>*,P#nv>A{color:#999!important}P#nv>B{color:#ffa615}DIV#s_username_menu{border:0}DIV#s_username_menu>A{color:#999}DIV#s_wrap{position:relative;bottom:85px;min-height:35px;padding:0;z-index:9}DIV#bottom_container{margin:auto;position:relative;bottom:0;height:27px;min-width:1000px;max-width:2560px;padding-top:8px;font-size:small;text-align:right}BODY>*,P#lg>*,DIV#bottom_container>*,DIV#s_main,DIV#s_seth,DIV.bottom-line2>A,DIV.bottom-line2>EM{display:none}P#u,DIV#bottom_container>DIV[class^="bottom-line"],DIV#s_username_menu,DIV#m,DIV#s_wrap{display:block}DIV.bottom-line1,DIV.bottom-line2{color:#666!important}DIV.bottom-line1{padding:0 20px 0 10px;float:right}DIV.bottom-line1>A{color:#666!important}');

document.addEventListener('DOMContentLoaded',function(){
	var loading=0,fullScreen=1,pageNum=localStorage['pageNum']||-1,
	setEvents=[],
	setAnimation=function(e,d){
		var s=navigator.userAgent.indexOf('Chrome')!=-1?30:10,a=d.style,m,i,j,
		t=Math.ceil(d.time*1e3),f=function(m){
			var n,c,x,p,q,z=e.style;
			if(setEvents[j][m])
				clearInterval(setEvents[j][m]);
			n=parseFloat(z[m]||a[m].default||0),
			c=t/s,x=a[m].extension,p=a[m].number,q=parseFloat((p-n)/c);
			setEvents[j][m]=setInterval(function(){
				n+=q,z[m]=n.toFixed(20)+x;
				c<1?(
					clearInterval(setEvents[j][m]),
					z[m]=p+x,
					d.funs&&d.funs(),
					d.styled&&(d.styled.time=d.styled.time||d.time,setAnimation(e,d.styled))
				):c--
			},s)
		};
		for(i=0,j=setEvents.length;i<j;i++){
			if(setEvents[i]&&setEvents[i].e===e)
				j=i
		};
		setEvents[j]=setEvents[j]||{};
		setEvents[j].e=e;
		for(m in a)
			f(m)
	},
	$=function(e,a){
		return a?a.querySelector(e):document.querySelector(e)
	},
	id=function(e){
		return document.getElementById(e)
	},
	getData=function(i,j){
		var u='http://cn.bing.com',l,g,f=function(h){
			var e,a,i,d=h.hs,r=new RegExp('.*\\?q=([^&]*).*','i');
			$('#sh_cp>SPAN>P').textContent=h.copyright;
			for(i=d.length-1;i>-1;i--){
				e=id('sc_hs'+(i+1));
				a=id('sc_hst'+(i+1));
				e.setAttribute('href',d[i].link.replace(r,'s?wd=$1'));
				e.firstChild.textContent=d[i].desc;
				$('SPAN',e).textContent=d[i].query;
				$('.sh_ho',e).style.height=e.offsetHeight-3+'px';
				$('.sh_ho>DIV',e).style.height=e.offsetHeight-5+'px';
				a.style.left=d[i].locx+'%';
				a.style.top=d[i].locy+'%'
			};
			x()
		},
		x=function(){
			loading=0,id('sh_igr').title='下一页',id('sh_igl').title='上一页';
		};
		i=i>7?7:i<-1||isNaN(i)?-1:i;
		if(i==pageNum&&j==0||loading==1)
			return;
		j==1&&(l=document.head.appendChild(document.createElement('link')),l.href=u+'/favicon.ico',l.rel='shortcut icon');
		loading=1,g=setTimeout(x,3e3),id('sh_igr').title=id('sh_igl').title='正在加载...';
		(function(d){
			var x=new XMLHttpRequest();
			x.open(d.method,d.url);
			x.onload=function(){
				if(x.readyState==4)
					d.onload(x)
			};
			x.send()
		})({
			method:'GET',
			url:u+'/HPImageArchive.aspx?format=js&idx='+i+'&n=1&nc='+new Date().getTime()+'&video=1',
			onload:function(t){
				if(loading==0)
					return;
				clearTimeout(g);
				var d=JSON.parse(t.responseText),e=id('bgDiv'),o=$('video',e),s=d.images[0].url.replace(/^(\w{3,5}:\/\/[^/]*)/,u),v=d.images[0].vid?d.images[0].vid:null,a;
				a=new Image();
				a.addEventListener('load',function(event){
					setAnimation(e,{time:0.3,style:{opacity:{number:0,default:1,extension:''}},styled:{time:0.2,style:{opacity:{number:1,extension:''}}},funs:function(){id('sh_igl').style.opacity=i==7?.5:1;id('sh_igr').style.opacity=i==-1?.5:1;e.style.backgroundImage='url("'+s+'")';o.loop=v?v.loop:true;o.src=v?u+v.codecs[0][1]:'';o.style.display=v?'':'none';f(d.images[0])}});
					localStorage['pageNum']=pageNum=i
				},false);
				a.src=s
			}
		})
	},
	reSizeBg=function(){
		var p=id('hp_container'),c='height',l='width',v='top',y='left',f='px',e=2560,o=1440,z=1000,x=function(u){
			var n=p.clientWidth,t=p.clientHeight,i,r;
			n=n>e?e:n,t=t>o?o:t;
			n/e>t/o?(i=Math.ceil(o*n/e),u[l]=n+f,u[c]=i+f,u[v]=(t-i)/2+f,u[y]=0):(r=Math.ceil(e*t/o),u[c]=t+f,u[l]=r+f,u[v]=0,u[y]=(n-r)/2+f)
		};
		x(id('bgDiv').style);
		x($('#bgDiv>video').style);
		(function(){
			var i=id('s_username_top').offsetLeft,r=document.documentElement.offsetWidth;
			id('s_username_menu').style.right=(r>z?r>e?(r-e)/2+e:r:z)-i-60+'px';
			id('nv').style.marginRight=(r>z?r>e?e:r:z)-i+'px'
		})()
	};

	(function(){
		var i,j,d=document.documentElement.appendChild(document.createElement('div'));
		i='<div id=bgDiv><video autoplay></video></div><div class=hp_bottomCell><div class=hp_ctrls>';
		for(j=1;j<5;j++)
			i+='<div id=sc_hst'+j+'><div class=sh_hto><div class=hp_hot></div></div></div><a id=sc_hs'+j+' target=_self><p></p><span class=sh_hq></span>&nbsp;<span class=sh_hi>»</span><div class=sh_ho><div></div></div></a>';
		d.id='hp_container',d.innerHTML=i+'</div></div><div class=hp_bottomCell><div class=hp_ctrls><div id=sh_rdiv><a id=sh_igf href=javascript:void(0) title=全屏></a><a id=sh_igl href=javascript:void(0) title=上一页></a><a id=sh_igr href=javascript:void(0) title=下一页></a><a id=sh_cp href=javascript:void(0)><span><p></p></span></a></div></div></div>'
	})();

	(function(){
		id('sh_rdiv').addEventListener('click',function(event){
			switch(event.target.id){
				case'sh_igf':
					(function(){
						var m=id('fm'),u=id('u'),n=id('nv'),w=id('s_wrap'),r=id('sh_rdiv'),i=id('sh_igf'),f=function(e,i){
							setAnimation(e,{time:0.17,style:{top:{number:i,extension:'px'}}})
						};
						fullScreen?(
							fullScreen=0,localStorage['fullScreen']=1,
							f(u,-35),f(n,-35),
							setAnimation(w,{time:0.17,style:{bottom:{number:50,default:85,extension:'px'}}}),
							setAnimation(m,{time:0.17,style:{opacity:{number:0.6,default:1,extension:''}}}),
							setAnimation(r,{time:0.17,style:{bottom:{number:11,default:46,extension:'px'}},funs:function(){i.style.backgroundPosition='-89px -37px'}})
						):(
							fullScreen=1,localStorage['fullScreen']=0,
							f(u,0),f(n,0),
							setAnimation(w,{time:0.17,style:{bottom:{number:85,extension:'px'}}}),
							setAnimation(m,{time:0.17,style:{opacity:{number:1,extension:''}}}),
							setAnimation(r,{time:0.17,style:{bottom:{number:46,extension:'px'}},funs:function(){i.style.backgroundPosition='-119px -37px'}})
						)
					})();
					break;
				case'sh_igl':
					getData(pageNum+1,0);
					break;
				case'sh_igr':
					getData(pageNum-1,0)
			}
		},false);
		id('sh_cp').addEventListener('mouseover',function(event){
			this.firstChild.style.visibility='visible'
		},false);
		id('sh_cp').addEventListener('mouseout',function(event){
			this.firstChild.style.visibility='hidden'
		},false);
		localStorage['fullScreen']==1&&id('sh_igf').click()
	})();

	(function(){
		var _={X:0,Y:0,L:0,O:null},i,m='sc_hst',n='sc_hs',e,a;
		for(i=1;i<5;i++){
			(function(e,a){
				e.addEventListener('mouseover',function(event){
					_.O=this;
					var i=a.offsetWidth,j=e.offsetLeft,w=e.offsetWidth;
					a.style.left=document.documentElement.offsetWidth-j-w>i||j<i?j+w+'px':j-1-i+'px';
					a.style.top=e.offsetTop+'px'
				},false);
				e.addEventListener('mouseout',function(event){
					_.O=null
				},false);
				a.addEventListener('mouseover',function(event){
					_.O=this
				},false);
				a.addEventListener('mouseout',function(event){
					_.O=null
				},false)
			})(id(m+i),id(n+i))
		};

		document.addEventListener('mousemove',function(event){
			var x=event.pageX,y=event.pageY;
			_.L+=_.X==x&&_.Y==y||_.L>9?0:1;
			_.X=x,_.Y=y
		},false);

		setInterval(function(){
			var g=$('#s_ps_form>div').style.display,f=function(q,p){
				p==1?(
					q.style.opacity==0&&(
						q.style.visibility='visible',
						setAnimation(q,{time:0.3,style:{opacity:{number:1,extension:''}}})
					)
				):(
					q.style.opacity==1&&setAnimation(q,{time:0.3,style:{opacity:{number:0,extension:''}},funs:function(){q.style.visibility='hidden'}})
				)
			};
			for(i=1;i<5;i++){
				e=id(m+i),a=id(n+i);
				!loading&&g=='none'?_.O?e===_.O||a===_.O?(f(e,1),f(a,1)):(f(e,0),f(a,0)):(_.L>9&&f(e,1),_.L<1&&f(e,0),_.O===null&&f(a,0)):(f(e,0),f(a,0))
			};
			_.L-=_.L<0?0:1
		},100)
	})();

	window.addEventListener('resize',reSizeBg,false);
	reSizeBg();

	getData(parseInt(pageNum),1)
},false)