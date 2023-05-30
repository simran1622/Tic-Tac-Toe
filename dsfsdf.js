let board=document.querySelectorAll(".cell");
let result=document.querySelector(".result");
let msg=document.querySelector(".gamemsg");
let player1=document.querySelector(".Player1");
let player2=document.querySelector(".Player2");
let restart=document.querySelector(".restart");
const playerX="x";
const player0="0";
let xTurn;
let boardClicked;
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

startGame();
function startGame()
{
    xTurn=true;
    player1.classList.add("active");
    player2.classList.remove("active");
    result.classList.add("d-none");
    boardClicked=0;
    board.forEach(cell=>cell.innerHTML="");
    board.forEach(cell=>{
        cell.addEventListener("click",playGame);
    });
}
function playGame(e)
{
    e.target.removeEventListener("click",playGame)
    let currentPlayer = xTurn?playerX:player0;
    e.target.innerHTML=currentPlayer;
    boardClicked++;
    if(!winGame() && boardClicked===9)
    {
        msg.innerHTML=`Game Over`; 
        result.classList.remove("d-none");
        board.forEach(cell=>{
            cell.removeEventListener("click",playGame);
        });
    }
    if(winGame())
    {
        msg.innerHTML=`Player ${currentPlayer} win the game`;  
        result.classList.remove("d-none");
        board.forEach(cell=>{
            cell.removeEventListener("click",playGame);
        });
    }
   
    
    swapPlayer();
}
function swapPlayer()
{
    xTurn=!xTurn;
    if(xTurn){
        player1.classList.add("active");
        player2.classList.remove("active");
    }
    else{
        player2.classList.add("active");
        player1.classList.remove("active");
    }
}
function winGame()
{
    
    for(let i=0; i<win.length; i++)
    {
       if(board[win[i][0]].innerHTML!="" && board[win[i][0]].innerHTML==board[win[i][1]].innerHTML && board[win[i][1]].innerHTML==board[win[i][2]].innerHTML)
       {
        return true;
       }
    }
    return false;
}
restart.addEventListener("click",startGame);/* .box:hover{
    background-color: rgb(198, 204, 204);
  }
  .container{
    display:grid;
  }
  .title{
    justify-content: center;
    display: flex;
  }
  
  .status-action {
   display: flex;
    margin-top: 25px;
    font-size: 25px;
    justify-content: center;
  }
  
  
    #reset:hover {
     background-color:  rgb(185, 0, 0);
      transform: translateY(-15px);
       */