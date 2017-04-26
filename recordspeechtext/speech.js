	//https://github.com/higuma/web-audio-recorder-js
// console.log("hi from speech js");

	var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true; // allow partial recognition (faster, less accurate)

	var x, y;
	var dx, dy;
	var fileNum = 0;


	function setup(){

			// //FROM PIXELS.JS
		  // createCanvas(500, 700);
		  // pixelDensity(1);
		  // mic = new p5.AudioIn();
		  // analyzer = new p5.Amplitude();
		  // analyzer.setInput(mic);
		  // mic.start();
		  // //frameRate(1);

			// //FROM VOICE.JS
			// //createCanvas(2000, 4000);
			// //background(255, 255, 255);
			// frameRate(1);
			// //fill(0, 0, 0, 255);
			//
			// mic = new p5.AudioIn();
			// analyzer = new p5.Amplitude();   // create a new Amplitude analyzer
			// analyzer.setInput(mic); //
			//
			// mic = new p5.AudioIn();
			// fft = new p5.FFT();
			// fft.setInput(mic);
			//
			// button1amp = createButton('START');
	    // button1amp.position(100, 100);
	    // button1amp.mousePressed(changeFlag);
			//
	    // button2amp = createButton('STOP');
	    // button2amp.position(100, 300);
	    // button2amp.mousePressed(stop);
			//
	    // button1fft = createButton('START');
	    // button1fft.position(100, 100);
	    // button1fft.mousePressed(changeFlag);
			//
	    // button2fft = createButton('STOP');
	    // button2fft.position(100, 300);
	    // button2fft.mousePressed(stop);
			//
			//
	    // xPositionamp = 50;
	    // yPositionamp = 50;
	    // flag = false;
			//
	    // xPositionfft = 50;
	    // yPositionfft = 100;

		noCanvas();
		noLoop();
		myRec.onResult = parseResult; // recognition callback
		myRec.start(); // start engine
	}

// 	function draw() {
// 	  //background (51);
// console.log("hi");
// 		loadPixels();
// 	  if (mouseIsPressed) {
// 	    console.log(pixels);
// 	  }
// 	  rms = mic.getLevel();
// 	  console.log(rms);
//
// 	  // update curPixel
// 	  if (rms < 0.02) {
// 	    console.log("black");
//
// 	set(curPixel%width,curPixel/width,color(0));
// 	  } else {
// 	    console.log("white");
//
// 	    set(curPixel%width,curPixel/width,color(255));
// 	  }
//
// 	  curPixel += 4;
// 	  if (curPixel >= pixels.length) {
// 	    curPixel = 0;
// 	  }
//
// 	  updatePixels();
//
// 	}

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
