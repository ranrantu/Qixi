wx.ready(function () {
    wx.onMenuShareTimeline({
        title: '当七夕遇上星际动乱', // 分享标题
        link: 'http://map.sogou.com/m/shouji4/page/20170825/index.html', // 分享链接
        imgUrl: 'http://img04.sogoucdn.com/app/a/100140005/qixi.jpg',
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

    wx.onMenuShareAppMessage({
        title: '当七夕遇上星际动乱', // 分享标题
        desc: '问：若银河系大乱，牛郎织女七夕如何相聚？', // 分享描述
        link: 'http://map.sogou.com/m/shouji4/page/20170825/index.html', // 分享链接
        imgUrl: 'http://img04.sogoucdn.com/app/a/100140005/qixi.jpg',
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空,
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

    wx.error(function (e){
        alert(e)
    })

    audio.play();
    audio.loop = true;
});