

GAME.sceneC = function (){
    this.baseUrl = './src/img/sceneC/';
}

GAME.sceneC.prototype.createSceneC = function (){
    const baseUrl = this.baseUrl;

    this.background = new PIXI.Sprite.fromImage(baseUrl+'bg.jpg');
    setDefaultValue(this.background,640,1478,0,0);
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
    setDefaultValue(this.textD,542,713,30,673);
    this.smalls = new PIXI.Sprite.fromImage(baseUrl+'smalls.jpg');
    setDefaultValue(this.smalls,82,79,286,772);
    this.bigs = new PIXI.Sprite.fromImage(baseUrl+'bigs.jpg');
    setDefaultValue(this.bigs,398,388,120,958);

    this.background.addChild(this.logo);
    this.background.addChild(this.imgA);
    this.background.addChild(this.textA);
    this.background.addChild(this.imgB);
    this.background.addChild(this.textB);
    this.background.addChild(this.textC);
    this.background.addChild(this.textD);
    this.background.addChild(this.smalls);
    this.background.addChild(this.bigs);

    var elements = {
        'background':this.background,
    };
    Global.setElementsToStage('sceneC',elements);
}

GAME.sceneC.prototype.moving = function (){
    var lc = GAME.line.lineC;
    var lb = GAME.line.lineB;


    if(lb<=-4475){
        this.background.x = -((-lb)-4475-640);
    }else{
        this.background.x = 640;
    }
    this.background.y = lc;
}