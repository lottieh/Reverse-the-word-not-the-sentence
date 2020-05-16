const wordReversal = require("./Reversal");


describe("wordReversal", () => {
  describe("wordReversal.splitToArray", () => {
    test("Returns the given string as arrays", () => {
      expect(wordReversal.splitToArray("cheese")).toBe(["cheese"]);
    });
  });
});



