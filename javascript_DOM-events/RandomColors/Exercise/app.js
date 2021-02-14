// Make the background color of the body change to a random RGB Colors
// make the h1 display the randomly generated RGB number
// **BONUS** find the threshold for darker colors and make the text
// of the h1 turn white so its still visible

const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

function randomNumber() {
  return Math.floor(Math.random() * 255) + 1;
};

function randomColor() {
  const newColor = {
    color: '',
    light: null;
  };
  const num1 = randomColor();
  const num2 = randomColor();
  const num3 = randomColor();
  newColor.color = `rgb(${num1}, ${num2}, ${num3})`;
  if (num1 + num2 + num3 > 225) {
    newColor.light = true;
  } else {
    newColor.light = false;
  }
  return newColor;
};

btn.addEventListener('click', function() {
  const body = document.querySelector('body')
  const newBgColor = randomColor();
  body.style.backgroundColor = `${newBgColor.color}`;
  if (newBgColor.light) {
    h1.style.color = 'black';
  } else {
    h1.style.color = 'white';
  }
  h1.innerText = `${newBgColor.color}`
});
