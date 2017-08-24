

GAME.sceneC = function (){
    this.baseUrl = './src/img/sceneC/';
}

GAME.sceneC.prototype.createSceneC = function (){
    const baseUrl = this.baseUrl;

    this.background = new PIXI.Sprite.fromImage(baseUrl+'bg.jpg');
    setDefaultValue(this.background,640,1478,0,0);
    this.light = new PIXI.Sprite.fromImage(baseUrl+'light.png');
    setDefaultValue(this.light,400,573,127,772,null,null,0);
    this.logo = new PIXI.Sprite.fromImage(baseUrl+'logo.jpg');
    setDefaultValue(this.logo,157,43,35,28);
    this.imgA = new PIXI.Sprite.fromImage(baseUrl+'img1.jpg');
    setDefaultValue(this.imgA,298,292,36,105);
    this.textA = new PIXI.Sprite.fromImage(baseUrl+'text1.png');
    setDefaultValue(this.textA,233,78,363,176);
    this.imgB = new PIXI.Sprite.fromImage(baseUrl+'img2.jpg');
    setDefaultValue(this.imgB,251,251,370,459);
    this.textB = new PIXI.Sprite.fromImage(baseUrl+'text2.png');
    setDefaultValue(this.textB,320,80,30,480);
    this.textC = new PIXI.Sprite.fromImage(baseUrl+'text3.png');
    setDefaultValue(this.textC,302,79,30,583);
    this.textD = new PIXI.Sprite.fromImage(baseUrl+'text4.png');
    setDefaultValue(this.textD,542,713,30,720);
    this.smalls = new PIXI.Sprite.fromImage(baseUrl+'smalls.jpg');
    setDefaultValue(this.smalls,82,79,286,772);
    this.bigs = new PIXI.Sprite.fromImage(baseUrl+'bigs.jpg');
    setDefaultValue(this.bigs,398,388,127,958,null,null,0);

    this.sArray = [];
    for(var i=0;i<6;i++){
        (function (target){
            var s = new PIXI.Sprite.fromImage(baseUrl+'bigs.jpg');
            var y = 830 + i*64;
            var scale = 0.2 + i*0.16;
            setDefaultValue(s,398,388,327,y,scale,.5,0);
            target.sArray.push(s);
        })(this)

    }

    this.background.addChild(this.light);
    this.background.addChild(this.imgA);
    this.background.addChild(this.textA);
    this.background.addChild(this.imgB);
    this.background.addChild(this.textB);
    this.background.addChild(this.textC);
    this.background.addChild(this.textD);
    this.background.addChild(this.smalls);
    this.background.addChild(this.bigs);
    // this.background.addChild(this.logo);
    for(var i=0;i<6;i++){
        this.background.addChild(this.sArray[i])
    }

    var elements = {
        'background':this.background,
    };
    Global.setElementsToStage('sceneC',elements);
}

GAME.sceneC.prototype.moving = function (){
    var lc = GAME.line.lineC;
    var lb = GAME.line.lineB;


    if(lb<=-2197){
        this.background.x = -((-lb)-2197-640);
    }else{
        this.background.x = 640;
    }
    // this.background.x = 0;
    this.background.y = lc;
    // this.logo.position.y = -lc+28;

    if(lc<=-270 && lc>=-320){
        this.light.alpha = ((-lc)-270)*0.004;
        this.smalls.alpha = 1-((-lc)-270)*0.004;
        this.bigs.alpha = ((-lc)-270)*0.004;

        var length = (-lc)-270;

        for(var i=0;i<6;i++){
            var alpha = Math.cos(Math.PI/2 + Math.PI*(i-length)/80);
            if(alpha<.99){
                alpha *= .5;
            }
            this.sArray[i].alpha = alpha;
        }
    }else if(lc>=-270){
        for(var i=0;i<6;i++){
            this.sArray[i].alpha = 0;
        }
        this.smalls.alpha = 1;
        this.light.alpha = 0;
        this.bigs.alpha = 0;
    }else{
        for(var i=0;i<6;i++){
            this.sArray[i].alpha = 0;
        }
        this.light.alpha = 0;
        this.smalls.alpha = 0;
        this.bigs.alpha = 1;
    }
}