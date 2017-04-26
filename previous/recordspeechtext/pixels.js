var rms;
var mic;
var curPixel = 0;

function setup() {
  createCanvas(500, 700);
  pixelDensity(1);
  mic = new p5.AudioIn();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mic);
  mic.start();
  //frameRate(1);
//
//   //from speech.js
//   //noLoop();
//   myRec.onResult = parseResult; // recognition callback
// 	myRec.start(); // start engine
}

function draw() {
  //background (51);
  loadPixels();
  if (mouseIsPressed) {
    console.log(pixels);
  }
  rms = mic.getLevel();
  console.log(rms);


  // update curPixel
  if (rms < 0.02) {
    console.log("black");
//     pixels[curPixel + 0] = 0;
// pixels[curPixel + 1] = 0;
// pixels[curPixel + 2] = 0;
// pixels[curPixel + 3] = 0;
set(curPixel%width,curPixel/width,color(0));
  } else {
    console.log("white");
    // pixels[curPixel + 0] = 255;
    // pixels[curPixel + 1] = 255;
    // pixels[curPixel + 2] = 255;
    // pixels[curPixel + 3] = 255;
    set(curPixel%width,curPixel/width,color(255));
  }

  // for (var y = 0; y < height; y++) {
  //   for (var x = 0; x < width; x++) {
  //     var index = (x + y * width) * 4;
  //     if (rms < 0.02) {
  //       pixels[index + 0] = 255;
  //       pixels[index + 1] = 255;
  //       pixels[index + 2] = 255;
  //       pixels[index + 3] = 255;
  //     } else {
  //       pixels[index + 0] = 0;
  //       pixels[index + 1] = 0;
  //       pixels[index + 2] = 0;
  //       pixels[index + 3] = 0;
  //       }
  //   }
  // }



  curPixel += 4;
  if (curPixel >= pixels.length) {
    curPixel = 0;
  }

// for (var y = 0; y < height; y++) {
//   for (var x = 0; x < width; x++) {
//     var index = (x + y * width) * 4;
//     pixels[index + 0] = 255;
//     pixels[index + 1] = 255;
//     pixels[index + 2] = 255;
//     pixels[index + 3] = 255;
//   }
// }




  updatePixels();

//   //from voice.js
//   console.log("start");
//
//   // Get the average (root mean square) amplitude
// rms = mic.getLevel();
// console.log(rms);
//
// spectrum = fft.analyze();
//
// if(xPositionamp < 1900){
// xPositionamp = xPositionamp+80;
//
// }
// else{
//
//   xPositionamp = 50;
//   yPositionamp = yPositionamp+220;
//
// }
//
// if(xPositionfft < 1900){
// xPositionfft = xPositionfft+80;
//
// }
// else{
//
//   xPositionfft = 50;
//   yPositionfft = yPositionfft+270;
//
// }
//
//   for(var i=0; i<rms; i++){ //Amplitude
//   fill(255);
//   stroke(155);
//
//   // Draw an ellipse with size based on volume
//   //rect(xPosition, yPosition, 10+rms*200, 10+rms*200);
//   // quad(xPositionfft, yPositionfft, 10+rms*200, 10+rms*200);
//   fill(255);
//   rect(xPositionfft, yPositionfft, 10+rms*200, 10+rms*200);
//   // ellipse(xPosition, yPosition, w, h);
//
//   }
//
//   for(var i=0; i<spectrum.length; i++){ //FFT
// //console.log(spectrum[i])
//     var h = map(spectrum[i],0,1024,0,300);
//     var w = map(spectrum[i],0,1024,0,300);
//     // var hAlso = 50;
//     // var wAlso = 150;
//     // if(spectrum[i]< 10){
//     fill(255);
//     // stroke(0);
//     stroke('rgba(82, 167, 133, .5)');
//     //triangle(h, w, h + 50, w + 50, h + 100, w + 100)
//     // rect(xPositionamp,yPositionamp,w,h);
//     ellipse(xPositionamp,yPositionamp,w,h);
//
// }

}

// function setup() {
//   createCanvas(600, 800);
//   pixelDensity(1);
//
// }
//
// function draw() {
// background(51);
//
// loadPixels();
// fill(255);
// for (var y = 0; y < height; y++) {
//   for (var x = 0; x < width; x++) {
//     var index = (x + y * width)*4;
//     pixels[index+0] = x;
//     pixels[index+1] = random(255);
//     pixels[index+2] = y;
//     pixels[index+3] = 255;
//   }
// }
//
// updatePixels();
//
// }
