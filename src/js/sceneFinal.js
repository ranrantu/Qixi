GAME.sceneFinal = function (){
    this.baseUrl = './src/img/sceneFinal/';
}

GAME.sceneFinal.prototype.createSceneFinal = function (){
    const baseUrl = this.baseUrl;

    this.phone = new PIXI.Sprite.fromImage(baseUrl+'phone.png');
    setDefaultValue(this.phone,640,GAME.height,0,0,null,null,0);

    this.background = new PIXI.Sprite.fromImage(baseUrl+'bg.jpg');
    setDefaultValue(this.background,640,GAME.height,0,0,null,null,0);

    // this.b1 = new PIXI.Sprite.fromImage(baseUrl+'b1.png');
    // setDefaultValue(this.b1,170,240,0,839);
    // this.b2 = new PIXI.Sprite.fromImage(baseUrl+'b2.png');
    // setDefaultValue(this.b2,211,201,55,678);
    // this.b3 = new PIXI.Sprite.fromImage(baseUrl+'b4.png');
    // setDefaultValue(this.b3,126,123,118,547);
    // this.b4 = new PIXI.Sprite.fromImage(baseUrl+'b4.png');
    // setDefaultValue(this.b4,126,123,189,437);
    // this.b5 = new PIXI.Sprite.fromImage(baseUrl+'b5.png');
    // setDefaultValue(this.b5,117,92,258,362);
    // this.b6 = new PIXI.Sprite.fromImage(baseUrl+'b6.png');
    // setDefaultValue(this.b6,129,86,310,299);
    // this.b7 = new PIXI.Sprite.fromImage(baseUrl+'b7.png');
    // setDefaultValue(this.b7,76,55,381,259);
    //
    // this.zn_text = new PIXI.Sprite.fromImage('./src/img/sceneB/zn_text.png');
    // setDefaultValue(this.zn_text,74,175,544,330,.8,.5);
    // this.zn = new PIXI.Sprite.fromImage('./src/img/sceneB/zn.png');
    // setDefaultValue(this.zn,490,382,493,185,.5,.5);

    this.girl = new PIXI.Sprite.fromImage(baseUrl+'girl.png');
    setDefaultValue(this.girl,84,94,235,543);
    this.boy = new PIXI.Sprite.fromImage(baseUrl+'boy.png');
    setDefaultValue(this.boy,62,63,325,562);
    this.ball = new PIXI.Sprite.fromImage(baseUrl+'ball.png');
    setDefaultValue(this.ball,358,438,0,30);
    this.love = new PIXI.Sprite.fromImage(baseUrl+'love.png');
    setDefaultValue(this.love,398,312,300,310,null,.5,1);
    this.bridge = new PIXI.Sprite.fromImage(baseUrl+'bridge.png');
    setDefaultValue(this.bridge,543,182,44,344);
    this.happy = new PIXI.Sprite.fromImage(baseUrl+'happy.png');
    setDefaultValue(this.happy,610,466,14,598);
    this.nl = new PIXI.Sprite.fromImage(baseUrl+'nl.png');
    setDefaultValue(this.nl,102,131,22,297);
    this.zn = new PIXI.Sprite.fromImage(baseUrl+'zn.png');
    setDefaultValue(this.zn,133,147,490,289);
    this.meet = new PIXI.Sprite.fromImage(baseUrl+'meet.png');
    setDefaultValue(this.meet,160,160,222,195,null,null,0);
    this.jin = new PIXI.Sprite.fromImage(baseUrl+'jin.png');
    setDefaultValue(this.jin,100,73,120,66);
    this.jin.anchor.set(.3,.5);
    this.heart = new PIXI.Sprite.fromImage(baseUrl+'heart.png');
    this.hearts = [];
    for(var i=0;i<6;i++){
        var h = new PIXI.Sprite.fromImage(baseUrl+'heart.png');
        var y = 20 - i*(Math.random()*5+3);
        setDefaultValue(h,29,21,80,y,null,.5,1);
        h.delay = .3 * Math.random();
        h.dir = -.5+Math.random();
        // h.speed = .1+Math.random()*.5;
        this.hearts.push(h);
    }

    // this.background.addChild(this.b1);
    // this.background.addChild(this.b2);
    // this.background.addChild(this.b3);
    // this.background.addChild(this.b4);
    // this.background.addChild(this.b5);
    // this.background.addChild(this.b6);
    // this.background.addChild(this.b7);
    // this.background.addChild(this.zn);
    // this.background.addChild(this.zn_text);

    this.background.addChild(this.girl);
    this.background.addChild(this.boy);
    this.background.addChild(this.love);
    this.background.addChild(this.ball);
    this.background.addChild(this.bridge);
    this.background.addChild(this.happy);
    this.background.addChild(this.nl);
    this.background.addChild(this.zn);
    this.background.addChild(this.meet);
    this.meet.addChild(this.jin);
    for(var i=0;i<6;i++){
        this.meet.addChild(this.hearts[i]);
    }
    // this.meet.addChild();
    // this.meet.addChild();


    var elements = {
        'background':this.background,
        'phone':this.phone,
    };
    Global.setElementsToStage('sceneFinal',elements);

    this.count = 0;
    this.notlove = true;
}

GAME.sceneFinal.prototype.moving = function (){
    if(processFinal){
        this.count += 0.1;
        this.jin.rotation = Math.sin(this.count/3)*Math.PI/50;
        this.love.scale.set(.9+.1*Math.sin(Math.PI/2+this.count));
        this.background.alpha += 0.02;
        // this.phone.alpha += 0.02;
        for(let i=0;i<6;i++){
            if(this.hearts[i].position.y>-80){
                this.hearts[i].position.y -= 1.2;
                this.hearts[i].position.x += this.hearts[i].dir*.5;
                this.hearts[i].alpha -= 0.02;
            }else{
                if(this.hearts[i].delay>0){
                    this.hearts[i].delay -= 0.03;
                    this.hearts[i].alpha = 0;
                }else{
                    this.hearts[i].position.x = 80;
                    this.hearts[i].position.y = 20;
                    this.hearts[i].alpha = .8;
                    this.hearts[i].dir = -2+Math.random()*4;
                    this.hearts[i].delay = .2 + Math.random()*.4;
                }
            }
        }
        // this.nl = new PIXI.Sprite.fromImage(baseUrl+'nl.png');
        // setDefaultValue(this.nl,102,131,22,297);
        // this.zn = new PIXI.Sprite.fromImage(baseUrl+'zn.png');
        // setDefaultValue(this.zn,133,147,490,289);
        if(this.notlove){
            var lf = GAME.line.lineFinal;
            this.nl.position.x = 22 + lf*2;
            this.nl.position.y = 297 - lf*.75;
            this.zn.position.x = 490 - lf*2;
            this.zn.position.y = 289 - lf*.8;
        }
        if(GAME.line.lineFinal>0){
            GAME.line.lineFinal -= .2;
            if(GAME.line.lineFinal>100){
                this.notlove = false;
                this.nl.alpha = 0;
                this.zn.alpha = 0;
                this.meet.alpha  =1;
            }
        }
    }
}