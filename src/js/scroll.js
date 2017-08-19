var GAME = GAME || {};


var processA = true;
var processB = false;
var processC = false;
var processD = false;
var processFinal = false;

var graphics = new PIXI.Graphics();
var isPainting = false;
var isDraging = false;

GAME.scroll = function (){

    this.startLength = 0;
    this.moveLength = 0;
    this.iTop = 0;
    this.startDest = 0;
    this.nowTop = 0;
    this.startTime;
    this.isTweening = false;
    this.iLeft = 0;
    this.nowLeft = 0;
    this.moveHorizontalLength = 0;
    this.startHorizontalLength = 0;
    this.startHorizontalDest = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.fx = 0;
    this.fy = 0;

    this.changeLocation = function (index){
        var locationObj = GAME.locationList[index];

        this.startLocation = locationObj.start;
        this.endLocation = locationObj.end;
        // this.prevIndex = locationObj.prev;
        // this.nextIndex = locationObj.next;
        this.target = locationObj.target;
        this.offset = locationObj.offset;
    }

    this.changeLocation(0);  //初始化位置

    var self = this;

    document.body.addEventListener('touchstart',function (event){
        if(!processD){
            event.preventDefault();
            self.isTweening = false;
            cancelAnimationFrame(self.step);
            self.startTime = new Date().getTime();
            self.startLength = self.startDest = event.touches[0].pageY;
            self.startHorizontalLength = self.startHorizontalDest = event.touches[0].pageX;
        }else{
            isPainting = true;
            graphics.beginFill(0xfc601d);
            graphics.lineStyle(0);
            graphics.drawShape(new PIXI.Circle(event.changedTouches[0].pageX*GAME.ratio,event.changedTouches[0].pageY*GAME.ratio,15));
            graphics.endFill();
            self.fx = event.touches[0].pageX;
            self.fy = event.touches[0].pageY;
            self.lastX = event.touches[0].pageX;
            self.lastY = event.touches[0].pageY;
        }
    },true);

    document.body.addEventListener('touchmove',function (event){
    if(!processD) {
        self.moveLength = (event.changedTouches[0].pageY - self.startLength) * GAME.ratio / 2;
        self.moveHorizontalLength = (event.changedTouches[0].pageX - self.startHorizontalLength) * GAME.ratio / 2;

        if (processA) {
            if (self.iTop + self.moveLength <= self.endLocation) {
                self.nowTop = self.iTop = self.endLocation;
                processB = true;
                self.startHorizontalLength = self.startHorizontalDest = event.changedTouches[0].pageX;
                self.nowLeft = self.iLeft = 0;
            } else if (self.iTop + self.moveLength >= self.startLocation) {
                self.nowTop = self.iTop = self.startLocation;
            } else {
                self.nowTop = self.iTop + (event.changedTouches[0].pageY - self.startLength) * GAME.ratio / 2;
                processB = false;
            }

            GAME.line[self.target] = self.nowTop;
        }

        if (processB) {
            if (self.iLeft + self.moveHorizontalLength <= GAME.locationList[1].end) {
                self.nowLeft = self.iLeft = GAME.locationList[1].end;
                processC = true;
                self.startLength = self.startDest = event.changedTouches[0].pageY;
                self.nowTop = self.iTop = 0;
            } else if (self.iLeft + self.moveHorizontalLength >= GAME.locationList[1].start) {
                processA = true;
                self.startLength = self.startDest = event.changedTouches[0].pageY;
                self.nowTop = self.iTop = self.endLocation;
                self.nowLeft = self.iLeft = GAME.locationList[1].start;
            } else {
                self.nowLeft = self.iLeft + ((event.changedTouches[0].pageX - self.startHorizontalLength) * GAME.ratio / 2);
                processA = false;
                processC = false;
            }
            GAME.line.lineB = self.nowLeft;
        }
        if (processC) {
            if (self.iTop + self.moveLength < GAME.locationList[2].end) {
                self.nowTop = self.iTop = GAME.locationList[2].end;
                console.log('结束 画地图');
                processD = true;
            } else if (self.iTop + self.moveLength > GAME.locationList[2].start) {
                self.nowTop = self.iTop = GAME.locationList[2].start;
                processB = true;
                self.startHorizontalLength = self.startHorizontalDest = event.changedTouches[0].pageX;
                self.nowLeft = self.iLeft = GAME.locationList[1].end;
            } else {
                self.nowTop = self.iTop + (event.changedTouches[0].pageY - self.startLength) * GAME.ratio / 2;
                processB = false;
            }
            GAME.line.lineC = self.nowTop;
        }

        var thisTime = new Date().getTime();
        if (thisTime - self.startTime > 300) {
            self.startTime = thisTime;
            self.startDest = event.changedTouches[0].pageY;
            self.startHorizontalDest = event.changedTouches[0].pageX;
        }
        event.preventDefault();
    }else{
        isDraging = true;
        graphics.beginFill(0xfc601d);
        graphics.lineStyle(0);
        graphics.drawShape(new PIXI.Circle(event.changedTouches[0].pageX*GAME.ratio,event.changedTouches[0].pageY*GAME.ratio,15));
        graphics.endFill();
        graphics.lineStyle(30, 0xfc601d, 1);
        graphics.moveTo(self.lastX*GAME.ratio,self.lastY*GAME.ratio);
        graphics.lineTo(event.changedTouches[0].pageX*GAME.ratio, event.changedTouches[0].pageY*GAME.ratio);
        // graphics.endFill(0xfc601d, 1);
        self.lastX = event.changedTouches[0].pageX;
        self.lastY = event.changedTouches[0].pageY;
    }
    },true);

    document.body.addEventListener('touchend',function (event){
    if(!processD) {
        var now = new Date().getTime(),
            duration = now - self.startTime,
            deceleration = 0.0006,
            destination,
            offsetTop = self.nowTop,
            offsetLeft = self.nowLeft;
        if (processA) {
            if (GAME.line[self.target] !== self.startLocation && GAME.line[self.target] !== self.endLocation) {

                if (duration < 300) {
                    var distance = event.changedTouches[0].pageY - self.startDest,
                        speed = Math.min(1.2, Math.abs(distance) / duration);

                    destination = offsetTop + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
                    self._scrollTo(destination, speed / deceleration, GAME.scroll.ease.circular.fn, 0);
                } else {
                    self.iTop = offsetTop;
                }
            }
        }

        if (processB) {
            if (GAME.line.lineB !== GAME.locationList[1].start && GAME.line.lineB !== GAME.locationList[1].end) {
                if (duration < 300) {
                    var distance = event.changedTouches[0].pageX - self.startHorizontalDest,
                        speed = Math.min(1.2, Math.abs(distance) / duration);

                    destination = offsetLeft + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
                    self._scrollTo(destination, speed / deceleration, GAME.scroll.ease.circular.fn, 1);
                } else {
                    self.iLeft = offsetLeft;
                }
            }
        }

        if (processC) {
            if (GAME.line.lineC !== GAME.locationList[2].start && GAME.line.lineC !== GAME.locationList[2].end) {
                if (duration < 300) {
                    var distance = event.changedTouches[0].pageY - self.startDest,
                        speed = Math.min(1.2, Math.abs(distance) / duration);

                    destination = offsetTop + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
                    self._scrollTo(destination, speed / deceleration, GAME.scroll.ease.circular.fn, 2);
                } else {
                    self.iTop = offsetTop;
                }
            }
        }
    }else{
        graphics.clear();
        console.log('进入手机界面');
        // if()
        // processFinal = true;
        self.toFinalPage(self.fx,self.fy,event.changedTouches[0].pageX,event.changedTouches[0].pageY);
    }
    },true);
}

GAME.scroll.prototype.toFinalPage = function (startX,startY,endX,endY){
    console.log(startX<endX,startY>endY)
    if(startX>endX && startY<endY){
        console.log(111)
        processFinal = true;
        // processC = false;
    }else{

    }
}

GAME.scroll.prototype._scrollTo = function (destination,duration,easingFn,type){
    var self = this,
        beginTime = new Date().getTime(),
        destTime = beginTime + duration,
        beginLength = (type==0||type==2)?self.nowTop:self.nowLeft;

    if(type==0){
        this.step = function (){
            var now = new Date().getTime(),
                easing;
            if(now>=destTime){
                self.isTweening = false;
                return;
            }

            now = (now-beginTime)/duration;
            easing = easingFn(now);

            self.nowTop = self.iTop = (destination - beginLength)*easing + beginLength;

            if(self.nowTop < self.endLocation){
                self.nowTop = self.iTop = self.endLocation;
                GAME.line[self.target] = self.iTop;
                self.isTweening = false;
                console.log('进入第二章节');
                return;
            }else if(self.nowTop > 0){
                self.nowTop = self.iTop = self.startLocation;
                GAME.line[self.target] = self.iTop;
                self.isTweening = false;
                return;
            }
            GAME.line[self.target] = self.iTop;
            self.isTweening&&requestAnimationFrame(self.step);
        }
    }else if(type==1){
        this.step = function (){
            var now = new Date().getTime(),
                easing;
            if(now>=destTime){
                self.isTweening = false;
                return;
            }

            now = (now-beginTime)/duration;
            easing = easingFn(now);

            self.nowLeft = self.iLeft = (destination - beginLength)*easing + beginLength;
            if(self.nowLeft < GAME.locationList[1].end){
                self.nowLeft = self.iLeft = GAME.locationList[1].end;
                GAME.line.lineB = self.iLeft;
                self.isTweening = false;
                console.log('进入第三章节');
                return;
            }else if(self.nowLeft > 0){
                self.nowLeft = self.iLeft = GAME.locationList[1].start;
                GAME.line.lineB = self.iLeft;
                self.isTweening = false;
                return;
            }
            GAME.line.lineB = self.iLeft;
            self.isTweening&&requestAnimationFrame(self.step);
        }
    }else if(type==2){
        this.step = function (){
            var now = new Date().getTime(),
                easing;
            if(now>=destTime){
                self.isTweening = false;
                return;
            }

            now = (now-beginTime)/duration;
            easing = easingFn(now);

            self.nowTop = self.iTop = (destination - beginLength)*easing + beginLength;
            if(self.nowTop < GAME.locationList[2].end){
                self.nowTop = self.iTop = GAME.locationList[2].end;
                GAME.line.lineC = self.iTop;
                self.isTweening = false;
                console.log('进入画图');
                processD = true;
                return;
            }else if(self.nowTop > 0){
                self.nowTop = self.iTop = GAME.locationList[2].start;
                GAME.line.lineC = self.iTop;
                self.isTweening = false;
                return;
            }
            GAME.line.lineC = self.iTop;
            self.isTweening&&requestAnimationFrame(self.step);
        }
    }

    this.isTweening = true;
    this.step();
}

GAME.scroll.ease = {
    circular:{
        style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
        fn: function (k) {
            return Math.sqrt( 1 - ( --k * k ) );
        }
    },
    quadratic: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (k) {
            return k * ( 2 - k );
        }
    },
    back: {
        style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fn: function (k) {
            var b = 4;
            return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
        }
    },
}