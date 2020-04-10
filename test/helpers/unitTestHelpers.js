function getStateAtIndex(index) {
    return ttt.getState()[index]
}

function getTokenAtIndex(index) {
    return $("td")[index].innerHTML
}

module.exports = {
    getStateAtIndex,
    getTokenAtIndex
}