//
//

// Global selections and variables

const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');

const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll('.color h2');

let initialColors;

// Functions

function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
  // const letters = '0123456789ABCDEF';
  // let hash = '#';
  // for (let i = 0; i < 6; i++) {
  //   hash += letters[Math.floor(Math.random() * 16)];
  // }
  // return hash;
}

function randomColors() {
  colorDivs.forEach((div, index) => {
    const hextTex = div.children[0];
    const randomColor = generateHex();

    div.style.backgroundColor = randomColor;
    hextTex.innerText = randomColor;

    checkTextContrast(randomColor, hextTex);
  });
}

function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();

  if (luminance > 0.5) {
    text.style.color = '#000';
  } else {
    text.style.color = '#fff';
  }
}

randomColors();
