// add an event listener to each button provided
// the hello button should log hello
// the goodbye button should log goodbye

const helloBtn = document.querySelector('#hello');
const byeBtn = document.querySelector('#goodbye');

helloBtn.addEventListener('click', function () {
  console.log('hello');
});

byeBtn.addEventListener('click', function () {
  console.log('goodbye');
})
