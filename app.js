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
   window.document.getElementsByClassName('hello-text-block')[0].style.display = 'none';
   window.document.getElementsByClassName('select-lvl')[0].style.display = 'flex';
})

typeList.addEventListener('click', event => {
   type = event.target.getAttribute('data-type');
   if(event.target.classList.contains('active-btn-levels') && !!type) {
      window.document.getElementsByClassName('select-lvl')[0].style.display = 'none';
      window.document.getElementsByClassName('game')[0].style.display = 'flex';
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
