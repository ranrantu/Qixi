GAME.sceneB = function (){
}

GAME.sceneB.prototype.createSceneB = function (){
    this.background = new PIXI.Sprite.fromImage('./src/img/sceneB/bg.jpg');
    setDefaultValue(this.background,4475,1136,-640,0);
    this.nlText = new PIXI.Sprite.fromImage('./src/img/sceneB/nl_text.png');
    setDefaultValue(this.nlText,74,175,83,169);
    this.nl = new PIXI.Sprite.fromImage('./src/img/sceneB/nl.png');
    setDefaultValue(this.nl,384,535,126,233,.9,null,.9);

    this.report = new PIXI.Sprite.fromImage('./src/img/sceneB/report.jpg');
    setDefaultValue(this.report,322,322,100,700,.9,null,0);
    this.length = new PIXI.Sprite.fromImage('./src/img/sceneB/length.png');
    setDefaultValue(this.length,787,599,480,171,null,null,0);
    this.textA = new PIXI.Sprite.fromImage('./src/img/sceneB/text1.png');
    setDefaultValue(this.textA,776,46,550,880,null,null,0);
    this.arrow = new PIXI.Sprite.fromImage('./src/img/sceneB/arrow.png');
    setDefaultValue(this.arrow,563,796,1383,104);
    this.znText = new PIXI.Sprite.fromImage('./src/img/sceneB/zn_text.png');
    setDefaultValue(this.znText,74,175,1399,375);
    this.zn = new PIXI.Sprite.fromImage('./src/img/sceneB/zn.png');
    setDefaultValue(this.zn,490,382,1450,220,.5,.5);
    this.textB = new PIXI.Sprite.fromImage('./src/img/sceneB/text2.png');
    setDefaultValue(this.textB,1063,45,1958,100,null,null,1);
    this.planetTop = new PIXI.Sprite.fromImage('./src/img/sceneB/planet_top.png');
    setDefaultValue(this.planetTop,497,161,577,-5,.8);
    this.planetBottom = new PIXI.Sprite.fromImage('./src/img/sceneB/planet_bottom.png');
    setDefaultValue(this.planetBottom,465,209,1926,GAME.height-209);

    this.birdFrames = [
        PIXI.Texture.fromImage('./src/img/sceneB/b1.png'),
        PIXI.Texture.fromImage('./src/img/sceneB/b2.png'),
        PIXI.Texture.fromImage('./src/img/sceneB/b3.png')
    ];
    this.bird1 = new PIXI.extras.MovieClip(this.birdFrames);
    this.bird2 = new PIXI.extras.MovieClip(this.birdFrames);
    this.bird3 = new PIXI.extras.MovieClip(this.birdFrames);
    this.bird4 = new PIXI.extras.MovieClip(this.birdFrames);
    this.bird5 = new PIXI.extras.MovieClip(this.birdFrames);
    this.bird6 = new PIXI.extras.MovieClip(this.birdFrames);
    this.bird7 = new PIXI.extras.MovieClip(this.birdFrames);
    setDefaultValue(this.bird1,null,null,2165,575,.8,.5);
    setDefaultValue(this.bird2,null,null,2433,521,.8,.5);
    setDefaultValue(this.bird3,null,null,2645,447,.8,.5);
    setDefaultValue(this.bird4,null,null,2863,416,.8,.5);
    setDefaultValue(this.bird5,null,null,3106,368,.8,.5);
    setDefaultValue(this.bird6,null,null,3377,371,.8,.5);
    setDefaultValue(this.bird7,null,null,3628,356,.8,.5);

    this.bird1.animationSpeed = 0.05;
    this.bird2.animationSpeed = 0.08;
    this.bird3.animationSpeed = 0.06;
    this.bird4.animationSpeed = 0.07;
    this.bird5.animationSpeed = 0.1;
    this.bird6.animationSpeed = 0.09;

    this.bird1.play();
    this.bird2.play();
    this.bird3.play();
    this.bird4.play();
    this.bird5.play();
    this.bird6.play();

    this.background.addChild(this.planetTop);
    this.background.addChild(this.planetBottom);
    this.background.addChild(this.bird6);
    this.background.addChild(this.bird5);
    this.background.addChild(this.bird4);
    this.background.addChild(this.bird3);
    this.background.addChild(this.bird2);
    this.background.addChild(this.bird1);
    this.background.addChild(this.nlText);
    this.background.addChild(this.nl);
    this.background.addChild(this.length);
    this.background.addChild(this.arrow);
    this.background.addChild(this.textA);
    this.background.addChild(this.znText);
    this.background.addChild(this.zn);
    this.background.addChild(this.textB);

    this.background.addChild(this.report);
    var elements = {
        'background':this.background,
    };
    Global.setElementsToStage('sceneB',elements);

    this.count = 0;
}

GAME.sceneB.prototype.initSceneBScroll = function (){

}

GAME.sceneB.prototype.moving = function (){
    this.count += 0.1;
    // this.nl.alpha = 0.8 + 0.2*Math.sin(this.count);
    // this.zn.alpha = 0.8 + 0.2*Math.cos(this.count);

    var lb = GAME.line.lineB;

    this.background.position.x = lb + 640;

    this.report.alpha = 0;
    if(lb<=-320){
        this.report.alpha = ((-lb)-320)*0.005;
    }else{
        this.report.alpha = 0;
    }
    if(lb<=-900){
        this.length.alpha = ((-lb)-900)*0.003;
        this.textA.alpha = 1;
    }else{
        this.length.alpha = 0;
        this.textA.alpha = 0;
    }
    if(lb<=-1500 && lb>=-1600){
        var length = (-lb)-1500;
        this.zn.scale.set(0.5+length*0.004);
    }else if(lb<=-1600){
        this.zn.scale.set(.9);
    }else{
        this.zn.scale.set(.5);
    }
}

