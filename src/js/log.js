(function(){
    var user=(new Date()).getTime();
    function uniqueId() {
        var d = Math.random,c = parseInt;
        return Number(new Date()) + c(10 * d()) + c(10 * d()) + c(10 * d())
    };
    function CLog() {};
    CLog.site = "https://pb.sogou.com/cl.gif";
    CLog.write = function(i, d) {
        var m = CLog.debug;
        if (!m) {
            m = self.location.href;
            m = m.substring(m.indexOf("?") + 1);
            CLog.debug = m.indexOf("debug=go2maplsp") > -1 ? 1 : -1
        }
        if (m == 1) {
            var l = "textAreaDebug";
            var k = document.getElementById(l);
            if (!k) {
                k = document.createElement("textarea");
                k.id = l;
                k.style.width = "90%";
                k.style.height = "300px";
                g = document.createElement("input");
                g.type = "button";
                g.value = "clear debug info";
                g.onclick = function() {
                    k.value = ""
                };
                document.body.appendChild(g);
                document.body.appendChild(k)
            }
            if (!d) {
                d = "information"
            }
            var j = new Date();
            k.value += j.toGMTString() + " " + j.getMilliseconds() + "ms->" + d + "\n" + i + "\n\n"
        }
    };
    CLog.gid = uniqueId();
    CLog.send = function() {
        var a = arguments,u = uniqueId,c = "img" + u(),d,f = "",g,h,k = "",s = "SMAPUVID=",v = "YYID=",w = "",b = CLog.site,e =CLog.refer,ur;
        if (a.length == 0) {
            return
        }
        with (document) {
            if (cookie.indexOf(s) < 0) {
                cookie = s + u() + ";path=/;expires=Tue, 12-Jul-2088 00:00:00 GMT"
            }
            if (cookie.indexOf(v) > -1) {
                w = cookie.match(/YYID=([^;]*)/g);
                w = w[0].replace(/YYID=/g, "")
            }
            k = cookie.match(/SMAPUVID=([^;]*)/g);
            if(k){ k = k[0].replace(/SMAPUVID=/g, ""); } else { k="" }
            k=_logUV||k||"";//Ê¹ÓÃÉè±¸ID»òcookiesÖµ
            g = "&&referrer=" + (!e ? "" : e + "||") + referrer.replace(/(&&)+/, "&") + "&&r=" + u()
        }
        f += "uvid=" + k + (!w ? "" : "&yid=" + w);
        for (var i = 0; i < a.length; i++) {
            if (a[i]) {
                f += "&" + a[i];
                d = /^type=(map|request)$/gi.test(a[i])
            }
        }
        if (CLog.isApp && d) {
            return
        }
        h = (!b ? "" : b) + "?" + f;
        h = h + "&user="+user;
        h = h + (CLog.constant?"&"+CLog.constant:"");
        h = h + "&r=" + uniqueId();
        var ltime = new Date();
        h = h + "&time=" + Date.parse(new Date());
        window.setTimeout("CLog.createSender('" + c + "','" + h + "')", 10)
    };
    CLog.createSender = function(d, c) {
        var f = document.createElement("img");
        f.id = d;
        f.style.display = "none";
        f.style.width = "1px";
        f.style.height = "1px";
        document.body.appendChild(f);
        f.onerror = function() {
            document.body.removeChild(f)
        };
        f.src = c
    };
    window["CLog"]=CLog;
//Ìí¼ÓÈÕÖ¾¼àÌý
})()


