import run from "aocrunner";
import { sum, sortDescending } from "../utils/index.js";

const part1 = (rawInput) => {
  const parseInput = rawInput
    .split(`\n\n`)
    .map((elvesArray) => elvesArray.split(`\n`));
  const transformStringToNumber = parseInput.map((arr) =>
    arr.map((item) => Number(item)),
  );
  const everyElfCaloriesCarried = transformStringToNumber.map((arr) =>
    sum(arr),
  );
  const mostCaloriesCarriedByElfInteger = Math.max(...everyElfCaloriesCarried);
  const mostCaloriesCarriedByElfString = String(
    mostCaloriesCarriedByElfInteger,
  );
  return everyElfCaloriesCarried;
};

const part2 = (rawInput) => {
  const everyElfCaloriesCarried = part1(rawInput);
  const sortDescendingCaloriesCarries = sortDescending(everyElfCaloriesCarried);
  const threeHighestCarryingElves = sortDescendingCaloriesCarries.slice(0, 3);
  const caloriesOfHighestCarryingElvesInteger = sum(threeHighestCarryingElves);
  const caloriesOfHighestCarryingElvesString = String(
    caloriesOfHighestCarryingElvesInteger,
  );
  return caloriesOfHighestCarryingElvesString;
};

run({
  part1: {
    tests: [
      {
        input: `1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000`,
        expected: "24000",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000`,
        expected: "45000",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
});
