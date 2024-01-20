const questions = document.querySelector('.questions');

questions.addEventListener('click', (e) => {
  if(e.target.classList.contains('btn')) {
    console.log(e.target)

    e.target.parentNode.classList.toggle('hidden');

    if(e.target.classList.contains('open')) {
      e.target.src = 'assets/images/icon-plus.svg';
      e.target.classList.toggle('open');
    } else {
      e.target.src = 'assets/images/icon-minus.svg';
      e.target.classList.toggle('open');
    }

  } 
})  