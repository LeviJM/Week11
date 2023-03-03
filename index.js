const buttons = document.querySelectorAll('.btn');
const playerTurn = document.getElementById('pTurn');
var pOneTurn = true;

/////Win Conditions
const allSquares = Array.from(document.getElementsByClassName('toe'));
console.log(allSquares)

function pOneWin(){
    playerTurn.textContent = 'P1 WINS!';
    playerTurn.style.color = 'red';
    allSquares.forEach(button => {
        button.disabled = true;
    });
};

function pTwoWin(){
    playerTurn.textContent = 'P2 WINS!';
    playerTurn.style.color = 'blue';
    allSquares.forEach(button => {
        button.disabled = true;
    });
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
            });
        });
    });  
};


/////Turn System
allSquares.forEach(button => {
    console.log(buttons);
    console.log(button);
    button.addEventListener('click', () => {
        if(pOneTurn == true){
            button.style.backgroundColor = 'red';
            pOneTurn = false;
            playerTurn.textContent = 'P2 TURN!';
            playerTurn.style.color = 'blue';
        } else {
            button.style.backgroundColor = 'blue';
            pOneTurn = true;
            playerTurn.textContent = 'P1 TURN!';
            playerTurn.style.color = 'red';
    }
      button.disabled = true;
      ref()
      checkWinner()
    });
});

