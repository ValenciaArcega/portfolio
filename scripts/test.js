const belowModal = document.querySelector('.below-modal');
const btnClose = document.querySelectorAll('.btn-closeModal');
const buttons = document.querySelectorAll('.kn1, .kn2, .kn3, .kn4, .kn5, .kn6, .kn7, .kn8');
const modals = document.querySelectorAll('.modal-skill-One, .modal-skill-Two, .modal-skill-Three, .modal-skill-Four, .modal-skill-Five, .modal-skill-Six, .modal-skill-Seven, .modal-skill-Eight');


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {    
    belowModal.classList.remove('hidden');
    modals[i].classList.remove('hidden');    
  });
}

for (let k = 0; k < btnClose.length; k++) {
  btnClose[k].addEventListener('click', () => {
    belowModal.classList.add('hidden');
    modals[k].classList.add('hidden');    
  });
}

belowModal.addEventListener('click', closeModal);