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

describe("wordReversal", () => {
    describe("wordReversal.splitToArrayWords", () => {
      test("Returns the given string as arrays", () => {
             expect(wordReversal.splitToArrayWords("the", "sun","is","shining","lets", "go", "out")).toStrictEqual(["t","h","e"],[ "s","u","n"],["i","s"],["s","h","i","n","i","n","g"],["l","e","t","s"], ["g","o"], ["o","u","t"]);
             expect(wordReversal.splitToArray("cheese is the best")).toStrictEqual(["c","h","e","e","s","e"],["i","s"],["t","h","e"],["b","e","s","t"]);
      });
    });
  });


describe("wordReversal", () => {
    describe("wordReversal.reverser", () => {
      test("Reverse the  ", () => {
        expect(wordReversal.reverser("c","h","e","e","s","e")).toStrictEqual(["e","s","e","e","h","c"]);
        expect(wordReversal.reverser("cheese is the best")).toStrictEqual(["best","is","the","cheese"]);
        expect(wordReversal.reverser["c","h","e","e","s","e"],["i","s"],["t","h","e"],["b","e","s","t"]).toStrictEqual(["e","s","e","e","h","c"],["s","i"],["e","h","t"],["t","s","e","b"]);
  
      });
    });
  });


