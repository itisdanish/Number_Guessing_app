const message = document.querySelector('.message')
const button = document.querySelector('button')
const gameArea = document.querySelector('.output')

gameArea.innerHTML="Press the button below"
let gamePlay = false

button.addEventListener("click", function()
{
    
    if(!gamePlay)
    {
        gamePlay=true
        score = 0
        gameArea.innerHTML=""
        make()
        message.innerHTML='Guess :'
        button.innerText="Check Combo"
    }
    else
    { 
        
        const numbers = document.querySelectorAll('.numb')
        let win = 0
        score++
        message.innerText=`Guess :${score}`
        for ( let i = 0; i<numbers.length; i++)
        {

            if(numbers[i].value == numbers[i].correct)
            {
               numbers[i].style.backgroundColor = "green"
               numbers[i].style.color = "white"
               win++
            }
            else
            {
                let color = (numbers[i].value < numbers[i].correct)?"blue":"red"
                numbers[i].style.backgroundColor = color
                numbers[i].style.color = "white"
            }
            if (win == numbers.length)
            {
                gameOver()
            }
    
        }
}
})

function gameOver()
{
    
    message.innerText=`You Done it at ${score} Guesses`
    gamePlay = false
    button.innerText = "Restart"
    console.warn("over")
}

function make()
{
    for(let x = 0; x<4 ; x++)
    {
        let el = document.createElement('input')
        el.setAttribute('type','number')
        el.classList.add('numb')
        el.min = 0
        el.max = 9
        el.size = 1
        el.order = x
        el.correct = Math.floor(Math.random()*10)
        el.value = 0
        gameArea.appendChild(el)
    
    }
}