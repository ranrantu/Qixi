GAME.sceneFinal = function (){
    this.baseUrl = './src/img/sceneFinal/';
}

GAME.sceneFinal.prototype.createSceneFinal = function (){
    const baseUrl = this.baseUrl;

    this.phone = new PIXI.Sprite.fromImage(baseUrl+'phone.png');
    setDefaultValue(this.phone,640,GAME.height,0,0,null,null,0);

    this.backPage = new PIXI.Sprite.fromImage(baseUrl+'bg.jpg');
    setDefaultValue(this.backPage,640,GAME.height,0,0,null,null,0);

    this.background = new PIXI.Sprite.fromImage(baseUrl+'bg.jpg');
    setDefaultValue(this.background,640,GAME.height,0,0,null,null,0);
    this.logo = new PIXI.Sprite.fromImage('./src/img/sceneC/logo.png');
    setDefaultValue(this.logo,157,43,35,28);
    this.tracer = new PIXI.Container();
    setDefaultValue(this.tracer,41,331,310,150,null,null,0);
    this.hand = new PIXI.Sprite.fromImage('./src/img/sceneA/hand.png');
    setDefaultValue(this.hand,100,81,10,10);
    this.tracer2 = new PIXI.Container();
    setDefaultValue(this.tracer2,41,331,310,150,null,null,0);
    this.hand2 = new PIXI.Sprite.fromImage('./src/img/sceneA/hand.png');
    setDefaultValue(this.hand2,100,81,10,10);

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
    this.znStarMap = new PIXI.Sprite.fromImage('./src/img/sceneB/zn.png');
    setDefaultValue(this.znStarMap,490,382,493,185,.5,.5);
//  195 ->543
    this.girl = new PIXI.Sprite.fromImage(baseUrl+'girl.png');
    setDefaultValue(this.girl,87,99,235,255,null,null,0);
    this.boy = new PIXI.Sprite.fromImage(baseUrl+'boy.png');
    setDefaultValue(this.boy,65,66,325,280,null,null,0);
    this.ball = new PIXI.Sprite.fromImage(baseUrl+'ball.png');
    setDefaultValue(this.ball,355,483,0,30);
    this.love = new PIXI.Sprite.fromImage(baseUrl+'love.png');
    setDefaultValue(this.love,398,312,300,310,null,.5,1);
    this.bridge = new PIXI.Sprite.fromImage(baseUrl+'bridge.png');
    // setDefaultValue(this.bridge,543,182,44,344);
    setDefaultValue(this.bridge,606,210,5,364);
    this.happy = new PIXI.Sprite.fromImage(baseUrl+'happy.png');
    setDefaultValue(this.happy,610,466,14,598,null,null,0);
    this.nl = new PIXI.Sprite.fromImage(baseUrl+'nl.png');
    setDefaultValue(this.nl,105,135,22,297);
    this.zn = new PIXI.Sprite.fromImage(baseUrl+'zn.png');
    setDefaultValue(this.zn,136,152,490,293);
    this.meet = new PIXI.Sprite.fromImage(baseUrl+'meet.png');
    setDefaultValue(this.meet,164,167,222,215,null,null,0);
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

    this.backPage.addChild(this.b1);
    this.backPage.addChild(this.b2);
    this.backPage.addChild(this.b3);
    this.backPage.addChild(this.b4);
    this.backPage.addChild(this.b5);
    this.backPage.addChild(this.b6);
    this.backPage.addChild(this.b7);
    this.backPage.addChild(this.znStarMap);
    this.backPage.addChild(this.zn_text);
    this.backPage.addChild(this.tracer);
    this.tracer.addChild(this.hand);

    this.background.addChild(this.girl);
    this.background.addChild(this.boy);
    this.background.addChild(this.logo);
    this.background.addChild(this.love);
    this.background.addChild(this.ball);
    this.background.addChild(this.bridge);
    this.background.addChild(this.meet);
    this.background.addChild(this.nl);
    this.background.addChild(this.zn);
    this.background.addChild(this.happy);
    this.meet.addChild(this.jin);
    for(var i=0;i<6;i++){
        this.meet.addChild(this.hearts[i]);
    }
    this.background.addChild(this.tracer2);
    this.tracer2.addChild(this.hand2);
    // this.meet.addChild();
    // this.meet.addChild();


    var elements = {
        'backPage':this.backPage,
        'phone':this.phone,
        'background':this.background,
    };
    Global.setElementsToStage('sceneFinal',elements);

    this.count = 0;
    this.count2 = 0;
    this.notlove = true;
    this.isShow = false;
    this.isHappy = false;
    this.count3 = 0;
    this.count4 = 0;
    this.hahaha = false;
}

GAME.sceneFinal.prototype.moving = function (sceneC){
    if(processFinal){
        sceneC.background.alpha = 0;
        if(processFA&&!processFB){
            this.count3 += 0.01;
            var speed = Math.PI/2 + this.count3 * 6;
            var math = Math.sin(speed-Math.PI*2);
            var math2 = Math.sin(speed-Math.PI/2);
            var tracer1 = math>0?0:math;
            var tracer = math2>0?0:math2;
            var hander;
            var p = (speed)%(Math.PI*2);
            if(p<=Math.PI*2 && p>=Math.PI){
                hander = tracer1;
                this.hand.alpha = 1;
            }else{
                hander = 0;
                this.hand.alpha = 0;
            }
            this.tracer.alpha = -tracer;
            this.hand.position.y = -240*hander;
        }else{
            this.tracer.alpha = 0;
        }

        if(GAME.line.lineFinal==0){
            this.count4 += 0.01;
            var speed = Math.PI/2 + this.count4 * 6;
            var math = Math.sin(speed-Math.PI*2);
            var math2 = Math.sin(speed-Math.PI/2);
            var tracer1 = math>0?0:math;
            var tracer = math2>0?0:math2;
            var hander;
            var p = (speed)%(Math.PI*2);
            if(p<=Math.PI*2 && p>=Math.PI){
                hander = tracer1;
                this.hand2.alpha = 1;
            }else{
                hander = 0;
                this.hand2.alpha = 0;
            }
            this.tracer2.alpha = -tracer;
            this.hand2.position.y = -240*hander;
        }else{
            this.tracer2.alpha = 0;
        }

        if(processFA){
            this.count += 0.1;
            this.backPage.alpha += 0.02;
            this.phone.alpha += 0.02;
            if(this.phone.alpha>1) this.phone.alpha = 1;
            if(this.backPage.alpha>1) this.backPage.alpha = 1;
        }else{
            this.count2 += 0.1;
            this.love.scale.set(.9+.1*Math.sin(Math.PI/2+this.count2));
            this.love.alpha = .8+.2*Math.sin(Math.PI/2+this.count2);
            this.jin.rotation = Math.sin(this.count2/3)*Math.PI/50;
            this.phone.alpha -= 0.02;
            this.backPage.alpha -= 0.02;
            this.background.alpha += 0.02;
            for(let i=0;i<6;i++){
                if(this.hearts[i].position.y>-80){
                    this.hearts[i].position.y -= 1.2;
                    this.hearts[i].position.x += this.hearts[i].dir*.5;
                    this.hearts[i].alpha = 1;
                }else{
                    this.hearts[i].alpha = 0;
                    if(this.hearts[i].delay>0){
                        this.hearts[i].delay -= 0.03;
                    }else{
                        this.hearts[i].position.x = 80;
                        this.hearts[i].position.y = 20;
                        this.hearts[i].dir = -2+Math.random()*4;
                        this.hearts[i].delay = .2 + Math.random()*.4;
                    }
                }
            }
            if(this.notlove){
                var lf = GAME.line.lineFinal;
                this.nl.position.x = 22 + lf*2*.5;
                this.nl.position.y = 297 - lf*.65*.5;
                this.zn.position.x = 490 - lf*2*.5;
                this.zn.position.y = 289 - lf*.7*.5;
            }
            if(GAME.line.lineFinal>200){
                this.hahaha = true;
            }
            if(this.hahaha){
                this.isShow = true;
                this.notlove = false;
                this.nl.alpha -= 0.2;
                this.zn.alpha -= 0.2;
                this.meet.alpha  += 0.05;
                if(this.meet.alpha>1)this.meet.alpha = 1;
                var lf = GAME.line.lineFinal;
                if(this.girl.position.y < 543){
                    this.girl.position.y += 3;
                    this.girl.alpha += 0.05;
                    this.boy.position.y += 3;
                    this.boy.alpha += 0.05;
                }else{
                    this.happy.alpha += 0.002;
                }
            }
        }
    }
}