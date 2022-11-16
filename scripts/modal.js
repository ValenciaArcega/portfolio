'use strict';

const btnClose = document.querySelector('.btn-closeModal');
const btnShow = document.querySelectorAll('.card-knowledges');
const belowModal = document.querySelector('.below-modal');
const modalSkills = document.querySelector('.modal-skills');

const openModal = function() {
  modalSkills.classList.remove('hidden');  
  belowModal.classList.remove('hidden'); 
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

document.addEventListener('keydown', (e/*this is the key paramether */) => {
  if (e.key === 'Escape' && !modalSkills.classList.contains('hidden'))  {
      closeModal();
  }
});