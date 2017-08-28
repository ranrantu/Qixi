var qy = qy || {};

qy.shareInfo = {
    title: '当七夕遇上星际动乱',
    desc: '问：若银河系大乱，牛郎织女七夕如何相聚？',
    previewImageUrl:'http://sg.mengine.map.sogou.com/map_sogou/shouji4/activity/out/maze/assets/share.jpg',
    url: 'http://sg.mengine.map.sogou.com/map_sogou/shouji4/activity/out/maze/index.share.html',
    actionName: 'callShareBack'
}

function setPoiData(p){
    var b={"sharedInfo":p};
    qy.iface.send("setPoiData",b);
}

function Interface(){

    var t=this,bridge,mu="https://s.map.sogou.com/#",waitOpen=false;
    var _webInfo=function(){
        return {
            "title"					: "",
            "url"   				: "",
            "type"  				: "0",
            "toolBar" 				: "0",
            "backButtonStyle"			: "0"
        }
    }
    var _appInfo=function(){
        return {
            "name"					: "",	//Ó¦ÓÃ³ÌÐòÃû³Æ
            "size"   				: "",	//Ó¦ÓÃ³ÌÐò°ü´óÐ¡
            "url"  					: "",	//Ó¦ÓÃ³ÌÐòÏÂÔØµØÖ·
            "versionCode" 				: "",	//Ó¦ÓÃ³ÌÐò°æ±¾ºÅ
            "versionName"				: "",	//Ó¦ÓÃ³ÌÐò°æ±¾Ãû³Æ
            "updateTime"				: "",	//Ó¦ÓÃ³ÌÐò¸üÐÂÊ±¼ä
            "changeLog"				: ""	//¸üÐÂÐÅÏ¢
        }
    }
    var _shareInfo=function(){
        return {
            "url"					: "",	//·ÖÏíµÄurl
            "desc"   				: "",	//¶ÌÁ´·ÖÏíÃèÊöÐÅÏ¢
            "imgUrl"  				: "",	//¶ÌÁ´Í¼Æ¬»ñÈ¡url
            "previewImageUrl"  			: ""	//·ÖÏíalertµÄÔ¤ÀÀÌáÊ¾Í¼Æ¬
        }
    }
    var _poiInfo=function(){
        return {
            "name" 					: "",	//Ãû³Æ
            "address" 				: "",	//µØÖ·
            "phone" 				: "",	//µç»°
            "dataid" 				: "",	//dataid
            "cpid" 					: "",	//cpid
            "uid" 					: "",	//uid
            "type" 					: "",	//0£ºÆäËûÀà 1£º²ÍÒûÀà 2£º¾ÆµêÀà
            "coordx" 				: "",	//Ä«¿¨ÍÐ×ø±êx
            "coordy" 				: ""	//Ä«¿¨ÍÐ×ø±êy
        }
    }
    var times={};								//ÑÓÊ±µÄµÈ´ý¶ÔÏó
    var cbFunction;								//¿Í»§¶Ë»Øµ÷º¯Êý


    //iosÏµÍ³
    document.addEventListener('WebViewJavascriptBridgeReady', onBridgeReady, false);
    function onBridgeReady(event) {
        bridge = event.bridge
        bridge.init();
        //»Øµ÷¼àÌý
        bridge.registerHandler('iosCalJavascript', function(data) {
            cbFunction(data);
        })
    }

    //androidÏµÍ³»Øµ÷
    window.androidCalWebView = function(data){
        alert(1);
        cbFunction(unescape(unescape(data)));
    }

    //·¢ËÍ
    //a	ÀàÐÍ
    //b	²ÎÊý
    //c	·µ»Ø
    this.send=function(a,b){
        //ÕûÀí²ÎÊý
        var p=crParam(a,b);
        if(waitOpen){return;}
        //¹Ø±Õ¿ÉÄÜµÄµÈ´ý£¬µ±Ç°ÏàÍ¬µÄ
        clearTimeout(times[a]);
        //·¢ËÍ
        if(bridge){
            bridge.send(p);
        }else if(window.android&&window.android.webViewCalAndroid){
            p=obj2str(p);
            window.android.webViewCalAndroid(p);
        }else{
            //if(!moblog){
            //var moblog="";
            if(a=="openWeb"||a=="openWithBrowser"||a=="showActivity"){
                window.location.href=b.webInfo.url;
            }
            if(a=="showOnMap"){
                if(b.poiInfo.uid){
                    window.location.href=mu+"uids="+b.poiInfo.uid;
                }else if(b.poiInfo.dataid){
                    window.location.href=mu+"dataid="+b.poiInfo.dataid;
                }else{
                    window.location.href=mu+"tip="+escape(b.poiInfo.name)+","+b.poiInfo.coordx+","+b.poiInfo.coordy;
                }
            }
            if(a=="showSubject"){
                window.location.href=b.webInfo.url;
            }
            //}
            //µÈ´ýÆ»¹ûÇé¿öÏÂµÄÑÓÊ±
            if(a=="setPoiData"||a=="setNavigationBarTitle"||a=="mapOrigin"||a=="toolBarOrigin"){
                wait(a,b);
            }
        }
        //Èç¹ûÊÇÖ¸¶¨Ìá½»£¬µÈ´ýÒ»Ãë¡£
        if(a=="openWeb"||a=="showOnMap"){
            waitOpen=true;
            setTimeout(function(){
                waitOpen=false;
            },1000)
        }
    }

    //Èç¹ûÊÇ·µ»Ø¹²ÏíÐÅÏ¢£¬ÄÇÃ´£¬µÈ´ýÖ¸¶¨´ÎÊý´Î
    function wait(a,b,n){
        //¹Ø±ÕµÈ´ý
        clearTimeout(times[a]);
        //
        if(!n){n=12}
        //ÓÐÁË¾ÍÌá½»
        if(bridge){
            t.send(a,b);return;
        }
        //µ½´ÎÊý¾ÍÍ£Ö¹
        if(n==1){return;}
        //·ñÔòÑ­»·
        times[a] = setTimeout(function(){
            wait(a,b,n-1);
        },200)
    }

    //ÕûÀí²ÎÊý
    function crParam(a,b){
        b["WTON_ACTION"]=a;
        return b;
    }

    //·µ»Øwebinfo
    this.getNewWebInfo=function(){
        return _webInfo();
    }
    //·µ»Øappinfo
    this.getNewAppInfo=function(){
        return _appInfo();
    }
    //·µ»Øshareinfo
    this.getNewShareInfo=function(){
        return _shareInfo();
    }
    //·µ»Øpoiinfo
    this.getNewPoiInfo=function(){
        return _poiInfo();
    }

    //ÉèÖÃ¿Í»§¶ËµÄ»Øµ÷
    this.setCallBack=function(a){
        cbFunction = a;
    }

    //²ÎÊý±àÂë
    function obj2str(o){
        var r=[],b;
        if(typeof o=="string") return "\""+escape(o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t"))+"\"";
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

}

qy.iface = new Interface();
setPoiData(qy.shareInfo);