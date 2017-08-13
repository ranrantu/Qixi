var GAME = GAME || {};

GAME.width = 640;
GAME.height = window.innerHeight * 640 / window.innerWidth;
GAME.ratio = 640 / window.innerWidth;

GAME.line = {
    lineA:0,
    lineLoader:0,
    lineB:0,
    lineC:0,
}


GAME.config = {
    common:[
        './src/img/scene1.jpg',
        './src/img/planet_top.png',
        './src/img/starmap1.png',
        './src/img/starmap2.png',
        './src/img/loader.png',
        './src/img/loader-inner.png',
        './src/img/loader-text.png',
        './src/img/comet.png',
        './src/img/earth.png',
        './src/img/boom.png',
        './src/img/text1.png',
        './src/img/text3_1.png',
        './src/img/text3_2.png',
        './src/img/text3_3.png',
    ],

}

GAME.locationList = [
    {prev:-1,next:1,target:'lineA',start:0,end:(-5457+GAME.height)},
]