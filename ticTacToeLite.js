let Queue = require("./queue").Queue
let moveHistory = new Queue()

function addMoveToHistory(move) {
    moveHistory.add(move)
}

function getRemovalIndex() {
    return moveHistory.remove()
}

module.exports = {
    getRemovalIndex,
    addMoveToHistory
}