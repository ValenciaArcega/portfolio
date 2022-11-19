'use strict';

class EducationCard extends HTMLElement {
  constructor() {
    super();
    this.url_name;
    this.color;
    this.image_src;
    this.image_alternative;
  }
  // to set the name of the attributes that will be in the html tag
  static get observedAttributes() {
    return ['url','color', 'src', 'alt'];
  }

  // compare the html attributes wiv our local variables
  attributeChangedCallback(Attr, oldValue, newValue) {      
    if (Attr == "url") {
      this.url_name = newValue;
    }
    if (Attr == "color") {
      this.color = newValue;
    }
    if (Attr == "src") {
      this.image_src = newValue;
    }
    if (Attr == "alt") {
      this.image_alternative = newValue;
    }
  }

  // everything here will be display in the browser
  connectedCallback() {
    this.innerHTML =
    `
    <a target="_blank" href="${this.url_name}" class="card-education ${this.color}">
      <img src="${this.image_src}" alt="${this.image_alternative}">
    </a>`;
  }
}
window.customElements.define("a-education", EducationCard);