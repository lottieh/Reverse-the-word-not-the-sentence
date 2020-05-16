const wordReversal = require("./Reversal");


describe("wordReversal", () => {
  describe("wordReversal.splitToArray", () => {
    test("Returns the given string as arrays", () => {
      expect(wordReversal.splitToArray("cheese")).toStrictEqual(["cheese"]);
      expect(wordReversal.splitToArray("cheese is the best")).toStrictEqual(["cheese","is","the","best"]);
      expect(wordReversal.splitToArray("the sun is shining lets go out")).toStrictEqual(["the", "sun","is","shining","lets", "go", "out"]);

    });
  });
});



