document.addEventListener("DOMContentLoaded", () => {
});

const form = document.querySelector('#create-task-form');
const list = document.querySelector('#tasks');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = event["srcElement"][0]['value'];
  list.insertAdjacentHTML("afterbegin",`<li>${data}<button class='temp'>delete</button></li>`);
  let button = document.querySelector('.temp')
  button.addEventListener("click", (event) => {
    button.parentElement.remove();
  });
  button.className = 'done';
  event["srcElement"][0]['value'] = null
});



