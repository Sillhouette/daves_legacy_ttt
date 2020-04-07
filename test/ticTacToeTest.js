let helpers = require("./characterizationTestHelpers")
let smokeTestHelpers = require("./optimalAiSmokeTestHelpers")

const WIN_COMBINATIONS = {
  "Top Row": [0, 1, 2],
  "Middle Row": [3, 4, 5],
  "Bottom Row": [6, 7, 8],
  "First Column": [0, 3, 6],
  "Second Column": [1, 4, 7],
  "Third Column": [2, 5, 8],
  "Left to Right Diagonal": [0, 4, 8],
  "Right to Left Diagonal": [2, 4, 6]
}

function fillSpaces(indices, player){
  indices.forEach(index => {
    ttt.changeState(index, player)
  })
}

beforeEach(function() {
  JSDOM.fromFile('./test/test_dom.html')
  .then(dom => {
    global.window = dom.window
    global.document = dom.window.document
    global.ttt = require('../ticTacToe.js')
    ttt.resetState()
  })
  .catch(error => console.log(error))
});

describe("Dummy Test", function() {
  it( "is a dummy test", function() {
      expect(true).to.equal(true);
    });
})

describe("#isGameOver", function() {
    this.beforeEach(function(){
      ttt.resetState()
    })
    
    it( "returns 0 with default board", function() {
        expect(ttt.isGameOver()).equal(0);
    });

    it('returns 1 when player 1 has won the game', function() {
      Object.keys(WIN_COMBINATIONS).forEach(function(combo) {
        ttt.changeState(WIN_COMBINATIONS[combo][0], 1)
        ttt.changeState(WIN_COMBINATIONS[combo][1], 1)
        ttt.changeState(WIN_COMBINATIONS[combo][2], 1)
        expect(ttt.isGameOver()).to.equal(1)
        expect(helpers.getWinner()).to.equal(1)
      })
    })

    it('returns 2 when player 2 has won the game', function() {
      Object.keys(WIN_COMBINATIONS).forEach(function(combo) {
        ttt.changeState(WIN_COMBINATIONS[combo][0], 2)
        ttt.changeState(WIN_COMBINATIONS[combo][1], 2)
        ttt.changeState(WIN_COMBINATIONS[combo][2], 2)
        expect(ttt.isGameOver()).to.equal(1)
        expect(helpers.getWinner()).to.equal(2)
      })
    })

    it("returns 3 when the game has been tied", function(){
      ttt.changeState(0, 1)
      ttt.changeState(1, 1)
      ttt.changeState(2, 2)
      ttt.changeState(3, 2)
      ttt.changeState(4, 2)
      ttt.changeState(5, 1)
      ttt.changeState(6, 1)
      ttt.changeState(7, 1)
      ttt.changeState(8, 2)
      expect(ttt.isGameOver()).equal(1)
      expect(helpers.getWinner()).to.equal(3)
    })

  })

  describe("#changeState", function() {
    it( "changes ttt board state at given index", function() {
        let index = 0;
        let player = 1;
        let expected = [1,0,0,0,0,0,0,0,0]
        
        let actual = ttt.changeState(index, player)

        expect(expected).eql(actual);
    });
  });

  describe("#resetState", function() {
    it( "resets the ttt board state to default state", function() {
        let index = 0;
        let player = 1;
        let expected = [0,0,0,0,0,0,0,0,0]
        
        ttt.changeState(index, player)
        let actual = ttt.resetState()

        expect(expected).eql(actual);
    });
  });

  describe("#check4Win", function() {
    this.beforeEach(function(){
      ttt.resetState()
    })

    it( "causes win state by filling top left of the board", function() {
      let expected = 1

      fillSpaces([1, 2], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling top left of the board", function() {
      let expected = 1

      fillSpaces([4, 8], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling top left of the board", function() {
      let expected = 1

      fillSpaces([3, 6], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling top middle of the board", function() {
      let expected = 1

      fillSpaces([4, 7], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling top middle of the board", function() {
      let expected = 1
      
      fillSpaces([0, 2], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling top right of the board", function() {
      let expected = 1
      
      fillSpaces([0, 1], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling top right of the board", function() {
      let expected = 1
      
      fillSpaces([4, 6], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling top right of the board", function() {
      let expected = 1
      
      fillSpaces([5, 8], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling middle left of the board", function() {
      let expected = 1
      
      fillSpaces([4, 5], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling middle left of the board", function() {
      let expected = 1
      
      fillSpaces([0, 6], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling middle of the board", function() {
      let expected = 1
      
      fillSpaces([0, 8], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling middle of the board", function() {
      let expected = 1
      
      fillSpaces([1, 7], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling middle of the board", function() {
      let expected = 1
      
      fillSpaces([2, 6], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling middle of the board", function() {
      let expected = 1
      
      fillSpaces([3, 5], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling middle right of the board", function() {
      let expected = 1
      
      fillSpaces([4, 3], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling middle right of the board", function() {
      let expected = 1
      
      fillSpaces([2, 8], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling bottom left of the board", function() {
      let expected = 1
      
      fillSpaces([0, 3], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling bottom left of the board", function() {
      let expected = 1
      
      fillSpaces([2, 4], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling bottom left of the board", function() {
      let expected = 1
      
      fillSpaces([7, 8], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling bottom middle of the board", function() {
      let expected = 1
      
      fillSpaces([4, 1], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling bottom middle of the board", function() {
      let expected = 1
      
      fillSpaces([6, 8], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling bottom right of the board", function() {
      let expected = 1
      
      fillSpaces([6, 7], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling bottom right of the board", function() {
      let expected = 1
      
      fillSpaces([0, 4], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });

    it( "causes win state by filling bottom right of the board", function() {
      let expected = 1
      
      fillSpaces([2, 5], 2)
      ttt.check4Win()
      let actual = ttt.isGameOver()

      expect(expected).eql(actual);
    });
  });

  describe("#makeMove", function() {
    this.beforeEach(function(){
      ttt.resetState()
    })

    it( "blocks a player win by filling top left of the board", function() {
      let expected = 0
      let expectedMoveIndex = 0
      let expectedMoveToken = 2

      fillSpaces([1, 2], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling top left of the board", function() {
      let expected = 0
      let expectedMoveIndex = 0
      let expectedMoveToken = 2

      fillSpaces([4, 8], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual)
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)

    });

    it( "blocks a player win by filling top left of the board", function() {
      let expected = 0
      let expectedMoveIndex = 0
      let expectedMoveToken = 2

      fillSpaces([3, 6], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling top middle of the board", function() {
      let expected = 0
      let expectedMoveIndex = 1
      let expectedMoveToken = 2

      fillSpaces([4, 7], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling top middle of the board", function() {
      let expected = 0
      let expectedMoveIndex = 1
      let expectedMoveToken = 2
      
      fillSpaces([0, 2], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling top right of the board", function() {
      let expected = 0
      let expectedMoveIndex = 2
      let expectedMoveToken = 2
      
      fillSpaces([0, 1], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling top right of the board", function() {
      let expected = 0
      let expectedMoveIndex = 2
      let expectedMoveToken = 2
      
      fillSpaces([4, 6], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling top right of the board", function() {
      let expected = 0
      let expectedMoveIndex = 2
      let expectedMoveToken = 2
      
      fillSpaces([5, 8], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling middle left of the board", function() {
      let expected = 0
      let expectedMoveIndex = 3
      let expectedMoveToken = 2
      
      fillSpaces([4, 5], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling middle left of the board", function() {
      let expected = 0
      let expectedMoveIndex = 3
      let expectedMoveToken = 2
      
      fillSpaces([0, 6], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling middle of the board", function() {
      let expected = 0
      let expectedMoveIndex = 4
      let expectedMoveToken = 2
      
      fillSpaces([0, 8], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling middle of the board", function() {
      let expected = 0
      let expectedMoveIndex = 4
      let expectedMoveToken = 2
      
      fillSpaces([1, 7], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling middle of the board", function() {
      let expected = 0
      let expectedMoveIndex = 4
      let expectedMoveToken = 2
      
      fillSpaces([2, 6], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling middle of the board", function() {
      let expected = 0
      let expectedMoveIndex = 4
      let expectedMoveToken = 2
      
      fillSpaces([3, 5], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling middle right of the board", function() {
      let expected = 0
      let expectedMoveIndex = 5
      let expectedMoveToken = 2
      
      fillSpaces([4, 3], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling middle right of the board", function() {
      let expected = 0
      let expectedMoveIndex = 5
      let expectedMoveToken = 2
      
      fillSpaces([2, 8], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling bottom left of the board", function() {
      let expected = 0
      let expectedMoveIndex = 6
      let expectedMoveToken = 2
      
      fillSpaces([0, 3], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling bottom left of the board", function() {
      let expected = 0
      let expectedMoveIndex = 6
      let expectedMoveToken = 2
      
      fillSpaces([2, 4], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling bottom left of the board", function() {
      let expected = 0
      let expectedMoveIndex = 6
      let expectedMoveToken = 2
      
      fillSpaces([7, 8], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling bottom middle of the board", function() {
      let expected = 0
      let expectedMoveIndex = 7
      let expectedMoveToken = 2
      
      fillSpaces([4, 1], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling bottom middle of the board", function() {
      let expected = 0
      let expectedMoveIndex = 7
      let expectedMoveToken = 2
      
      fillSpaces([6, 8], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling bottom right of the board", function() {
      let expected = 0
      let expectedMoveIndex = 8
      let expectedMoveToken = 2
      
      fillSpaces([6, 7], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling bottom right of the board", function() {
      let expected = 0
      let expectedMoveIndex = 8
      let expectedMoveToken = 2
      
      fillSpaces([0, 4], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by filling bottom right of the board", function() {
      let expected = 0
      let expectedMoveIndex = 8
      let expectedMoveToken = 2
      
      fillSpaces([2, 5], 1)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by preventing a player fork (Special case #1)", function() {
      let expected = 0
      let expectedMoveIndex = 8
      let expectedMoveToken = 2
      
      fillSpaces([2, 7], 1)
      fillSpaces([1], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by preventing a player fork (Special case #2)", function() {
      let expected = 0
      let expectedMoveIndex = 8
      let expectedMoveToken = 2
      
      fillSpaces([5, 7], 1)
      fillSpaces([4], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by preventing a player fork (Special case #3)", function() {
      let expected = 0
      let expectedMoveIndex = 8
      let expectedMoveToken = 2
      
      fillSpaces([0, 7], 1)
      fillSpaces([1], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by creating a fork (Special case #4)", function() {
      let expected = 0
      let expectedMoveIndex = 2
      let expectedMoveToken = 2
      
      fillSpaces([0, 7], 1)
      fillSpaces([4, 8], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by creating a fork (Special case #5)", function() {
      let expected = 0
      let expectedMoveIndex = 6
      let expectedMoveToken = 2
      
      fillSpaces([0, 5], 1)
      fillSpaces([4, 8], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by blocking a fork and creating a win case (Special case #6)", function() {
      let expected = 0
      let expectedMoveIndex = 1
      let expectedMoveToken = 2
      
      fillSpaces([2, 6], 1)
      fillSpaces([4], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by blocking a player fork (Special case #7)", function() {
      let expected = 0
      let expectedMoveIndex = 2
      let expectedMoveToken = 2
      
      fillSpaces([0, 4], 1)
      fillSpaces([8], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by forcing block and creating a fork (Special case #8)", function() {
      let expected = 0
      let expectedMoveIndex = 7
      let expectedMoveToken = 2
      
      fillSpaces([0, 5], 1)
      fillSpaces([4], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by blocking a fork (Special case #9)", function() {
      let expected = 0
      let expectedMoveIndex = 3
      let expectedMoveToken = 2
      
      fillSpaces([0, 7], 1)
      fillSpaces([4], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by blocking a fork (Special case #10)", function() {
      let expected = 0
      let expectedMoveIndex = 8
      let expectedMoveToken = 2
      
      fillSpaces([0, 5, 7], 1)
      fillSpaces([3, 4], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by blocking a fork (Special case #11)", function() {
      let expected = 0
      let expectedMoveIndex = 5
      let expectedMoveToken = 2
      
      fillSpaces([2, 7], 1)
      fillSpaces([4], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by blocking a fork (Special case #12)", function() {
      let expected = 0
      let expectedMoveIndex = 8
      let expectedMoveToken = 2
      
      fillSpaces([5, 6], 1)
      fillSpaces([4], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });

    it( "blocks a player win by blocking a fork (Special case #12)", function() {
      let expected = 0
      let expectedMoveIndex = 8
      let expectedMoveToken = 2
      
      fillSpaces([5, 6], 1)
      fillSpaces([4], 2)
      ttt.makeMove()
      let actual = ttt.isGameOver()
      let actualState = ttt.getState()

      expect(expected).eql(actual);
      expect(actualState[expectedMoveIndex]).to.equal(expectedMoveToken)
    });
  });

  describe("AI Smoke Test", () => {
    it( "Wins against or ties a handicapped optimally playing AI with generative first three moves", function() {
      let numGamesToTest = 4000
      let aiUnderTest = 2
      let tie_game = 3
      let expected_results = [aiUnderTest, tie_game]

      let actual_result = 0
      for(let gameNumber = 0; gameNumber < numGamesToTest; gameNumber++){
        actual_result = smokeTestHelpers.runTestGame()

        ttt.resetState()
        expect(expected_results).to.contain(actual_result); 
      }
     
    });
  })