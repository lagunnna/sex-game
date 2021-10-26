const btnStart = document.querySelector('#start');
const btnGetCard = document.querySelector('.card-btn');
const btnChangeLevel = document.querySelector('.changeLevel-btn');
const screens = document.querySelectorAll('.screen');
const typeList = document.querySelector('#type-list');
const board = document.querySelector('#board');
const cardImg = document.querySelector('#card-img');
let type = 'easy';

btnStart.addEventListener('click', event => {
   event.preventDefault();
   window.document.getElementsByClassName('start-btn')[0].style.visibility = 'hidden';
   window.document.getElementsByClassName('select-lvl')[0].style.visibility = 'unset';
   //screens[0].classList.add('up');
})

typeList.addEventListener('click', event => {
   if(event.target.classList.contains('active-btn-levels')) {
      debugger
      window.document.getElementsByClassName('select-lvl')[0].style.display = 'none';
      window.document.getElementsByClassName('game')[0].style.display = 'unset';
      type = event.target.getAttribute('data-type');
      screens[1].classList.add('up');
   }
})

btnGetCard.addEventListener('click', event => {
   event.preventDefault();
   startGame();
})

btnChangeLevel.addEventListener('click', event => {
   event.preventDefault();
   screens[1].classList.remove('up');
   cardImg.src = '';
})

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

function startGame() {
   cardImg.src = `img/${type}/${getRandomNumber(1,30)}.jpg`;
}
