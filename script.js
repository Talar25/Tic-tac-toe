const cells = document.querySelectorAll('[data-cell]')
const winningMsgTxt = document.getElementById('winning-message-text')
const winningMsg = document.getElementById('winning-message')
const resetBtn = document.getElementById('restart-button')
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
            if(win(mark)){
                gameOver(who.name)

            }else {
                draw()
            }

            changePlayers();

        }
    //checking win
        const win = (mark) => {
            for(let i = 0; i < winningCondition.length; i++) {
                const [a, b, c] = winningCondition[i];
                if(
                    cells[a].classList.contains(mark) && cells[b].classList.contains(mark) && cells[c].classList.contains(mark)
                ) return true;
                
            }

        }
    
    //checking draw
    //SHOULD BE FIXED
    const draw = () => {
        if(Array.from(cells).every(cell => cell.classList.contains('x') ||
         cell.classList.contains('o') ||
          cell.textContent != "")){
            const draw = "It is a draw!";
            winningMsgTxt.textContent = draw;
            winningMsg.classList.add('show')
        }
        }


        
    
    
    //changing players
    const changePlayers = () => {
        if(who === player1) {
            who = player2
        }else who = player1;
        mark = who.mark;
    } 

    //game over
    const gameOver = (who) => {
        const winner = `${who} wins the game`;
        winningMsgTxt.textContent = winner;
        winningMsg.classList.add('show')    
    }

    const reset = () => {
        cells.forEach(cell => {
            cell.classList.remove('x', 'o');
            cell.textContent = ''
        })
        winningMsg.classList.remove('show')
        who = player1;
        mark = who.mark

        cells.forEach((cell,index) => cell.addEventListener('click', gameBoard.play, {once: true}))
    }


    return {
        play,
        reset
    }
    })();   

cells.forEach((cell,index) => cell.addEventListener('click', gameBoard.play, {once: true}))
resetBtn.addEventListener('click', gameBoard.reset)





