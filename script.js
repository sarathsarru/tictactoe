console.log("welcome to tictactoe")
let music = new Audio("/media/next.mp3")
let audioTurn = new Audio("media/turn.wav")
let gameover = new Audio("media/gamewin.wav")

let turn = "X"
const changeTurn = () => {
    return turn === "X"? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
         (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
         (boxtext[e[0]].innerText !==""))
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=> {
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerHTML = "Turn for" + turn;
        }
    })
})