GAME.sceneFinal = function (){

}

GAME.sceneFinal.prototype.createSceneFinal = function (){
    this.phone = new PIXI.Sprite.fromImage('./src/img/sceneFinal/phone.png');
    setDefaultValue(this.phone,640,GAME.height,0,0,null,null,0);

    this.background = new PIXI.Sprite.fromImage('./src/img/sceneFinal/bg.jpg');
    setDefaultValue(this.background,640,GAME.height,0,0,null,null,0);

    // this.background.addChild(this.phone);

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
        this.phone.alpha += 0.02;
    }
}