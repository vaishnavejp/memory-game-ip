const cards = document.querySelectorAll('.memory-card');
let a, b

var parent = document.querySelector(".memory-wrap");
for(var i = 0; i < parent.children.length; i++){
  parent.appendChild(parent.children[Math.random() * i | 0]);
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