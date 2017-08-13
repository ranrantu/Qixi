var GAME = GAME || {};

GAME.scroll = function (){

    this.startLength = 0;
    this.moveLength = 0;
    this.iTop = 0;
    this.startDest = 0;
    this.nowTop = 0;
    this.startTime;
    this.isTweening = false;
    // this.startLocation = 0;
    this.lineStatus = 'lineA_pre';

    this.changeLocation = function (index){
        var locationObj = GAME.locationList[index];

        this.startLocation = locationObj.start;
        this.endLocation = locationObj.end;
        this.prevIndex = locationObj.prev;
        this.nextIndex = locationObj.next;
        this.target = locationObj.target;
        this.offset = locationObj.offset;
    }

    // var locationObj = GAME.config.locationList[0];
    //
    // this.startLocation = locationObj.start;
    // this.endLocation = locationObj.end;
    // this.prevIndex = locationObj.prev;
    // this.nextIndex = locationObj.next;
    // this.target = locationObj.target;

    this.changeLocation(0);  //初始化位置

    var self = this;

    document.body.addEventListener('touchstart',function (event){
        event.preventDefault();
        self.isTweening = false;
        cancelAnimationFrame(self.step);
        self.startTime = new Date().getTime();
        self.startLength = self.startDest = event.touches[0].pageY;

        event.stopPropagation();
    },true);

    document.body.addEventListener('touchmove',function (event){
        self.moveLength = (event.changedTouches[0].pageY - self.startLength)*GAME.ratio / 2;

        if(self.iTop + self.moveLength < self.endLocation){
            self.nowTop = self.iTop = self.endLocation;
        }else if(self.iTop + self.moveLength > self.startLocation){
            self.nowTop = self.iTop = self.startLocation;
        }else{
            self.nowTop = self.iTop + self.moveLength;
        }

        GAME.line[self.target] = self.nowTop;

        var thisTime = new Date().getTime();
        if(thisTime - self.startTime > 300){
            self.startTime = thisTime;
            self.startDest = event.changedTouches[0].pageY;
        }
        event.preventDefault();
    },true);

    document.body.addEventListener('touchend',function (event){
        var now = new Date().getTime(),
            duration = now - self.startTime,
            deceleration = 0.0006,
            destination,
            offsetTop = self.nowTop;
        if(GAME.line[self.target]!==self.startLocation && GAME.line[self.target]!==self.endLocation){

            if(duration < 300){
                var distance = event.changedTouches[0].pageY-self.startDest,
                    speed = Math.min(.8,Math.abs(distance) / duration);

                destination = offsetTop + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
                self._scrollTo(destination,speed / deceleration,GAME.scroll.ease.circular.fn);
            }else{
                self.iTop = offsetTop;
            }

        }
    },true);
}

GAME.scroll.prototype._scrollTo = function (destination,duration,easingFn){
    var self = this,
        beginTime = new Date().getTime(),
        destTime = beginTime + duration,
        beginLength = self.nowTop;

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