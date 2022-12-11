import run from "aocrunner";
import { sum } from "../utils/index.js";

const part1 = (rawInput) => {
  const parseInput = rawInput.split(`\n`);
  const firstHalf = parseInput.map((row) => row.substring(0, row.length / 2));
  const secondHalf = parseInput.map((row) =>
    row.substring(row.length / 2, row.length),
  );

  let lettersArray = [];

  firstHalf.forEach((item, index) => {
    let firstHalfArr = [...firstHalf[index]];
    let secondHalfArr = [...secondHalf[index]];
    lettersArray.push(
      ...firstHalfArr.find((letter) => secondHalfArr.indexOf(letter) !== -1),
    );
  });

  const lettersMap = (array) => {
    var anum = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26,
      A: 27,
      B: 28,
      C: 29,
      D: 30,
      E: 31,
      F: 32,
      G: 33,
      H: 34,
      I: 35,
      J: 36,
      K: 37,
      L: 38,
      M: 39,
      N: 40,
      O: 41,
      P: 42,
      Q: 43,
      R: 44,
      S: 45,
      T: 46,
      U: 47,
      V: 48,
      W: 49,
      X: 50,
      Y: 51,
      Z: 52,
    };
    return array.map((letter) => anum[letter]);
  };

  const convertLettersToNum = lettersMap(lettersArray);
  const sumNum = sum(convertLettersToNum);
  return sumNum;
};

const part2 = (rawInput) => {
  const parseInput = rawInput.split(`\n`);
  const chunkSize = 3;
  const badgeArray = [];

  for (let i = 0; i < parseInput.length; i += chunkSize) {
    const chunk = parseInput.slice(i, i + chunkSize);
    const [firstLine, secondLine, thirdLine] = chunk;

    badgeArray.push(
      [...firstLine].find(
        (letter) =>
          secondLine.indexOf(letter) !== -1 && thirdLine.indexOf(letter) !== -1,
      ),
    );
  }

  const badgeToNumArray = (array) => {
    var anum = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26,
      A: 27,
      B: 28,
      C: 29,
      D: 30,
      E: 31,
      F: 32,
      G: 33,
      H: 34,
      I: 35,
      J: 36,
      K: 37,
      L: 38,
      M: 39,
      N: 40,
      O: 41,
      P: 42,
      Q: 43,
      R: 44,
      S: 45,
      T: 46,
      U: 47,
      V: 48,
      W: 49,
      X: 50,
      Y: 51,
      Z: 52,
    };
    return array.map((letter) => anum[letter]);
  };

  const numsArray = badgeToNumArray(badgeArray);
  const sumNum = sum(numsArray);
  return sumNum;
};

run({
  part1: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
