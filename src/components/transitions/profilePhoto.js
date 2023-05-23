'use strict';

const img = document.querySelector('.welcome-img');
const height = img.clientHeight;
const width = img.clientWidth;

img.addEventListener('mousemove', function (e) {
  // get the axis of the mouse
  const { layerX, layerY } = e;
  // calc the horizontal rotation
  const yRotation = ((layerX - width / 2) / width) * 26;
  // calc the vertical rotation
  const xRotation = ((layerY - height / 2) / height) * 26;

  const string = `
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)`;

  img.style.transform = string;
});

img.addEventListener('mouseout', function () {
  img.style.transform = `
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)`;
});