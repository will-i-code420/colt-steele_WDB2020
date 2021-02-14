// create 100 buttons inside element ID container
// each button must have text inside it and you must use appendChild

const element = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
  let newBtn = document.createElement('button')
  newBtn.innerText = `Button ${i + 1}`;
  element.appendChild(newBtn);
}
