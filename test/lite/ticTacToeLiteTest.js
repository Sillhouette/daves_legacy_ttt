let tttLite = require('../../src/ticTacToeLite.js')
let Queue = require('../../src/queue').Queue

describe("ticTacToeLite.js", function() {
  this.beforeEach(function() {
        ttt.enableLite()
        tttLite.setMoveHistory(new Queue())
  })

  describe("#addMoveToHistory", function() {

    it("can add a move to the history", function() {
        let expected = 1

        let history = tttLite.addMoveToHistory(expected)
        let actual = history.data.length

        expect(actual).to.equal(expected)
    })

    it("can add multiple moves to the history", function() {
        let moves = [4, 6, 7, 2, 1]
        let expected = 5

        moves.forEach(function(move){
            history = tttLite.addMoveToHistory(move)
        })
        let actual = history.data.length

        expect(actual).to.equal(expected)
    })

  })

  describe("#getRemovalIndex", function() {

    it("returns the first token added to the queue", function() {
        let expected = 4

        tttLite.getMoveHistory().add(expected)
        let actual = tttLite.getRemovalIndex()

        expect(actual).to.equal(expected)
    })

    it("returns moves in the order that they were added", function() {
        moves = [4, 6, 7, 2, 1]

        moves.forEach(function(move){
            tttLite.getMoveHistory().add(move)
        })

        moves.forEach(function(move, index){
            expected = moves[index]
            actual = tttLite.getRemovalIndex()

            expect(actual).to.equal(expected)
        })
    })

  })
})