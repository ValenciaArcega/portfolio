const root = document.querySelector(':root');
const btnDarkMode = document.querySelector('.btnDark');
const btnLightMode = document.querySelector('.btnLight');
btnLightMode.classList.add('hidden');

const turnDark = () => {
  root.style.setProperty('--white','#121212');
  root.style.setProperty('--black', 'white');
  root.style.setProperty('--bgCardKnowledges','#131313');
  root.style.setProperty('--mainColor', '#B1BFF7');
  root.style.setProperty('--borderNavBar','#353535');
  btnDarkMode.classList.add('hidden');
  btnLightMode.classList.remove('hidden');
};

const turnLight = () => {
  root.style.setProperty('--white','white');
  root.style.setProperty('--black','#121212');
  root.style.setProperty('--mainColor', '#4263eb');
  root.style.setProperty('--borderNavBar','#D9D9D9');
  btnLightMode.classList.add('hidden');
  btnDarkMode.classList.remove('hidden');
};

btnDarkMode.addEventListener('click', turnDark);
btnLightMode.addEventListener('click', turnLight);
