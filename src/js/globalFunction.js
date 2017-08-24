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

        var logo = document.getElementById('logo');
        logo.style.transform = 'scale('+scale*2/3+')';
        logo.style.WebkitTransform = 'scale('+scale*2/3+')';
        logo.style.top = 20*scale*2/3;
        logo.style.left = 30*scale*2/3;
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