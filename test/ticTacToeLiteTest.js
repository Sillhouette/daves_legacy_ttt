let tttLite = require('../ticTacToeLite.js')
let helpers = require('./unitTestHelpers')

describe("ticTacToeLite.js", function() {

  describe("#resetPosition", function() {
    this.beforeEach(function(){
      ttt.resetState()
    })

    it( "removes a player indicator from the state of the board", function() {
        let index = 1
        let playerIndicator = 2
        expected = 0

        ttt.changeState(index, playerIndicator)
        tttLite.resetPosition(index)
        actual = helpers.getStateAtIndex(index)

        expect(actual).equal(expected);
    });
  })

  describe("#clearTokenFromBoard", function() {
      this.beforeEach(function() {
          ttt.resetState()
      })

      it("sets a position on the board back to an empty space", function() {
        let index = 1
        let playerToken = "X"
        expected = "&nbsp;"

        $(`td#${index}`).html(playerToken)
        tttLite.clearTokenFromBoard(index)
        actual = $(`td#${index}`).html()

        expect(actual).equal(expected)
      })

      it("sets a different position on the board back to an empty space", function() {
        let index = 5
        let playerToken = "O"
        expected = "&nbsp;"

        $(`td#${index}`).html(playerToken)
        tttLite.clearTokenFromBoard(index)
        actual = $(`td#${index}`).html()

        expect(actual).equal(expected)
      })
  })

  describe("#executeTokenRemoval", function() {
    this.beforeEach(function() {
        ttt.resetState()
    })

    it("removes a token from the board and resets a state position when given an index", function() {
        let index = 8
        let playerIndicator = 2
        let playerToken = "X"
        expectedBoardValue = "&nbsp;"
        expectedStateValue = 0

        ttt.changeState(index, playerIndicator)
        $(`td#${index}`).html(playerToken)
        tttLite.executeTokenRemoval(index)
        
        actualStateValue = helpers.getStateAtIndex(index)
        actualBoardValue = $(`td#${index}`).html()

        expect(actualStateValue).to.equal(expectedStateValue)
        expect(actualBoardValue).to.equal(expectedBoardValue)
    })

  })
})