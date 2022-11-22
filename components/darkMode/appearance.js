const root = document.querySelector(':root');
const button_DARKMODE = document.querySelector('.btnDark');
const button_LIGHTMODE = document.querySelector('.btnLight');
button_LIGHTMODE.classList.add('hidden');

const function_TURN_DARK = () => {
  root.style.setProperty('--white','#121212');
  root.style.setProperty('--black', 'white');
  root.style.setProperty('--bgCardKnowledges','#131313');
  root.style.setProperty('--mainColor', '#B1BFF7');
  root.style.setProperty('--borderNavBar','#353535');
  button_DARKMODE.classList.add('hidden');
  button_LIGHTMODE.classList.remove('hidden');
};

const function_TURN_LIGHT = () => {
  root.style.setProperty('--white','white');
  root.style.setProperty('--black','#121212');
  root.style.setProperty('--mainColor', '#4263eb');
  root.style.setProperty('--borderNavBar','#D9D9D9');
  button_LIGHTMODE.classList.add('hidden');
  button_DARKMODE.classList.remove('hidden');
};

button_DARKMODE.addEventListener('click', function_TURN_DARK);
button_LIGHTMODE.addEventListener('click', function_TURN_LIGHT);