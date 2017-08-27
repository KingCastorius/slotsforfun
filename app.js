let count = 0
let one;
let two;
let three;
let userOuput = document.getElementById("userOutput")

function spin() {
  one = Math.floor((Math.random()*9)+1)
  two = Math.floor((Math.random()*9)+1)
  three = Math.floor((Math.random()*9)+1)
  if(one % 2 === 0 && two % 2 === 0 && three % 2 === 0) {
    alert('You win');
  } else {
    alert ('You lose')
  }
}
