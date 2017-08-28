var qy = qy || {};

qy.shareInfo = {
    title: '当七夕遇上星际动乱',
    desc: '问：若银河系大乱，牛郎织女七夕如何相聚？',
    previewImageUrl:'http://img04.sogoucdn.com/app/a/100140005/qixi.jpg',
    imgUrl:'http://img04.sogoucdn.com/app/a/100140005/qixi.jpg',
    url: 'http://map.sogou.com/m/shouji4/page/20170825/index.html',
    actionName: 'callShareBack'
}

function setPoiData(p){
    var b={"sharedInfo":p};
    qy.iface.send("setPoiData",b);
}

function Interface() {
    var m = this,
        c, n = "http://map.sogou.com/#",
        d = false;
    var h = function() {
        return {
            title: "",
            url: "",
            type: "0",
            toolBar: "0",
            backButtonStyle: "0"
        }
    };
    var i = function() {
        return {
            name: "",
            size: "",
            url: "",
            versionCode: "",
            versionName: "",
            updateTime: "",
            changeLog: ""
        }
    };
    var g = function() {
        return {
            url: "",
            desc: "",
            imgUrl: "",
            previewImageUrl: ""
        }
    };
    var b = function() {
        return {
            name: "",
            address: "",
            phone: "",
            dataid: "",
            cpid: "",
            uid: "",
            type: "",
            coordx: "",
            coordy: ""
        }
    };
    var a = {};
    var e;
    document.addEventListener("WebViewJavascriptBridgeReady", l, false);
    function l(o) {
        c = o.bridge;
        c.init();
        c.registerHandler("iosCalJavascript",
            function(p) {
                e(p)
            })
    }
    window.androidCalWebView = function(o) {
        e(unescape(unescape(o)))
    };
    this.send = function(q, o) {
        var r = j(q, o);
        if (d) {
            return
        }
        clearTimeout(a[q]);
        if (c) {
            c.send(r)
        } else {
            if (window.android && window.android.webViewCalAndroid) {
                r = k(r);
                window.android.webViewCalAndroid(r)
            } else {
                if (q == "openWeb" || q == "openWithBrowser" || q == "showActivity") {
                    window.location.href = o.webInfo.url
                }
                if (q == "showOnMap") {
                    if (o.poiInfo.uid) {
                        window.location.href = n + "uids=" + o.poiInfo.uid
                    } else {
                        if (o.poiInfo.dataid) {
                            window.location.href = n + "dataid=" + o.poiInfo.dataid
                        } else {
                            window.location.href = n + "tip=" + escape(o.poiInfo.name) + "," + o.poiInfo.coordx + "," + o.poiInfo.coordy
                        }
                    }
                }
                if (q == "showSubject") {
                    window.location.href = o.webInfo.url
                }
                if (q == "setPoiData" || q == "setNavigationBarTitle" || q == "mapOrigin" || q == "toolBarOrigin") {
                    f(q, o)
                }
            }
        }
        if (q == "openWeb" || q == "showOnMap") {
            d = true;
            setTimeout(function() {
                    d = false
                },
                1000)
        }
    };
    function f(p, o, q) {
        clearTimeout(a[p]);
        if (!q) {
            q = 12
        }
        if (c) {
            m.send(p, o);
            return
        }
        if (q == 1) {
            return
        }
        a[p] = setTimeout(function() {
                f(p, o, q - 1)
            },
            200)
    }
    function j(p, o) {
        o.WTON_ACTION = p;
        return o
    }
    this.getNewWebInfo = function() {
        return h()
    };
    this.getNewAppInfo = function() {
        return i()
    };
    this.getNewShareInfo = function() {
        return g()
    };
    this.getNewPoiInfo = function() {
        return b()
    };
    this.setCallBack = function(o) {
        e = o
    };
    function k(t) {
        var s = [],
            p;
        if (typeof t == "string") {
            return '"' + escape(t.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t")) + '"'
        }
        if (typeof t == "undefined") {
            return ""
        }
        if (typeof t == "object") {
            if (t === null) {
                return "null"
            } else {
                if (!t.sort || !t.length) {
                    for (var q in t) {
                        p = /[^\w]/.test(q);
                        if (q != "getClassName" && q != "setTimeout" && q != "eventHandler") {
                            s.push('"' + q + '":' + k(t[q]))
                        }
                    }
                    s = "{" + s.join() + "}"
                } else {
                    for (var q = 0; q < t.length; q++) {
                        s.push(k(t[q]))
                    }
                    s = "[" + s.join() + "]"
                }
            }
            return s
        }
        return t.toString()
    }
};

qy.iface = new Interface();
setPoiData(qy.shareInfo);