GAME.sceneFinal = function (){
    this.baseUrl = './src/img/sceneFinal/';
}

GAME.sceneFinal.prototype.createSceneFinal = function (){
    const baseUrl = this.baseUrl;

    this.phone = new PIXI.Sprite.fromImage(baseUrl+'phone.png');
    setDefaultValue(this.phone,640,GAME.height,0,0,null,null,0);

    this.background = new PIXI.Sprite.fromImage(baseUrl+'bg.jpg');
    setDefaultValue(this.background,640,GAME.height,0,0,null,null,0);

    this.b1 = new PIXI.Sprite.fromImage(baseUrl+'b1.png');
    setDefaultValue(this.b1,170,240,0,839);
    this.b2 = new PIXI.Sprite.fromImage(baseUrl+'b2.png');
    setDefaultValue(this.b2,211,201,55,678);
    this.b3 = new PIXI.Sprite.fromImage(baseUrl+'b4.png');
    setDefaultValue(this.b3,126,123,118,547);
    this.b4 = new PIXI.Sprite.fromImage(baseUrl+'b4.png');
    setDefaultValue(this.b4,126,123,189,437);
    this.b5 = new PIXI.Sprite.fromImage(baseUrl+'b5.png');
    setDefaultValue(this.b5,117,92,258,362);
    this.b6 = new PIXI.Sprite.fromImage(baseUrl+'b6.png');
    setDefaultValue(this.b6,129,86,310,299);
    this.b7 = new PIXI.Sprite.fromImage(baseUrl+'b7.png');
    setDefaultValue(this.b7,76,55,381,259);

    this.zn_text = new PIXI.Sprite.fromImage('./src/img/sceneB/zn_text.png');
    setDefaultValue(this.zn_text,74,175,544,330,.8,.5);
    this.zn = new PIXI.Sprite.fromImage('./src/img/sceneB/zn.png');
    setDefaultValue(this.zn,490,382,493,185,.5,.5);

    this.girl = new PIXI.Sprite.fromImage(baseUrl+'girl.png');
    setDefaultValue(this.84,94,235,443);
    this.boy = new PIXI.Sprite.fromImage(baseUrl+'boy.png');
    setDefaultValue(this.boy,62,63,325,462);
    this.ball = new PIXI.Sprite.fromImage(baseUrl+'ball.png');
    setDefaultValue(this.ball,240,294,0,94);
    this.love = new PIXI.Sprite.fromImage(baseUrl+'love.png');
    setDefaultValue(this.love)
    this.bridge = new PIXI.Sprite.fromImage(baseUrl+'bridge.png');
    setDefaultValue(this.bridge,543,182,44,344);
    this.happy = new PIXI.Sprite.fromImage(baseUrl+'happy.png');
    setDefaultValue(this.happy,610,466,14,598);


    // this.background.addChild(this.b1);
    // this.background.addChild(this.b2);
    // this.background.addChild(this.b3);
    // this.background.addChild(this.b4);
    // this.background.addChild(this.b5);
    // this.background.addChild(this.b6);
    // this.background.addChild(this.b7);
    // this.background.addChild(this.zn);
    // this.background.addChild(this.zn_text);

    this.background.addChild(this.ball);
    this.background.addChild(this.bridge);
    this.background.addChild(this.happy);


    var elements = {
        'background':this.background,
        'phone':this.phone,
    };
    Global.setElementsToStage('sceneFinal',elements);

    this.count = 0;
}

GAME.sceneFinal.prototype.moving = function (){
    if(processFinal){
        this.background.alpha += 0.02;
        // this.phone.alpha += 0.02;
    }
}