import {boolToWord} from "./solution";
import {assert} from "chai";

describe("boolToWord", function() {
  it("Sample tests", function() {
    assert.equal(boolToWord(true), "Yes");
    assert.equal(boolToWord(false), "No");
  });
});