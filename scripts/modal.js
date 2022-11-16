'use strict';

class Modals extends HTMLElement {
  constructor() {
    super();
    this.modal_number;
    this.header_color;
    this.modal_title;
    this.skill_one;
    this.skill_two;
    this.skill_three;
    this.skill_four;    
  }

  // to set the name of the attributes that will be in the html tag
  static get observedAttributes() {
    return ['number','color','title', 's1', 's2', 's3', 's4'];
  }

  // compare the html attributes wiv our local variables
  attributeChangedCallback(Attr, oldValue, newValue) {      
    if (Attr == "number") {
      this.modal_number = newValue;
    }
    if (Attr == "color") {
      this.header_color = newValue;
    }
    if (Attr == "title") {
      this.modal_title = newValue;
    }
    if (Attr == "s1") {
      this.skill_one = newValue;
    }
    if (Attr == "s2") {
      this.skill_two = newValue;
    }
    if (Attr == "s3") {
      this.skill_three = newValue;
    }
    if (Attr == "s4") {
      this.skill_four = newValue;
    }
  }

  // everything here will be display in the browser
  connectedCallback() {
    this.innerHTML =
    `<div class="${this.modal_number} hidden">
        <div class="container-modal-header ${this.header_color}">
          <h1>${this.modal_title}</h1>
          <button type="button" class="btn-closeModal">&times;</button>
        </div>
        <ul class="ul-modal">
          <li>${this.skill_one}</li>
          <li>${this.skill_two}</li>
          <li>${this.skill_three}</li>
          <li>${this.skill_four}</li>
        </ul>
    </div>      
      `;
  }
}
window.customElements.define("modal-skill", Modals);



// Modals logic

const belowModal = document.querySelector('.below-modal');
const btnClose = document.querySelectorAll('.btn-closeModal');

const kn1 = document.querySelector('.kn1');
const kn2 = document.querySelector('.kn2');
const kn3 = document.querySelector('.kn3');

const msOne = document.querySelector('.modal-skill-One');
const msTwo = document.querySelector('.modal-skill-Two');
const msThree = document.querySelector('.modal-skill-Three');


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



// Close every modal
const closeModal = () => {
  msOne.classList.add('hidden');
  msTwo.classList.add('hidden');
  msThree.classList.add('hidden');

  belowModal.classList.add('hidden');
}
for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener('click', closeModal);
}

belowModal.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !msOne.classList.contains('hidden') || !msTwo.classList.contains('hidden') || !msThree.classList.contains('hidden')) {
    closeModal();
  }
});
