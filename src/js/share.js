wx.ready(function () {
    wx.onMenuShareTimeline({
        title: '七夕情人节', // 分享标题
        link: 'http://ftest.redview.com.cn/qixi/index.html', // 分享链接
        imgUrl: 'http://ftest.redview.com.cn/qixi/src/img/share.jpg',
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

    wx.onMenuShareAppMessage({
        title: '七夕情人节', // 分享标题
        desc: '七夕情人节', // 分享描述
        link: 'http://ftest.redview.com.cn/qixi/index.html', // 分享链接
        imgUrl: 'http://ftest.redview.com.cn/qixi/src/img/share.jpg',
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空,
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

    audio.play();
    audio.loop = true;
});