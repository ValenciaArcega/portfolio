'use strict';

const buttonShowMyMail = document.querySelector('.btnShowMail');
let texto = document.querySelector('#myEmail');

buttonShowMyMail.addEventListener('click', function () {
  buttonShowMyMail.classList.add('hidden');
  texto.classList.remove('hidden');
});
