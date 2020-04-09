let tttLite = require('../ticTacToeLite.js')
let helpers = require('./unitTestHelpers')

describe("ticTacToeLite.js", function() {
  this.beforeEach(function() {
        ttt.enableLite()
  })

  describe("#addMoveToHistory", function() {

    it("can add a move to the history", function() {
        expected = 4

        tttLite.addMoveToHistory(expected)
        actual = tttLite.getRemovalIndex()

        expect(actual).to.equal(expected)
    })

    it("can add multiple moves to the history", function() {
        moves = [4, 6, 7, 2, 1]

        moves.forEach(function(move){
            tttLite.addMoveToHistory(move)
        })

        moves.forEach(function(move, index){
            expected = moves[index]
            actual = tttLite.getRemovalIndex()

            expect(actual).to.equal(expected)
        })
    })

  })

  describe("#getRemovalIndex", function() {

    it("returns the first token added to the queue", function() {
        expected = 4

        tttLite.addMoveToHistory(expected)
        actual = tttLite.getRemovalIndex()

        expect(actual).to.equal(expected)
    })

    it("returns moves in the order that they were added", function() {
        moves = [4, 6, 7, 2, 1]

        moves.forEach(function(move){
            tttLite.addMoveToHistory(move)
        })

        moves.forEach(function(move, index){
            expected = moves[index]
            actual = tttLite.getRemovalIndex()

            expect(actual).to.equal(expected)
        })
    })

  })
})