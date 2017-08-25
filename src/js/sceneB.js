GAME.sceneB = function (){
}

GAME.sceneB.prototype.createSceneB = function (){
    this.background = new PIXI.Sprite.fromImage('./src/img/sceneB/bg2.jpg');
    setDefaultValue(this.background,1737,1136,-640,0);
    this.nlText = new PIXI.Sprite.fromImage('./src/img/sceneB/nl_text.png');
    setDefaultValue(this.nlText,74,175,60,269);
    this.nl = new PIXI.Sprite.fromImage('./src/img/sceneB/nl.png');
    setDefaultValue(this.nl,384,535,170,620,.5,.5,1);

    this.report = new PIXI.Sprite.fromImage('./src/img/sceneB/report2.png');
    setDefaultValue(this.report,460,428,163,GAME.height - 200,.9,.5,0);
    this.paopao = new PIXI.Sprite.fromImage('./src/img/sceneB/paopao.png');
    setDefaultValue(this.paopao,347,241,100,-280,null,null,0);
    this.textA_A = new PIXI.Sprite.fromImage('./src/img/sceneB/text1_1.png');
    setDefaultValue(this.textA_A,233,33,60,25,null,null,0);
    this.textA_B = new PIXI.Sprite.fromImage('./src/img/sceneB/text1_2.png');
    setDefaultValue(this.textA_B,232,32,60,75,null,null,0);
    this.textA_C = new PIXI.Sprite.fromImage('./src/img/sceneB/text1_3.png');
    setDefaultValue(this.textA_C,97,32,60,125,null,null,0);
    this.textB_A = new PIXI.Sprite.fromImage('./src/img/sceneB/text2_1.png');
    setDefaultValue(this.textB_A,266,33,45,25,null,null,0);
    this.textB_B = new PIXI.Sprite.fromImage('./src/img/sceneB/text2_2.png');
    setDefaultValue(this.textB_B,266,33,45,75,null,null,0);
    this.textB_C = new PIXI.Sprite.fromImage('./src/img/sceneB/text2_3.png');
    setDefaultValue(this.textB_C,232,33,45,125,null,null,0);
    this.length = new PIXI.Sprite.fromImage('./src/img/sceneB/line.png');
    setDefaultValue(this.length,285,385,196,169,null,null,0);
    // this.textA = new PIXI.Sprite.fromImage('./src/img/sceneB/text1.png');
    // setDefaultValue(this.textA,776,46,550,880,null,null,0);
    this.arrow = new PIXI.Sprite.fromImage('./src/img/sceneB/arrow.png');
    setDefaultValue(this.arrow,950,796,650,124);

    this.head = new PIXI.Sprite.fromImage('./src/img/sceneB/head.png');
    setDefaultValue(this.head,251,231,-210,680,null,null,0);
    this.znText = new PIXI.Sprite.fromImage('./src/img/sceneB/zn_text.png');
    setDefaultValue(this.znText,74,175,560,400,.5,.5);
    this.zn = new PIXI.Sprite.fromImage('./src/img/sceneB/zn.png');
    setDefaultValue(this.zn,490,382,650,220,.5,.5);
    // this.textB = new PIXI.Sprite.fromImage('./src/img/sceneB/text2.png');
    // setDefaultValue(this.textB,1063,45,1958,100,null,null,1);
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
    setDefaultValue(this.bird1,null,null,1100,575,.5,.5);
    setDefaultValue(this.bird2,null,null,1200,521,.5,.5);
    setDefaultValue(this.bird3,null,null,1300,447,.5,.5);
    setDefaultValue(this.bird4,null,null,1400,416,.5,.5);
    setDefaultValue(this.bird5,null,null,1500,368,.5,.5);
    setDefaultValue(this.bird6,null,null,1600,371,.5,.5);
    setDefaultValue(this.bird7,null,null,1700,356,.5,.5);

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

    this.report.addChild(this.paopao);
    this.paopao.addChild(this.textA_A);
    this.paopao.addChild(this.textA_B);
    this.paopao.addChild(this.textA_C);
    this.paopao.addChild(this.textB_A);
    this.paopao.addChild(this.textB_B);
    this.paopao.addChild(this.textB_C);

    this.background.addChild(this.arrow);
    this.arrow.addChild(this.head);
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
    this.background.addChild(this.report);
    this.background.addChild(this.length);
    // this.background.addChild(this.textA);
    this.background.addChild(this.znText);
    this.background.addChild(this.zn);
    // this.background.addChild(this.textB);

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
    if(lb<=-500){
        this.length.alpha = ((-lb)-400)*0.003;
        // this.textA.alpha = 1;
    }else{
        this.length.alpha = 0;
        // this.textA.alpha = 0;
    }

    // console.log(lb);

    if(lb<=-640 && lb>=-850){
        this.background.position.x = 0;
        this.report.position.x = 163;
        this.paopao.alpha = ((-lb)-640)*0.01;
        this.textA_A.alpha = -.5+((-lb)-640)*0.01;
        this.textA_B.alpha = -1+((-lb)-640)*0.01;
        this.textA_C.alpha = -1.5+((-lb)-640)*0.01;
        this.zn.scale.set(0.5);
        this.znText.scale.set(0.5);
    }else if(lb<=-850 && lb>=-1600){
        var offset = lb+850;
        this.background.position.x = offset;
        this.report.position.x = 163-offset;
        var length = 0.5+(-offset)*0.004;
        this.zn.scale.set(length>1?1:length);
        this.znText.scale.set(length>1?1:length);
        this.textA_A.alpha = 1;
        this.textA_B.alpha = 1;
        this.textA_C.alpha = 1;
        this.textB_A.alpha = 0;
        this.textB_B.alpha = 0;
        this.textB_C.alpha = 0;
        this.paopao.position.x = 100;
        this.paopao.position.y = -280;
        if(lb<=-1200){
            this.paopao.position.x = 120;
            this.paopao.position.y = -80;
            this.paopao.alpha = 0;
        }
    }else if(lb<=-1600 && lb>=-1850){
        var offset = 750;
        this.paopao.alpha = 1;
        //100 -280
        this.background.position.x = -offset;
        this.report.position.x = 163+offset;
        this.textA_A.alpha = 0;
        this.textA_B.alpha = 0;
        this.textA_C.alpha = 0;
        this.textB_A.alpha = -.5+((-lb)-1600)*0.01;
        this.textB_B.alpha = -1+((-lb)-1600)*0.01;
        this.textB_C.alpha = -1.5+((-lb)-1600)*0.01;
        this.zn.scale.set(1);
        this.znText.scale.set(1);
    }else if(lb<=-1850){
        var offset = (lb+1850)-750;
        this.background.position.x = offset;
        this.report.position.x = 163+750;
    }else{
        this.paopao.alpha = 0;
    }


    if(lb<=-850){
        var offset = lb+850;
        // console.log(lb)
        if(lb<=-950 && lb>=-1170){
            this.head.alpha = (-offset-100)*0.006;
            this.head.position.x = -210 + (-offset-100)*8/5;
            this.head.position.y = 680;
            this.head.rotation = 0;
        }else if(lb<=-1170 && lb>=-1550){
            this.head.alpha = 1;
            this.arrow.alpha = 1;
            this.head.position.x = 150;
            this.head.position.y = 900 + (offset + 320)*40/19;
            this.head.rotation = -Math.PI/2;
        }else if(lb<=-1550){
            this.head.rotation = 0;
            this.head.position.x = 150 + (-offset-700);
            this.head.position.y = -100;
            this.head.alpha = 1;
            if(lb<=-2200){
                this.head.position.x = 800;
            }
        }else{
            this.head.alpha = 0;
        }
    }

    // if(lb<=-1500 && lb>=-1600){
    //     var length = (-lb)-1500;
    //     this.zn.scale.set(0.5+length*0.004);
    // }else if(lb<=-1600){
    //     this.zn.scale.set(.9);
    // }else{
    //     this.zn.scale.set(.5);
    // }

    // console.log(lb);
}

