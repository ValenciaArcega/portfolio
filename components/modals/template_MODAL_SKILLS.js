'use strict';

class Modals extends HTMLElement {
  constructor() {
    super();
    this.header_COLOR;
    this.modal_TITLE;
    this.li_ONE;
    this.li_TWO;
    this.li_THREE;
    this.li_FOUR;    
  }

  // to set the name of the attributes that will be in the html tag
  static get observedAttributes() {
    return ['color','title', 's1', 's2', 's3', 's4'];
  }

  // compare the html attributes wiv our local variables
  attributeChangedCallback(Attr, oldValue, newValue) {      
    if (Attr == "color") {
      this.header_COLOR = newValue;
    }
    if (Attr == "title") {
      this.modal_TITLE = newValue;
    }
    if (Attr == "s1") {
      this.li_ONE = newValue;
    }
    if (Attr == "s2") {
      this.li_TWO = newValue;
    }
    if (Attr == "s3") {
      this.li_THREE = newValue;
    }
    if (Attr == "s4") {
      this.li_FOUR = newValue;
    }
  }

  // everything here will be display in the browser
  connectedCallback() {
    this.innerHTML =
    `<div class="modal-skills hidden">
        <div class="container-modal-header ${this.header_COLOR}">
          <h1>${this.modal_TITLE}</h1>
          <button class="btn-closeModal" type="button">&times;</button>
        </div>
        <ul class="ul-modal">
          <li>${this.li_ONE}</li>
          <li>${this.li_TWO}</li>
          <li>${this.li_THREE}</li>
          <li>${this.li_FOUR}</li>
        </ul>
    </div>`;
  }
}
window.customElements.define("modal-skill", Modals);