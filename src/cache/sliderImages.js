'use strict';

let imgCounter = 1;
const imgTolescro = document.querySelector('.tolescro-screens-img');
const labelImages = document.querySelector('.tolescro-screens-p');

setInterval(() => {
  if (imgCounter > 4) imgCounter = 1;
  imgTolescro.src = `src/assets/img/tolescro/tolescro-screen${imgCounter}.jpg`;
  if (imgCounter === 1) labelImages.textContent = 'useful and complete sections';
  if (imgCounter === 2) labelImages.textContent = 'a powerful search';
  if (imgCounter === 3) labelImages.textContent = 'tips, slangs and much more';
  if (imgCounter === 4) labelImages.textContent = 'tips, slangs and much more';

  imgCounter++;
}, 5500);

/*
      <div class="wrapper-tolescro-screens hidden">
        <div class="tolescro-screens">
          <img class="tolescro-screens-img" src="src/assets/img/tolescro/tolescro-screen1.jpg"
            alt="Screen tolescro: sections" />
        </div>
      </div>
*/