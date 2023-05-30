const player0 = "0";
const playerx = "X";
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const checkWin = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
let toggleTurn = false;
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let boxtext = document.querySelectorAll(".box")
const result=document.querySelector(".result");
let restart = document.querySelector("#button");
let result_text = document.querySelector(".result h1");
let img = document.querySelector("imgbox");

let boardClicked;
boxtext.forEach(cell => {
    cell.onclick = () => {
        let currentPlayer = toggleTurn ? playerx : player0;
        cell.classList.add("disable");
       addInCell(cell,currentPlayer);
       if(winnerCheck(currentPlayer)){
        addInactive();
      
      result_text.innerText=currentPlayer+"   win the game"


       }
       else if(isDraw()){
        addInactive();
        result_text.innerText="BEST LUCK NEXT TIME"
  
       }
       else{
        swapPlayer();
       }
    }
});
function winnerCheck(currentPlayer) {
    return checkWin.some(condition => {
        return condition.every(index => {
        return boxtext[index].innerHTML === currentPlayer;
      });
    });
  }
  function isDraw() {
    return [...boxtext].every(cell => {
      return cell.innerHTML === playerx || cell.innerHTML === player0;
    });
  }
 function addInactive(){

    result.classList.remove("inactive");
 } 
  
  

function swapPlayer()
 {
    toggleTurn = !toggleTurn;
    if(toggleTurn){
        player2.classList.add("active");
        player1.classList.remove("active");
    }
    else{
        player1.classList.add("active");
        player2.classList.remove("active");
    }
}
function addInCell(cell,currentPlayer){
    cell.innerHTML=currentPlayer;
}
restart.onclick=()=>{
    location.reload()
}

