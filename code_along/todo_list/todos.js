const todos = [];
let command = prompt('Input A Command').toLowerCase();
while (command !== 'quit') {
  if (command === 'new') {
    let todo = prompt('Input New TODO Item:');
    todos.push(todo);
    command = prompt('Input A Command').toLowerCase();
  } else if (command === 'list') {
    const length = todos.length;
    console.log('******');
    for (let i = 0; i < length; i++) {
      console.log(`${i + 1}:  ${todos[i]}`);
    }
    console.log('******');
    command = prompt('Input A Command').toLowerCase();
  } else if (command === 'delete') {
    let index = parseInt(prompt('Which number to delete?')) - 1;
    todos.splice(index, 1);
    const length = todos.length;
    console.log('******');
    for (let i = 0; i < length; i++) {
      console.log(`${i + 1}:  ${todos[i]}`);
    }
    console.log('******');
    command = prompt('Input A Command').toLowerCase();
  } else {
    command = prompt('Unknown Command, Input A VALID Command!!').toLowerCase();
  }
}
console.log('YOU HAVE QUIT THE APP');
