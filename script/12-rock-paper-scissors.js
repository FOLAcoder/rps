let score = JSON.parse (localStorage.getItem('score')) || {
    win: 0,
    losses: 0,
    tie: 0
}
updateScoreElement()

/*
if (!score) {
score = {
    win: 0,
    losses: 0,
    tie: 0
}

}
*/
let isAutoPlaying = false
let intervalId 

function autoPlay(params) {
    if (!isAutoPlaying){
       intervalId = setInterval(function() {
            const playerMove = pickComputerMove()
          playGame(playerMove)  
        },5000)
        isAutoPlaying = true

    }else{
clearInterval(intervalId)
isAutoPlaying = false
    }
   
}
 
document.querySelector('.js-rock-button')
.addEventListener('click', ()=>{
    playGame('rock')
})

document.querySelector('.js-paper-button')
.addEventListener('click', ()=>{
    playGame('paper')
})

document.querySelector('.js-scissors-button')
.addEventListener('click', ()=>{
    playGame('scissors')
})

document.body.addEventListener('keydown', (event)=>{
    if (event.key === 'r') {
        playGame('rock')
    }else if(event.key === 'p'){
      playGame('paper')  
    }else if(event.key === 's'){
        playGame('scissors')
    }
})



function playGame(playerMove){
const computerMove = pickComputerMove()

let result =''
if (playerMove === 'scissors'){
if (computerMove === 'rock') {
result='you lose'
}else if ( computerMove === 'paper'){
result = 'you win'
}else if( computerMove === 'scissors'){
result = 'tie'
}


}else if (playerMove === 'paper'){
if (computerMove === 'rock') {
result='you win'
}else if ( computerMove === 'paper'){
result = 'tie'
}else if( computerMove === 'scissors'){
result = 'you lose'
}

}else if(playerMove === 'rock'){
if (computerMove === 'rock') {
result='tie'
}else if ( computerMove === 'paper'){
result = 'you lose'
}else if( computerMove === 'scissors'){
result = 'you win'
}
}

if (result === 'you win') {
score.win += 1
}else if (result === 'you lose'){
score.losses += 1
}else if (result === 'tie'){
 score.tie +=1
}



localStorage.setItem('score',JSON.stringify(score))

updateScoreElement()


document.querySelector('.js-result').innerHTML = result

document.querySelector('.js-moves').innerHTML = `you <img src="images/${playerMove}.jpg" class="move-icon">
<img src="images/${computerMove}.jpg" class="move-icon"> computer</p>
`

}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `wins: ${score.win}, losses: ${score.losses}, ties: ${score.tie}`
}


function pickComputerMove() {
const randomNumber = Math.random()
let computerMove = ''
if(randomNumber >=0 && randomNumber < 1/3){
computerMove = 'rock'
}else if( randomNumber >=1/3 && randomNumber <2/3){
 computerMove = 'paper'
}else if(randomNumber >=2/3 && randomNumber <=1 ){
 computerMove = 'scissors'
}
return computerMove
}

