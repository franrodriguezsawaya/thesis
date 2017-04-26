//thesis
//nyu itp
//by fran rodriguez-sawaya
//v0.0.1

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

//setup() function from p5.js library
function setup() {

  //setup without canvas and no loop
  noCanvas();
  noLoop();

  //recognition callback
  myRec.onResult = parseResult;
  //start engine
  myRec.start();
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
		//toggle the recording on
    isRecording = true;
  });

	//add event listener on click to stop button
  stopBtn.addEventListener("click", function() {
    saveMySpeechToFile();
    mySpeech = "";
    isRecording = false;
  });
});
