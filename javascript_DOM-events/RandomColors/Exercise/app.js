// Make the background color of the body change to a random RGB Colors
// make the h1 display the randomly generated RGB number
// **BONUS** find the threshold for darker colors and make the text
// of the h1 turn white so its still visible

const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

function randomNumber() {
  return Math.floor(Math.random() * 255) + 1;
};

btn.addEventListener('click', function() {
  const body = document.querySelector('body')
  const newBgColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  body.style.backgroundColor = `${newBgColor}`;
  h1.innerText = `${newBgColor}`;
});
