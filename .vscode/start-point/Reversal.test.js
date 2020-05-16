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
  
      });
    });
  });
// describe("wordReversal", () => {
//     describe("wordReversal.reverser", () => {
//       test("Reverse the  ", () => {
//         expect(wordReversal.splitToArray("cheese")).toStrictEqual(["cheese"]);
//         expect(wordReversal.splitToArray("cheese is the best")).toStrictEqual(["cheese","is","the","best"]);
//         expect(wordReversal.splitToArray("the sun is shining lets go out")).toStrictEqual(["the", "sun","is","shining","lets", "go", "out"]);
  
//       });
//     });
//   });


