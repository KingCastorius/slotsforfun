function Refresh()
{
if (count > 0)
{
window.location.reload()
}
}


let count = 0
let one = Math.floor((Math.random()*9)+1)
let two = Math.floor((Math.random()*9)+1)
let three = Math.floor((Math.random()*9)+1)
let userOuput = document.getElementById("userOutput")

if('one, two, three' % 2) {
  userOutput.innerHTML = "You win!"
} else{
  userOutput.innerHTML = "You Lose"
}
