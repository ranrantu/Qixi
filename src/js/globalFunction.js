var Global = Global || {};

Global = {
    stage:{},
    onScreenResize:function (){
        //标准屏幕尺寸
        var phoneWidth = 320;
        // var phoneHeight = 2016;

        var contain = document.getElementsByClassName('pixi-canvas');
        var w = window.innerWidth;
        // var h = document.body.clientHeight;
        // var v = phoneWidth/phoneHeight;
        var scale = w/phoneWidth;

        for(var i=0;i<contain.length;i++){
            contain[i].style.transform = 'scale('+scale+')';
            contain[i].style.WebkitTransform = 'scale('+scale+')';
        }
        var music = document.getElementById('music');
        music.style.transform = 'scale('+scale/2+')';
        music.style.WebkitTransform = 'scale('+scale/2+')';
        music.style.top = 20 * scale/2 + 'px';
        music.style.right = 10 * scale/2 + 'px';
    },
};

Global.setElementsToStage = function (name,elements){
    this.stage[name] = elements;
}

setDefaultValue = function (target,width,height,x,y,scale,anchor,alpha){
    if(width) target.width = width;
    if(height) target.height = height;
    target.position.x = x;
    target.position.y = y;

    if(scale){
        target.scale.set(scale);
    }
    if(anchor){
        target.anchor.set(anchor);
    }
    if(alpha || alpha===0){
        target.alpha = alpha;
    }
}


function supportPreload() {
    var support = false;
    try {
        (URL || webkitURL).createObjectURL;
        support = true;
    }
    catch (e) {
        console.log('Do not support preload');
    }
    return support;
}

function loadAudioSource(src) {
    return new Promise(function (resolve) {
        var URLMake = URL || webkitURL;
        var xhr = new XMLHttpRequest();
        audio = document.createElement('audio');
        xhr.open('GET', src + '?' + Math.random());
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function (e) {
            if (xhr.status === 200 && xhr.readyState === 4) {
                var blob = xhr.response;
                audio.src = URLMake.createObjectURL(blob);
                // document.addEventListener('touchstart', function (e) {

                // });
                audio.autoplay = 'autoplay';
                audio.loop = true;
                audio.style.display = 'none';
                resolve(true);
            }
        };
        xhr.send();
    })
}