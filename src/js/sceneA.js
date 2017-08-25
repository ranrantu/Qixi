GAME.sceneA = function (){
    this.bgTexture = new PIXI.Texture.fromImage('./src/img/sceneA/scene1.jpg');
}

GAME.sceneA.prototype.createSceneA = function (){
    this.background = new PIXI.Container();
    setDefaultValue(this.background,640,4897,0,0);

    this.bgPic = new PIXI.Sprite(this.bgTexture);
    setDefaultValue(this.bgPic,640,4897,0,0);

    this.tracer = new PIXI.Container();
    setDefaultValue(this.tracer,41,331,310,150,null,null,0);
    this.hand = new PIXI.Sprite.fromImage('./src/img/sceneA/hand.png');
    setDefaultValue(this.hand,100,81,10,10);

    this.planetTop = new PIXI.Sprite.fromImage('./src/img/sceneA/planet_top.png');
    setDefaultValue(this.planetTop,331,142,459,71,null,.5);

    this.starmapA = new PIXI.Sprite.fromImage('./src/img/sceneA/starmap1.png');
    setDefaultValue(this.starmapA,127,150,495,328);

    this.starmapB = new PIXI.Sprite.fromImage('./src/img/sceneA/starmap2.png');
    setDefaultValue(this.starmapB,332,281,71,717);
    console.log(this.starmapB);

    this.starmapC = new PIXI.Sprite.fromImage('./src/img/sceneA/starmap3.png');
    setDefaultValue(this.starmapC,508,230,62,1702);

    this.smallStarATexture = new PIXI.Texture.fromImage('./src/img/sceneA/small-star1.png');
    this.starAs = [];
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
        starA.blink = 2 + Math.floor(Math.random()*6);
        setDefaultValue(starA,68*starAsLocation[i].scale,65*starAsLocation[i].scale,starAsLocation[i].x,starAsLocation[i].y);
        this.starAs.push(starA);
    }

    this.smallStarBTexture = new PIXI.Texture.fromImage('./src/img/sceneA/small-star2.png');
    this.smallStarAs = [];
    this.smallStarB = new PIXI.Sprite.fromImage('./src/img/sceneA/small-star2.png');
    setDefaultValue(this.smallStarB,53,53,100,200);

    this.bigPlanet = new PIXI.Sprite.fromImage('./src/img/sceneA/bigplanet.png');
    setDefaultValue(this.bigPlanet,489,203,92,525);

    this.textA = new PIXI.Sprite.fromImage('./src/img/sceneA/text1.png');
    setDefaultValue(this.textA,233,143,60,230,null,null,0);
    //星球碰撞部分
    this.cometEarthShaking = false;
    this.comet = new PIXI.Sprite.fromImage('./src/img/sceneA/comet.png');
    setDefaultValue(this.comet,416,204,344,900,0.4,.5);

    this.earth = new PIXI.Sprite.fromImage('./src/img/sceneA/earth.png');
    setDefaultValue(this.earth,361,254,500,1400,null,.5);

    this.boomBlinking = false;
    this.boom = new PIXI.Sprite.fromImage('./src/img/sceneA/boom.png');
    setDefaultValue(this.boom,266,206,330,1230,null,.5);

    this.loader = new PIXI.Sprite.fromImage('./src/img/sceneA/loader.png');
    setDefaultValue(this.loader,597,74,25,GAME.height - 100);

    this.loaderInner = new PIXI.Sprite.fromImage('./src/img/sceneA/loader-inner.png');
    setDefaultValue(this.loaderInner,0,49,11,12);

    this.loaderText = new PIXI.Sprite.fromImage('./src/img/sceneA/loader-text.png');
    setDefaultValue(this.loaderText,285,116,150,-22,null,null,0);

    var textStyle = {
        fontFamily: 'Arial',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#003d94', '#015697'], // gradient
        stroke: '#ffffff',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 2,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 2,
    };

    this.unitsDigits = [];
    this.tensDigits = [];
    for(var i=0;i<10;i++){
        var unitsDigit = new PIXI.Text(i,textStyle);
        var tensDigit = new PIXI.Text(i,textStyle);
        this.unitsDigits.push(unitsDigit);
        this.tensDigits.push(tensDigit);
        setDefaultValue(tensDigit,null,null,245,10);
        setDefaultValue(unitsDigit,null,null,270,10);
    }
    this.persentage = new PIXI.Text('%',textStyle);
    setDefaultValue(this.persentage,null,null,295,10);
    this.persentageContainer = new PIXI.Container();
    setDefaultValue(this.persentageContainer,597,74,0,0);

    this.loaderPercentage = new PIXI.Text('0%',{
        fontFamily: 'Arial',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#003d94', '#015697'], // gradient
        stroke: '#ffffff',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 2,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 2,
    });
    this.loaderPercentage.x = 250;
    this.loaderPercentage.y = 10;

    // 星象稳定后
    this.ball = new PIXI.Sprite.fromImage('./src/img/sceneA/ball.png');
    setDefaultValue(this.ball,332,605,400,2600);
    this.personA = new PIXI.Sprite.fromImage('./src/img/sceneA/person1.png');
    setDefaultValue(this.personA,397,346,-68,25);

    this.actionFrames = [
        PIXI.Texture.fromImage('./src/img/sceneA/action1.png'),
        PIXI.Texture.fromImage('./src/img/sceneA/action2.png'),
        PIXI.Texture.fromImage('./src/img/sceneA/action3.png'),
        PIXI.Texture.fromImage('./src/img/sceneA/action4.png'),
        PIXI.Texture.fromImage('./src/img/sceneA/action5.png'),
        PIXI.Texture.fromImage('./src/img/sceneA/action6.png'),
    ];
    this.actions = new PIXI.Sprite(this.actionFrames[0]);
    setDefaultValue(this.actions,95,50,157,272);

    this.paopao = new PIXI.Sprite.fromImage('./src/img/sceneA/paopao.png');
    setDefaultValue(this.paopao,253,208,-280,80,null,null,0);

    this.textC_A = new PIXI.Sprite.fromImage('./src/img/sceneA/text3_1.png');
    setDefaultValue(this.textC_A,175,25,30,30,null,null,0);
    this.textC_B = new PIXI.Sprite.fromImage('./src/img/sceneA/text3_2.png');
    setDefaultValue(this.textC_B,175,25,30,70,null,null,0);
    this.textC_C = new PIXI.Sprite.fromImage('./src/img/sceneA/text3_3.png');
    setDefaultValue(this.textC_C,175,25,30,110,null,null,0);

    this.phone = new PIXI.Sprite.fromImage('./src/img/sceneA/phone.png');
    this.background.interactive = true;
    setDefaultValue(this.phone,432,270,140,2865,null,null,0);
    this.background.on('tap',function (e){
        var position = e.data.global;
        if(showBird && position.x>=65 && position.x <=280 && position.y>=346 && position.y<=480){
            showBird = false;
            scroller.moveTo(GAME.line,'lineA',-3200,-4761,10,function (e){
                e.nowTop = e.iTop = -4761;
                gameStory = false;
            });
        }
    });
    this.lingling = new PIXI.Sprite.fromImage('./src/img/sceneA/lingling.png');
    setDefaultValue(this.lingling,87,47,160,-35);
    this.finger = new PIXI.Sprite.fromImage('./src/img/sceneA/finger.png');
    setDefaultValue(this.finger,165,103,-80,-30);

    this.textD = new PIXI.Sprite.fromImage('./src/img/sceneA/text4.png');
    setDefaultValue(this.textD,474,40,20,3800);
    this.textE = new PIXI.Sprite.fromImage('./src/img/sceneA/text5.png');
    setDefaultValue(this.textE,551,395,40,4450);

    this.personB = new PIXI.Sprite.fromImage('./src/img/sceneA/person2.png');
    setDefaultValue(this.personB,626,574,-2,3896);
    this.bird = new PIXI.Sprite.fromImage('./src/img/sceneA/bird.png');
    setDefaultValue(this.bird,273,203,182,117,null,null,0);
    this.tel = new PIXI.Sprite.fromImage('./src/img/sceneA/tel.png');
    setDefaultValue(this.tel,227,65,20,110);
    this.light = new PIXI.Sprite.fromImage('./src/img/sceneA/light.png');
    setDefaultValue(this.light,561,407,42,0,null,null,0);
    this.mouth = new PIXI.extras.MovieClip([
        PIXI.Texture.fromImage('./src/img/sceneA/mouth1.png'),
        PIXI.Texture.fromImage('./src/img/sceneA/mouth2.png')
    ]);
    setDefaultValue(this.mouth,null,null,185,389);
    this.mouth.animationSpeed = .1;
    this.mouth.play();
    this.personB.addChild(this.bird);
    this.bird.addChild(this.tel);
    this.personB.addChild(this.light);
    this.personB.addChild(this.mouth);

    this.tracerBottom = new PIXI.Sprite.fromImage('./src/img/sceneA/tracer.png');
    setDefaultValue(this.tracerBottom,41,331,470,4460,null,null,1);
    this.tracerBottom.rotation = Math.PI/2;
    this.handBottom = new PIXI.Sprite.fromImage('./src/img/sceneA/hand.png');
    setDefaultValue(this.handBottom,100,81,10,10);

    this.background.addChild(this.bgPic);
    for(var i=0;i<this.starAs.length;i++){
        this.background.addChild(this.starAs[i]);
    }
    this.background.addChild(this.smallStarB);
    this.background.addChild(this.bigPlanet);
    this.background.addChild(this.starmapA);
    this.background.addChild(this.starmapB);
    this.background.addChild(this.starmapC);
    this.background.addChild(this.planetTop);
    this.background.addChild(this.comet);
    this.background.addChild(this.earth);
    this.background.addChild(this.boom);
    this.background.addChild(this.loader);
    this.ball.addChild(this.personA);
    this.ball.addChild(this.actions);
    this.ball.addChild(this.paopao);
    this.paopao.addChild(this.textC_A);
    this.paopao.addChild(this.textC_B);
    this.paopao.addChild(this.textC_C);
    this.background.addChild(this.ball);
    this.background.addChild(this.personB);
    this.background.addChild(this.phone);
    this.phone.addChild(this.finger);
    this.phone.addChild(this.lingling);

    this.background.addChild(this.textD);
    this.background.addChild(this.textE);
    this.background.addChild(this.textA);
    this.background.addChild(this.tracer);
    this.tracer.addChild(this.hand);
    this.background.addChild(this.tracerBottom);
    this.tracerBottom.addChild(this.handBottom);

    this.loader.addChild(this.loaderInner);
    this.loader.addChild(this.loaderText);
    for(var i=0;i<10;i++){
        this.persentageContainer.addChild(this.unitsDigits[i]);
        this.persentageContainer.addChild(this.tensDigits[i]);
    }
    this.persentageContainer.addChild(this.persentage);
    this.loader.addChild(this.persentageContainer);

    var elements = {
        'background':this.background,
    };
    Global.setElementsToStage('sceneA',elements);

    this.count = 0;
    this.handerBottomCount = 0;
    this.bgScale = true;
    this.cometEarthCount = 0;
    this.booomCount = 0;
    this.bgCount = 0;
    this.handerCount = 0;
    this.handerUp = true;
    this.hasShowHanderUp = false;
    this.handerLeft = false;
}

GAME.sceneA.prototype.moving = function (){
    // console.log(this.background.position.y);

    // if(this.bgScale){
        // this.bgCount += 0.01;
        // this.bgPic.scale.x = 1.05 + 0.05*Math.sin(this.bgCount);
        // this.bgPic.scale.y = 1.01 + 0.01*Math.cos(this.bgCount);
    // }

    this.count += 0.01;
    this.planetTop.scale.x = 0.9 + 0.1*Math.cos(this.count);
    this.planetTop.scale.y = 0.9 + 0.1*Math.cos(this.count);
    this.planetTop.position.x = 510 + 2 + 2*Math.sin(this.count);
    this.planetTop.position.y = 60 - 10 + 10*Math.sin(this.count);
    this.starmapA.alpha = 0.7+0.3*Math.sin(this.count*5);
    this.starmapB.alpha = 0.7+0.3*Math.cos(this.count*5);
    this.starmapC.alpha = 0.7+0.3*Math.sin(this.count*5);
    this.bigPlanet.alpha = 0.8+0.2*Math.sin(1+this.count*8);
    for(var i=0;i<this.starAs.length;i++){
        this.starAs[i].alpha = Math.sin(this.count*this.starAs[i].blink);
    }

    this.otherAction();

    var la = GAME.line.lineA;
    var lb = GAME.line.lineB;
    this.background.position.x = lb;

    if(this.handerUp){
        var speed = Math.PI/2 + this.count * 4;
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

    if(!this.hasShowHanderUp){
        if(la<=-1){
            this.handerUp = false;
            this.hasShowHanderUp = true;
        }else{
            this.handerUp = true;
        }
    }

    //lineA时间轴
    if(la<=0 && la>=-1500){
        this.bgScale = true;
        this.background.position.y = la;
        // this.loaderInner.width = 0;

        if(la<-170){
            this.textA.alpha = (-la)*0.003;
            this.textA.position.y = ((-la)-170)+230;
        }else{
            this.textA.alpha = 0;
            this.textA.position.y = 230;
        }
        // -1955 + GAME.height
        // ((-1955 + GAME.height) - (-la)).toFixed(2)*1000/10   ---    text

        this.loaderInner.width = (-la) / 1500 * 560;
        var aa = ((-la) / 1500).toFixed(2)*100;
        // this.loaderPercentage.text = ((-la) / 1500).toFixed(2)*100 + '%';
        // this.loaderPercentage.text = (-la) + '%';
        this.persentageContainer.alpha = 1;
        this.showPersentage(((-la) / 1500).toFixed(2)*100+'');
        this.loaderText.alpha = 0;
        if(((-la) + (GAME.height - 100)) < 1955){
            this.loader.position.y = (-la) + (GAME.height - 100);
        }else{
            this.loader.position.y = 1955;
        }

        if(la<=-500 && la>=-700){
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
        }

        this.ball.position.x = 400;
        this.ball.position.y = 2800;
    }else if(la<=-1500 && la>=-2000){
        this.loaderInner.width = 560;
        this.persentageContainer.alpha = 0;
        this.loaderText.alpha = 1;
        this.loader.position.y = 1955;
        this.loader.alpha = 2-(-la-1500)*0.004;
        this.textA.alpha = 0;

        this.ball.position.x = 400 - ((-la)-1500)/500 * 90;
        this.ball.position.y = 2800 - ((-la)-1500)/500 * 700;

        this.background.position.y = la;
        this.paopao.alpha = 0;

        if(this.bgScale){
            this.bgScale = false;
            this.bgPic.scale.x = 1;
            this.bgPic.scale.y = 1;
        }
    }else if(la<= -2000 && la>= -3000){
        //星球降落
        this.loader.alpha = 0;
        this.ball.position.x = 310;
        this.ball.position.y = 2100;
        this.background.position.y = -2000;
        if(la<=-2500 && la>=-3000){
            // if(!showBall){
            //     showBall = true;
            //     scroller.moveTo(GAME.line,'lineA',-2500,-3200,1,function (e){
            //         e.nowTop = e.iTop = -3200;
            //         showBird = false;
            //     });
            // }
            var index = Math.min(5,Math.floor((-la-2500)/30));
            this.actions.texture = this.actionFrames[index];
        }else{
            this.actions.texture = this.actionFrames[0];
            this.paopao.alpha = (-la-2000)/250;
            this.textC_A.alpha = (-la-2000)/160;
            this.textC_B.alpha = -1 + (-la-2000)/160;
            this.textC_C.alpha = -2 + (-la-2000)/160;
        }
        this.phone.alpha = 0;
    }else if(la<=-3000){
        this.actions.texture = this.actionFrames[5];
        this.paopao.alpha = 1;
        this.textC_A.alpha = 1;
        this.textC_B.alpha = 1;
        this.textC_C.alpha = 1;
        this.lingling.alpha = Math.sin(this.count*10);
        // -80 -30
        this.finger.position.x = -80 + 10*Math.sin(this.count*5);
        this.finger.position.y = -30 + 5*Math.sin(this.count*5);

        if(la<=-3000 && la>=-3160){
            this.ball.position.y = ((-la) -3000) + 2100;
            this.phone.alpha = ((-la) -3000)/160;
        }else{
            this.ball.position.y = 2260;
            this.phone.alpha = 1;
        }
        // this.textB.alpha = 1;
        // this.loaderInner.width = 560;
        this.background.position.y = la + 1000;

        if(la<=-3200){
            if(!showBall){
                showBall = true;
                scroller.updateProps(function (e){
                    gameStory = true;
                    cancelAnimationFrame(e.step);
                    e.isTweening = false;
                    e.nowTop = e.iTop = -3200;
                    showBird = true;
                })
                // scroller.moveTo(GAME.line,'lineA',-2500,-3200,1,function (e){
                //     e.nowTop = e.iTop = -3200;
                //     showBird = false;
                // });
            }
            if(showBird){
                scroller.updateProps(function (e){
                    e.step && cancelAnimationFrame(e.step);
                    e.isTweening = false;
                    e.nowTop = e.iTop = -3200;
                    la = -3200;
                });
            }
        }
        this.background.position.y = la + 1000;

        // if(la<=-2500 && la>=-3000){
        //     this.textC_B.position.x = -300 + (-la - 2500)*0.7;
        //     this.textC_B.position.y = 3200 - (-la - 2500)*0.7*0.23;
        // }
        // if(la<=-2300 && la>=-3300){
        //     this.textC_A.position.x = 640 - (-la - 2300)*0.64;
        //     this.textC_A.position.y = 2873 + (-la -2300)*0.64*0.23;
        //     this.textC_C.position.x = 640 - (-la - 2300)*0.66;
        //     this.textC_C.position.y = 3073 + (-la -2300)*0.66*0.23;
        // }

        // 呼叫喜鹊大队长前

        // 呼叫喜鹊大队长后
        this.light.alpha = 0;
        this.bird.alpha = 0;
        if(la<=-4400){
            this.light.alpha = 1;
            this.bird.alpha = -1 + ((-la)-4400)*0.01;
        }

        if(la==-4761 && lb==0){
            this.handerBottomCount += 0.01;
            var speed = Math.PI/2 + this.count * 4;
            var math = Math.cos(speed-Math.PI*2+Math.PI/2);
            var math2 = Math.cos(speed-Math.PI/2+Math.PI/2);
            var tracer1 = math<0?0:math;
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
            this.tracerBottom.alpha = -tracer;
            this.handBottom.position.y = 240*hander;
        }else{
            this.tracerBottom.alpha = 0;
        }
    }
}

GAME.sceneA.prototype.showPersentage = function (numString){
    if(numString.length==1){
        for(var i=0;i<10;i++){
            this.unitsDigits[i].alpha = 0;
            this.tensDigits[i].alpha = 0;
        }
        this.unitsDigits[numString].alpha = 1;
    }else if(numString.length==2){
        for(var i=0;i<10;i++){
            this.unitsDigits[i].alpha = 0;
            this.tensDigits[i].alpha = 0;
        }
        this.unitsDigits[numString[1]].alpha = 1;
        this.tensDigits[numString[0]].alpha = 1;
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