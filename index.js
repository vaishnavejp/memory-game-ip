const cards = document.querySelectorAll('.memory-card');
let a, b
let score = 0
let round = 1
var open = true
var popup = document.getElementById('container')
const el = document.getElementById('title-card')
var display = document.querySelector('#time');
var duration = ""
var timer = duration, minutes, seconds;
init()


el.innerHTML = "Welcome to round " + round



function displayScore() {
  var el = document.getElementById('congrats')
  el.innerHTML = "<br><br>Your round " + round + "'s score is " + score + "<br><p>Round 2 started. 30 seconds only!</p>"
  round = round + 1;
  nextRound()
}

function nextRound() {
  timer = duration, minutes, seconds;
  cards.forEach(card => card.addEventListener('click', flipCard))
  setTimeout(() => {
    cards.forEach(card => card.classList.remove('flip')) 
  }, 200);
  startTimer(display)
}

function toggleBtn() {
  if(open===true) {
    popup.classList.add('congratsOpen')
    open = false
  }
  else {
    popup.classList.remove('congratsOpen')
    open = true
  }
}

function init() {
  var parent = document.querySelector(".memory-wrap");
  for(var i = 0; i < parent.children.length; i++){
    parent.appendChild(parent.children[Math.random() * i | 0]);
  }
}


function flipCard() {
    this.classList.toggle('flip')
    if(firstCard === false) {
        firstCard = true
        a = this
    }
    else {
        firstCard = false
        b = this
        matchCards(a, b)
    }
}

function flipBack() {
    this.classList.toggle('flipBack')
}

function matchCards(a, b) {
    var myimg1 = a.getElementsByTagName('img')[0];
    var mysrc1 = myimg1.src;
    var myimg2 = b.getElementsByTagName('img')[0];
    var mysrc2 = myimg2.src;
    if(mysrc1 === mysrc2) {
        a.removeEventListener('click', flipCard)
        b.removeEventListener('click', flipCard)
        score = score + 1;
        el.innerHTML = "Score : " + score  
        if(score == 8) {
          congragulate()
          displayScore()
          score = 8
          round++;
        }
    }
    else {
        setTimeout(() => {
            a.classList.remove('flip')
            b.classList.remove('flip')     
        }, 600);
    }
}

cards.forEach(card => card.addEventListener('click', flipCard))

let firstCard = false

const maxWidth = window.screen.width;
const maxHeight = window.screen.height;

function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function Shadows(amount){
  let shadow = "";
  for(let i = 0; i < amount; i++){
    shadow += Random(0, maxWidth) + "px " + Random(0, maxHeight) +    "px " + "rgb(255,"+ Random(0, 256) + "," + Random(0, 256) + "), ";
  }
  shadow += Random(0, maxWidth) + "px " + Random(0, maxHeight) + "px " + "rgb(255,"+ Random(0, 256) + "," + Random(0, 256) + ")";
  return(shadow);
}

for(let i = 1; i <= 3; i++){
  document.documentElement.style.setProperty('--shadows' + i, Shadows(100));
}

function congragulate() {
  toggleBtn()
}

function startTimer(display) {
  duration = 30
  setInterval(function () {
    console.log(minutes)
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}
