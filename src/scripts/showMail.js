'use strict'
import CanvasConfetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/+esm'


const btnShowMail = document.querySelector('.btnShowMail')
const txt = document.querySelector('#myEmail')

btnShowMail.addEventListener('click', function () {
  txt.classList.remove('hidden')
  btnShowMail.classList.add('hidden')
  CanvasConfetti()
})
