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
    },
};

Global.setElementsToStage = function (name,elements){
    this.stage[name] = elements;
}

setDefaultValue = function (target,width,height,x,y,scale,alpha){
    target.width = width;
    target.height = height;
    target.position.x = x;
    target.position.y = y;

    if(scale){
        target.scale.x = scale;
        target.scale.y = scale;
    }
    if(alpha){
        target.alpha = alpha;
    }
}

setTimeLine = function (start,end,callback){
    // if()
}