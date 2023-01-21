/*
'use strict';

const container_BELOW_MODAL = document.querySelector('.below-modal');
const buttons_CLOSE_MODAL = document.querySelectorAll('.btn-closeModal');
const buttons_SKILL = document.querySelectorAll('.kn1, .kn2, .kn3, .kn4, .kn5, .kn6, .kn7, .kn8');
const modal_SKILL = document.querySelectorAll('.modal-skills');


for (let i = 0; i < buttons_SKILL.length+1; i++) {
  const function_CLOSE_MODAL = () => {
    container_BELOW_MODAL.classList.add('hidden');
    modal_SKILL[i].classList.add('hidden');
  };
  buttons_CLOSE_MODAL[i].addEventListener('click',function_CLOSE_MODAL);
  container_BELOW_MODAL.addEventListener('click', function_CLOSE_MODAL);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal_SKILL[i].
    classList.contains('hidden')) {
      function_CLOSE_MODAL();
    }
  });  

  buttons_SKILL[i].addEventListener('click', function () {
    container_BELOW_MODAL.classList.remove('hidden');
    modal_SKILL[i].classList.remove('hidden');
  });
} // for loop 

*/





/*const belowModal = document.querySelector('.below-modal');
const btnClose = document.querySelectorAll('.btn-closeModal');

const kn1 = document.querySelector('.kn1');
const kn2 = document.querySelector('.kn2');
const kn3 = document.querySelector('.kn3');
const kn4 = document.querySelector('.kn4');
const kn5 = document.querySelector('.kn5');
const kn6 = document.querySelector('.kn6');
const kn7 = document.querySelector('.kn7');
const kn8 = document.querySelector('.kn8');

const msOne = document.querySelector('.modal-skill-One');
const msTwo = document.querySelector('.modal-skill-Two');
const msThree = document.querySelector('.modal-skill-Three');
const msFour = document.querySelector('.modal-skill-Four');
const msFive = document.querySelector('.modal-skill-Five');
const msSix = document.querySelector('.modal-skill-Six');
const msSeven = document.querySelector('.modal-skill-Seven');
const msEight = document.querySelector('.modal-skill-Eight');

kn1.addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  msOne.classList.remove('hidden');
});

kn2.addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  msTwo.classList.remove('hidden');
});

kn3.addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  msThree.classList.remove('hidden');
});

kn4.addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  msFour.classList.remove('hidden');
});

kn5.addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  msFive.classList.remove('hidden');
});

kn6.addEventListener('click', () => {
  belowModal.classList.remove('hidden')
  msSix.classList.remove('hidden');
});

kn7.addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  msSeven.classList.remove('hidden');
});

kn8.addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  msEight.classList.remove('hidden');  
});

// Close every modal
const closeModal = () => {
  msOne.classList.add('hidden');
  msTwo.classList.add('hidden');
  msThree.classList.add('hidden');
  msFour.classList.add('hidden');
  msFive.classList.add('hidden');
  msSix.classList.add('hidden');
  msSeven.classList.add('hidden');
  msEight.classList.add('hidden');
  belowModal.classList.add('hidden');
}

for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener('click', closeModal);
}

belowModal.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !msOne.classList.contains('hidden') || !msTwo.classList.contains('hidden') || !msThree.classList.contains('hidden') || !msFour.classList.contains('hidden') || !msFive.classList.contains('hidden') || !msSix.classList.contains('hidden') || !msSeven.classList.contains('hidden') || !msEight.classList.contains('hidden')) {
    closeModal();
  }
}); */