const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const userData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function dataFromLS() {
  for (const item in userData) {
    formEl.elements[item].value = userData[item];
  }
}
dataFromLS();

function onClickForm(e) {
    const userData = {
    email: formEl.email.value,
    message: formEl.message.value
   }
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function onClickSubmitBtn(e) {
  e.preventDefault();
     
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userData);
}

formEl.addEventListener('input', throttle(onClickForm, 500));
formEl.addEventListener('submit', onClickSubmitBtn);
