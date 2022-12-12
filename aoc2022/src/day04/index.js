import run from "aocrunner";

const part1 = (rawInput) => {
  let counter = 0;

  rawInput.split(/\r?\n/).forEach((line) => {
    let sections = line.split(",");
    let startOne = Number(sections[0].split("-")[0]);
    let endOne = Number(sections[0].split("-")[1]);
    let startTwo = Number(sections[1].split("-")[0]);
    let endTwo = Number(sections[1].split("-")[1]);
    if (
      (startOne <= startTwo && endOne >= endTwo) ||
      (startOne >= startTwo && endOne <= endTwo)
    ) {
      counter++;
    }
  });

  return counter;
};

const part2 = (input) => {
  let counter = 0;

  input.split(/\r?\n/).forEach((line) => {
    let sections = line.split(",");
    let startOne = Number(sections[0].split("-")[0]);
    let endOne = Number(sections[0].split("-")[1]);
    let startTwo = Number(sections[1].split("-")[0]);
    let endTwo = Number(sections[1].split("-")[1]);

    if (
      (startOne >= startTwo && endOne <= endTwo) ||
      (startOne <= startTwo && endOne >= endTwo) ||
      (startOne <= endTwo && startTwo <= endOne)
    ) {
      counter++;
    }
  });

  return counter;
};

run({
  part1: {
    tests: [
      // {
      //   input: `2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8`,
      //   expected: 2,
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: `2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8`,
      //   expected: 4,
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});