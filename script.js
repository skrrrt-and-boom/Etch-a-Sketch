const container = document.getElementsByClassName("container");

//  building pixels
function makePixel(x) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.width = (x) + "px";
  pixel.style.height = (x) + "px";
  pixel.style.border = "1px solid black";
  return container[0].appendChild(pixel);
}

//  loop for all pixels
function allPixels(numberOfPixels) {
  let containerWidth = (container[0].offsetWidth) - 5;
  console.log(containerWidth);
  let x = (containerWidth / (Math.sqrt(numberOfPixels)) - 1.65);
  for (let i = 0; i < numberOfPixels; i++) {
    makePixel(x);
    console.log(x);
  };
}
allPixels(64);
pixelPainter("black");

//  Clearing space
function spaceCleaner() {
  const pixelToRemove = document.querySelector(".pixel");
  while (container[0].firstChild) {
    container[0].removeChild(container[0].firstChild);
  }
}

//  Conecting slider with numberOfPixels
const slider = document.querySelector("input");
const sliderInfo = document.querySelector("span");

sliderInfo.innerHTML = slider.value;

slider.oninput = function() {
  sliderInfo.innerHTML = this.value;
  let numberOfPixels = Math.pow(this.value, 2);
  console.log(numberOfPixels);
  spaceCleaner();
  allPixels(numberOfPixels);
  colorChooser();
}

//  Hover efect
function pixelPainter(color) {
  const pixelToPaint = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixelToPaint.length; i++) {
    pixelToPaint[i].addEventListener("mouseover", () => {
      pixelToPaint[i].style.backgroundColor = color;
    });
  }
}

//  buttons
const clearBtn = document.getElementsByClassName("clear");

clearBtn[0].addEventListener("click", () => {
  const pixelToPaint = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixelToPaint.length; i++) {
    pixelToPaint[i].style.backgroundColor = "white";
  }
});

//  collor picker
const colorPickBtn = document.getElementsByClassName("color-picker");

let i = 0;

colorPickBtn[0].addEventListener("click", () => {
  const inputColor = document.createElement("input");
  inputColor.classList.add("colorInput");
  inputColor.type = "color";
  if (i < 1) {
  colorPickBtn[0].appendChild(inputColor);
  i += 1;
  }
  colorChooser();
});


//  choosing color
function colorChooser() {
  const colorToRemove = document.getElementsByClassName("colorInput");
  console.log(colorToRemove[0]);
  if (typeof colorToRemove[0] != "undefined") {
    pixelPainter(colorToRemove[0].value);
    console.log(colorToRemove[0].value);
  } else {pixelPainter("black");}
}

//  random color
const randomColor = document.getElementsByClassName("random-color");

randomColor[0].addEventListener("click", () => {
  const pixelToPaint = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixelToPaint.length; i++) {
    pixelToPaint[i].addEventListener("mouseover", () => {
      pixelToPaint[i].style.backgroundColor = "#" + (Math.floor(Math.random() * 16777216).toString(16));
    });
  }
})
