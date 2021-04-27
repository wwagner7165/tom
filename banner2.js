(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner2_atlas_1", frames: [[0,0,468,60],[470,0,37,32],[0,62,183,60],[185,62,170,60],[0,124,206,28]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Background = function() {
	this.initialize(ss["banner2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gears = function() {
	this.initialize(ss["banner2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1 = function() {
	this.initialize(ss["banner2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle2 = function() {
	this.initialize(ss["banner2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.YourFutureisOurFuture = function() {
	this.initialize(ss["banner2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.YourFutureisOurFuture();
	this.instance.setTransform(-103,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-14,206,28);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.YourFutureisOurFuture();
	this.instance.setTransform(-103,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-14,206,28);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skin
	this.text = new cjs.Text("Visit", "31px 'Times'", "#FFFFFF");
	this.text.lineHeight = 33;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(-35,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},3).wait(1));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1,3,true).p("AmFikIMLAAQAyAAAAAyIAADlQAAAygyAAIsLAAQgyAAAAgyIAAjlQAAgyAyAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AmFClQgyAAAAgyIAAjlQAAgyAyAAIMLAAQAyAAAAAyIAADlQAAAygyAAg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2C2C2C").ss(4,1,1,3,true).p("AmFikIMLAAQAyAAAAAyIAADlQAAAygyAAIsLAAQgyAAAAgyIAAjlQAAgyAyAAg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6A6A6A").s().p("AmFClQgyAAAAgyIAAjlQAAgyAyAAIMLAAQAyAAAAAyIAADlQAAAygyAAg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333334").ss(4,1,1,3,true).p("AmFikIMLAAQAyAAAAAyIAADlQAAAygyAAIsLAAQgyAAAAgyIAAjlQAAgyAyAAg");
	this.shape_4.setTransform(0,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B2B").s().p("AmFClQgyAAAAgyIAAjlQAAgyAyAAIMLAAQAyAAAAAyIAADlQAAAygyAAg");
	this.shape_5.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-18.5,92,37);


(lib.gears_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gears();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gears_1, new cjs.Rectangle(0,0,37,32), null);


// stage content:
(lib.banner2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [69];
	// timeline functions:
	this.frame_69 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.visit.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://literate-uncovered-zipper.glitch.me/robot.html', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(6));

	// button
	this.visit = new lib.button();
	this.visit.name = "visit";
	this.visit.setTransform(62,30.5);
	this.visit._off = true;
	new cjs.ButtonHelper(this.visit, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.visit).wait(69).to({_off:false},0).wait(6));

	// gears
	this.instance = new lib.gears_1();
	this.instance.setTransform(253.5,201.95,1,1,0,0,0,18.5,16);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({y:41},46).wait(6));

	// Your_Future_is_Our_Future
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(256,-300);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(256,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_2}]},42).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({_off:true,y:16},42).wait(17));

	// Rectangle_2
	this.instance_3 = new lib.Rectangle2();
	this.instance_3.setTransform(298,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75));

	// Rectangle_1
	this.instance_4 = new lib.Rectangle1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75));

	// Background
	this.instance_5 = new lib.Background();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(234,-284,234,502);
// library properties:
lib.properties = {
	id: '9C414A1DE8474069AB0353A1D5906DBE',
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner2_atlas_1.png?1619092551711", id:"banner2_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9C414A1DE8474069AB0353A1D5906DBE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;