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
          <button class="btn-closeModal" type="button">&times;</button>
        </div>
        <ul class="ul-modal">
          <li>${this.skill_one}</li>
          <li>${this.skill_two}</li>
          <li>${this.skill_three}</li>
          <li>${this.skill_four}</li>
        </ul>
    </div>`;
  }
}
window.customElements.define("modal-skill", Modals);