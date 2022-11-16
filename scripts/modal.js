'use strict';

const btnClose = document.querySelector('.close-modal');
const btnShow = document.querySelectorAll('.card-knowledges');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModal = function() {
  modal.classList.remove('hidden');  
  overlay.classList.remove('hidden'); 
}

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener('click',openModal);  
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e/*this is the key paramether */) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))  {
      closeModal();
  }
});