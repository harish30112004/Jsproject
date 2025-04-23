
let score=JSON.parse(localStorage.getItem('score'));


if(score===null){  
score={
    wins:0,
    loses:0,
    ties:0,
}
} 

updateScoreElement();
 doccument.querySelector('.js-result').innerHTML= result;
 document.querySelector('.js-move').innerHTML 
 = `You ${playMove} - ${computerMove} Computer`;

function playGame( playMove)
{
let  computerMove= pickComputerMoves();
let  result = '';

if(playMove=='scissors'){
if (computerMove === 'rock') {
result = 'You lose.';
} else if (computerMove === 'paper') {
result = 'You win.';
} else if (computerMove === 'scissors') {
result = 'Tie.';
}
}

else if(playMove=='paper'){
if (computerMove === 'rock') {
result = 'You win.';
} else if (computerMove === 'paper') {
result = 'Tie.';
} else if (computerMove === 'scissors') {
result = 'You lose.';
}
}
else if(playMove=='rock'){
if (computerMove === 'rock') {
result = 'Tie.';
} else if (computerMove === 'paper') {
result = 'You lose.';
} else if (computerMove === 'scissors') {
result = 'You win.';
}
}  

if(result==='You win.'){
    score.wins =score.wins+1;
}else if(result==='You lose.'){
    score.loses+=1;
}else if(result==='Tie.'){
    score.ties+=1;
}



localStorage.setItem('score',JSON.stringify(score));


updateScoreElement();
document.querySelector('.js-result').innerHTML= result;
document.querySelector('.js-move').innerHTML= `You
<img src="images/${playMove}-emoji.png">
<img src="images/${computerMove}-emoji.png">
Computer`;


}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML= ` Wins: ${score.wins},Loses: ${score.loses},Ties: ${score.ties}`;
}

5
function pickComputerMoves()
{
let randomNumber = Math.random();
let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
}

return computerMove;
}
