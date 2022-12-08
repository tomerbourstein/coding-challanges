import run from "aocrunner";
import { sum, sortDescending } from "../utils/index.js";

const playRock = "A";
const playPaper = "B";
const playScissors = "C";

const responseRock = "X";
const responsePaper = "Y";
const responseScissors = "Z";

const responseRockValue = 1;
const responsePaperValue = 2;
const responseScissorsValue = 3;

const win = 6;
const draw = 3;
const loss = 0;

const part1 = (rawInput) => {
  const parseInput = rawInput
    .split(`\n`)
    .map((gameArray) => gameArray.split(" "));

  const changeResponseToResponseValue = parseInput.map((gameArray) =>
    gameArray.map((element) =>
      element === responseRock
        ? 1
        : element === responsePaper
        ? 2
        : element === responseScissors
        ? 3
        : element,
    ),
  );

  function playRockPaperScissors([play, response]) {
    if (play === playRock && response === responseRockValue)
      return draw + response;
    if (play === playRock && response === responsePaperValue)
      return win + response;
    if (play === playRock && response === responseScissorsValue)
      return loss + response;

    if (play === playPaper && response === responseRockValue)
      return loss + response;
    if (play === playPaper && response === responsePaperValue)
      return draw + response;
    if (play === playPaper && response === responseScissorsValue)
      return win + response;

    if (play === playScissors && response === responseRockValue)
      return win + response;
    if (play === playScissors && response === responsePaperValue)
      return loss + response;
    if (play === playScissors && response === responseScissorsValue)
      return draw + response;
  }

  const playGame = changeResponseToResponseValue.map((gameArray) =>
    playRockPaperScissors(gameArray),
  );
  const finalScore = String(sum(playGame));
  return finalScore;
};

const part2 = (rawInput) => {
  const parseInput = rawInput
    .split(`\n`)
    .map((gameArray) => gameArray.split(" "));

  const changeResponseToGameOutcome = parseInput.map((gameArray) =>
    gameArray.map((element) =>
      element === "X" ? 0 : element === "Y" ? 3 : element === "Z" ? 6 : element,
    ),
  );

  function playRockPaperScissors([play, outcome]) {
    if (play === playRock && outcome === win)
      return outcome + responsePaperValue;
    if (play === playRock && outcome === draw)
      return outcome + responseRockValue;
    if (play === playRock && outcome === loss)
      return outcome + responseScissorsValue;

    if (play === playPaper && outcome === win)
      return outcome + responseScissorsValue;
    if (play === playPaper && outcome === draw)
      return outcome + responsePaperValue;
    if (play === playPaper && outcome === loss)
      return outcome + responseRockValue;

    if (play === playScissors && outcome === win)
      return outcome + responseRockValue;
    if (play === playScissors && outcome === draw)
      return outcome + responseScissorsValue;
    if (play === playScissors && outcome === loss)
      return outcome + responsePaperValue;
  }

  const playGame = changeResponseToGameOutcome.map((gameArray) =>
    playRockPaperScissors(gameArray),
  );
  const finalScore = String(sum(playGame));
  return finalScore;
};

run({
  part1: {
    tests: [
      {
        input: `A Y\nB X\nC Z`,
        expected: "15",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `A Y\nB X\nC Z`,
        expected: "12",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
});
