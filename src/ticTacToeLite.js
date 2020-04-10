let Queue = require("./queue").Queue
let moveHistory = new Queue()

function addMoveToHistory(move) {
    moveHistory.add(move)
    return moveHistory
}

function getRemovalIndex() {
    return moveHistory.remove()
}

function getMoveHistory() {
    return moveHistory
}

function setMoveHistory(history) {
    moveHistory = history
}

module.exports = {
    getRemovalIndex,
    addMoveToHistory,
    setMoveHistory,
    getMoveHistory
}