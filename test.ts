// <reference path="/runner/typings/mocha/index.d.ts" />
// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
// import the type of assertion library you wish to use (Chai recommended)
import {assert} from "chai";

describe("Sample Test Cases", function(){
  it("Should return a number", function() {
    assert.equal(solution.squareSum([1,2]), 5);
    assert.equal(solution.squareSum([0, 3, 4, 5]), 50);
    assert.equal(solution.squareSum([]), 0);
  });
});