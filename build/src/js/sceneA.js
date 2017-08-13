GAME.sceneA = function (){
    this.bgTexture = new PIXI.Texture.fromImage('./src/img/scene1.jpg');
}

GAME.sceneA.prototype.createSceneA = function (){
    this.background = new PIXI.Container();
    setDefaultValue(this.background,640,4897,0,0);

    this.bgPic = new PIXI.Sprite(this.bgTexture);
    setDefaultValue(this.bgPic,640,4897,0,0);

    this.planetTop = new PIXI.Sprite.fromImage('./src/img/planet_top.png');
    setDefaultValue(this.planetTop,331,142,309,0);

    this.starmapA = new PIXI.Sprite.fromImage('./src/img/starmap1.png');
    setDefaultValue(this.starmapA,127,150,495,328);

    this.starmapB = new PIXI.Sprite.fromImage('./src/img/starmap2.png');
    setDefaultValue(this.starmapB,332,281,71,717);

    this.smallStarATexture = new PIXI.Texture.fromImage('./src/img/small-star1.png');
    var starAs = [];
    var starAsLocation = [
        {x:123,y:151,scale:.5},
        {x:308,y:391,scale:1},
        {x:420,y:490,scale:.7},
        {x:540,y:180,scale:.5},
        {x:153,y:661,scale:.8},
        {x:363,y:869,scale:.6},
    ];
    for(var i=0;i<starAsLocation.length;i++){
        var starA = new PIXI.Sprite(this.smallStarATexture);
        setDefaultValue(starA,68*starAsLocation[i].scale,65*starAsLocation[i].scale,starAsLocation[i].x,starAsLocation[i].y);
        starAs.push(starA);
    }

    this.smallStarBTexture = new PIXI.Texture.fromImage('./src/img/small-star2.png');
    this.smallStarB = new PIXI.Sprite.fromImage('./src/img/small-star2.png');
    setDefaultValue(this.smallStarB,53,53,100,200);

    this.comet = new PIXI.Sprite.fromImage('./src/img/comet.png');
    setDefaultValue(this.comet,416,204,204,1035,0.5);

    this.earth = new PIXI.Sprite.fromImage('./src/img/earth.png');
    setDefaultValue(this.earth,361,254,302,1243);

    this.boom = new PIXI.Sprite.fromImage('./src/img/boom.png');
    setDefaultValue(this.boom,266,206,244,1135);

    this.loader = new PIXI.Sprite.fromImage('./src/img/loader.png');
    setDefaultValue(this.loader,597,74,25,1955);

    this.loaderInner = new PIXI.Sprite.fromImage('./src/img/loader-inner.png');
    setDefaultValue(this.loaderInner,0,49,11,12);

    this.loaderText = new PIXI.Sprite.fromImage('./src/img/loader-text.png');
    setDefaultValue(this.loaderText,285,116,150,-22);

    this.background.addChild(this.bgPic);
    for(var i=0;i<starAs.length;i++){
        this.background.addChild(starAs[i]);
    }
    this.background.addChild(this.smallStarB);
    this.background.addChild(this.starmapA);
    this.background.addChild(this.starmapB);
    this.background.addChild(this.planetTop);
    this.background.addChild(this.comet);
    this.background.addChild(this.earth);
    this.background.addChild(this.boom);
    this.background.addChild(this.loader);

    this.loader.addChild(this.loaderInner);
    this.loader.addChild(this.loaderText);

    var elements = {
        'background':this.background,
    };
    Global.setElementsToStage('sceneA',elements);

    this.count = 0;
    this.bgScale = true;
}

GAME.sceneA.prototype.moving = function (){
    if(this.bgScale){
        this.count += 0.01;

        this.bgPic.scale.x = 1.05 + 0.05*Math.sin(this.count);
        this.bgPic.scale.y = 1.01 + 0.01*Math.cos(this.count);
        this.planetTop.scale.x = 1.1 + 0.1*Math.cos(this.count);
        this.planetTop.scale.y = 1.1 + 0.1*Math.cos(this.count);
        this.planetTop.position.x = 309 + 2 + 2*Math.sin(this.count);
        this.planetTop.position.y = 0 - 10 + 10*Math.sin(this.count);
        this.starmapA.alpha = 0.7+0.3*Math.sin(this.count*5);
        this.starmapB.alpha = 0.7+0.3*Math.cos(this.count*5);
    }

    //lineA时间轴
    if(GAME.line.lineA<=0 && GAME.line.lineA>=-1500){
        this.bgScale = true;
        this.background.position.y = GAME.line.lineA;
        this.loaderInner.width = 0;
    }else if(GAME.line.lineA<=-1500 && GAME.line.lineA>=-2060){
        this.background.position.y = -1500;
        this.loaderInner.width = -(GAME.line.lineA+1500);
    }else if(GAME.line.lineA<=-2060){
        if(this.bgScale){
            this.bgScale = false;
            this.bgPic.scale.x = 1;
            this.bgPic.scale.y = 1;
        }
        this.loaderInner.width = 560;
        this.background.position.y = GAME.line.lineA + 560;
    }
}