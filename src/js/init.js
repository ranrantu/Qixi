var GAME = GAME || {};
var renderer,stage;

GAME.init = function (){
    new GAME.scroll();

    renderer = PIXI.autoDetectRenderer(GAME.width, GAME.height, {
        view: document.querySelector('#pixi-canvas')
    },true);

    stage = new PIXI.Container();
    let sceneA = new GAME.sceneA();
    sceneA.createSceneA();

    let global = Global.stage;
    let zIndex = [
        global.sceneA.background,
        // global.sceneA.planetTop,
    ];
    for(let i=0;i<zIndex.length;i++){
        stage.addChild(zIndex[i]);
    }

    renderer.render(stage);
    requestAnimationFrame(animate);

    var t = new Date().getTime();
    function animate(){
        renderer.render(stage);
        var now = new Date().getTime();
        var deltaTime = now - t;

        sceneA.moving(deltaTime);

        t = now;
        requestAnimationFrame(animate);
    }
}

GAME.loader = function (){
    Global.onScreenResize();

    let loader = PIXI.loader;
    for(let key in GAME.config){
        for(let i=0;i<GAME.config[key].length;i++){
            loader.add(key+'_'+i,GAME.config[key][i]);
        }
    }
    loader.once('complete',GAME.init);
    loader.load();
}

