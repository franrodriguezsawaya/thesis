//thesis
//nyu itp
//by fran rodriguez-sawaya
//v0.0.1

//https://github.com/higuma/web-audio-recorder-js
// console.log("hi from speech js");

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var x, y;
var dx, dy;
var fileNum = 0;

function setup(){



	noCanvas();
	noLoop();
	myRec.onResult = parseResult; // recognition callback
	myRec.start(); // start engine
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
