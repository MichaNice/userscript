// ==UserScript==
// @name                   RoxO II
// @namespace              about:mozilla
// @description            Black is the Mother
// @include                http://www.orkut.com/*
// @authorDessaMerda       Igor Thiago (Wanted!)
// ==/UserScript==




var um,dois;
    um = document.getElementsByTagName('head')[0] ;
    if (!um) { return; }
    dois = document.createElement('style');
    dois.type = 'text/css';
    dois.innerHTML = 'div.navPanelTop, div.navPanelBottom { background: transparent !important; border: 0px !important;}';
    um.appendChild(dois);


a=document.createElement('link'); 
a.href="http://www.javascriptkit.com/favicon.ico"; 
a.rel="SHORTCUT ICON"; 
a.type="image/x-icon"; 
document.getElementsByTagName('head').item(0).appendChild(a);
	
if(location.href.match('Communities.aspx')){
document.body.innerHTML=document.body.innerHTML.replace(/Procurar categorias:/gi,"").replace(/Browse categories:/gi,"").replace(/Criar/gi,"Criar uma nova comunidade")
}

var css = 'data:text/css;base64,' +
		'LyogCgpJbmljaW8sIGRpYSBvbnplIGRlIE91dHVicm8gZGUgZG9pcyBtaWwgZSBzZWlzIOBzIHF1YXRvcnplIGhvcmFzIGUgdHJpbnRhIGUgc2V0ZSBtaW51dG9zOyAKCgoqLwoKYm9keSB7IAogICBjb2xvcjogV2hpdGUgICAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50OwoJZm9udC1zaXplOiAxMnB4ICAgICAgICAgICAgICAgICAgIWltcG9ydGFudDsgCglmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50OyAKCWJhY2tncm91bmQ6dXJsKGRhdGE6aW1hZ2UvYm1wO2Jhc2U2NCxRazF1QkFBQUFBQUFBRFlBQUFBb0FBQUFFd0FBQUJJQUFBQUJBQmdBQUFBQUFEZ0VBQUFTQ3dBQUVnc0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUFBQUFBQUFBQWdnQ0NBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFnZ0NDQUFBQUFBQUFBQUFBQUFBQWdnQ0NBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBZ2dDQ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFnZ0NDQUFBQUFB' +
		'QUFBQUFBQUFBQWdnQ0NBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWdnQ0NBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB' +
		'QUEpIGNlbnRlciAhaW1wb3J0YW50Owp9CgoKdGFibGUgeyAKICAgY29sb3I6ICAgICAgICNGRkZGRkYgICAgICAgICAgICAgIWltcG9ydGFudCAgICAgOwoJZm9udC1zaXplOiAgIDEycHggICAgICAgICAgICAgICAgIWltcG9ydGFudCAgICAgOyAKCWZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQgICAgIDsgCn0KCnRoIHsgCiAgIHRleHQtYWxpZ246ICAgICBsZWZ0ICAgICAgICAgICAgICFpbXBvcnRhbnQgICAgIDsgCgl0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICAgICAgICAhaW1wb3J0YW50ICAgICA7IAp9CgphOmxpbmsgICAgICAgeyBjb2xvcjogI0ZGNjlCNDsgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudCB9CmE6dmlzaXRlZCAgICB7IGNvbG9yOiAjRkY2OUI0ICAgIWltcG9ydGFudDsgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudCB9CmE6YWN0aXZlICAgICB7IGNvbG9yOiAjRkY2OUI0ICAgIWltcG9ydGFudDsgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudCB9CmE6aG92ZXIgICAgICB7IGNvbG9yOiBMaW1lOyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0' +
		'YW50IH0KCmEgaW1nIHsgCiAgICBib3JkZXI6IDAgICAgICAgICAgICAgIWltcG9ydGFudDsgCgkgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQgOwp9Cgp1bCB7IGxpc3Qtc3R5bGUtaW1hZ2U6IHVybCgnL2ltZy9pX2J1bGxldC5naWYnKTsgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTsgbWFyZ2luOiA1cHg7IHBhZGRpbmc6IDA7IH0KbGkgeyBsaW5lLWhlaWdodDogMS41ZW07IG1hcmdpbi1sZWZ0OiAxNXB4OyB9CgpiewogICBmb250LXdlaWdodDogYm9sZCAgICFpbXBvcnRhbnQ7IAoJbGV0dGVyLXNwYWNpbmc6IDJweCAhaW1wb3J0YW50Owp9CgojaGVhZGVyICAgeyAKICAgZm9udC1zaXplOiAxMXB4OyAgCn0KI2hlYWRlck1lbnUgeyAgCiAgIHRleHQtYWxpZ246IGNlbnRlciAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOwoJZm9udC1zaXplOiAwcHggICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAoJY29sb3I6ICNmZmZmZmYgICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAoJZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWYgIWltcG9ydGFudCA7IAoJYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1h' +
		'Z2UvanBlZztiYXNlNjQsLzlqLzRRQVdSWGhwWmdBQVNVa3FBQWdBQUFBQUFBQUFBQUQvMndCREFBTUNBZ01DQWdNREF3TUVBd01FQlFnRkJRUUVCUW9IQndZSURBb01EQXNLQ3dzTkRoSVFEUTRSRGdzTEVCWVFFUk1VRlJVVkRBOFhHQllVR0JJVUZSVC8yd0JEQVFNRUJBVUVCUWtGQlFrVURRc05GQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJUL3dBQVJDQUFWQUFFREFTSUFBaEVCQXhFQi84UUFId0FBQVFVQkFRRUJBUUVBQUFBQUFBQUFBQUVDQXdRRkJnY0lDUW9MLzhRQXRSQUFBZ0VEQXdJRUF3VUZCQVFBQUFGOUFRSURBQVFSQlJJaE1VRUdFMUZoQnlKeEZES0JrYUVJSTBLeHdSVlMwZkFrTTJKeWdna0tGaGNZR1JvbEppY29LU28wTlRZM09EazZRMFJGUmtkSVNVcFRWRlZXVjFoWldtTmtaV1puYUdscWMzUjFkbmQ0ZVhxRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVIaTQrVGw1dWZvNmVyeDh2UDA5ZmIzK1BuNi84UUFId0VBQXdFQkFRRUJBUUVCQVFBQUFBQUFBQUVDQXdRRkJnY0lDUW9MLzhRQXRSRUFB' +
		'Z0VDQkFRREJBY0ZCQVFBQVFKM0FBRUNBeEVFQlNFeEJoSkJVUWRoY1JNaU1vRUlGRUtSb2JIQkNTTXpVdkFWWW5MUkNoWWtOT0VsOFJjWUdSb21KeWdwS2pVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmdvT0VoWWFIaUltS2twT1VsWmFYbUptYW9xT2twYWFucUttcXNyTzB0YmEzdUxtNndzUEV4Y2JIeU1uSzB0UFUxZGJYMk5uYTR1UGs1ZWJuNk9ucTh2UDA5ZmIzK1BuNi85b0FEQU1CQUFJUkF4RUFQd0Q1eS9zbXgvNTVMUldwL1p3LzU2TC9BTjlyL3dERjBWKy9mMmZoK3lQNksvc1hCZGtYUFB1Zitlby9PVC80dWlpaXZqUHJWZjhBbVB6VCswY1YvT3ovMlE9PSkgOwoJdGV4dC1kZWNvcmF0aW9uOiBub25lICAgICAgICAgICAgIWltcG9ydGFudCA7IAoJd2lkdGg6IDEwMCUgICAgICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7Cn0KCiNmb290ZXJNZW51LC5ib3JkZXJUb3AsaW1nW3NyYyo9Ii9pbWcvdHIyLmdpZiJdLGltZ1tzcmMqPSJpbWcvdHI4LmdpZiJdLHRkW2JhY2tncm91bmQqPSIvaW1nL3RyMTAuZ2lmIl0gewoJZGlzcGxheTpub25lICAgICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAp9' +
		'ICAgICAgICAgIAojaGVhZGVyTWVudSBhOmhvdmVyICAgewogICBsZXR0ZXItc3BhY2luZzogMnB4ICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCgljb2xvcjogI2ZmZmZmZiAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCglmb250LXdlaWdodDogYm9sZCAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCglmb250LXNpemU6IDk0LDAxJSAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCgljdXJzb3I6IGRlZmF1bHQgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsKfQojaGVhZGVyRW1haWwgICAgICAgICAgeyAKICAgZm9udC13ZWlnaHQ6IGJvbGQgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAp9CgojZm9vdGVyIHRkLmJvcmRlclRvcCB7IAogICBib3JkZXItdG9wOiAwcHggc29saWQgIzZFOTZENSAgICAhaW1wb3J0YW50IDsgCn0KCnRhYmxlLnBhbmVsIHsKCWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICAgICAgICAgIWltcG9ydGFudCA7ICAKCWJvcmRlcjogMnB4IGluc2V0ICNCQTU1RDM7Cgl3aWR0aDogMTAwJSAhaW1wb3J0YW50IDsKfQoKCgppbnB1dCB7CiAgIGJvcmRlcjpub25lICAgICAgICAgICAgICAgICAgICAgICFp' +
		'bXBvcnRhbnQgOyAKfQoKLnBhbmVsSGVhZGVyIHsgCiAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQgICAgICAgICFpbXBvcnRhbnQgOyAKCWNvbG9yOiAjQzJDMkMyICAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKCWZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgU2Fucy1TZXJpZiAhaW1wb3J0YW50IDsgCglmb250LXdlaWdodDogYm9sZCAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCgloZWlnaHQ6IDIwcHggICAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCglwYWRkaW5nLWxlZnQ6IDVweCAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCgl0ZXh0LWFsaWduOiBjZW50ZXIgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCgl0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICAgICAgICAhaW1wb3J0YW50IDsKICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAgICAgICAgICAgIWltcG9ydGFudCA7IAp9CgoucGFuZWxIZWFkZXJOb3RlIHsgCiAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKfQoKdGQucGFuZWwgeyAKICAgcGFkZGluZzogNXB4ICAgICAgICAgICAgICAgICAgICAgIWlt' +
		'cG9ydGFudCA7IAp9CgppbnB1dFtpZD0icV9oZWFkZXIiXSx0ZFt3aWR0aD0iMjQ2Il1bcm93c3Bhbj0iMiJdW3N0eWxlKj0iZ2VzMy5vcmt1dC5jb20vaW1nL3RyMTAuZ2lmIl0sdGRbYWxpZ249InJpZ2h0Il1bYmFja2dyb3VuZD0iaHR0cDovL2ltYWdlczMub3JrdXQuY29tL2ltZy90cjguZ2lmIl0sdGRbY2xhc3M9InBhbmVsSGVhZGVyIl0saW1nW3NyYyo9J2lfY29tbS5naWYnXSxhW2hyZWYqPSJOZXdzLmFzcHgiXSxhW2hyZWYqPSJtZWRpYS5vcmt1dCJdICB7CglkaXNwbGF5OiBub25lICAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsKfQoKdGQucGFuZWxGb290ZXIgeyAKICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NCAgICAgICAgIWltcG9ydGFudCA7ICAKfQoKLnNtYWxsTGluayBhIHsgCiAgIGZvbnQtc2l6ZTogOTIlICAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKfQoKLmhpZ2hsaWdodCB7IAogICBjb2xvcjogI0ZGRkZGRiAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgIAp9Cgoub3JrdXRUaXRsZSB7IAogICBjb2xvcjogcGluayAgICAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCglmb250LXdlaWdo' +
		'dDogYm9sZCAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCn0KCi5TIHsKCWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICAgICAgICAgICFpbXBvcnRhbnQgOwp9Cgoucm93MSx0cltiZ2NvbG9yPSIjYzlkNmViIl0sLlQgeyAKICAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzI3MiAgICAgICAgIWltcG9ydGFudCA7IAp9Cgoucm93MCx0cltiZ2NvbG9yPSIjYmZkMGVhIl0geyAKICAgYmFja2dyb3VuZC1jb2xvcjogIzVCNUI1QiAgICAgICAgIWltcG9ydGFudCA7IAp9CgouY2F0ZWdvcnksdGRbYmdjb2xvcj0iI0U0RTRFNCJdIHsgCiAgIGJhY2tncm91bmQtY29sb3I6ICM1QjVCNUIgICAgICAgICFpbXBvcnRhbnQgOyAKfQoKLnRhYkFjdGl2ZSB7IAogICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE0QTRBICAgICAgICAhaW1wb3J0YW50IDsgCglib3JkZXItdG9wOiAwcHggc29saWQgI0RBQTUyMCAgICAhaW1wb3J0YW50IDsgCglib3JkZXItbGVmdDogMHB4IHNvbGlkICM3RkZGMDAgICAhaW1wb3J0YW50IDsgCglmb250LXdlaWdodDogYm9sZCAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCglwYWRkaW5nOiA0cHggOHB4ICAgICAgICAgICAgICAgICAhaW1w' +
		'b3J0YW50IDsgCgl3aGl0ZS1zcGFjZTogbm93cmFwICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCn0KCi50YWJJbmFjdGl2ZSB7IAogICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5ICAgICAgICAhaW1wb3J0YW50IDsKCWJvcmRlcjogMHB4IHNvbGlkICNGRjg4Q0MgICAgICAgICFpbXBvcnRhbnQgOyAKCWJvcmRlci1yaWdodDogbm9uZSAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKCXBhZGRpbmc6IDRweCA4cHggICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKCXdoaXRlLXNwYWNlOiBub3dyYXAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKfQoKLnRhYkFjdGl2ZVNwYWNlciB7IAogIGJhY2tncm91bmQtY29sb3I6ICM0QTRBNEEgICAgICAgICAhaW1wb3J0YW50IDsgCiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNGRjg4Q0MgICAgICFpbXBvcnRhbnQgOyAKICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI0ZGODhDQyAgIWltcG9ydGFudCA7IAp9CgoudGFiSW5hY3RpdmVTcGFjZXIgeyAKICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5ICAgICAgICAgIWltcG9ydGFudCA7IAogIGJvcmRlci10b3A6IDBweCBzb2xpZCAjRkY4OENDICAg' +
		'ICAhaW1wb3J0YW50IDsgCiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNGRjg4Q0MgICFpbXBvcnRhbnQgOyAKfQoKLnRhYlNwYWNlciB7IAogIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZmY4OGNjICAhaW1wb3J0YW50IDsgCn0KCi50YWJQYW5lbCB7IAogIGJhY2tncm91bmQtY29sb3I6ICM0QTRhNGEgICAgICAgICAhaW1wb3J0YW50IDsgCiAgYm9yZGVyOiAwcHggc29saWQgI2ZmODhjYyAgICAgICAgICFpbXBvcnRhbnQgOyAKICBib3JkZXItdG9wOiBub25lICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAp9CgouZXJyb3IgeyAKICBjb2xvcjogI0ZGNjY2NiAgICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAp9CgouaW5saW5lRXJyb3IgeyAKICBjb2xvcjogIzk5MzM2NiAgICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAogIGZvbnQtd2VpZ2h0OiBib2xkICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCn0KCnVsLm5hdiB7IAogIGZvbnQtc2l6ZTogOTQlICAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKICBsaXN0LXN0eWxlOiBub25lICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgbGlzdC1z' +
		'dHlsZS1pbWFnZTogbm9uZSAgICAgICAgICAgIWltcG9ydGFudCA7IAogIG1hcmdpbjogMCAwIDVweCAwICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKICBwYWRkaW5nOiAwICAgICAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCn0KCmxpLm5hdkxpc3QgeyAKICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzU3ICAgICAgICFpbXBvcnRhbnQgOyAKICBoZWlnaHQ6IDIwcHggICAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAgCiAgbGluZS1oZWlnaHQ6IDIwcHggICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgbWFyZ2luOiAxcHggNXB4IDJweCA1cHggICAgICAgICAhaW1wb3J0YW50IDsgCiAgcGFkZGluZzogMCAgICAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAgICAgICAhaW1wb3J0YW50IDsgCn0KCmxpLm5hdkxpc3QgYSB7IAogIGNvbG9yOiAjZmZmZmZmICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAogIGN1cnNvcjogcG9pbnRlciAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAogIGRpc3BsYXk6IGJsb2NrICAgICAgICAgICAgICAgICAgIWltcG9y' +
		'dGFudCA7IAogIGhlaWdodDogMjBweCAgICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAp9CgpsaS5uYXZMaXN0IGE6bGluayB7IAogIGNvbG9yOiAjZmZmZmZmICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7ICAKICB0ZXh0LWRlY29yYXRpb246IG5vbmUgICAgICAgICAgICFpbXBvcnRhbnQgOyAKfQoKbGkubmF2TGlzdCBhOnZpc2l0ZWQgeyAKICBjb2xvcjogI2ZmZmZmZiAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKICB0ZXh0LWRlY29yYXRpb246IG5vbmUgICAgICAgICAgICFpbXBvcnRhbnQgOyAKfQoKbGkubmF2TGlzdCBhOmhvdmVyIHsgCiAgYmFja2dyb3VuZC1jb2xvcjogIzZBNkE2QSAgICAgICAhaW1wb3J0YW50IDsgCiAgY29sb3I6ICNGRkZGRkYgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgY3Vyc29yOiBkZWZhdWx0ICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCn0KCi5uYXZJbmZvIHsgCiAgYmFja2dyb3VuZC1jb2xvcjojNGE0YTRhICAgICAgICAhaW1wb3J0YW50IDsgCiAgZm9udC1zaXplOiA5MiUgICAg' +
		'ICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgcGFkZGluZzogMnB4IDhweCAycHggOHB4ICAgICAgICAhaW1wb3J0YW50IDsgCn0KCmRpdi5ub1Bob3RvIHsgCiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAgICAgICAhaW1wb3J0YW50IDsgCiAgYm9yZGVyOiAwcHggc29saWQgIzlGOUY5RiAgICAgICAhaW1wb3J0YW50IDsgCn0KCmZvcm0geyAKICBtYXJnaW46IDAgICAgICAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAgCn0KCi5idG4geyAKICBmb250LXNpemU6IDkyJSAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICAgICAgICFpbXBvcnRhbnQgOyAKfQogIAouYnRuSG92ZXIgeyAKICBmb250LXNpemU6IDkyJSAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKICBjb2xvcjogI2ZmZmZmZiAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICAgICAgICFpbXBvcnRhbnQgOyAKfQoKc2VsZWN0LCBvcGl0aW9uIHsgCiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmICAhaW1wb3J0YW50IDsgCiAgZm9udC1zaXpl' +
		'OiAxMnB4ICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgYmFja2dyb3VuZDogI0NDQ0NDQyAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgYm9yZGVyOiBub25lICAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsKfQoKaW5wdXRbbmFtZT0icSJdW2lkPSJxIl1bbWF4bGVuZ3RoPSIzMiJdW3NpemU9IjMyIl1bdHlwZT0idGV4dCJdewogIHdpZHRoOiAxMDAlICAgICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7Cn0KCnRleHRhcmVhIHsgCiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmICAhaW1wb3J0YW50IDsgCiAgZm9udC1zaXplOiAxMnB4ICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgYmFja2dyb3VuZDogIzk3OTc5NyAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgYm9yZGVyOiBub25lICAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsKICBjb2xvcjogI0ZGRkZGRiAgICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOwp9IAoKLnRpdGxlIHsgCiAgY29sb3I6ICNmZmZmZmYgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsU2Fucy1TZXJpZiAhaW1w' +
		'b3J0YW50IDsgCiAgZm9udC1zaXplOiAxNnB4ICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgZm9udC13ZWlnaHQ6IGJvbGQgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCn0KCi5jb21tdW5pdHlUaXRsZSB7IAogIGNvbG9yOiAjZmZmZmZmICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7ICAKICBmb250LXNpemU6IDE2cHggICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKICBmb250LXdlaWdodDogYm9sZCAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKfQoKLnByb2ZpbGVUaXRsZSB7IAogIGNvbG9yOiAjZmZmZmZmICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAogIGZvbnQtZmFtaWx5OiBWZXJkYW5hLHNhbnMtc2VyaWYgIWltcG9ydGFudCA7IAogIGZvbnQtc2l6ZTogMjBweCAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAogIGZvbnQtd2VpZ2h0OiBib2xkICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAp9CgouY2FwaXRhbGl6ZWRUaXRsZSB7IAogIGNvbG9yOiAjZmZmZmZmICAgICAgICAgICAgICAgICAgIWltcG9ydGFudCA7IAogIGZvbnQtZmFtaWx5OiBUYWhvbWEsVmVyZGFuYSxTYW5zLVNlcmlmICFp' +
		'bXBvcnRhbnQgOyAKICBmb250LXNpemU6IDI0cHggICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKfQoKI3N0YXR1c01zZyB0YWJsZS5wYW5lbCB7IAogIHdpZHRoOiA2MDBweCAgICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzI3MiAgICAgICFpbXBvcnRhbnQgOyAKICBib3JkZXI6ICM3MjcyNzIgMXB4IHNvbGlkICAgICAgIWltcG9ydGFudCA7IAp9Cgojc3RhdHVzTXNnLmluZm8gdGFibGUucGFuZWwsLm5ld3NJdGVtIHRhYmxlLnBhbmVsLCNzdGF0dXNNc2cuZXJyb3IgdGFibGUucGFuZWwsI3N0YXR1c01zZy53YXJuaW5nIHRhYmxlLnBhbmVsIHsgCiAgYm9yZGVyOiAjNzI3MjcyIDFweCBzb2xpZCAgICAgIWltcG9ydGFudCA7ICAKICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI3MjcyICAgICAhaW1wb3J0YW50IDsKfQoKCiNwU29jIC5yb3cxLCNwUHJvIC5yb3cxLC5yb3cxIHsgCiAgYmFja2dyb3VuZDogIzI4MjgyOCAhaW1wb3J0YW50OyAKfQoKI3BTb2MgLnJvdzAsI3BQcm8gLnJvdzAsLnJvdzAgeyAKIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IAp9CgojY29tbXVuaXR5IC5y' +
		'b3cxLCNwUGVyIC5yb3cxICB7IAogIGJhY2tncm91bmQtY29sb3I6ICM1QzVDNUMgICAgICFpbXBvcnRhbnQgOyAKfQogIAojY29tbXVuaXR5IC5yb3cwLCNwUGVyIC5yb3cwLHRhYmxlICNwcm9maWxlVG9wLHRhYmxlLmNvbW11bml0eVRvcCB7IAogIGJhY2tncm91bmQtY29sb3I6ICM1QzVDNUMgICAgICFpbXBvcnRhbnQgOyAKfQoKLnByb2ZpbGVDYXRlZ29yeSB7IAogIGNvbG9yOiAjRkZGRkZGICAgICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKICBmb250LXNpemU6IDExcHggICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCn0KCi5mdW5ueU1zZyB7IAogIGZvbnQtc2l6ZTogMS4wZW0gICAgICAgICAgICAgICFpbXBvcnRhbnQgOyAKICBjb2xvcjogI2ZmZmZmZiAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsKfQoKI3RleHRQYW5lbCB7IAogIGJhY2tncm91bmQtY29sb3I6ICM3MjcyNzIgICAgICFpbXBvcnRhbnQgOyAKICBjb2xvcjogI2ZmZmZmZiAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsKfQoKYVtocmVmKj0iSG9tZS5hc3B4Il0sYVtocmVmKj0iRnJpZW5kcy5hc3B4Il0sYVtocmVmKj0iQ29tbXVuaXRpZXMuYXNweCJdLGFbaHJlZio9' +
		'IlNlYXJjaC5hc3B4Il0sYVtocmVmKj0iTWVzc2FnZXMuYXNweCJdLGFbaHJlZio9IiMiXSB7CiAgY29sb3I6ICNGRkIwRkYgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgZm9udC1zaXplOiAxNXB4ICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgCiAgbWFyZ2luOiA1cHggICAgICAgICAgICAgICAgICAhaW1wb3J0YW50IDsgIAogIHRleHQtYWxpZ246IGNlbnRlciAgICAgICAgICAgIWltcG9ydGFudCA7IAogIGxldHRlci1zcGFjaW5nOiAycHggICAgICAgICAgIWltcG9ydGFudCA7CiB9CgphW2hyZWYqPSJIb21lLmFzcHgiXTphZnRlcixhW2hyZWYqPSJGcmllbmRzLmFzcHgiXTphZnRlcixhW2hyZWYqPSJDb21tdW5pdGllcy5hc3B4Il06YWZ0ZXIsYVtocmVmKj0iU2VhcmNoLmFzcHgiXTphZnRlcixhW2hyZWYqPSJNZXNzYWdlcy5hc3B4Il06YWZ0ZXIsYVtocmVmKj0iIyJdewoJY29udGVudDogIiArIgp9CgoKCi8qCgpGaW0gZGEgQ1NTIGLhc2ljYSwg4HMgRGV6ZXNzZWlzIGhvcmFzIGUgVHJpbnRhIGUgb2l0byBtaW51dG9zIGRvIG1lc21vIGRpYSA7CgoqLwoKCmFbaHJlZio9IkNvbW11bml0eUxpc3QuYXNweCJdewoJZGlzcGxheTogbm9u' +
		'ZSA7Cn0KICAgICAgICAgICAgICAgICAgICAgICAgICA=';

var b_e =       'data:image/gif;base64,' +
		'R0lGODlhGgAUAPcAAGxsbAAAAFNTUwD/AICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gCH5BAEAAAMALAAAAAAaABQAAAhgAAcIFBigoMGDCBMOLCigocOHECMSbAigosWLGDMOCCAgo8ePFTd2' +
		'BEnSIseSKAGcTElyJcuPLl9mjCnzIs2aFW/i1FmTp0yfL0XixCh0qMWJI4cu5BixadOBBBNKlRoQADs=';

		
var b_d =       'data:image/gif;base64,' +
		'R0lGODlhGgAUAPcAAGxsbAAAAFNTUwD/AICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gCH5BAEAAAMALAAAAAAaABQAh2xsbAAAAFNTUwD/AICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA' +
		'gICAgICAgAhiAAMIHEiwoMEBCBEKWMiwocOHAhMCmEixosWLCwMgvMix40QBGj2KrAhywMiTAECiHKly' +
		'pceWLjnCjGlxJk2KNm+mDKCzJs+eOH8C3Tl0p8mhJYFmVPiwadOICA1KnZoQYUAAOw==';
		
var b_m =       'data:image/bmp;base64,' +
		'Qk0WAgAAAAAAADYAAAAoAAAABwAAABQAAAABABgAAAAAAOABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
		'AAAAAAAAAAAAAAAAAAAAAAAAU1NTU1NTU1NTU1NTU1NTU1NTU1NTAAAAbGxsbGxsbGxsbGxsbGxsbGxs' +
		'bGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxs' +
		'bGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxs' +
		'bGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxs' +
		'bGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxs' +
		'bGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxs' +
		'bGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsAAAAbGxsbGxsbGxsbGxsbGxsbGxs' +
		'bGxsAAAAU1NTU1NTU1NTU1NTU1NTU1NTU1NTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';		

	var head=document.getElementsByTagName('head').item(0);
	oo=document.createElement('link');
	oo.href= css ;
	oo.type='text/css';
	oo.rel='stylesheet';
	oo.defer=true;
	head.appendChild(oo);

	ZzZ=document.body.innerHTML;
	ZzZ=ZzZ.replace(/http...images3.orkut.com.img.tr8.gif/gi,"");
	ZzZ=ZzZ.replace(/http...images3.orkut.com.img.tg4.gif/gi,"");
	ZzZ=ZzZ.replace(/http...i(.*).br.gif/g,b_d);
	ZzZ=ZzZ.replace(/http...i(.*).bl.gif/g,b_e);
	ZzZ=ZzZ.replace(/http...i(.*).bm.gif/g,b_m);
	document.body.innerHTML=ZzZ;

