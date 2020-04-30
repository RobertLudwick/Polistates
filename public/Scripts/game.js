var turn = 1;
var maxturn = 8;


function nextTurn() {
    //Increase turn number
    if (turn != maxturn) {
        turn = turn+ 1;
        incrementTurn(turn)
    }
}

