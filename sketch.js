let numberArray = [];
let maxNumber = 1000;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch');
  setNumberArray();
  noStroke();
}

function draw() {
  let prime = numberArray[frameCount-1];
  for(let i=frameCount+1;i<numberArray.length;i++) {
    if (numberArray[i] % prime == 0) {
      let originalIndex = numberArray[i]-2;
      numberArray.splice(i,1);
      i--;
    }
  }

  if (frameCount > numberArray.length) {
    console.log(numberArray);
    noLoop();
  }
}

function setNumberArray() {
  numberArray = Array.from({length: maxNumber}, (v, k) => k+1);

  // Remove the number "1" from array
  numberArray.shift();
}

function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
}

function wait(ms) {
  const start = performance.now();
  while(performance.now() - start < ms);
}