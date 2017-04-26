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
