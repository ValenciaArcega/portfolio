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

const btnClose = document.querySelector('.btn-closeModal');
const belowModal = document.querySelector('.below-modal');
const headerColor = document.querySelector('.container-modal-header');


document.querySelector('.kn1').addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  document.querySelector('.modal-skillOne').classList.remove('hidden');
  headerColor.style.background = 'linear-gradient(to top left, #12b886, #38d9a9)';
});

document.querySelector('.kn2').addEventListener('click', () => {
  belowModal.classList.remove('hidden');
  modalSkill.classList.remove('hidden');
  headerColor.style.background = 'linear-gradient(to top left,#fcc419, #ffd43b)';
});



// Close every modal
const closeModal = () => {
  belowModal.classList.add('hidden');
  document.querySelector('.modal-skillOne').classList.add('hidden');
}

btnClose.addEventListener('click', closeModal);
belowModal.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !document.querySelector('.modal-skillOne').classList.contains('hidden'))  {
      closeModal();
  }
});