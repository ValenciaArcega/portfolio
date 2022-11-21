
const buttonCopy = document.querySelector('.btnCopy');
const texto = document.querySelector('#myEmail');

buttonCopy.addEventListener('click', () => {
  texto.value = text;
  texto.select();
  document.execCommand('copy');    
});
