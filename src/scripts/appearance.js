'use strict'

let root = document.querySelector(':root')
const btnMobileDark = document.querySelector('.topBar-btnDark')
const btnMobileLight = document.querySelector('.topBar-btnLight')

const btnDesktopDark = document.querySelector('.navBar-desktop-btnDark')
const btnDesktopLight = document.querySelector('.navBar-desktop-btnLight')

function makeDark() {
  root.style.setProperty('--white', '#121212')
  root.style.setProperty('--black', 'white')
  root.style.setProperty('--bgCardKnowledges', '#131313')
  root.style.setProperty('--mainColor', '#B1BFF7')
  root.style.setProperty('--borderNavBar', '#353535')
  root.style.setProperty('--borderCardContact', '#353535')
  root.style.setProperty('--btnExpand', '#1b1b1b')
  root.style.setProperty('--btnTolescro', '#0D1E3E')
  root.style.setProperty('--btnTolescroText', '#0A84FF')
  root.style.setProperty('--bg-navbar-desktop', '#33333333')

  btnMobileDark.classList.add('hidden')
  btnMobileLight.classList.remove('hidden')

  btnDesktopDark.classList.add('hidden')
  btnDesktopLight.classList.remove('hidden')
};

function makeLight() {
  root.style.setProperty('--white', 'white')
  root.style.setProperty('--black', '#121212')
  root.style.setProperty('--mainColor', '#4263eb')
  root.style.setProperty('--borderNavBar', 'transparent')
  root.style.setProperty('--borderCardContact', '#d9d9d9')
  root.style.setProperty('--btnExpand', '#f0f0f0')
  root.style.setProperty('--btnTolescro', '#E1E7F7')
  root.style.setProperty('--btnTolescroText', '#0C80FE')
  root.style.setProperty('--bg-navbar-desktop', '#ffffff33')

  btnMobileLight.classList.add('hidden')
  btnMobileDark.classList.remove('hidden')

  btnDesktopLight.classList.add('hidden')
  btnDesktopDark.classList.remove('hidden')
};

btnMobileDark.addEventListener('click', makeDark)
btnMobileLight.addEventListener('click', makeLight)

btnDesktopDark.addEventListener("click", makeDark)
btnDesktopLight.addEventListener("click", makeLight)