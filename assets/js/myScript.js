//thesis
//nyu itp
//by fran rodriguez-sawaya

//variable for storing current version
var currentVersion = "v0.0.3";

//var for storing p5S.SpeechRec object
var myRec = new p5.SpeechRec();
//continuous recognition
myRec.continuous = true;
//allow partial recognition (faster, less accurate)
myRec.interimResults = true;

//variable for storing speech
var mySpeech = "";
//variable for state of recording
var isRecording = false;

//variable for keeping count of text files generated
var fileCounter = 0;

//variable for referencing mic
var mic;
//variable for rms amplitude value
var rms = 0.0;
//variable for audio analyzer
var analyzer;
//variable for fft
var fft;

//variables for drawing ampltude and fft
var xPositionamp = 50;
var yPositionamp = 50;
var flag = false;
var xPositionfft = 50;
var yPositionfft = 100;

//variable for current pixel
var currentPixel = 0;

//maybe include them?
// var myRec = new p5.SpeechRec();
// var analyzer;
// var mic;
// var button1amp;
// var button2amp;
// var button1fft;
// var button2fft;
// var spectrum;
// var xPosition;
// var duration;
// var flag;
// var mic2;


//setup() function from p5.js library
function setup() {

  //console log the current version of my thesis
  console.log(currentVersion);

  //create canvas of 500 px wide and 700 px high
  createCanvas(500, 700);
  //pixel density for addressing retina display
  pixelDensity(1);
	//white background
	background(255);

  console.log("activate mic and start it");
  //retrieve mic from p5 library
  mic = new p5.AudioIn();
  //create new analyzer
  analyzer = new p5.Amplitude();
  //connect the mic to the analyzer
  analyzer.setInput(mic);
  mic.start();
	//createa new fft
	fft = new p5.FFT();
	//connect the mic to the fft
	fft.setInput(mic);

  //recognition callback
  myRec.onResult = parseResult;
  //start engine
  myRec.start();

}

function draw() {
  console.log("this is the draw loop");

  rms = mic.getLevel();
  console.log(rms);

	//load pixels from the screen
	loadPixels();

  if (rms < 0.02) {
		//console.log("lo");
		set(currentPixel%width,currentPixel/width,color(0));
	} else {
		//console.log("hi");
		set(currentPixel%width,currentPixel/width,color(255));
	}

	currentPixel += 4;
	if (currentPixel >= pixels.length) {
		currentPixel = 0;
	}

  //update pixels on the screen
  updatePixels();
}

//function called back by myRec when onResult
function parseResult() {
  if (isRecording === true) {
    var mostrecentword = myRec.resultString.split(' ').pop();
    mySpeech += mostrecentword + " ";
    console.log(mySpeech);
  }
}

//function for saving speech to file
function saveMySpeechToFile() {
  var filename = "mySpeecHText" + fileCounter;
  var blob = new Blob([mySpeech], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, filename + ".txt");
  //update fileCounter
  fileCounter++;
}

//add event listener to loading of page
window.addEventListener("load", function() {

  //retrieve start and stop buttons from site
  var startBtn = document.getElementById("start");
  var stopBtn = document.getElementById("stop");

  //add event listener on click to start button
  startBtn.addEventListener("click", function() {
    console.log("start recording");
    //toggle the recording on
    isRecording = true;
  });

  //add event listener on click to stop button
  stopBtn.addEventListener("click", function() {
    console.log("stop recording");
    saveMySpeechToFile();
    mySpeech = "";
    isRecording = false;
  });
});
