// select all the spans and assign each of them one of the colors from the colors array
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const allSpans = document.querySelectorAll('span');

/*
works in chrome and firefox but not on course

for (let i = 0; i < spans.length; i++) {
  let currentColor = colors[i];
  spans[i].style.color = `${currentColor}`;
  counter++;
}
*/
let counter = 0;
for (let span of allSpans) {
  span.style.color = `${colors[counter]}`;
  counter++;
}
