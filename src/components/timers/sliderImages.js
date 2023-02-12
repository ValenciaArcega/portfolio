'use strict';

let imgCounter = 1;
const imgTolescro = document.querySelector('.tolescro-screens-img');
const labelImages = document.querySelector('.tolescro-screens-p')

setInterval(() => {
  if (imgCounter > 4) imgCounter = 1;
  imgTolescro.src = `src/assets/img/tolescro/tolescro-screen${imgCounter}.png`;
  if (imgCounter === 1) labelImages.textContent = 'Useful sections';
  if (imgCounter === 2) labelImages.textContent = 'The cards live into the dark';
  if (imgCounter === 3) labelImages.textContent = 'Powerful search';
  if (imgCounter === 4) labelImages.textContent = 'Tips, slangs and much more';

  imgCounter++;
}, 5500);