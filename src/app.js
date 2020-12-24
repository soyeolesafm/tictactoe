

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
let cellsChecked = 0
// 

for (let i = 0; i < gameCells.length; i++ ){
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
        cellsChecked = cellsChecked + 1
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
    const playerCells = [...gameCells].filter(cell => cell.classList.length > 1 && cell.classList[1] === ( !isPlaxerX ? `x`: `o`) ).map(cell => Number(cell.dataset.index))
    for (const comb of winCombinations) {
       const found = playerCells.filter(cell => {
           return comb.includes(cell)
       })
       if (found.length === 3){
        gameMsg.innerHTML = `😺Player <span id="player">${!isPlaxerX ? `x` : `o` }</span> WON😺`;
        gameActive = false;
        gameCells[Number(comb[0])].classList.add(`winner`);
        gameCells[Number(comb[1])].classList.add(`winner`);
        gameCells[Number(comb[2])].classList.add(`winner`);
        if (isPlaxerX){
            oScore = oScore + 1;
        scoreO.innerHTML = oScore;
        }else {
            xScore = xScore + 1;
        scoreX.innerHTML = xScore;
        }
        return
       }else {
        drawGame()
       }
    }

}
const drawGame = () => {
    
    if (cellsChecked === 9){
        gameMsg.innerHTML = `🙀IS A DRAW!!!😾`;
    }
    
}

resetBtn.addEventListener(`click`, () =>{
    gameActive = true
    isPlaxerX = true
    gameMsg.innerHTML = `is <span id="player">X</span> turn`

    for (let i = 0; i < 9; i++){
        gameCells[i].classList.remove('x')
        gameCells[i].classList.remove('o')
        gameCells[i].classList.remove('winner')
    }
    cellsChecked = 0
   
  
})


