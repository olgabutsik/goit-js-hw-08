const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const userData = {};

function dataFromLS() {
  try {
    const userDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (!userDataFromLS) {
      return;
    }
    console.log(userDataFromLS);
    for (const item in userDataFromLS) {
      console.log(item);
      formEl.elements[item].value = userDataFromLS[item];
    }
  } catch (err) {
    console.log(err);
  }
}
dataFromLS();

function onClickForm(e) {
  const userDataFromLSG = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  const userData = {
    email: formEl.email.value,
    message: formEl.message.value
   }
  

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  JSON.parse(localStorage.getItem('feedback-form-state'));
}

function onClickSubmitBtn(e) {
  e.preventDefault();
     
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userData);
}

formEl.addEventListener('input', throttle(onClickForm, 500));
formEl.addEventListener('submit', onClickSubmitBtn);
