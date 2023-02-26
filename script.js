
console.log("welcome to tictactoe")
let music = new Audio("/media/music.mp3")
let audioTurn = new Audio("media/turn.wav")
let gamewin = new Audio("media/gamewin.wav")

let turn = "X"
let isgameover = false;
const changeTurn = () => {
    return turn === "X"? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,5,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,5,135]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
         (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
          (boxtext[e[0]].innerText !== "")){
         document.querySelector('.info').innerText = boxtext[e[0]].innerText + " " + "WON";
         isgameover = true
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
         gamewin.play()
         music.pause()
         document.querySelector(".line").style.width = "20vw"
         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=> {
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerHTML = "Turn for" +" " + turn;
            }
        }
    })
})


reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    })
    turn = "X";
    isgameover = false
        document.getElementsByClassName("info")[0].innerHTML = "Turn for" +" " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
        gamewin.pause()
        document.querySelector(".line").style.width = "0"
})