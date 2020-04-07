
function executeTokenRemoval(index) {
    resetPosition(index)
    clearTokenFromBoard(index)
}

function resetPosition(index) {
    ttt.getState()[index] = 0
}

function clearTokenFromBoard(index){
    $(`td#${index}`).html("&nbsp;")
}

module.exports = {
    resetPosition,
    clearTokenFromBoard,
    executeTokenRemoval
}