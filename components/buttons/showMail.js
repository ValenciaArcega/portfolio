const buttonShowMyMail = document.querySelector('.btnShowMail');

buttonShowMyMail.addEventListener('click', function() {
  let texto = document.querySelector('#myEmail');
  texto.classList.remove('hidden');
  buttonShowMyMail.classList.add('hidden');
});
