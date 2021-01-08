const todos = [];
let command = prompt('Input A Command').toLowerCase();
while (command !== 'quit' && command !== 'q') {
  if (command === 'new') {
    let todo = prompt('Input New TODO Item:');
    todos.push(todo);
    console.log(`${todo} added to the list`);
  } else if (command === 'list') {
    const length = todos.length;
    console.log('******');
    for (let i = 0; i < length; i++) {
      console.log(`${i + 1}:  ${todos[i]}`);
    }
    console.log('******');
  } else if (command === 'delete') {
    let index = parseInt(prompt('Which number to delete?')) - 1;
    const deleted = todos.splice(index, 1);
    console.log(`OK, removed ${deleted[0]} from your list`)
    const length = todos.length;
    console.log('******');
    for (let i = 0; i < length; i++) {
      console.log(`${i + 1}:  ${todos[i]}`);
    }
    console.log('******');
  } else {
    command = prompt('Unknown Command, Input A VALID Command!!').toLowerCase();
  }
  command = prompt('Input A Command').toLowerCase();
}
console.log('YOU HAVE QUIT THE APP');
