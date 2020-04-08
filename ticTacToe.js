var $ = require('jquery')

var s = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0); //Default value for squares is empty
var numPlayers = 1; //Default number of players is 1

let turnCount = 0

/* istanbul ignore next */
$(document).ready(function() {
    $("span#userFirst").click(function() {
        numPlayers = 1;
        newGamePlayerFirst();
    });
    $("span#compFirst").click(function() {
        numPlayers = 1;
        newGameComputerFirst();
    });
    $("span#twoPlayers").click(function() {
        numPlayers = 2;
        newGamePlayerFirst();
    });

    $("td").each(function(index, element) {
        element.onclick = function() {
            executeTurnCycle(index)
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
            move = makeMove();
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

function makeMove() {
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

function isGameOver() {
    let player1 = 1
    let player2 = 2
    let tie = 3

    if(s[0] == 1 && s[1] == 1 && s[2] == 1) {
        setStateToWinner(player1)
        
        $("td#0").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#1").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#2").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[3] == 1 && s[4] == 1 && s[5] == 1) {
        setStateToWinner(player1)
        
        $("td#3").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#4").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#5").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[6] == 1 && s[7] == 1 && s[8] == 1) {
        setStateToWinner(player1)
        
        $("td#6").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#7").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#8").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[0] == 1 && s[3] == 1 && s[6] == 1) {
        setStateToWinner(player1)
        
        $("td#0").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#3").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#6").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[1] == 1 && s[4] == 1 && s[7] == 1) {
        setStateToWinner(player1)

        $("td#1").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#4").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#7").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[2] == 1 && s[5] == 1 && s[8] == 1) {
        setStateToWinner(player1)

        $("td#2").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#5").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#8").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[0] == 1 && s[4] == 1 && s[8] == 1) {
        setStateToWinner(player1)

        $("td#0").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#4").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#8").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[2] == 1 && s[4] == 1 && s[6] == 1) {
        setStateToWinner(player1)

        $("td#2").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#4").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#6").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[0] == 2 && s[1] == 2 && s[2] == 2) {
        setStateToWinner(player2)
        
        $("td#0").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#1").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#2").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[3] == 2 && s[4] == 2 && s[5] == 2) {
        setStateToWinner(player2)

        $("td#3").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#4").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#5").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[6] == 2 && s[7] == 2 && s[8] == 2) {
        setStateToWinner(player2)

        $("td#6").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#7").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#8").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[0] == 2 && s[3] == 2 && s[6] == 2) {
        setStateToWinner(player2)

        $("td#0").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#3").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#6").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[1] == 2 && s[4] == 2 && s[7] == 2) {
        setStateToWinner(player2)

        $("td#1").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#4").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#7").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[2] == 2 && s[5] == 2 && s[8] == 2) {
        setStateToWinner(player2)

        $("td#2").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#5").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#8").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[0] == 2 && s[4] == 2 && s[8] == 2) {
        setStateToWinner(player2)

        $("td#0").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#4").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#8").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
        return 1;
    }
    if(s[2] == 2 && s[4] == 2 && s[6] == 2) {
        setStateToWinner(player2)

        $("td#2").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#4").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        $("td#6").animate({
            fontSize: "50px",
            borderWidth: "10px"
        }, 1500 );
        
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
    $("td").animate({
        fontSize: "30px",
        borderWidth: "1px"
    }, 150 );
    $("table").animate({
            borderWidth: "1px"
    }, 150 );
    
    resetState()
    resetBoardUI()
}
/* istanbul ignore next */
function newGameComputerFirst() {
    $("td").animate({
        fontSize: "30px",
        borderWidth: "1px"
    }, 150 );
    $("table").animate({
            borderWidth: "1px"
    }, 150 );
    
    resetState()
    resetBoardUI()
    updateBoard(8, "O")
    changeState(8, 2)
}

/* istanbul ignore next */
function executeTurnCycle(index) {
    const avaliable = 0;
    if(getStateAtIndex(index) === avaliable){
        if (numPlayers === 2){
            performMove(index, getPlayerToken(), getPlayerIndicator())
        }

        if(numPlayers === 1){
            performMove(index, "X", 1)
            if(!isGameOver()) {
                console.log("hit")
                performMove(computerMove(), "O", 2)
            }
        }
    }
}

/* istanbul ignore next */
function performMove(index, token, indicator) {
    updateBoard(index, token)
    changeState(index, indicator)
    if (turnCount > 6){
        //initiate token deletion
    }
    turnCount++
    // enqueue the move
    isGameOver()
}

function resetBoardUI() {
    $("td").each(function(index, element) {
        element.innerHTML = "&nbsp;"
    })
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

module.exports = {
    newGameComputerFirst, 
    newGamePlayerFirst, 
    isGameOver, 
    makeMove, 
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
    resetBoardUI
}