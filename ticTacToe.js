let $ = require('jquery')
let tttLite = require('./ticTacToeLite')
let liteEnabled = false

var s = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0); //Default value for squares is empty
let numPlayers = 1; //Default number of players is 1

let turnCount = 0

/* istanbul ignore next */
$(document).ready(function() {
    $("span#userFirstClassic").click(function() {
        numPlayers = 1;
        newGamePlayerFirst();
    });
    $("span#compFirstClassic").click(function() {
        numPlayers = 1;
        newGameComputerFirst();
    });
    $("span#twoPlayersClassic").click(function() {
        numPlayers = 2;
        newGamePlayerFirst();
    });
    $("span#userFirstLite").click(function() {
        numPlayers = 1;
        newLiteGamePlayerFirst();
    });
    $("span#compFirstLite").click(function() {
        numPlayers = 1;
        newLiteGameComputerFirst();
    });
    $("span#twoPlayersLite").click(function() {
        numPlayers = 2;
        newLiteGamePlayerFirst();
    });

    $("td").each(function(index, element) {
        element.onclick = function() {
            executeTurnCycle(index, numPlayers)
        }
    })
});

function numSpacesTaken() {
    x = 0;
    for (n in s) {
        if(s[n] !=0) {
            x++;
        }
    }
    return x;
}

/* istanbul ignore next */
function computerMove() {
    let move = undefined
    if(numSpacesTaken() == 1) {
        if(s[4] == 0) {
            move = 4
        }
        else {
            move = 8
        }
    } else {
        move = check4Win()
        if(move == undefined) {
            move = getMove();
        }
    }
    return move
}

function check4Win() {
    let move = undefined
    //When to play top-left
    if(((s[1] == 2 && s[2] == 2) || (s[4] == 2 && s[8] == 2) || (s[3] == 2 && s[6] == 2)) && s[0] == 0) {
        move = 0
    }
    //When to play top-center
    else if(((s[4] == 2 && s[7] == 2) || (s[0] == 2 && s[2] == 2)) && s[1] == 0) {
        move = 1
    }
    //When to play top-right
    else if(((s[1] == 2 && s[0] == 2) || (s[4] == 2 && s[6] == 2) || (s[5] == 2 && s[8] == 2)) && s[2] == 0) {
        move = 2
    }
    //When to play middle-left
    else if(((s[4] == 2 && s[5] == 2) || (s[0] == 2 && s[6] == 2)) && s[3] == 0) {
        move = 3
    }
    //When to play middle
    else if(((s[0] == 2 && s[8] == 2) || (s[1] == 2 && s[7] == 2) || (s[2] == 2 && s[6] == 2) || (s[3] == 2 && s[5] == 2)) && s[4] == 0) {
        move = 4
    }
    //When to play middle-right
    else if(((s[4] == 2 && s[3] == 2) || (s[2] == 2 && s[8] == 2)) && s[5] == 0) {
        move = 5
    }
    //When to play bottom-left
    else if(((s[0] == 2 && s[3] == 2) || (s[2] == 2 && s[4] == 2) || (s[7] == 2 && s[8] == 2)) && s[6] == 0) {
        move = 6
    }
    //When to play bottom center
    else if(((s[4] == 2 && s[1] == 2) || (s[6] == 2 && s[8] == 2)) && s[7] == 0) {
        move = 7
    }
    //When to play bottom-right
    else if(((s[6]== 2 && s[7] == 2) || (s[0] == 2 && s[4] == 2) || (s[2] == 2 && s[5] == 2)) && s[8] == 0) {
        move = 8
    }
    
    return move;
}

function getMove() {
    let move = undefined
    //Special Case
    if(s[0] == 0 && s[1]== 2 && s[2]== 1 && s[3]== 0 && s[4]== 0 && s[5]== 0 && s[6]== 0 && s[7]== 1 && s[8]== 0) {
        move = 8
    }
    //Special Case
    else if(s[0] == 0 && s[1]== 0 && s[2]== 0 && s[3]== 0 && s[4]== 2 && s[5]== 1 && s[6]== 0 && s[7]== 1 && s[8]== 0) {
        move = 8
    }
    //Speical Case
    else if(s[0] == 1 && s[1]== 2 && s[2]== 0 && s[3]== 0 && s[4]== 0 && s[5]== 0 && s[6]== 0 && s[7]== 1 && s[8]== 0) {
        move = 8
    }
    //Speical Case
    else if(s[0] == 1 && s[1]== 0 && s[2]== 0 && s[3]== 0 && s[4]== 2 && s[5]== 0 && s[6]== 0 && s[7]== 1 && s[8]== 2) {
        move = 2
    }
    //Speical Case
    else if(s[0] == 1 && s[1]== 0 && s[2]== 0 && s[3]== 0 && s[4]== 2 && s[5]== 1 && s[6]== 0 && s[7]== 0 && s[8]== 2) {
        move = 6
    }
    //Speical Case
    else if(s[0] == 0 && s[1]== 0 && s[2]== 1 && s[3]== 0 && s[4]== 2 && s[5]== 0 && s[6]== 1 && s[7]== 0 && s[8]== 0) {
        move = 1
    }
    //Speical Case
    else if(s[0] == 1 && s[1]== 0 && s[2]== 0 && s[3]== 0 && s[4]== 1 && s[5]== 0 && s[6]== 0 && s[7]== 0 && s[8]== 2) {
        move = 2
    }
    //Speical Case
    else if(s[0] == 1 && s[1]== 0 && s[2]== 0 && s[3]== 0 && s[4]== 2 && s[5]== 1 && s[6]== 0 && s[7]== 0 && s[8]== 0) {
        move = 7
    }
    //Speical Case
    else if(s[0] == 1 && s[1]== 0 && s[2]== 0 && s[3]== 0 && s[4]== 2 && s[5]== 0 && s[6]== 0 && s[7]== 1 && s[8]== 0) {
        move = 3
    }
    //Speical Case
    else if(s[0] == 1 && s[1]== 0 && s[2]== 0 && s[3]== 2 && s[4]== 2 && s[5]== 1 && s[6]== 0 && s[7]== 1 && s[8]== 0) {
        move = 8
    }
    //Speical Case
    else if(s[0] == 0 && s[1]== 0 && s[2]== 1 && s[3]== 0 && s[4]== 2 && s[5]== 0 && s[6]== 0 && s[7]== 1 && s[8]== 0) {
        move = 5
    }
    //Speical Case (Fixes bug in the ai decision making tree)
    else if(s[0] == 0 && s[1]== 0 && s[2]== 0 && s[3]== 0 && s[4]== 2 && s[5]== 1 && s[6]== 1 && s[7]== 0 && s[8]== 0) {
        move = 8
    }
    //When to play top-left defensively
    else if(((s[1] == 1 && s[2] == 1) || (s[4] == 1 && s[8] == 1) || (s[3] == 1 && s[6] == 1)) && s[0] == 0) {
        move = 0
    }
    //When to play top-center defensively
    else if(((s[4] == 1 && s[7] == 1) || (s[0] == 1 && s[2] == 1)) && s[1] == 0) {
        move = 1
    }
    //When to play top-right defensively
    else if(((s[1] == 1 && s[0] == 1) || (s[4] == 1 && s[6] == 1) || (s[5] == 1 && s[8] == 1)) && s[2] == 0) {
        move = 2
    }
    //When to play middle-left defensively
    else if(((s[4] == 1 && s[5] == 1) || (s[0] == 1 && s[6] == 1)) && s[3] == 0) {
        move = 3
    }
    //When to play middle defensively
    else if(((s[0] == 1 && s[8] == 1) || (s[1] == 1 && s[7] == 1) || (s[2] == 1 && s[6] == 1) || (s[3] == 1 && s[5] == 1)) && s[4] == 0) {
        move = 4
    }
    //When to play middle-right defensively
    else if(((s[4] == 1 && s[3] == 1) || (s[2] == 1 && s[8] == 1)) && s[5] == 0) {
        move = 5
    }
    //When to play bottom-left defensively
    else if(((s[0] == 1 && s[3] == 1) || (s[2] == 1 && s[4] == 1) || (s[7] == 1 && s[8] == 1)) && s[6] == 0) {
        move = 6
    }
    //When to play bottom-center defensively
    else if(((s[4] == 1 && s[1] == 1) || (s[6] == 1 && s[8] == 1)) && s[7] == 0) {
        move = 7
    }
    //When to play bottom-right defensively
    else if(((s[6]== 1 && s[7] == 1) || (s[0] == 1 && s[4] == 1) || (s[2] == 1 && s[5] == 1)) && s[8] == 0) {
        move = 8
    }
    //Special Case for if the middle space is still open after all other defensive evaluations
    else if(s[4] == 0) {
        move = 4
    }
    //When to play the first available space
    else {
        for (n in s) {
            if(s[n] == 0) {
                move = parseInt(n)
                break;
            }
        }
    }
    return move
}

function animateWinner(combo) {
    $(`td#${combo[0]}`).animate({
        fontSize: "50px",
        borderWidth: "10px"
    }, 1500 );
    $(`td#${combo[1]}`).animate({
        fontSize: "50px",
        borderWidth: "10px"
    }, 1500 );
    $(`td#${combo[2]}`).animate({
        fontSize: "50px",
        borderWidth: "10px"
    }, 1500 );
}

function isGameOver() {
    let player1 = 1
    let player2 = 2
    let tie = 3
    let combo = []
    if(s[0] == 1 && s[1] == 1 && s[2] == 1) {
        combo = [0,1,2]
        setStateToWinner(player1)
        animateWinner(combo)
        return 1;
    }
    if(s[3] == 1 && s[4] == 1 && s[5] == 1) {
        combo = [3,4,5]
        setStateToWinner(player1)
        animateWinner(combo)
        return 1;
    }
    if(s[6] == 1 && s[7] == 1 && s[8] == 1) {
        combo = [6,7,8]
        setStateToWinner(player1)
        animateWinner(combo)
        return 1;
    }
    if(s[0] == 1 && s[3] == 1 && s[6] == 1) {
        combo = [0,3,6]
        setStateToWinner(player1)
        animateWinner(combo)
        return 1;
    }
    if(s[1] == 1 && s[4] == 1 && s[7] == 1) {
        combo = [1,4,7]
        setStateToWinner(player1)
        animateWinner(combo)
        return 1;
    }
    if(s[2] == 1 && s[5] == 1 && s[8] == 1) {
        combo = [2,5,8]
        setStateToWinner(player1)
        animateWinner(combo)
        return 1;
    }
    if(s[0] == 1 && s[4] == 1 && s[8] == 1) {
        combo = [0,4,8]
        setStateToWinner(player1)
        animateWinner(combo)
        return 1;
    }
    if(s[2] == 1 && s[4] == 1 && s[6] == 1) {
        combo = [2,4,6]
        setStateToWinner(player1)
        animateWinner(combo)
        return 1;
    }
    if(s[0] == 2 && s[1] == 2 && s[2] == 2) {
        combo = [0,1,2]
        setStateToWinner(player2)
        animateWinner(combo)
        return 1;
    }
    if(s[3] == 2 && s[4] == 2 && s[5] == 2) {
        combo = [3,4,5]
        setStateToWinner(player2)
        animateWinner(combo)
        return 1;
    }
    if(s[6] == 2 && s[7] == 2 && s[8] == 2) {
        combo = [6,7,8]
        setStateToWinner(player2)
        animateWinner(combo)
        return 1;
    }
    if(s[0] == 2 && s[3] == 2 && s[6] == 2) {
        combo = [0,3,6]
        setStateToWinner(player2)
        animateWinner(combo)
        return 1;
    }
    if(s[1] == 2 && s[4] == 2 && s[7] == 2) {
        combo = [1,4,7]
        setStateToWinner(player2)
        animateWinner(combo)
        return 1;
    }
    if(s[2] == 2 && s[5] == 2 && s[8] == 2) {
        combo = [2,5,8]
        setStateToWinner(player2)
        animateWinner(combo)
        return 1;
    }
    if(s[0] == 2 && s[4] == 2 && s[8] == 2) {
        combo = [0,4,8]
        setStateToWinner(player2)
        animateWinner(combo)
        return 1;
    }
    if(s[2] == 2 && s[4] == 2 && s[6] == 2) {
        combo = [2,4,6]
        setStateToWinner(player2)
        animateWinner(combo)
        return 1;
    }
    if(s[0] != 0 && s[1] != 0 && s[2] != 0 && s[3] != 0 && s[4] != 0 && s[5] != 0 && s[6] != 0 && s[7] != 0 && s[8] != 0) {
        setStateToWinner(tie)

        $("table").animate({
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    
    return 0;
}
/* istanbul ignore next */
function newGamePlayerFirst() {
    turnCount = 0
    disableLite()
    resetState()
    resetBoardUI()
}
/* istanbul ignore next */
function newGameComputerFirst() {
    turnCount = 0
    disableLite()
    resetState()
    resetBoardUI()
    updateBoard(8, "O")
    changeState(8, 2)
}
/* istanbul ignore next */
function newLiteGamePlayerFirst() {
    turnCount = 0
    enableLite()
    resetState()
    resetBoardUI()
}
/* istanbul ignore next */
function newLiteGameComputerFirst() {
    enableLite()
    resetState()
    resetBoardUI()
    turnCount = 0
    performMove(8, "O", 2)
}

function executeTurnCycle(index, numPlayers) {
    const avaliable = 0;
    let computerChoice;
    if(getStateAtIndex(index) === avaliable){
        if (numPlayers === 2){
            performMove(index, getPlayerToken(), getPlayerIndicator())
            return [index]
        }

        performMove(index, "X", 1)
        if(isGameOver()) {
            return [index]
        }
        computerChoice = computerMove()
        performMove(computerChoice, "O", 2)
        return [index, computerChoice]
    }
}

/* istanbul ignore next */
function performMove(index, token, indicator) {
    updateBoard(index, token)
    changeState(index, indicator)
    if (liteEnabled){
        tttLite.addMoveToHistory(index)
        if (turnCount > 5) {
            index = tttLite.getRemovalIndex()
            removeToken(index)
        }
    }
    turnCount++
    isGameOver()
}

function resetBoardUI() {
    $("td").each(function(index, element) {
        element.innerHTML = "&nbsp;"
    })

    $("td").animate({
        fontSize: "30px",
        borderWidth: "1px"
    }, 150 );
    $("table").animate({
            borderWidth: "1px"
    }, 150 );
}

function removeToken(index) {
    empty = "&nbsp;"
    stateDefault = 0
    updateBoard(index, empty)
    changeState(index, stateDefault)
}

function updateBoard(index, token) {
    $(`td#${index}`).html(token)
}

function changeState(index, player){
    s[index] = player
}

function getPlayerToken() {
    return numSpacesTaken() % 2 == 0 ? "X" : "O"
}

function getPlayerIndicator() {
    return numSpacesTaken() % 2 == 0 ? 1 : 2
}

function getStateAtIndex(index) {
    return getState()[index]
}

function resetState(){
    s = [0,0,0,0,0,0,0,0,0]
}

function getState() {
    return s
}

function setStateToWinner(winner) {
    s.forEach((space, index) => {
        s[index] = winner
    })
}

function enableLite() {
    liteEnabled = true
}

function disableLite() {
    liteEnabled = false
}

module.exports = {
    newGameComputerFirst, 
    newGamePlayerFirst, 
    isGameOver, 
    getMove, 
    check4Win, 
    computerMove, 
    numSpacesTaken,
    changeState,
    resetState,
    getState,
    updateBoard,
    setStateToWinner,
    getStateAtIndex,
    getPlayerIndicator,
    getPlayerToken,
    resetBoardUI,
    performMove,
    enableLite,
    disableLite,
    removeToken,
    executeTurnCycle
}