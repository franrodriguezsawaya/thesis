var button1;
var button2;
var analyzer;
var mic;
var rms;

// function preload() {
//   song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
// }

function setup() {
createCanvas(710, 200);
noFill();
frameRate(1);

mic = new p5.AudioIn();
analyzer = new p5.Amplitude();   // create a new Amplitude analyzer
analyzer.setInput(mic); // Patch the input to an volume analyzer

//mic.start();

button1 = createButton('START');
button1.position(100, 100);
button1.mousePressed(changeFlag);

button2 = createButton('STOP');
button2.position(100, 300);
button2.mousePressed(stop);

xPosition = 50;
yPosition = 50;
flag = false;

}

function draw() {
  console.log("start");
  //background(255);

  // Get the average (root mean square) amplitude
rms = mic.getLevel();

if(xPosition < 900){
xPosition = xPosition+80;
// yPosition = yPosition;
// var yPosition = yPosition;


}
else{

  xPosition = 50;
  yPosition = yPosition+50;

}

  for(var i=0; i<rms; i++){

    // var h = map(mic.getLevel[i],0,1024,0,300);
    // var w = map(mic.getLevel[i],0,1024,0,300);

  fill(255);
  stroke(155);

  // Draw an ellipse with size based on volume
  rect(xPosition, yPosition, 10+rms*200, 10+rms*200);
  // ellipse(xPosition, yPosition, w, h);

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



//
//
// var mic;
// var amp;
// var button;
// var spectrum;
// var button1;
// var button2;
//
// // function preload() {
// //   sound = loadSound('/Users/francescarodriguezsawaya/Desktop/Thesis/test_p5/Paula.wav');
// // }
//
// function setup() {
// createCanvas(500, 500);
// noFill();
// frameRate(1);
//
// mic= new p5.AudioIn();
// mic.start();
// amp = new p5.Amplitude();
// amp.setInput(mic);
//
// button1 = createButton('START');
// button1.position(100,100);
// button1.mousePressed(draw);
//
// button2 = createButton('STOP');
// button2.position(100,300);
// button2.mousePressed(stop);
//
//   //
//   // button = createButton('STOP');
//   // button.id('myButton');
//   // button.position(100, 100);
//     // start / stop the sound when canvas is clicked
//
// function draw() {
// console.log("hello");
//
// spectrum = amp.analyze();
// duration = mic.enabled; //??
//
//
//
//
//   //myButton.mouseClicked(function() {
//   //   if (sound.isPlaying()) {
//   //     sound.stop();
//   //   } else {
//   //     sound.play();
//   //   }
//   // }
//
//
//
//
//   // var buttonSelector = select('#myButton');
//   // buttonSel/ector.mousePressed(stop);
//
//   // background(255);
//   // fill(0);
// for(var j=0; j<mic.enabled; j++){}
//
//   for(var i = 0; i<spectrum.length; i++){
//   var level = amp.getLevel();
//   var size = map(level, 0, 1, 0, 200);
//   fill(255);
//   stroke(255,0, 0);
//  rect(width/2, height/2, size, size);
//  }
// }
// }
//
//
// function stop() {
//   console.log("bye");
// //  noLoop(draw);
// }
