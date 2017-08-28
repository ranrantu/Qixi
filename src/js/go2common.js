var qy = {};
//var iface = new Interface();
//qy.iface = iface;

//读取js
function jsClass(src,callback) 
{
	var script = document.createElement('script'),cb="callback_"+(new Date()).getMilliseconds()+parseInt(Math.random()*1000);
	//整理cb参数
	if(callback){
		if(src.indexOf("?")!=-1){src+="&cb="+cb;}
		else{src+="?cb="+cb;}
	}
	//回调
	window[cb]=function(a){
		callback(a);
		window[cb]=null;
		return;
	}
	//写入
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', src);
	document.getElementsByTagName("head")[0].appendChild(script);
}

//读取模块
var modules={}
function loadModules(a,e){
	var b=modules,c=a.split("."),u;
	a=c[1];
	if(b[a]) if(e)e(b[a]);else b[a]();
	else{
		b[a]=function(z){
			b[a]=z();
			e(b[a]);
		}
		u="js/"+c.join("/")+".js";
		jsClass(u);
	}
} 

//加载css
function loadCss(a)
{
	var e=document,b=gts(e,"link"),i,c,d=gt(e,"head");
	for(i=0;i<b.length;i++){
		if(b[i].href==a) return;
	}
	c=ce("link");
	c.href=a;
	c.rel="stylesheet";
	c.type="text/css";
	ap(d,c);
}

//字符串处理
String.prototype.byteLength = function(){
	return this.replace(/[^\x00-\xff]/g, "--").length;
};
String.prototype.subByte = function(n){
	if(this.byteLength() <= n)return this.toString();
	for(var i = Math.floor((n = n - 2)/2), l = this.length; i < l; i ++)
	if(this.substr(0,i).byteLength() >= n)return this.substr(0,i) + "\u2026";
	return this.toString();
};

//通用函数
function el(a){return document.getElementById(a)}
function d0(a){a.style.display="none"}
function d1(a,b){a.style.display=!b?"block":""}
function ce(a){return document.createElement(a)}
function ct(a){return document.createTextNode(a)}
function cc(a){var b=ce("div");b.className=a;return b}
function ap(a,b){a.appendChild(b)}
function px(a){return a+"px"}
function pa(a){a.style.position="absolute"}
function pr(a){a.style.position="relative"}
function lf(a,b){a.style.left=px(b)}
function tp(a,b){a.style.top=px(b)}
function wd(a,b){a.style.width=px(b)}
function ht(a,b){a.style.height=px(b)}
function gl(a){return a.length}
function gts(a,b){return a.getElementsByTagName(b)}
function gt(a,b){var c=gts(a,b);return c&&c.length>0?c[0]:null}
function gns(a){return document.getElementsByName(a)}
function rnd(){var a=Math.random,b=parseInt;return Number(new Date()).toString(16)+(b(10*a())+b(10*a())+b(10*a())).toString(16)}
function getCookie(name){var arg=name+"=",alen=arg.length,clen=document.cookie.length;var i=0;while(i<clen){var j=i+alen;if(document.cookie.substring(i,j)==arg)return getCookieVal(j);i=document.cookie.indexOf(" ",i)+1;if(i==0)break;}return null;}
function getCookieVal(offset){var endstr=document.cookie.indexOf(";",offset);if(endstr==-1)endstr=document.cookie.length;return unescape(document.cookie.substring(offset,endstr));}
function setCookie(name,value){var argv=arguments;var argc=argv.length;var date = new Date();date.setTime(date.getTime()+31536000);var expires=(2<argc)?argv[2]:date;var path="/";var domain=null;var secure=false;document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");}
function getParam(a){var b,c,d,e="",f,g,h=/[^\u4E00-\u9FA5\w\s]/g,i,j;b=window.location.href.replace(/&amp;/g,"&");d=(c=b.indexOf("?"))>-1?c:b.indexOf("#");if(a!=null&&d>-1){b=b.substring(d+1);b=b.replace(/#/g,"&");c=b.split("&");for(d=0;d<c.length;d++){var f,g;f=c[d].split("=")[0];g=c[d].substring(c[d].indexOf("=")+1);try{i=j="";i=decodeURIComponent(f);j=decodeURIComponent(g);f=h.test(i)?f:i;g=h.test(j)?g:j;}catch(ex){}f=f.indexOf("%u")>-1?unescape(f):f;g=g.indexOf("%u")>-1?unescape(g):g;if(f==a){e=g}}}return e}
function encode(a){
	if(a)return a.replace(/[^\x00-\xff]/g,function(b){return escape(b).replace(/[%]/,"\\")});
}
function obj2str2(o){   
	var r=[],b;
	if(typeof o=="string") return "\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\"";
	if(typeof o=="undefined") return "";
	if(typeof o=="object")
	{
		if(o===null) return "null";
		else if(!o.sort||!o.length)
		{
			for(var i in o){
				b=/[^\w]/.test(i);if(i!="getClassName"&&i!="setTimeout"&&i!="eventHandler")r.push("\""+i+"\""+":"+obj2str(o[i]))
			}
			r="{"+r.join()+"}"
		}
		else
		{   
			for(var i =0;i<o.length;i++)r.push(obj2str(o[i]));
			r="["+r.join()+"]"
		}
		return r;
	} 
	return o.toString();
}

//MD5加密
function MD5(){var o=0;var a="";var l=8;this.hex_md5=function(r){return q(h(c(r),r.length*l))};this.b64_md5=function(r){return p(h(c(r),r.length*l))};this.hex_hmac_md5=function(r,s){return q(f(r,s))};this.b64_hmac_md5=function(r,s){return p(f(r,s))};function b(r){return q(h(c(r),r.length*l))}function g(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}function h(C,w){C[w>>5]|=128<<((w)%32);C[(((w+64)>>>9)<<4)+14]=w;var B=1732584193;var A=-271733879;var z=-1732584194;var y=271733878;for(var t=0;t<C.length;t+=16){var v=B;var u=A;var s=z;var r=y;B=k(B,A,z,y,C[t+0],7,-680876936);y=k(y,B,A,z,C[t+1],12,-389564586);z=k(z,y,B,A,C[t+2],17,606105819);A=k(A,z,y,B,C[t+3],22,-1044525330);B=k(B,A,z,y,C[t+4],7,-176418897);y=k(y,B,A,z,C[t+5],12,1200080426);z=k(z,y,B,A,C[t+6],17,-1473231341);A=k(A,z,y,B,C[t+7],22,-45705983);B=k(B,A,z,y,C[t+8],7,1770035416);y=k(y,B,A,z,C[t+9],12,-1958414417);z=k(z,y,B,A,C[t+10],17,-42063);A=k(A,z,y,B,C[t+11],22,-1990404162);B=k(B,A,z,y,C[t+12],7,1804603682);y=k(y,B,A,z,C[t+13],12,-40341101);z=k(z,y,B,A,C[t+14],17,-1502002290);A=k(A,z,y,B,C[t+15],22,1236535329);B=d(B,A,z,y,C[t+1],5,-165796510);y=d(y,B,A,z,C[t+6],9,-1069501632);z=d(z,y,B,A,C[t+11],14,643717713);A=d(A,z,y,B,C[t+0],20,-373897302);B=d(B,A,z,y,C[t+5],5,-701558691);y=d(y,B,A,z,C[t+10],9,38016083);z=d(z,y,B,A,C[t+15],14,-660478335);A=d(A,z,y,B,C[t+4],20,-405537848);B=d(B,A,z,y,C[t+9],5,568446438);y=d(y,B,A,z,C[t+14],9,-1019803690);z=d(z,y,B,A,C[t+3],14,-187363961);A=d(A,z,y,B,C[t+8],20,1163531501);B=d(B,A,z,y,C[t+13],5,-1444681467);y=d(y,B,A,z,C[t+2],9,-51403784);z=d(z,y,B,A,C[t+7],14,1735328473);A=d(A,z,y,B,C[t+12],20,-1926607734);B=n(B,A,z,y,C[t+5],4,-378558);y=n(y,B,A,z,C[t+8],11,-2022574463);z=n(z,y,B,A,C[t+11],16,1839030562);A=n(A,z,y,B,C[t+14],23,-35309556);B=n(B,A,z,y,C[t+1],4,-1530992060);y=n(y,B,A,z,C[t+4],11,1272893353);z=n(z,y,B,A,C[t+7],16,-155497632);A=n(A,z,y,B,C[t+10],23,-1094730640);B=n(B,A,z,y,C[t+13],4,681279174);y=n(y,B,A,z,C[t+0],11,-358537222);z=n(z,y,B,A,C[t+3],16,-722521979);A=n(A,z,y,B,C[t+6],23,76029189);B=n(B,A,z,y,C[t+9],4,-640364487);y=n(y,B,A,z,C[t+12],11,-421815835);z=n(z,y,B,A,C[t+15],16,530742520);A=n(A,z,y,B,C[t+2],23,-995338651);B=i(B,A,z,y,C[t+0],6,-198630844);y=i(y,B,A,z,C[t+7],10,1126891415);z=i(z,y,B,A,C[t+14],15,-1416354905);A=i(A,z,y,B,C[t+5],21,-57434055);B=i(B,A,z,y,C[t+12],6,1700485571);y=i(y,B,A,z,C[t+3],10,-1894986606);z=i(z,y,B,A,C[t+10],15,-1051523);A=i(A,z,y,B,C[t+1],21,-2054922799);B=i(B,A,z,y,C[t+8],6,1873313359);y=i(y,B,A,z,C[t+15],10,-30611744);z=i(z,y,B,A,C[t+6],15,-1560198380);A=i(A,z,y,B,C[t+13],21,1309151649);B=i(B,A,z,y,C[t+4],6,-145523070);y=i(y,B,A,z,C[t+11],10,-1120210379);z=i(z,y,B,A,C[t+2],15,718787259);A=i(A,z,y,B,C[t+9],21,-343485551);B=j(B,v);A=j(A,u);z=j(z,s);y=j(y,r)}return Array(B,A,z,y)}function e(z,v,u,r,y,w){return j(m(j(j(v,z),j(r,w)),y),u)}function k(v,u,A,z,r,y,w){return e((u&A)|((~u)&z),v,u,r,y,w)}function d(v,u,A,z,r,y,w){return e((u&z)|(A&(~z)),v,u,r,y,w)}function n(v,u,A,z,r,y,w){return e(u^A^z,v,u,r,y,w)}function i(v,u,A,z,r,y,w){return e(A^(u|(~z)),v,u,r,y,w)}function f(t,w){var v=c(t);if(v.length>16){v=h(v,t.length*l)}var r=Array(16),u=Array(16);for(var s=0;s<16;s++){r[s]=v[s]^909522486;u[s]=v[s]^1549556828}var x=h(r.concat(c(w)),512+w.length*l);return h(u.concat(x),512+128)}function j(r,u){var t=(r&65535)+(u&65535);var s=(r>>16)+(u>>16)+(t>>16);return(s<<16)|(t&65535)}function m(r,s){return(r<<s)|(r>>>(32-s))}function c(u){var t=Array();var r=(1<<l)-1;for(var s=0;s<u.length*l;s+=l){t[s>>5]|=(u.charCodeAt(s/l)&r)<<(s%32)}return t}function q(t){var s=o?"0123456789ABCDEF":"0123456789abcdef";var u="";for(var r=0;r<t.length*4;r++){u+=s.charAt((t[r>>2]>>((r%4)*8+4))&15)+s.charAt((t[r>>2]>>((r%4)*8))&15)}return u}function p(u){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var w="";for(var s=0;s<u.length*4;s+=3){var v=(((u[s>>2]>>8*(s%4))&255)<<16)|(((u[s+1>>2]>>8*((s+1)%4))&255)<<8)|((u[s+2>>2]>>8*((s+2)%4))&255);for(var r=0;r<4;r++){if(s*8+r*6>u.length*32){w+=a}else{w+=t.charAt((v>>6*(3-r))&63)}}}return w}};
	
//随机用户ID
function getRanID(){
	var r=Math.random()*1000000000000000000;
	r=parseInt(r);
	return r;
}

//判断设备
function getMobileType(){
	var t="unknow";
	if( navigator.userAgent.match(/Android/i) ) { t = "android" }
	if( navigator.userAgent.match(/BlackBerry/i) ) { t = "blackberry" }
	if( navigator.userAgent.match(/iPhone|iPad|iPod/i) ) { t = "ios" }
	if( navigator.userAgent.match(/IEMobile/i) ) { t = "window" }
	return t;
}

//处理长链参数
function initMoblog(a){
	var m={},t1,t2;
	if(!a){return m}
	t1=a.split(",");
	for ( var i in t1 ){
		t2=t1[i].split(":");
		m[t2[0]]=t2[1];
		//m[t2[0]]=unescape(unescape(t2[1]));
	}
	return m;
}

//版本控制
function vSetting(ver){
	var m=initMoblog(moblog),v,minVer;
	minVer=ver||501;
	//公交情况下，直接返回可用
	m.pd=parseInt(m.pd);
	if(m.pd==5||m.pd==6||m.pd==11||m.pd==12){
		return true;
	}
	//不存在就隐藏
	if(!m.v){
		return false;
	}
	//小于的版本隐藏
	v=parseInt(m.v.substr(0,(minVer+"").length));
	if(v<minVer){
		return false;
	}else{
		return true;
	}
}

//获取滚动高度
function getScrollTop(){
	var scrollTop=0;
	if(document.documentElement&&document.documentElement.scrollTop)
	{
		scrollTop=document.documentElement.scrollTop;
	}
	else if(document.body)
	{
		scrollTop=document.body.scrollTop;
	}
	return scrollTop;
}

//设置滚动高度
function setScrollTop(a){
	var scrollTop=0;
	$(document.body).animate({ 
    		scrollTop: a
  	}, 1000 );
	//if(document.documentElement&&document.documentElement.scrollTop)
	//{
	//	document.documentElement.scrollTop=a;
	//}
	//else if(document.body)
	//{
	//	document.body.scrollTop=a;
	//}
}

//获取页面可视区域宽高
function getPageInnerSize(){
	var ie5=document.all&&document.getElementById&&!navigator.userAgent.match(/Opera/);
	var ns6=document.getElementById&&!document.all;
	var opera=navigator.userAgent.match(/Opera/);
	var h,w;
	if (ie5 || opera) {
  		h = document.body.clientHeight
  		w = document.body.clientWidth
 	}else if (ns6) {
  		h = window.innerHeight
  		w = window.innerWidth
 	}
	return {"width":w,"height":h}
}

//获取页面参数部分
function getPageParameter(){
	var urlArr = location.href.split(/\?|\#/)			
		,url0 = urlArr[0]
		,url1 = urlArr[1]
		,url2 = urlArr[2];
	//
	if(url2){
		url1 = url1 + '#' + url2
	}
	return url1;
}

//设置页面标题
function setPageTitle(a){
	setTimeout(function(){
		qy.iface.send("setNavigationBarTitle",{"title":a});
	},200);
}

//设置日志用全局uv
var _logUV;
(function(){
	var m=initMoblog(getParameter("moblog"));
	_logUV = m.kd||m.u||"";
})()

/**
*获取URL中的参数值
*1、支持获取?和#后面的参数
*2、自动utf-8和escape编码的解码
*3、GBK编码将不做处理，原样吐出
*@param a String ->key 参数名
*@return String 参数值
*/
function getParameter(a){
	//var b,c,d,e="",f,g,h=/[^\u4E00-\u9FA5\w\s]/g,i,j;
	var b,c,d,e="",f,g,h=/[\u4E00-\u9FA5]/g,i,j;
	b=window.location.href.replace(/&amp;/g,"&");
	d=(c=b.indexOf("?"))>-1?c:b.indexOf("#");
	if(a!=null&&d>-1){
		b=b.substring(d+1);
		b=b.replace(/#/g,"&");
		c=b.split("&");
		for(d=0;d<c.length;d++){
			var f,g;f=c[d].split("=")[0];
			g=c[d].substring(c[d].indexOf("=")+1);
			try{
				i=j="";
				i=decodeURIComponent(f);
				j=decodeURIComponent(g);
				f=!h.test(i)?f:i;
				g=!h.test(j)?g:j;
			}catch(ex){}
			
			//两遍
			f=f.indexOf("%25")>-1?unescape(f):f;
			g=g.indexOf("%25")>-1?unescape(g):g;		
			//一遍
			f=unescape(f);
			g=unescape(g);	
			//返回
			if(f==a){e=g}
		}
	}
	return e
}
window.getParam=getParameter;


/**
*设置URL参数
*@param a String ->key 参数名
*@param b String ->value 参数值
*@param c boolean ->isClear 是否清除之前的参数，为真则清除原来url的所有hash参数，为假则一直保留之前的所有参数，只做更新
*@param d Number -> delay 指定延迟设定时间，缺省为1秒（用于避免短时间内设置多次，导致浏览器出现啪啪啪的声音）
*/
function _setUrlHashParam(a,b,c,d){
	var e=window.location.hash.replace(/#/,""),f,g,k="_URLHASH_",h=window[k],i;
	//
	if(!h&&e){
		h=window[k]={};
		f=e.split("&");
		for(i=0;i<f.length;i++){
			g=f[i].split("=");
			if(g[0]&&g[1]) h[g[0]]=g[1]
		}
	}
	//如果无参数key和value，则清除url的所有hash参数
	//如果isClear为真则清除原来url的所有hash参数，为假则一直保留之前的所有参数，key已存在则做更新，否则添加key及value
	if(!h||(!a&&!b)||c) h=window[k]={};
	h[a]=b;
	//延迟设置是为了避免短时间内设置多次，导致浏览器出现啪啪啪的声音
	window.clearTimeout(window[k+"T"]);
	window[k+"T"]=window.setTimeout(function(){
		var i,f=[],g;
		for(i in h){
			g=typeof(h[i]);
			if((g=="string"||g=="number")&&h[i]!=null&&h[i]!="")f.push(i+"="+h[i])
		}
		window.location.hash=f.join("&")
	},!d?1000:d)
};


//将时间格式化，便于比较，2012-4-6 10:53:35  to  20120406105335
function formatTime(z){//2012-4-6 10:53:35格式的时间字符串
	var a,a0,a1,b,c,d=z;
	try{
		if(z){
			if(z.indexOf("T")>-1){
				var key = "T"
			}
			else{
				var key = " "
			}
			a = z.split(key);
			a0 = a[0];
			a1 = a[1];
			
			b = [];
			a0 = a0.split("-");
			b.push(parseInt(a0[0],10));
			b.push(parseInt(a0[1],10));
			b.push(parseInt(a0[2],10));
			
			a1 = a1.split(":");
			b.push(parseInt(a1[0],10));
			b.push(parseInt(a1[1],10));
			b.push(parseInt(a1[2],10));
			
			d="";
			for(var i=0;i<b.length;i++){
				c = b[i];
				c = c<10?"0"+c:c;
				d+=c;
			}
			d = parseInt(d,10);
		}
	}
	catch(e){}
	return d;
}