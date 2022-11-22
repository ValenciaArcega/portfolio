'use strict';

class EducationCard extends HTMLElement {
  constructor() {
    super();
    this.url_NAME;
    this.css_COLOR;
    this.image_SOURCE;
    this.image_TEXT_ALTERNATIVE;
  }
  // to set the name of the attributes that will be in the html tag
  static get observedAttributes() {
    return ['url','color', 'src', 'alt'];
  }

  // compare the html attributes wiv our local variables
  attributeChangedCallback(Attr, oldValue, newValue) {      
    if (Attr == "url") {
      this.url_NAME = newValue;
    }
    if (Attr == "color") {
      this.css_COLOR = newValue;
    }
    if (Attr == "src") {
      this.image_SOURCE = newValue;
    }
    if (Attr == "alt") {
      this.image_TEXT_ALTERNATIVE = newValue;
    }
  }

  // everything here will be display in the browser
  connectedCallback() {
    this.innerHTML =
    `<a target="_blank" href="${this.url_NAME}" class="card-education ${this.css_COLOR}">
      <img src="${this.image_SOURCE}" alt="${this.image_TEXT_ALTERNATIVE}">
    </a>`;
  }
}
window.customElements.define("a-education", EducationCard);