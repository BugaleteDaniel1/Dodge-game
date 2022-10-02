const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');
const scoreBoard = document.querySelector('.score');
const playerWidht = 100;
const playerPosition = player.style.left = 0;
let scoreCounter = 0;



// check the game iterval //////////////////////////////////
////////////////////////////////////////////////////////////
setInterval(endGame, 100)



// event listeners /////////////////////////////////////////
////////////////////////////////////////////////////////////

document.addEventListener('keyup', (e) =>{
    if(e.keyCode === 37) { moveLeft() }
    else if (e.keyCode === 39) { moveRight() }
    else return
});
document.addEventListener('animationiteration', randomPosition);
document.addEventListener('animationiteration', scoreIncrease)





// functions /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

function moveLeft() {
    let left = 
    parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    left -= playerWidht;
    player.style.left = left + 'px';
    if(left < 0) {
        player.style.left = 0 + 'px'
    }
}

function moveRight() {
    let right =
    parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    right += playerWidht;
    player.style.left = right + 'px';
    if(right > playerWidht * 2) {
        player.style.left = playerWidht * 2 + 'px'
    }
}

function randomPosition() {
    const randomPosition = Math.floor((Math.random() *3)) ;
    obstacle.style.left = randomPosition * 100 +'px';
}



function endGame() {
    let playerTop = 
    parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let obstacleTop = 
    parseInt(window.getComputedStyle(obstacle).getPropertyValue('top'));
    let playerLeft = 
    parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let obstacleLeft = 
    parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    
    // console.log(playerTop)
    if(obstacleTop > playerTop - (playerWidht/1.1) && playerLeft === obstacleLeft ) {
        alert('Your score was'+ ' ' + scoreCounter);
        scoreCounter = -1;
    }
}

// add score to the scoreboard /////////////////////////////
////////////////////////////////////////////////////////////
function scoreIncrease() {
    scoreCounter++;
scoreBoard.innerText = 'SCORE:' + ' ' + scoreCounter;

}
  