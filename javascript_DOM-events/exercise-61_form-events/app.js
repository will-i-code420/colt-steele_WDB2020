// listen for the form submission and use prevent default
// grab the values of the inputs
// create a new li element and set the text to be the input values
// append the new li to the ul and reset the inputs

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const groceryList = document.querySelector('#list');
form.addEventListener('submit', e => {
  e.preventDefault();
  const qty = form.elements.qty;
  const product = form.elements.product;
  const newLi = document.createElement('li');
  newLi.innerText = `${qty.value} ${product.value}`;
  groceryList.appendChild(newLi);
  qty.value = '';
  product.value = '';
});
