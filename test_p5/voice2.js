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

myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

	function setup(){
		// graphics stuff:
		createCanvas(1000, 600);
		background(255, 255, 255);
    frameRate(1);
		//fill(0, 0, 0, 255);

    mic = new p5.AudioIn();
    analyzer = new p5.Amplitude();   // create a new Amplitude analyzer
    analyzer.setInput(mic); //

    mic = new p5.AudioIn();
    fft = new p5.FFT();
    fft.setInput(mic);


		// instructions:
		textSize(32);
		textAlign(CENTER);
		text("tell me a story", width/2, height/2);
		myRec.onResult = parseResult;
		myRec.start();


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

  }

	function draw(){

    console.log("start");

    // Get the average (root mean square) amplitude
  rms = mic.getLevel();

  spectrum = fft.analyze();

  if(xPositionamp < 900){
  xPositionamp = xPositionamp+80;

  }
  else{

    xPositionamp = 50;
    yPositionamp = yPositionamp+100;

  }

  if(xPositionfft < 900){
  xPositionfft = xPositionfft+80;

  }
  else{

    xPositionfft = 50;
    yPositionfft = yPositionfft+100;

  }

    for(var i=0; i<rms; i++){
    fill(255);
    stroke(155);

    // Draw an ellipse with size based on volume
    //rect(xPosition, yPosition, 10+rms*200, 10+rms*200);
    rect(xPositionfft, yPositionfft, 10+rms*200, 10+rms*200);
    // ellipse(xPosition, yPosition, w, h);

    }

    for(var i=0; i<spectrum.length; i++){

      var h = map(spectrum[i],0,1024,0,300);
      var w = map(spectrum[i],0,1024,0,300);
      fill(255);
      stroke('rgba(82, 167, 133, .5)');
      ellipse(xPositionamp,yPositionamp,w,h);

    }
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

	function showResult()
	{
		if(myRec.resultValue==true) {
			background(255);
			text(myRec.resultString, width/2, height/2);
			console.log(myRec.resultString);
		}
	}



  //
  //
  // function setup(){
  //
  // var foo = new P5.SpeechRec(); // speech recognition object (will prompt for mic access)
  // foo.onResult = showResult; // bind callback function to trigger when speech is recognized
  // foo.start(); // start listening
  // }
  //
  // function showResult()
  // {
  //   console.log(foo.resultString); // log the result
  // }
  //
