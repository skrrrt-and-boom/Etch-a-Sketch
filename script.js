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
  pixelPainter("black");
}

//  Hover efect
function pixelPainter(color) {
  const pixelToPaint = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixelToPaint.length; i++) {
    console.log(i);
    pixelToPaint[i].addEventListener("mouseover", () => {
      pixelToPaint[i].style.backgroundColor = color;
    });
  }
}

//  buttons
const clearButton = document.getElementsByClassName("clear");

clearButton[0].addEventListener("click", () => {
  const pixelToPaint = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixelToPaint.length; i++) {
    pixelToPaint[i].style.backgroundColor = "white";
  }
});
