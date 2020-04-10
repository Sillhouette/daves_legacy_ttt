let characterizationTestHelpers = require("../helpers/characterizationTestHelpers")
let unitTestHelpers = require("../helpers/unitTestHelpers")
let smokeTestHelpers = require("../helpers/optimalAiSmokeTestHelpers")

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

describe("TicTacToe.js", function() {
  this.beforeEach(function() {
    ttt.disableLite()
  })

  describe("Characterization Tests", function() {

    beforeEach(function() {
      ttt.setTurnCount(0)
      ttt.resetState()
    });

    describe("#isGameOver", function() {
      this.beforeEach(function(){
        ttt.setTurnCount(0)
        ttt.resetState()
      })
      
      it( "returns 0 with default board", function() {
        expect(ttt.isGameOver()).equal(0);
      });

      it('returns 1 when player 1 has won the game', function() {
        let winningState = [1,1,1,1,1,1,1,1,1]
        Object.values(WIN_COMBINATIONS).forEach(function(combo) {
          ttt.resetState()
          ttt.setTurnCount(0)
          ttt.changeState(combo[0], 1)
          ttt.changeState(combo[1], 1)
          ttt.changeState(combo[2], 1)
          expect(ttt.isGameOver()).to.equal(1)
          expect(ttt.getState()).to.eql(winningState)
          expect(characterizationTestHelpers.getWinner()).to.equal(1)
        })
      })

      it('returns 2 when player 2 has won the game', function() {
        let winningState = [2,2,2,2,2,2,2,2,2]
        Object.values(WIN_COMBINATIONS).forEach(function(combo) {
          ttt.resetState()
          ttt.setTurnCount(0)
          ttt.changeState(combo[0], 2)
          ttt.changeState(combo[1], 2)
          ttt.changeState(combo[2], 2)
          expect(ttt.isGameOver()).to.equal(1)
          expect(ttt.getState()).to.eql(winningState)
          expect(characterizationTestHelpers.getWinner()).to.equal(2)
        })
      })

      it("returns 3 when the game has been tied", function(){
        let tieState = [3,3,3,3,3,3,3,3,3]

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
        expect(ttt.getState()).to.eql(tieState)
        expect(characterizationTestHelpers.getWinner()).to.equal(3)
      })

    })

    describe("#check4Win", function() {
      this.beforeEach(function(){
        ttt.setTurnCount(0)
        ttt.resetState()
      })

      it( "returns undefined on empty board", function() {
        let expected = undefined

        let actual = ttt.check4Win()

        expect(actual).equal(expected);
      });

      it( "causes win state by filling top left of the board", function() {
        let expected = 0

        fillSpaces([1, 2], 2)
        let actual = ttt.check4Win()

        expect(actual).equal(expected);
      });

      it( "causes win state by filling top left of the board", function() {
        let expected = 0

        fillSpaces([4, 8], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling top left of the board", function() {
        let expected = 0

        fillSpaces([3, 6], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling top middle of the board", function() {
        let expected = 1

        fillSpaces([4, 7], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling top middle of the board", function() {
        let expected = 1
        
        fillSpaces([0, 2], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling top right of the board", function() {
        let expected = 2
        
        fillSpaces([0, 1], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling top right of the board", function() {
        let expected = 2
        
        fillSpaces([4, 6], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling top right of the board", function() {
        let expected = 2
        
        fillSpaces([5, 8], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling middle left of the board", function() {
        let expected = 3
        
        fillSpaces([4, 5], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling middle left of the board", function() {
        let expected = 3
        
        fillSpaces([0, 6], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling middle of the board", function() {
        let expected = 4
        
        fillSpaces([0, 8], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling middle of the board", function() {
        let expected = 4
        
        fillSpaces([1, 7], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling middle of the board", function() {
        let expected = 4
        
        fillSpaces([2, 6], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling middle of the board", function() {
        let expected = 4
        
        fillSpaces([3, 5], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling middle right of the board", function() {
        let expected = 5
        
        fillSpaces([4, 3], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling middle right of the board", function() {
        let expected = 5
        
        fillSpaces([2, 8], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling bottom left of the board", function() {
        let expected = 6
        
        fillSpaces([0, 3], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling bottom left of the board", function() {
        let expected = 6
        
        fillSpaces([2, 4], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling bottom left of the board", function() {
        let expected = 6
        
        fillSpaces([7, 8], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling bottom middle of the board", function() {
        let expected = 7
        
        fillSpaces([4, 1], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling bottom middle of the board", function() {
        let expected = 7
        
        fillSpaces([6, 8], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling bottom right of the board", function() {
        let expected = 8
        
        fillSpaces([6, 7], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling bottom right of the board", function() {
        let expected = 8
        
        fillSpaces([0, 4], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });

      it( "causes win state by filling bottom right of the board", function() {
        let expected = 8
        
        fillSpaces([2, 5], 2)
        let actual = ttt.check4Win()

        expect(actual).eql(expected);
      });
    });

    describe("#getMove", function() {
      this.beforeEach(function(){
        ttt.resetState()
      })

      it( "takes the middle space if avaliable", function() {
        let expected = 4

        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "takes the first avaliable space if no other options are present", function() {
        let expected = 0

        ttt.changeState(4, 1)
        let actual = ttt.getMove()

        expect(actual).equal(expected);
      });

      it( "blocks a player win by filling top left of the board", function() {
        let expected = 0

        fillSpaces([1, 2], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling top left of the board", function() {
        let expected = 0

        fillSpaces([4, 8], 1)
        let actual = ttt.getMove()

        expect(expected).eql(actual)
      });

      it( "blocks a player win by filling top left of the board", function() {
        let expected = 0

        fillSpaces([3, 6], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling top middle of the board", function() {
        let expected = 1

        fillSpaces([4, 7], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling top middle of the board", function() {
        let expected = 1
        
        fillSpaces([0, 2], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling top right of the board", function() {
        let expected = 2
        
        fillSpaces([0, 1], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling top right of the board", function() {
        let expected = 2
        
        fillSpaces([4, 6], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling top right of the board", function() {
        let expected = 2
        
        fillSpaces([5, 8], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling middle left of the board", function() {
        let expected = 3
        
        fillSpaces([4, 5], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling middle left of the board", function() {
        let expected = 3
        
        fillSpaces([0, 6], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling middle of the board", function() {
        let expected = 4
        
        fillSpaces([0, 8], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling middle of the board", function() {
        let expected = 4
        
        fillSpaces([1, 7], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling middle of the board", function() {
        let expected = 4
        
        fillSpaces([2, 6], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling middle of the board", function() {
        let expected = 4
        
        fillSpaces([3, 5], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling middle right of the board", function() {
        let expected = 5
        
        fillSpaces([4, 3], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling middle right of the board", function() {
        let expected = 5
        
        fillSpaces([2, 8], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling bottom left of the board", function() {
        let expected = 6
        
        fillSpaces([0, 3], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling bottom left of the board", function() {
        let expected = 6
        
        fillSpaces([2, 4], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling bottom left of the board", function() {
        let expected = 6
        
        fillSpaces([7, 8], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling bottom middle of the board", function() {
        let expected = 7
        
        fillSpaces([4, 1], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling bottom middle of the board", function() {
        let expected = 7
        
        fillSpaces([6, 8], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling bottom right of the board", function() {
        let expected = 8
        
        fillSpaces([6, 7], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling bottom right of the board", function() {
        let expected = 8
        
        fillSpaces([0, 4], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by filling bottom right of the board", function() {
        let expected = 8
        
        fillSpaces([2, 5], 1)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by preventing a player fork (Special case #1)", function() {
        let expected = 8
        
        fillSpaces([2, 7], 1)
        fillSpaces([1], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by preventing a player fork (Special case #2)", function() {
        let expected = 8
        
        fillSpaces([5, 7], 1)
        fillSpaces([4], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by preventing a player fork (Special case #3)", function() {
        let expected = 8
        
        fillSpaces([0, 7], 1)
        fillSpaces([1], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by creating a fork (Special case #4)", function() {
        let expected = 2
        
        fillSpaces([0, 7], 1)
        fillSpaces([4, 8], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by creating a fork (Special case #5)", function() {
        let expected = 6
        
        fillSpaces([0, 5], 1)
        fillSpaces([4, 8], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by blocking a fork and creating a win case (Special case #6)", function() {
        let expected = 1
        
        fillSpaces([2, 6], 1)
        fillSpaces([4], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by blocking a player fork (Special case #7)", function() {
        let expected = 2
        
        fillSpaces([0, 4], 1)
        fillSpaces([8], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by forcing block and creating a fork (Special case #8)", function() {
        let expected = 7
        
        fillSpaces([0, 5], 1)
        fillSpaces([4], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by blocking a fork (Special case #9)", function() {
        let expected = 3
        
        fillSpaces([0, 7], 1)
        fillSpaces([4], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by blocking a fork (Special case #10)", function() {
        let expected = 8
        
        fillSpaces([0, 5, 7], 1)
        fillSpaces([3, 4], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by blocking a fork (Special case #11)", function() {
        let expected = 5
        
        fillSpaces([2, 7], 1)
        fillSpaces([4], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });

      it( "blocks a player win by blocking a fork (Special case #12)", function() {
        let expected = 8
        
        fillSpaces([5, 6], 1)
        fillSpaces([4], 2)
        let actual = ttt.getMove()

        expect(actual).eql(expected);
      });
    });

    describe("numSpacesTaken", function() {
      beforeEach(function() {
        ttt.resetState()
      })

      it("returns 0 when no spaces are taken", function() {
        expected = 0

        actual = ttt.numSpacesTaken()

        expect(actual).to.equal(expected)
      })

      it("returns 1 when a single space is taken", function() {
        index = 0
        player = 1

        expected = 1

        ttt.changeState(index, player)
        actual = ttt.numSpacesTaken()

        expect(actual).to.equal(expected)
      })

      it("returns 2 when a two spaces are taken", function() {
        index = 0
        player = 1

        expected = 2

        ttt.changeState(index, player)
        ttt.changeState(index + 1, player)
        actual = ttt.numSpacesTaken()

        expect(actual).to.equal(expected)
      })

      it("returns 9 when all spaces are taken", function() {
        indicies = [...Array(9).keys()]
        player = 1

        expected = 9

        for(const index of indicies ){
          ttt.changeState(index, player)
        }
        actual = ttt.numSpacesTaken()

        expect(actual).to.equal(expected)
      })
    })

    describe("AI Smoke Test", () => {
      beforeEach(function() {
        ttt.disableLite()
      })

      it( "Wins against or ties a handicapped optimally playing AI with generative first three moves", function() {
        let numGamesToTest = 2000
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
  })

  describe("Unit Tests", function() {
    beforeEach(function() {
      ttt.setTurnCount(0)
      ttt.resetState()
    });

    describe("#changeState", function() {
      beforeEach(function() {
        ttt.resetState()
      })

      it( "changes ttt board state at given index", function() {
          let index = 0;
          let player = 1;
          let expected = [1,0,0,0,0,0,0,0,0]

          ttt.changeState(index, player)

          let actual = ttt.getState()

          expect(actual).eql(expected);
      });
    });

    describe("#updateBoard", function() {
      beforeEach(function() {
        ttt.resetBoardUI()
      })

      it( "changes ttt board at index 0", function() {
          let index = 0;
          let token = "X";
          let expected = token

          ttt.updateBoard(index, token)

          let actual = unitTestHelpers.getTokenAtIndex(index)

          expect(actual).eql(expected);
      });

      it( "changes ttt board at index 4", function() {
        let index = 4;
        let token = "O";
        let expected = token

        ttt.updateBoard(index, token)

        let actual = unitTestHelpers.getTokenAtIndex(index)

        expect(actual).eql(expected);
      });

      it( "changes ttt board at index 8", function() {
        let index = 8;
        let token = "X";
        let expected = token

        ttt.updateBoard(index, token)

        let actual = unitTestHelpers.getTokenAtIndex(index)

        expect(actual).eql(expected);
      });
    });

    describe("#resetState", function() {
      it( "resets the ttt board state to default state", function() {
          let index = 0;
          let player = 1;
          let expected = [0,0,0,0,0,0,0,0,0]

          ttt.changeState(index, player)
          ttt.resetState()
          let actual = ttt.getState()


          expect(actual).eql(expected);
      });
    });

    describe("#resetBoardUI", function() {
      it( "resets the ttt board UI to default board", function() {
          let index = 0;
          let token = "X";
          let expected = "&nbsp;"

          ttt.updateBoard(index, token)
          ttt.resetBoardUI()

          $("td").each(function(index, space){
            actual = space.innerHTML
            expect(actual).eql(expected);
          })
      });
    });

    describe("#setStateToWinner", function() {
      beforeEach(function() {
        ttt.resetState()
      })

      it( "sets the state to player 1 indicator", function() {
          let player = 1;
          let expected = [1,1,1,1,1,1,1,1,1]

          ttt.setStateToWinner(player)
          let actual = ttt.getState()

          expect(actual).eql(expected);
      });

      it( "sets the state to player 2 indicator", function() {
        let player = 2;
        let expected = [2,2,2,2,2,2,2,2,2]

        ttt.setStateToWinner(player)
        let actual = ttt.getState()

        expect(actual).eql(expected);
      });

      it( "sets the state to tie indicator", function() {
        let player = 3;
        let expected = [3,3,3,3,3,3,3,3,3]

        ttt.setStateToWinner(player)
        let actual = ttt.getState()

        expect(actual).eql(expected);
      });
    });

    describe("#getStateAtIndex", function() {
      beforeEach(function() {
        ttt.resetState()
      })

      it( "returns an accurate state at index 0", function() {
        let index = 1
        let player = 1
        let expected = 1

        ttt.changeState(index, player)
        let actual = ttt.getStateAtIndex(index)

        expect(actual).eql(expected);
      });

      it( "returns an accurate state at index 8", function() {
        let index = 8
        let player = 2
        let expected = 2

        ttt.changeState(index, player)
        let actual = ttt.getStateAtIndex(index)

        expect(actual).eql(expected);
      });

      it( "returns an accurate state at index 4", function() {
        let index = 4
        let player = 1
        let expected = 1

        ttt.changeState(index, player)
        let actual = ttt.getStateAtIndex(index)

        expect(actual).eql(expected);
      });
    })

    describe("#getState", function() {
      beforeEach(function() {
        ttt.resetState()
      })

      it("returns an empty state by default", function() {
        let expected = [0,0,0,0,0,0,0,0,0]

        let actual = ttt.getState()

        expect(actual).to.eql(expected)
      })

      it("returns a state with the first index taken", function() {
        let index = 0
        let playerIndicator = 1
        let expected = [1,0,0,0,0,0,0,0,0]

        ttt.changeState(index, playerIndicator)
        let actual = ttt.getState()

        expect(actual).to.eql(expected)
      })

      it("returns a state with the last index taken", function() {
        let index = 8
        let playerIndicator = 2
        let expected = [0,0,0,0,0,0,0,0,2]

        ttt.changeState(index, playerIndicator)
        let actual = ttt.getState()

        expect(actual).to.eql(expected)
      })

      it("returns a state with the middle index taken", function() {
        let index = 4
        let playerIndicator = 1
        let expected = [0,0,0,0,1,0,0,0,0]

        ttt.changeState(index, playerIndicator)
        let actual = ttt.getState()

        expect(actual).to.eql(expected)
      })
    })

    describe("#getPlayerIndicator", function() {
      beforeEach(function(){
        ttt.setTurnCount(0)
      })

      it("returns 1 when the turn count is 0", function() {
        let expected = 1

        let actual = ttt.getPlayerIndicator()

        expect(actual).to.equal(expected)
      })

      it("returns 2 when the turn count is 1", function() {
        let index = 1
        let player = 1
        let token = "X"
        let expected = 2

        ttt.performMove(index, player, token)
        let actual = ttt.getPlayerIndicator()

        expect(actual).to.equal(expected)
      })

      it("returns 2 when the number of turns taken is odd", function() {
        let indices = [1, 2, 4]
        let player = 1
        let token = "X"
        let expected = 2

        indices.forEach(function(index) {
          ttt.performMove(index, player, token)
        })
        let actual = ttt.getPlayerIndicator()

        expect(actual).to.equal(expected)
      })

      it("returns 1 when the number of turns taken is even", function() {
        let indices = [1, 2, 4, 8]
        let player = 2
        let token = "X"
        let expected = 1

        indices.forEach(function(index) {
          ttt.performMove(index, player, token)
        })
        let actual = ttt.getPlayerIndicator()

        expect(actual).to.equal(expected)
      })
    })

    describe("#getPlayerToken", function() {
      beforeEach(function(){
        ttt.setTurnCount(0)
      })
      it("returns X when the number of turns taken is 0", function() {
        let expected = "X"

        let actual = ttt.getPlayerToken()

        expect(actual).to.equal(expected)
      })

      it("returns O when the number of turns taken is 1", function() {
        let index = 1
        let player = 1
        let token = "X"
        let expected = "O"

        ttt.performMove(index, player, token)
        let actual = ttt.getPlayerToken()

        expect(actual).to.equal(expected)
      })

      it("returns O when the number of turns taken is odd", function() {
        let indices = [1, 2, 4]
        let player = 1
        let token = "X"
        let expected = "O"

        indices.forEach(function(index) {
          ttt.performMove(index, player, token)
        })
        let actual = ttt.getPlayerToken()

        expect(actual).to.equal(expected)
      })

      it("returns X when the number of turns taken is even", function() {
        let indices = [1, 2, 4, 8]
        let player = 2
        let token = "O"
        let expected = "X"

        indices.forEach(function(index) {
          ttt.performMove(index, player, token)
        })
        let actual = ttt.getPlayerToken()

        expect(actual).to.equal(expected)
      })
    })

    describe("#removeToken", function() {
      it("removes a token that has been placed on the board", function() {
        let index = 0
        let token = "X"
        let playerIndicator = 2
        let expectedState = 0
        let expectedBoardSpace = "&nbsp;"

        ttt.performMove(index, token, playerIndicator)
        ttt.removeToken(index)
        let actualState = unitTestHelpers.getStateAtIndex(index)
        let actualBoardSpace = $(`td#${index}`).html()

        expect(actualState).to.equal(expectedState)
        expect(actualBoardSpace).to.equal(expectedBoardSpace)
      })
    })

    describe("#executeTurnCycle", function() {
      it("returns an array containing a single move if there are two players", function(){
        let index = 0
        let numPlayers = 2
        let expected = [index]

        let actual = ttt.executeTurnCycle(index, numPlayers)

        expect(actual).to.eql(expected)
      })

      it("returns an array containing two moves if there is one player and the game has not ended", function() {
        let index = 0
        let numPlayers = 1
        let expected = [index, 4]

        let actual = ttt.executeTurnCycle(index, numPlayers)

        expect(actual).to.eql(expected)
      })

      it("returns an array containing a single move if there is one player and the game has ended", function() {
        let index = 0
        let numPlayers = 1
        let expected = [index]

        ttt.changeState(1, 1)
        ttt.changeState(2, 1)
        let actual = ttt.executeTurnCycle(index, numPlayers)

        expect(actual).to.eql(expected)
      })
    })
  })
})
