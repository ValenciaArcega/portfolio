'use strict';
/*
const btnClose = document.querySelector('.btn-closeModal');
const belowModal = document.querySelector('.below-modal');
const modalSkills = document.querySelector('.modal-skills');
const btnShow = document.querySelectorAll('.card-knowledges');
const headerModal = document.querySelector('.container-modal-header');

const openModal = function() {
  modalSkills.classList.remove('hidden');  
  belowModal.classList.remove('hidden'); 
  headerModal.classList.add('msTwo');
}

const closeModal = function() {
  modalSkills.classList.add('hidden');
  belowModal.classList.add('hidden');
}

for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener('click',openModal);
}

btnClose.addEventListener('click', closeModal);
belowModal.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalSkills.classList.contains('hidden'))  {
      closeModal();
  }
}); */

const belowModal = document.querySelector('.below-modal');
const btnClose = document.querySelectorAll('.btn-closeModal');

const kn1 = document.querySelector('.kn1');
const kn2 = document.querySelector('.kn2');
const msOne = document.querySelector('.modal-skill-One');
const msTwo = document.querySelector('.modal-skill-Two');

// First
kn1.addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  msOne.classList.remove('hidden');
});

kn2.addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  msTwo.classList.remove('hidden');
});



// Close every modal
const closeModal = () => {
  msOne.classList.add('hidden');
  msTwo.classList.add('hidden');
  belowModal.classList.add('hidden');
}
for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener('click', closeModal);
}

belowModal.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !msOne.classList.contains('hidden') || !msTwo.classList.contains('hidden')) {
    closeModal();
  }
});
