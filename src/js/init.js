var GAME = GAME || {};
var audio;

GAME.init = function (){
    if (supportPreload()){
        loadAudioSource('./src/music.mp3').then(function (){
            audio = document.createElement('audio');
            audio.src = './src/music.mp3';
            audio.autoplay = 'autoplay';
            audio.loop = true;
            audio.style.display = 'none';
            document.body.appendChild(audio);

        });
    }
    document.getElementById('mask').style.display = 'none';
    var audioStatus = true;
    document.getElementById('music').addEventListener('touchstart',function (){

        if(!audioStatus){
            $('#music').removeClass('stop');
            audioStatus = true;
            audio.play();
        }else{
            audioStatus = false;
            $('#music').addClass('stop');
            audio.pause();
        }
    },true);


    renderer = PIXI.autoDetectRenderer(GAME.width, GAME.height, {
        view: document.querySelector('#pixi-canvas')
    },true);

    stage = new PIXI.Container();
    scroller = new GAME.scroll();
    var sceneA = new GAME.sceneA();
    var sceneB = new GAME.sceneB();
    var sceneC = new GAME.sceneC();
    var sceneFinal = new GAME.sceneFinal();
    sceneA.createSceneA();
    sceneB.createSceneB();
    sceneC.createSceneC();
    sceneFinal.createSceneFinal();

    var global = Global.stage;
    var zIndex = [
        global.sceneC.background,
        global.sceneB.background,
        global.sceneA.background,
        global.sceneFinal.background,
        global.sceneFinal.backPage,
        global.sceneFinal.phone,
        graphics,
    ];
    for(var i=0;i<zIndex.length;i++){
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
    }
}

GAME.loader = function (){
    Global.onScreenResize();
    var progress = document.getElementById('isload');

    var loader = PIXI.loader;
    for(var key in GAME.config){
        for(var i=0;i<GAME.config[key].length;i++){
            loader.add(key+'_'+i,GAME.config[key][i]);
        }
    }

    loader.on('progress',function (e){
        progress.innerHTML = Math.floor(e.progress);
    });
    loader.once('complete',GAME.init);
    loader.load();
}

