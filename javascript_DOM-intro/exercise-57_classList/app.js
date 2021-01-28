// use the classList property to invert which li elements have the highlight class

const allItems = document.querySelectorAll('li');

for (let item of allItems) {
  item.classList.toggle('highlight');
}
