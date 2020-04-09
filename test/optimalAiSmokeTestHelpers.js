const helpers = require('./characterizationTestHelpers')
let minimaxMoves = require('../minimax_moves.json')

function convertBoard() {
    let convertedBoard = []
    let state = ttt.getState()
    state.forEach(space => {
        if (space === 2) {
            convertedBoard.push("O")
        } else if(space === 1){
            convertedBoard.push("X")
        } else {
            convertedBoard.push("_")
        }
    })
    return convertedBoard
}

function stringifyBoardState() {
    return convertBoard().join("")
}

function getRandomValidMove() {
    let randomMove = Math.floor(Math.random() * 9)
    let state = ttt.getState()
    while(state[randomMove] !== 0){
        randomMove = Math.floor(Math.random() * 9)
    }
    return randomMove
}

function getMinimaxMoveIndex() {
    let index = parseInt(minimaxMoves[stringifyBoardState()]) - 1
    return index
}

function executeHandicappedMinimaxAi() {
    if (shouldMinimaxPlayRandom()) {
      move = getRandomValidMove()
    } else {
      move = getMinimaxMoveIndex()
    }
    ttt.changeState(move, 1)
}

function shouldMinimaxPlayRandom(){
    turnsWithRandomMoves = [0, 2, 4]
    currentTurn = ttt.numSpacesTaken()
    return turnsWithRandomMoves.includes(currentTurn)
}

function runTestGame() {
    while(true){
      executeHandicappedMinimaxAi()
      if(ttt.isGameOver()){
        break;
      }
      ttt.performMove(ttt.computerMove(), "O", 2)
      if(ttt.isGameOver()){
        break;
      }
    }
    return helpers.getWinner()
}

module.exports = {
    runTestGame
}