document.addEventListener('DOMContentLoaded', () => { //opening tag for JS

  const eyeIcon = document.querySelector('#eye-icon');
  const bodyTest = document.querySelector('.bodyTest');

  eyeIcon.addEventListener('click', () => {
      bodyTest.classList.toggle('showTest');            
  });

}); //closing tag for JS