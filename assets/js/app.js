const button = document.querySelector('button')
const gameArea = document.querySelector('.output')
const message = document.querySelector('.message')
message.classList.add('Score')

let sound = new Audio('clap.mp3')
let gamePlay = false

gameArea.innerHTML="Press the button below"

button.addEventListener("click", function()
{
    if(!gamePlay)
    {
        gamePlay = true
        gameArea.innerHTML=""
        score = 0
        sound.pause()
        maker()
        message.innerHTML="<h2>Guess the combo</h2>"
        button.innerText = "Check Combo"
    }
    else 
    {
        const numbers = document.querySelectorAll('.numb')
        score ++
        let winCon = 0
        message.innerHTML= `<h2>Guess : ${score}`
      for(let i = 0; i<numbers.length; i++)
      {
          console.log(numbers[i].value)
          
          if(numbers[i].value == numbers[i].correct)
          {
            numbers[i].style.backgroundColor = "#00FF00"
            numbers[i].style.color = "rgb(239,68,6)"
              console.log("Match")
              winCon ++
          }
          else
          {
            let color = (numbers[i].value < numbers[i].correct) ? "blue":"red"
            numbers[i].style.backgroundColor = color
            numbers[i].style.color="black"
            console.log("No match")
          }
          if(winCon==numbers.length)
          {
            sound.play()
            gameEnd()
          }
      }
    }

})
function gameEnd()
{
    message.innerHTML = `You Solved the combo in Guess : <h2>${score}`
    gamePlay = false
    button.innerText = "Restart"
}

function maker()
{
    for(let x = 0; x<4; x++)
      {
        let el = document.createElement('input')
        el.setAttribute("type","number")
        
        el.max = 9
        el.min = 0
        el.size = 1
        el.order = x
        el.classList.add("numb")
        el.correct = Math.floor(Math.random()*10)
        el.value = 0
  
        gameArea.appendChild(el)
        console.log(el)
      }
}