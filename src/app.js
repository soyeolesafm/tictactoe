

const gameCells = document.querySelectorAll(`.cell`)
const resetBtn = document.querySelector(`#reset`)
const gameMsg = document.querySelector(`.playermessage`)
const scoreX = document.querySelector(`.scoreX`)
const scoreO = document.querySelector(`.scoreO`)
const winCombinations = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// TODO storage every cell in an array with a for loop, declare variable for the player's turn...
// ...as true so it can be change every time and other variable to determine if...
// the game still active
let isPlaxerX = true
let gameActive = true
let oScore = 0
let xScore = 0



for (var i = 0; i < gameCells.length; i++ ){
    document.querySelectorAll(`.cell`)[i].addEventListener(`click`, (e) =>{
        if(!gameActive ||e.target.classList[1] === `x` || e.target.classList[1] === `o`)return

        if (isPlaxerX ){
            gameMsg.innerHTML = `is <span id="player">O</span> turn`
            isPlaxerX = false
            e.target.classList.add(`x`)
        } else{
            gameMsg.innerHTML = `is <span id="player">X</span> turn`
            isPlaxerX = true
            e.target.classList.add(`o`)
        }
        winGame()
    })
}
// create a function that check if there is a winner, finish the game and display who won
//  |0 1 2| the combination to win are 0 1 2, 3 4 5, 6 7 8, 0 3 6, 1 4 7, 2 5 8, 0 4 8
//  |3 4 5| and 2 4 6
//  |6 7 8| in this function we have if every combination meets the criteria for the game to declare a winner or
//  if is a draw AND if it so change the game active to false also add a winner class style so we can actually see the ..
// .. winning combo 
const winGame = () => {
    if(gameCells[0].classList[1] === `x` && gameCells[1].classList[1] === `x` && gameCells[2].classList[1] === `x`)
    {
        gameMsg.innerHTML = `😺Player <span id="player">X</span> WON😺`;
        gameActive = false;
        gameCells[0].classList.add(`winner`);
        gameCells[1].classList.add(`winner`);
        gameCells[2].classList.add(`winner`);
        xScore = xScore + 1
        scoreX.innerHTML = xScore

    }else if(gameCells[3].classList[1] === `x` && gameCells[4].classList[1] === `x` && gameCells[5].classList[1] === `x`){
        gameMsg.innerHTML = `😺Player <span id="player">X</span> WON😺`;
        gameActive = false;
        gameCells[3].classList.add(`winner`);
        gameCells[4].classList.add(`winner`);
        gameCells[5].classList.add(`winner`);
        xScore = xScore + 1
        scoreX.innerHTML = xScore
    }else if
     (gameCells[6].classList[1] === `x` && gameCells[7].classList[1] === `x` && gameCells[8].classList[1] === `x`){
        gameMsg.innerHTML = `😺Player <span id="player">X</span> WON😺`;
        gameActive = false;
        gameCells[6].classList.add(`winner`);
        gameCells[7].classList.add(`winner`);
        gameCells[8].classList.add(`winner`);
        xScore = xScore + 1
        scoreX.innerHTML = xScore
    }else if
    (gameCells[0].classList[1] === `x` && gameCells[3].classList[1] === `x` && gameCells[6].classList[1] === `x`){
        gameMsg.innerHTML = `😺Player <span id="player">X</span> WON😺`;
        gameActive = false;
        gameCells[0].classList.add(`winner`);
        gameCells[3].classList.add(`winner`);
        gameCells[6].classList.add(`winner`);
        xScore = xScore + 1
        scoreX.innerHTML = xScore
    }else if
     (gameCells[1].classList[1] === `x` && gameCells[4].classList[1] === `x` && gameCells[7].classList[1] === `x`){
        gameMsg.innerHTML = `😺Player <span id="player">X</span> WON😺`;
        gameActive = false;
        gameCells[1].classList.add(`winner`);
        gameCells[4].classList.add(`winner`);
        gameCells[7].classList.add(`winner`);
        xScore = xScore + 1
        scoreX.innerHTML = xScore
        
    }else if
    (gameCells[2].classList[1] === `x` && gameCells[5].classList[1] === `x` && gameCells[8].classList[1] === `x`){
        gameMsg.innerHTML = `😺Player <span id="player">X</span> WON😺`;
        gameActive = false;
        gameCells[2].classList.add(`winner`);
        gameCells[5].classList.add(`winner`);
        gameCells[8].classList.add(`winner`);
        xScore = xScore + 1
        scoreX.innerHTML = xScore
    }else if
     (gameCells[0].classList[1] === `x` && gameCells[4].classList[1] === `x` && gameCells[8].classList[1] === `x`){
        gameMsg.innerHTML = `😺Player <span id="player">X</span> WON😺`;
        gameActive = false;
        gameCells[0].classList.add(`winner`);
        gameCells[4].classList.add(`winner`);
        gameCells[8].classList.add(`winner`);
        xScore = xScore + 1
        scoreX.innerHTML = xScore
    }else if
    (gameCells[2].classList[1] === `x` && gameCells[4].classList[1] === `x` && gameCells[6].classList[1] === `x`){
        gameMsg.innerHTML = `😺Player <span id="player">X</span> WON😺`;
        gameActive = false;
        gameCells[2].classList.add(`winner`);
        gameCells[4].classList.add(`winner`);
        gameCells[6].classList.add(`winner`);
        xScore = xScore + 1
        scoreX.innerHTML = xScore
    }
    else if (gameCells[0].classList[1] === `o` && gameCells[1].classList[1] === `o` && gameCells[2].classList[1] === `o`)
    {
        gameMsg.innerHTML = `😺Player <span id="player">O</span> WON😺`;
        gameActive = false;
        gameCells[0].classList.add(`winner`);
        gameCells[1].classList.add(`winner`);
        gameCells[2].classList.add(`winner`);
        oScore = oScore + 1;
        scoreO.innerHTML = oScore;
    }else if(gameCells[3].classList[1] === `o` && gameCells[4].classList[1] === `o` && gameCells[5].classList[1] === `o`){
        gameMsg.innerHTML = `😺Player <span id="player">O</span> WON😺`;
        gameActive = false;
        gameCells[3].classList.add(`winner`);
        gameCells[4].classList.add(`winner`);
        gameCells[5].classList.add(`winner`);
        oScore = oScore + 1;
        scoreO.innerHTML = oScore;
    }else if
     (gameCells[6].classList[1] === `o` && gameCells[7].classList[1] === `o` && gameCells[8].classList[1] === `o`){
        gameMsg.innerHTML = `😺Player <span id="player">O</span> WON😺`;
        gameActive = false;
        gameCells[6].classList.add(`winner`);
        gameCells[7].classList.add(`winner`);
        gameCells[8].classList.add(`winner`);
        oScore = oScore + 1;
        scoreO.innerHTML = oScore;
    }else if
    (gameCells[0].classList[1] === `o` && gameCells[3].classList[1] === `o` && gameCells[6].classList[1] === `o`){
        gameMsg.innerHTML = `😺Player <span id="player">O</span> WON😺`;
        gameActive = false;
        gameCells[0].classList.add(`winner`);
        gameCells[3].classList.add(`winner`);
        gameCells[6].classList.add(`winner`);
        oScore = oScore + 1;
        scoreO.innerHTML = oScore;
    }else if
     (gameCells[1].classList[1] === `o` && gameCells[4].classList[1] === `o` && gameCells[7].classList[1] === `o`){
        gameMsg.innerHTML = `😺Player <span id="player">O</span> WON😺`;
        gameActive = false;
        gameCells[1].classList.add(`winner`);
        gameCells[4].classList.add(`winner`);
        gameCells[7].classList.add(`winner`);
        oScore = oScore + 1;
        scoreO.innerHTML = oScore;
    }else if
    (gameCells[2].classList[1] === `o` && gameCells[5].classList[1] === `o` && gameCells[8].classList[1] === `o`){
        gameMsg.innerHTML = `😺Player <span id="player">O</span> WON😺`;
        gameActive = false;
        gameCells[2].classList.add(`winner`);
        gameCells[5].classList.add(`winner`);
        gameCells[8].classList.add(`winner`);
        oScore = oScore + 1;
        scoreO.innerHTML = oScore;
    }else if
     (gameCells[0].classList[1] === `o` && gameCells[4].classList[1] === `o` && gameCells[8].classList[1] === `o`){
        gameMsg.innerHTML = `😺Player <span id="player">O</span> WON😺`;
        gameActive = false;
        gameCells[0].classList.add(`winner`);
        gameCells[4].classList.add(`winner`);
        gameCells[8].classList.add(`winner`);
        oScore = oScore + 1;
        scoreO.innerHTML = oScore;
    }else if
    (gameCells[2].classList[1] === `o` && gameCells[4].classList[1] === `o` && gameCells[6].classList[1] === `o`){
        gameMsg.innerHTML = `😺Player <span id="player">O</span> WON😺`;
        gameActive = false;
        gameCells[2].classList.add(`winner`);
        gameCells[4].classList.add(`winner`);
        gameCells[6].classList.add(`winner`);
        oScore = oScore + 1;
        scoreO.innerHTML = oScore;
    }else if (gameCells[0].classList[1]
            && gameCells[1].classList[1]
            && gameCells[2].classList[1]
            && gameCells[3].classList[1]
            && gameCells[4].classList[1]
            && gameCells[5].classList[1]
            && gameCells[6].classList[1]
            && gameCells[7].classList[1]
            && gameCells[8].classList[1])
        gameMsg.innerHTML = `🙀IS A DRAW!!!😾`;
}

// resetBtn.addEventListener(`click`, () =>{ location.reload (true)})


//  el codigo de abajo no funciona

//  resetBtn.addEventListener(`click`, () =>{
//     gameActive = true
//     isPlaxerX = true
//     gameMsg.innerHTML = `is <span id="player">X</span> turn`
//     gameCells.classList.remove('x')
//     gameCells.classList.remove('o')
//     gameCells.classList.remove('winner')
// })


//  este de abajo si funciona pero es demasiado codigo
resetBtn.addEventListener(`click`, () =>{
    gameActive = true
    isPlaxerX = true
    gameMsg.innerHTML = `is <span id="player">X</span> turn`
    gameCells[0].classList.remove('x')
    gameCells[1].classList.remove('x')
    gameCells[2].classList.remove('x')
    gameCells[3].classList.remove('x')
    gameCells[4].classList.remove('x')
    gameCells[5].classList.remove('x')
    gameCells[6].classList.remove('x')
    gameCells[7].classList.remove('x')
    gameCells[8].classList.remove('x')
    gameCells[0].classList.remove('o')
    gameCells[1].classList.remove('o')
    gameCells[2].classList.remove('o')
    gameCells[3].classList.remove('o')
    gameCells[4].classList.remove('o')
    gameCells[5].classList.remove('o')
    gameCells[6].classList.remove('o')
    gameCells[7].classList.remove('o')
    gameCells[8].classList.remove('o')
    gameCells[0].classList.remove('winner')
    gameCells[1].classList.remove('winner')
    gameCells[2].classList.remove('winner')
    gameCells[3].classList.remove('winner')
    gameCells[4].classList.remove('winner')
    gameCells[5].classList.remove('winner')
    gameCells[6].classList.remove('winner')
    gameCells[7].classList.remove('winner')
    gameCells[8].classList.remove('winner')
})


console.log(xScore);