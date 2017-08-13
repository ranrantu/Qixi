GAME.sceneA = function (){
    this.bgTexture = new PIXI.Texture.fromImage('./src/img/scene1.jpg');
}

GAME.sceneA.prototype.createSceneA = function (){
    this.background = new PIXI.Container();
    setDefaultValue(this.background,640,4897,0,0);

    this.bgPic = new PIXI.Sprite(this.bgTexture);
    setDefaultValue(this.bgPic,640,4897,0,0);

    this.planetTop = new PIXI.Sprite.fromImage('./src/img/planet_top.png');
    setDefaultValue(this.planetTop,331,142,459,71,null,.5);

    this.starmapA = new PIXI.Sprite.fromImage('./src/img/starmap1.png');
    setDefaultValue(this.starmapA,127,150,495,328);

    this.starmapB = new PIXI.Sprite.fromImage('./src/img/starmap2.png');
    setDefaultValue(this.starmapB,332,281,71,717);
    console.log(this.starmapB);

    this.starmapC = new PIXI.Sprite.fromImage('./src/img/starmap3.png');
    setDefaultValue(this.starmapC,508,230,62,1702);

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

    this.bigPlanet = new PIXI.Sprite.fromImage('./src/img/bigplanet.png');
    setDefaultValue(this.bigPlanet,489,203,92,525);

    this.textA = new PIXI.Sprite.fromImage('./src/img/text1.png');
    setDefaultValue(this.textA,233,143,26,980,null,null,0);
    //星球碰撞部分
    this.cometEarthShaking = false;
    this.comet = new PIXI.Sprite.fromImage('./src/img/comet.png');
    setDefaultValue(this.comet,416,204,344,900,0.4,.5);

    this.earth = new PIXI.Sprite.fromImage('./src/img/earth.png');
    setDefaultValue(this.earth,361,254,500,1400,null,.5);

    this.boomBlinking = false;
    this.boom = new PIXI.Sprite.fromImage('./src/img/boom.png');
    setDefaultValue(this.boom,266,206,330,1230,null,.5);

    this.loader = new PIXI.Sprite.fromImage('./src/img/loader.png');
    setDefaultValue(this.loader,597,74,25,1955);

    this.loaderInner = new PIXI.Sprite.fromImage('./src/img/loader-inner.png');
    setDefaultValue(this.loaderInner,0,49,11,12);

    this.loaderText = new PIXI.Sprite.fromImage('./src/img/loader-text.png');
    setDefaultValue(this.loaderText,285,116,150,-22);

    //后半部分
    this.textB = new PIXI.Sprite.fromImage('./src/img/text2.png');
    setDefaultValue(this.textB,249,135,50,2260,null,null,0);
    this.ball = new PIXI.Sprite.fromImage('./src/img/ball.png');
    setDefaultValue(this.ball,332,605,310,2288);
    this.personA = new PIXI.Sprite.fromImage('./src/img/person1.png');
    setDefaultValue(this.personA,397,346,-68,25);
    this.dotlineA = new PIXI.Sprite.fromImage('./src/img/dotline.png');
    setDefaultValue(this.dotlineA,636,153,0,2950);
    this.dotlineB = new PIXI.Sprite.fromImage('./src/img/dotline.png');
    setDefaultValue(this.dotlineB,636,153,0,3040);
    this.dotlineC = new PIXI.Sprite.fromImage('./src/img/dotline.png');
    setDefaultValue(this.dotlineC,636,153,0,3130);
    this.textC_A = new PIXI.Sprite.fromImage('./src/img/text3_1.png');
    setDefaultValue(this.textC_A,509,51,640,3020);
    this.textC_A.rotation = -.23;
    this.textC_B = new PIXI.Sprite.fromImage('./src/img/text3_2.png');
    setDefaultValue(this.textC_B,315,40,-300,3131);
    this.textC_B.rotation = -.23;
    this.textC_C = new PIXI.Sprite.fromImage('./src/img/text3_3.png');
    setDefaultValue(this.textC_C,736,41,640,3220);
    this.textC_C.rotation = -.23;

    this.background.addChild(this.bgPic);
    for(var i=0;i<starAs.length;i++){
        this.background.addChild(starAs[i]);
    }
    this.background.addChild(this.smallStarB);
    this.background.addChild(this.bigPlanet);
    this.background.addChild(this.starmapA);
    this.background.addChild(this.starmapB);
    this.background.addChild(this.starmapC);
    this.background.addChild(this.planetTop);
    this.background.addChild(this.textA);
    this.background.addChild(this.comet);
    this.background.addChild(this.earth);
    this.background.addChild(this.boom);
    this.background.addChild(this.loader);
    this.background.addChild(this.textB);
    this.ball.addChild(this.personA);
    this.background.addChild(this.ball);
    this.background.addChild(this.dotlineA);
    this.background.addChild(this.dotlineB);
    this.background.addChild(this.dotlineC);
    this.background.addChild(this.textC_A);
    this.background.addChild(this.textC_B);
    this.background.addChild(this.textC_C);

    this.loader.addChild(this.loaderInner);
    this.loader.addChild(this.loaderText);

    var elements = {
        'background':this.background,
    };
    Global.setElementsToStage('sceneA',elements);

    this.count = 0;
    this.bgScale = true;
    this.cometEarthCount = 0;
    this.booomCount = 0;
    this.bgCount = 0;
}

GAME.sceneA.prototype.moving = function (){

    if(this.bgScale){
        this.bgCount += 0.01;
        this.bgPic.scale.x = 1.05 + 0.05*Math.sin(this.bgCount);
        this.bgPic.scale.y = 1.01 + 0.01*Math.cos(this.bgCount);
    }

    this.count += 0.01;
    this.planetTop.scale.x = 0.9 + 0.1*Math.cos(this.count);
    this.planetTop.scale.y = 0.9 + 0.1*Math.cos(this.count);
    this.planetTop.position.x = 510 + 2 + 2*Math.sin(this.count);
    this.planetTop.position.y = 60 - 10 + 10*Math.sin(this.count);
    this.starmapA.alpha = 0.7+0.3*Math.sin(this.count*5);
    this.starmapB.alpha = 0.7+0.3*Math.cos(this.count*5);
    this.starmapC.alpha = 0.7+0.3*Math.sin(this.count*5);
    this.bigPlanet.alpha = 0.9+0.1*Math.sin(1+this.count*5);

    this.otherAction();

    var la = GAME.line.lineA;

    //lineA时间轴
    if(la<=0 && la>=-1500){
        this.bgScale = true;
        this.background.position.y = la;
        this.loaderInner.width = 0;


        if(la<=-500 && la>=-700){
            this.textA.alpha = 1;
            this.comet.position.y = 900 + ((-la - 500)*1.4);
            this.comet.position.x = 344 + (-la - 500)*0.2;
            this.comet.scale.set(0.4+(-la - 500)*0.002);
            this.earth.position.x = 500 - (-la - 500)*0.5;
            this.earth.position.y = 1400 - (-la - 500)*0.6;
            this.cometEarthShaking = false;
            this.boomBlinking = false;
        }else if(la<=-700 && la>=-1500){
            this.cometEarthShaking = true;
            this.boomBlinking = true;

            this.comet.position.y = 900 + (200*1.4);
            this.comet.position.x = 344 + 200*0.2;
            this.comet.scale.set(0.4+200*0.002);
            this.earth.position.x = 500 - 200*0.5;
            this.earth.position.y = 1400 - 200*0.6;
        }else{
            this.comet.position.y = 900;
            this.comet.position.x = 344;
            this.comet.scale.set(0.4);
            this.earth.position.x = 500;
            this.earth.position.y = 1400;
            this.textA.alpha = 0;
        }
    }else if(la<=-1500 && la>=-2060){
        this.textB.alpha = 0;
        this.background.position.y = -1500;
        this.loaderInner.width = -(la+1500);
    }else if(la<=-2060){
        this.textB.alpha = 1;
        if(this.bgScale){
            this.bgScale = false;
            this.bgPic.scale.x = 1;
            this.bgPic.scale.y = 1;
        }
        this.loaderInner.width = 560;
        this.background.position.y = la + 560;
        if(la<=-2500 && la>=-3000){
            this.textC_B.position.x = -300 + (-la - 2500)*0.7;
            this.textC_B.position.y = 3200 - (-la - 2500)*0.7*0.23;
        }
        if(la<=-2300 && la>=-3300){
            this.textC_A.position.x = 640 - (-la - 2300)*0.64;
            this.textC_A.position.y = 2873 + (-la -2300)*0.64*0.23;
            this.textC_C.position.x = 640 - (-la - 2300)*0.66;
            this.textC_C.position.y = 3073 + (-la -2300)*0.66*0.23;
        }
    }
}

GAME.sceneA.prototype.otherAction = function (){
    if(this.cometEarthShaking){
        this.cometEarthCount += 0.3;

        if(Math.floor(this.cometEarthCount/10)%2===0){
            this.comet.rotation = Math.PI/50*Math.sin(this.cometEarthCount);
            this.earth.rotation = Math.PI/50*Math.cos(this.cometEarthCount);
        }
    }
    if(this.boomBlinking){
        this.booomCount += 0.1;
        this.boom.scale.set(0.8+0.2*Math.sin(this.booomCount));
    }else{
        this.boom.scale.set(0);
    }
}