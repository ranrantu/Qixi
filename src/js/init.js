var GAME = GAME || {};

GAME.init = function (){

    renderer = PIXI.autoDetectRenderer(GAME.width, GAME.height, {
        view: document.querySelector('#pixi-canvas')
    },true);

    stage = new PIXI.Container();
    scroller = new GAME.scroll();
    let sceneA = new GAME.sceneA();
    let sceneB = new GAME.sceneB();
    let sceneC = new GAME.sceneC();
    let sceneFinal = new GAME.sceneFinal();
    sceneA.createSceneA();
    sceneB.createSceneB();
    sceneC.createSceneC();
    sceneFinal.createSceneFinal();

    let global = Global.stage;
    let zIndex = [
        global.sceneA.background,
        global.sceneB.background,
        global.sceneC.background,
        graphics,
        global.sceneFinal.backPage,
        global.sceneFinal.background,
        global.sceneFinal.phone,
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
        sceneB.moving(deltaTime);
        sceneC.moving(deltaTime);
        sceneFinal.moving(sceneC);

        t = now;
        requestAnimationFrame(animate);
        // TWEEN.update();
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

