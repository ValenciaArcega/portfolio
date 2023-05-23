'use strict';

const btnShowMail = document.querySelector('.btnShowMail');
const txt = document.querySelector('#myEmail');

btnShowMail.addEventListener('click', function () {
  txt.classList.remove('hidden');
  btnShowMail.classList.add('hidden');
});
