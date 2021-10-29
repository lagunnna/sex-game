const btnStart = document.querySelector('#start');
const btnGetCard = document.querySelector('.get-card');
const btnChangeLevel = document.querySelector('.change-level-btn');
const typeList = document.querySelector('#type-list');
const board = document.querySelector('#board');
const cardImg = document.querySelector('#card-img');
const header = document.getElementById("header");
let type = 'easy';

btnStart.addEventListener('click', event => {
   event.preventDefault();
   window.document.getElementsByClassName('start-btn')[0].style.display = 'none';
   window.document.getElementsByClassName('select-lvl')[0].style.visibility = 'unset';
})

typeList.addEventListener('click', event => {
   if(event.target.classList.contains('active-btn-levels')) {
      window.document.getElementsByClassName('select-lvl')[0].style.display = 'none';
      window.document.getElementsByClassName('game')[0].style.display = 'flex';
      type = event.target.getAttribute('data-type');
      startGame();
      header.className += " little-header";
   }
})

btnGetCard.addEventListener('click', event => {
   event.preventDefault();
   startGame();
})

btnChangeLevel.addEventListener('click', event => {
   event.preventDefault();
   window.document.getElementsByClassName('select-lvl')[0].style.display = 'flex';
   window.document.getElementsByClassName('game')[0].style.display = 'none';
   header.classList.remove("little-header");
   cardImg.src = '';
})

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

function startGame() {
   cardImg.src = `img/${type}/${getRandomNumber(1,30)}.jpg`;
}
