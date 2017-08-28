
qy.orignUrl = "http://map.sogou.com/m/shouji4/activity/out/20150422/";
//qy.orignUrl = "http://sg.mengine.map.sogou.com/shouji4_dev/activity/src/20150422/";

qy.signUrl = "http://promote.map.sogou.com/mapweixin/ticket/sign";
//qy.signUrl = "http://10.136.116.56:8077/mapweixin/ticket/sign";

qy.wxjsUrl = "http://res.wx.qq.com/open/js/jweixin-1.0.0.js";
qy.shareUrl = qy.orignUrl + "nav.html?share=true";

function checkWX() {
    var ua = navigator.userAgent;
    if(/micromessenger/ig.test(ua)){
        return 1;
    }
    return 0;
}
qy.iswx = checkWX();

function loadJs(sid,jsurl,callback){
      var nodeHead = document.getElementsByTagName('head')[0];
      var nodeScript = null;
      if(document.getElementById(sid) == null){
          nodeScript = document.createElement('script');
          nodeScript.setAttribute('type', 'text/javascript');
          nodeScript.setAttribute('src', jsurl);
          nodeScript.setAttribute('id',sid);
          if (callback != null) {
              nodeScript.onload = nodeScript.onreadystatechange = function(){
                  if (nodeScript.ready) {
                      return false;
                  }
                  if (!nodeScript.readyState || nodeScript.readyState == "loaded" || nodeScript.readyState == 'complete') {
                      nodeScript.ready = true;
                      callback();
                  }
              };
          }
          nodeHead.appendChild(nodeScript);
      } else {
          if(callback != null){
              callback();
          }
      }
  }

function actFn(){
	this.shareObj = {
			"desc" : "",		//内容
			"title" : "",		//标题
			"linkimg" : "",		//图片
			"linkurl" : ""		//链接
		};
}
var afp = actFn.prototype;
afp.initShareWX = function(a,b,c){
		var t=this;
		if(moblog){
			t.initMapappShare();
		}else{
			var wdf = {
				desc: t.shareObj.desc,
				title: t.shareObj.title,
				link: t.shareObj.linkurl,
				imgUrl: t.shareObj.linkimg,
				success:function(){
					t.sendLog("wx_st_me_sc");
				},
				fail:function(){
					t.sendLog("wx_st_me_fi");
				},
				cancel:function(){
					t.sendLog("wx_st_me_cl");
				}
			},wdtl={
				desc: t.shareObj.title,
				title: t.shareObj.desc,
				link: t.shareObj.linkurl,
				imgUrl: t.shareObj.linkimg,
				success:function(){
					t.sendLog("wx_st_tl_sc");
				},
				fail:function(){
					t.sendLog("wx_st_tl_fi");
				},
				cancel:function(){
					t.sendLog("wx_st_tl_cl");
				}
			}
			if(t.wx){
				t.initWX(wdf,wdtl);
			}else{
				t.loadWXTool(wdf,wdtl);
			}
		}
	}
	afp.callMapappShare = function(){
		var t=this;

		var b={};
		var p=qy.iface.getNewShareInfo();
		p.title = t.shareObj.title;
		p.url= t.shareObj.linkurl+(t.shareObj.linkurl.indexOf("?")>0?"&":"?")+"fromSQ=go2map";
		p.imgUrl=t.shareObj.linkimg;
		p.desc=t.shareObj.desc;
		
		b.sharedInfo = p;
		qy.iface.send("shareClickedinWeb",b);	
	};
	afp.clickShare = function(cb){
		var m=moblog&&initMoblog(moblog);
		var t = this;
		if(m&&m.v>601000){
			t.callMapappShare();
		}else{
			cb();
		}		
	};
	afp.initMapappShare = function(){
		var t=this;
		
		var b={};
		var p=qy.iface.getNewShareInfo();
		p.title = t.shareObj.title;
		p.url= t.shareObj.linkurl+(t.shareObj.linkurl.indexOf("?")>0?"&":"?")+"fromSQ=go2map";
		p.imgUrl=t.shareObj.linkimg;
		p.desc=t.shareObj.desc;

		b.sharedInfo = p;
		b.poiInfo = qy.iface.getNewPoiInfo();
		qy.iface.send("setPoiData",b);
	};
	
	afp.loadWXTool = function(wxf,wxtl,loc){
		var t=this;
		if(qy.iswx){
			load(function(){
				t.initWX(wxf,wxtl);
			});
		}
		function load(cb){
			loadJs("wxt",qy.wxjsUrl, function(data){
			  jsClass(qy.signUrl,function(data){
					if(data&&data.code==0){
						var options = data.response||{};
						options.jsApiList = [
							'checkJsApi',
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'onMenuShareQQ',
							'onMenuShareWeibo'
						];
						//options.debug=(wxdebug=="1");
						options.debug=false;
						if(wx){
							t.wx = wx;
							wx.config(options);
							cb&&cb();
						}
					}
				},"callbackWXTool");
			})
		}
	}
	afp.initWX = function(f,tl){
		var t=this;
		wx.ready(function() {
			wx.onMenuShareAppMessage(f);
			wx.onMenuShareTimeline(tl);
		});
	}
	afp.sendLog = function(a){
		try{
			sendlog(a);
		}catch(e){}
	};