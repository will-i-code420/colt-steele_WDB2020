// Make the background color of the body change to a random RGB Colors
// make the h1 display the randomly generated RGB number

const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

function randomNumber() {
  const num = Math.floor(Math.random() * 255) + 1;
  return num;
};

btn.addEventListener('click', function() {
  const body = document.querySelector('body')
  const num1 = randomNumber();
  const num2 = randomNumber();
  const num3 = randomNumber();
  const newBgColor = `rgb(${num1}, ${num2}, ${num3})`;
  body.style.backgroundColor = `${newBgColor}`;
  h1.innerText = `${newBgColor}`;
});
