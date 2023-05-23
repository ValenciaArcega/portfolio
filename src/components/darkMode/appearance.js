'use strict';

let root = document.querySelector(':root');
const btn__dark = document.querySelector('.topBar-btnDark');
const btn__light = document.querySelector('.topBar-btnLight');

function makeDark() {
  root.style.setProperty('--white', '#121212');
  root.style.setProperty('--black', 'white');
  root.style.setProperty('--bgCardKnowledges', '#131313');
  root.style.setProperty('--mainColor', '#B1BFF7');
  root.style.setProperty('--borderNavBar', '#353535');
  root.style.setProperty('--borderCardContact', '#353535');
  root.style.setProperty('--btnExpand', '#1b1b1b');
  root.style.setProperty('--btnTolescro', '#0D1E3E');
  root.style.setProperty('--btnTolescroText', '#0A84FF');
  btn__dark.classList.add('hidden');
  btn__light.classList.remove('hidden');
};

function makeLight() {
  root.style.setProperty('--white', 'white');
  root.style.setProperty('--black', '#121212');
  root.style.setProperty('--mainColor', '#4263eb');
  root.style.setProperty('--borderNavBar', 'transparent');
  root.style.setProperty('--borderCardContact', '#d9d9d9');
  root.style.setProperty('--btnExpand', '#f0f0f0');
  root.style.setProperty('--btnTolescro', '#E1E7F7');
  root.style.setProperty('--btnTolescroText', '#0C80FE');
  btn__light.classList.add('hidden');
  btn__dark.classList.remove('hidden');
};

btn__dark.addEventListener('click', makeDark);
btn__light.addEventListener('click', makeLight);