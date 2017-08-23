var GAME = GAME || {};
var renderer,stage,scroller;
var showBall = false;
var showBird = false;

GAME.width = 640;
GAME.height = window.innerHeight * 640 / window.innerWidth;
GAME.ratio = 640 / window.innerWidth;

// 三条时间线
GAME.line = {
    lineA:0,
    lineB:0,
    lineC:0,
}

// GAME - 配置选项
GAME.config = {
    common:[
        './src/img/sceneA/scene1.jpg',
        './src/img/sceneA/planet_top.png',
        './src/img/sceneA/starmap1.png',
        './src/img/sceneA/starmap2.png',
        './src/img/sceneA/loader.png',
        './src/img/sceneA/loader-inner.png',
        './src/img/sceneA/loader-text.png',
        './src/img/sceneA/comet.png',
        './src/img/sceneA/earth.png',
        './src/img/sceneA/boom.png',
        './src/img/sceneA/text1.png',
        './src/img/sceneA/text3_1.png',
        './src/img/sceneA/text3_2.png',
        './src/img/sceneA/text3_3.png',
        './src/img/sceneB/bg.jpg',
        './src/img/sceneA/light.png',
        './src/img/sceneB/report.jpg',
        './src/img/sceneB/nl.png',
        './src/img/sceneB/zn.png',
        './src/img/sceneB/text2.png',
        './src/img/sceneB/planet_top.png',
        './src/img/sceneFinal/bg.jpg',
        './src/img/sceneFinal/phone.png',
        './src/img/sceneA/action1.png',
        './src/img/sceneA/action2.png',
        './src/img/sceneA/action3.png',
        './src/img/sceneA/action4.png',
        './src/img/sceneA/action5.png',
        './src/img/sceneA/action6.png',
        './src/img/sceneA/phone.png',
        './src/img/sceneC/bigs.jpg',
        './src/img/sceneB/zn_text.png',
    ],
}

GAME.locationList = [
    {prev:-1,next:1,target:'lineA',start:0,end:(-5897+1136)},
    {prev:0,next:-1,target:'lineB',start:0,end:-2197-640},
    {prev:1,next:-1,target:'lineC',start:0,end:(-1478+GAME.height)},
]