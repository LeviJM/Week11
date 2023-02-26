const buttons = document.querySelectorAll('.btn');
const playerTurn = document.getElementById('pTurn');
var pOneTurn = true;

buttons.forEach(button => {
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
    });
});