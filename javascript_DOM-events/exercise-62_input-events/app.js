// create an input event that updates the h1 to display
// Welcome, current input & if the input is empty the h1 should read Enter Your Username

const h1 = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('input', function(e) {
  h1.textContent = `Welcome, ${input.value}`;
  if (h1.textContent == 'Welcome, ') {
    h1.textContent = 'Enter Your Username';
  }
});
