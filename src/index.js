

// document.addEventListener("DOMContentLoaded", () => {
// });

// const form = document.querySelector('#create-task-form'); //grabbing the whole form for listening
// const list = document.querySelector('#tasks'); //grabbing the <ul><li> element - where we adding the data (for .insertAdjacentHTML)

// form.addEventListener("submit", (event) => {
//   // console.dir(event)
//   event.preventDefault();  //preventing normal behaviour of clicking the button
//   const data = event["srcElement"][0]['value']; //grabbing the user input and assigning it to a variable (find it with console.dir(event), which is a hash, and get to the needed value)
//   list.insertAdjacentHTML("afterbegin", `<li>${data}</li>`); //the first argument is where we adding the data and the second is the actual data we're adding
//   // console.log(data);
// });


document.addEventListener("DOMContentLoaded", () => {
});

const form = document.querySelector('#create-task-form');
const list = document.querySelector('#tasks');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = event["srcElement"][0]['value'];
  list.insertAdjacentHTML("afterbegin", `<li>${data}<button class='temp'>delete</button></li>`);
  let button = document.querySelector('.temp')
  button.addEventListener("click", (event) => {
    button.parentElement.remove();
  });
  button.className = 'done';
  event["srcElement"][0]['value'] = null
});