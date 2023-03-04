const buttons = document.querySelectorAll('.btn');
const playerTurn = document.getElementById('pTurn');
var pOneTurn = true;
var tieCounter = 0;
var rfrsh = false;

/////Win Conditions
const allSquares = Array.from(document.getElementsByClassName('toe'));
const winAlert = document.createElement('div');
var winText = document.createTextNode('');
winAlert.className = "alert alert-success";
winAlert.role = 'alert';
winAlert.appendChild(winText)


function pOneWin(){
    playerTurn.textContent = 'P1 WINS!';
    playerTurn.style.color = 'red';
    winText.textContent = 'Good Job Player 1!';
    playerTurn.before(winAlert);
    allSquares.forEach(button => {
        button.disabled = true;
    });
};

function pTwoWin(){
    playerTurn.textContent = 'P2 WINS!';
    playerTurn.style.color = 'blue';
    winText.textContent = 'Good Job Player 2!';
    playerTurn.before(winAlert);
    allSquares.forEach(button => {
        button.disabled = true;
    });
};

function checkTie(){
    if(tieCounter == 9){
        playerTurn.textContent = 'TIE NO ONE WINS!';
        playerTurn.style.color = 'purple';
        winText.textContent = 'Oops! Try Again!';
        playerTurn.before(winAlert);
    }
};

function checkWinner(){
    ///horizontals
    if(allSquares[0].style.backgroundColor == 'red' && allSquares[1].style.backgroundColor == 'red' && allSquares[2].style.backgroundColor == 'red'){
        pOneWin();
    } else if(allSquares[3].style.backgroundColor == 'red' && allSquares[4].style.backgroundColor == 'red' && allSquares[5].style.backgroundColor == 'red'){
        pOneWin();
    } else if(allSquares[6].style.backgroundColor == 'red' && allSquares[7].style.backgroundColor == 'red' && allSquares[8].style.backgroundColor == 'red'){
        pOneWin();
    } else if(allSquares[0].style.backgroundColor == 'blue' && allSquares[1].style.backgroundColor == 'blue' && allSquares[2].style.backgroundColor == 'blue'){
        pTwoWin();
    } else if(allSquares[3].style.backgroundColor == 'blue' && allSquares[4].style.backgroundColor == 'blue' && allSquares[5].style.backgroundColor == 'blue'){
        pTwoWin();
    } else if(allSquares[6].style.backgroundColor == 'blue' && allSquares[7].style.backgroundColor == 'blue' && allSquares[8].style.backgroundColor == 'blue'){
        pTwoWin();
    } ///verticals
    else if(allSquares[0].style.backgroundColor == 'red' && allSquares[3].style.backgroundColor == 'red' && allSquares[6].style.backgroundColor == 'red'){
        pOneWin();
    } else if(allSquares[1].style.backgroundColor == 'red' && allSquares[4].style.backgroundColor == 'red' && allSquares[7].style.backgroundColor == 'red'){
        pOneWin();
    } else if(allSquares[2].style.backgroundColor == 'red' && allSquares[5].style.backgroundColor == 'red' && allSquares[8].style.backgroundColor == 'red'){
        pOneWin();
    } else if(allSquares[0].style.backgroundColor == 'blue' && allSquares[3].style.backgroundColor == 'blue' && allSquares[6].style.backgroundColor == 'blue'){
        pTwoWin();
    } else if(allSquares[1].style.backgroundColor == 'blue' && allSquares[4].style.backgroundColor == 'blue' && allSquares[7].style.backgroundColor == 'blue'){
        pTwoWin();
    } else if(allSquares[2].style.backgroundColor == 'blue' && allSquares[5].style.backgroundColor == 'blue' && allSquares[8].style.backgroundColor == 'blue'){
        pTwoWin();
    } ///diagonals
    else if(allSquares[0].style.backgroundColor == 'red' && allSquares[4].style.backgroundColor == 'red' && allSquares[8].style.backgroundColor == 'red'){
        pOneWin();
    } else if(allSquares[2].style.backgroundColor == 'red' && allSquares[4].style.backgroundColor == 'red' && allSquares[6].style.backgroundColor == 'red'){
        pOneWin();
    } else if(allSquares[0].style.backgroundColor == 'blue' && allSquares[4].style.backgroundColor == 'blue' && allSquares[8].style.backgroundColor == 'blue'){
        pTwoWin();
    } else if(allSquares[2].style.backgroundColor == 'blue' && allSquares[4].style.backgroundColor == 'blue' && allSquares[6].style.backgroundColor == 'blue'){
        pTwoWin();
}};

var refresh = Array.from(document.getElementsByClassName('refresh'));
function ref() {
    refresh.forEach(button => {
        button.addEventListener('click' , () => {
            allSquares.forEach(button => {
                button.style.backgroundColor = 'white';
                button.disabled = false;
                pOneTurn = true;
                playerTurn.textContent = 'P1 TURN!';
                playerTurn.style.color = 'red';
                tieCounter = 0;
                rfrsh = true;
            });
        });
    });  
};

function alertRefresh(){
    if(rfrsh == true){
        winAlert.remove();
        rfrsh = false;
    };
};


/////Turn System
allSquares.forEach(button => {
    button.addEventListener('click', () => {
        if(pOneTurn == true){
            button.style.backgroundColor = 'red';
            button.textContent = 'X';
            button.style.color = "white";
            pOneTurn = false;
            playerTurn.textContent = 'P2 TURN!';
            playerTurn.style.color = 'blue';
        } else {
            button.style.backgroundColor = 'blue';
            button.textContent = 'O';
            button.style.color = "white";
            pOneTurn = true;
            playerTurn.textContent = 'P1 TURN!';
            playerTurn.style.color = 'red';
    }
      button.disabled = true;
      tieCounter += 1;
      console.log(tieCounter)
      ref();
      alertRefresh();
      checkTie();
      checkWinner();
    });
});

