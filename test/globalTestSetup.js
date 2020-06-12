global.sinon = require("sinon");
global.chai = require("chai");
global.expect = chai.expect;
global.spies = require("chai-spies");
global.assert = require("assert");
global.JSDOM = require("jsdom").JSDOM

JSDOM.fromFile('./test/test_dom.html')
.then(dom => {
    global.window = dom.window
    global.document = dom.window.document
    global.ttt = require('../src/ticTacToe.js')
    global.$ = require('jquery')
})
.catch(error => console.log(error))