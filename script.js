const cells = document.querySelectorAll('[data-cell]')
const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const player = (name, mark) => {
    return {
        name,
        mark
    }
}


const player1 = player('Player1', 'x');
console.log(player1)
const player2 = player('Player2', 'o')
//whos turn it is
let who = player1;
let mark = who.mark

const gameBoard = (() => {
    //marking the board
        const play = (e) => {
            const cell = e.target;
            cell.textContent = mark;
            cell.classList.add(mark);
            console.log(win(mark))
            changePlayers();

        }
    //checking win
        const win = (mark) => {

        }
    
    //checking draw
    
    
    //changing players
    const changePlayers = () => {
        if(who === player1) {
            who = player2
        }else who = player1;
        mark = who.mark;
    } 
    return {
        play
    }
    })();   

cells.forEach((cell,index) => cell.addEventListener('click', gameBoard.play, {once: true}))






