const wordReversal = require("./Reversal");


describe("wordReversal", () => {
    describe("wordReversal.splitToArray", () => {
        test("Returns the given string as arrays", () => {
            expect(wordReversal.splitToArray("cheese")).toStrictEqual(["cheese"]);
            expect(wordReversal.splitToArray("cheese is the best")).toStrictEqual(["cheese", "is", "the", "best"]);
            expect(wordReversal.splitToArray("the sun is shining lets go out")).toStrictEqual(["the", "sun", "is", "shining", "lets", "go", "out"]);
        });
    });
});

describe("wordReversal", () => {
    describe("wordReversal.splitToArrayWords", () => {
        test("Returns the given string as arrays", () => {
            expect(wordReversal.splitToArrayWords("cheese")).toStrictEqual(["c", "h", "e", "e", "s", "e"])
            expect(wordReversal.splitToArrayWords("the", "sun", "is", "shining", "lets", "go", "out")).toStrictEqual(["t", "h", "e"], ["s", "u", "n"], ["i", "s"], ["s", "h", "i", "n", "i", "n", "g"], ["l", "e", "t", "s"], ["g", "o"], ["o", "u", "t"]);
            expect(wordReversal.splitToArrayWords("cheese", "is", "the", "best")).toStrictEqual(["c", "h", "e", "e", "s", "e"], ["i", "s"], ["t", "h", "e"], ["b", "e", "s", "t"]);
        });
    });
});


describe("wordReversal", () => {
    describe("wordReversal.reverser", () => {
        test("Reverse the letters in the array ", () => {
            expect(wordReversal.reverser(["c", "h", "e", "e", "s", "e"])).toStrictEqual(["e", "s", "e", "e", "h", "c"]);
            expect(wordReversal.reverser(["cheese", "is", "the", "best"])).toStrictEqual(["best","the", "is", "cheese"]);
            expect(wordReversal.reverser(["c", "h", "e", "e", "s", "e"], ["i", "s"], ["t", "h", "e"], ["b", "e", "s", "t"])).toStrictEqual(["e", "s", "e", "e", "h", "c"], ["s", "i"], ["e", "h", "t"], ["t", "s", "e", "b"]);
        });
    });
});

describe("wordReversal", () => {
    describe("wordReversal.wordBackTogether", () => {
        test("join letters in the array back to words ", () => {
            expect(wordReversal.wordBackTogether(["e", "s", "e", "e", "h", "c"])).toBe("eseehc");
            expect(wordReversal.wordBackTogether(["best","the", "is", "cheese"])).toStrictEqual("besttheischeese");
            expect(wordReversal.wordBackTogether(["e", "s", "e", "e", "h", "c"], ["s", "i"], ["e", "h", "t"], ["t", "s", "e", "b"])).toStrictEqual(["eseehc"], ["si"], ["eht"], ["tseb"]);
        });
    });
});

