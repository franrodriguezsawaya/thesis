var button1;
var button2;
var mic, fft;
var spectrum;
var xPosition;
var duration;
var flag;

function setup() {
  createCanvas(1000, 600);
  noFill();
  frameRate(1);

  mic = new p5.AudioIn();
  fft = new p5.FFT();
  fft.setInput(mic);

  // mic.start();
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


// if (flag == false){
//   spectrum = 0;
// }
// else {

  spectrum = fft.analyze();

  // duration = mic.enabled;//??

  if(xPosition < 900){
  xPosition = xPosition+80;
  // yPosition = yPosition;
  // var yPosition = yPosition;


  }
  else{

    xPosition = 50;
    yPosition = yPosition+50;

  }

//as long as the time is less than x keep drawing
//por toda la duración del audio, dibuja el spectrum
// for(var j=0; j<mic.enabled; j++){ //??
// function makeArt(){
// loop()
  for(var i=0; i<spectrum.length; i++){

    var h = map(spectrum[i],0,1024,0,300);
    var w = map(spectrum[i],0,1024,0,300);
    fill(255);
    stroke('rgba(82, 167, 133, .5)');
    ellipse(xPosition,yPosition,w,h);

  }
// }
// noLoop()
// makeArt()

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





  // makeArt()

// }

  // for (i = 0; i < spectrum.length; i++) {
  //   var x = map(i, 0, spectrum.length, 0, 710);
  //   xPosition = x+i*50;
  //   ellipse(xPosition,50,50,50);
  //   //ellipse(map(spectrum[i], 0, 255, width, 0), 50, 50, 50);
  //
  // }



// function draw() {
//   console.log("hello");
// }
