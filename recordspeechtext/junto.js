//

//VOICE.JS
var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var analyzer;
var mic;
var fft;
var rms;
var button1amp;
var button2amp;
var button1fft;
var button2fft;
var spectrum;
var xPosition;
var duration;
var flag;
var mic2;

//PIXELS.JS
//var rms;
//var mic;
var curPixel = 0;

//SPEECH.JS
//var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var x, y;
var dx, dy;
var fileNum = 0;

function setup(){
//VOICE.JS
		// graphics stuff:
		createCanvas(2000, 4000);
		background(255, 255, 255);
    frameRate(1);
		//fill(0, 0, 0, 255);

    mic = new p5.AudioIn();
    analyzer = new p5.Amplitude();   // create a new Amplitude analyzer
    analyzer.setInput(mic); //

    //mic = new p5.AudioIn();
    fft = new p5.FFT();
    fft.setInput(mic);

    button1amp = createButton('START');
    button1amp.position(100, 100);
    button1amp.mousePressed(changeFlag);

    button2amp = createButton('STOP');
    button2amp.position(100, 300);
    button2amp.mousePressed(stop);

    button1fft = createButton('START');
    button1fft.position(100, 100);
    button1fft.mousePressed(changeFlag);

    button2fft = createButton('STOP');
    button2fft.position(100, 300);
    button2fft.mousePressed(stop);

    xPositionamp = 50;
    yPositionamp = 50;
    flag = false;

    xPositionfft = 50;
    yPositionfft = 100;

//PIXELS.JS
		//createCanvas(500, 700);
		pixelDensity(1);
		//mic = new p5.AudioIn();
		//analyzer = new p5.Amplitude();
		//analyzer.setInput(mic);
		mic.start();

//SPEECH.JS
//noCanvas();
//noLoop();
myRec.onResult = parseResult; // recognition callback
myRec.start(); // start engine
  }

	function draw(){

    console.log("start");

    // Get the average (root mean square) amplitude
  rms = mic.getLevel();
  console.log(rms);

  spectrum = fft.analyze();

  if(xPositionamp < 1900){
  xPositionamp = xPositionamp+80;

  }
  else{

    xPositionamp = 50;
    yPositionamp = yPositionamp+220;

  }

  if(xPositionfft < 1900){
  xPositionfft = xPositionfft+80;

  }
  else {

    xPositionfft = 50;
    yPositionfft = yPositionfft+270;
}

    for(var i=0; i<rms; i++){ //Amplitude
    fill(255);
    stroke(155);
		fill(255);
    rect(xPositionfft, yPositionfft, 10+rms*200, 10+rms*200);
    // ellipse(xPosition, yPosition, w, h);

    }

    for(var i=0; i<spectrum.length; i++){ //FFT
//console.log(spectrum[i])
      var h = map(spectrum[i],0,1024,0,300);
      var w = map(spectrum[i],0,1024,0,300);
      // var hAlso = 50;
      // var wAlso = 150;
      // if(spectrum[i]< 10){
      fill(255);
      // stroke(0);
      stroke('rgba(82, 167, 133, .5)');
			//triangle(h, w, h + 50, w + 50, h + 100, w + 100)
      // rect(xPositionamp,yPositionamp,w,h);
      ellipse(xPositionamp,yPositionamp,w,h);

}
      else {
        // fill(255);
        ellipse(xPositionamp,yPositionamp,w,h);
        rect(1000,1000,0,0);
      }

if (rms < 0.02 ){
  fill(0);
  stroke(0);
  rect(xPositionamp+20, yPositionamp+150, 40, 20);

} else

fill(250);
stroke(252);
rect(xPositionamp+20, yPositionamp+150, 40, 20);
}

//PIXELS.JS
loadPixels();
if (mouseIsPressed) {
	console.log(pixels);
}
rms = mic.getLevel();
console.log(rms);

// update curPixel
if (rms < 0.02) {
	console.log("black");

set(curPixel%width,curPixel/width,color(0));
} else {
	console.log("white");

	set(curPixel%width,curPixel/width,color(255));
}

curPixel += 4;
if (curPixel >= pixels.length) {
	curPixel = 0;
}

updatePixels();

}
  function stop() {
  console.log("stop");
  //remove(draw)
  noLoop();

  }
    function changeFlag (){
    mic.start();
  // flag == true;
  // frameRate(1)

}

function parseResult(){

	if(recording === true){
		var mostrecentword = myRec.resultString.split(' ').pop();
		mySpeech += mostrecentword + " ";
		console.log(mySpeech);
	}
}

var mySpeech = "";
var recording = false;

function saveMySpeechToFile(){
	var filename = "mySpeecHText" + fileNum;
	var blob = new Blob([mySpeech], {type: "text/plain;charset=utf-8"});
	saveAs(blob, filename+".txt");
	fileNum ++;
}

window.addEventListener("load",function(){

	var startBtn = document.getElementById("start");
	startBtn.addEventListener("click",function(){
		recording = true;
	});

	var stopBtn = document.getElementById("stop");
	stopBtn.addEventListener("click",function(){
		saveMySpeechToFile();
		mySpeech = "";
		recording = false;
	});

});
