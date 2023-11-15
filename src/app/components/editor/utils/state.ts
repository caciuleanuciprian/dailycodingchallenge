import { addDays, differenceInDays, formatISO, startOfDay } from "date-fns";

import { getToday } from "./dateutils";
import { codingChallenges } from "./challenges";

// 1 January 2022 Game Epoch
export const firstGameDate = new Date(2023, 10, 1);
export const periodInDays = 1;

export const getLastGameDate = (today: Date) => {
  const t = startOfDay(today);
  let daysSinceLastGame = differenceInDays(firstGameDate, t) % periodInDays;
  return addDays(t, -daysSinceLastGame);
};

export const getNextGameDate = (today: Date) => {
  return addDays(getLastGameDate(today), periodInDays);
};

export const isValidGameDate = (date: Date) => {
  if (date < firstGameDate || date > getToday()) {
    return false;
  }

  return differenceInDays(firstGameDate, date) % periodInDays === 0;
};

export const getIndex = (gameDate: Date) => {
  let start = firstGameDate;
  let index = -1;
  do {
    index++;
    start = addDays(start, periodInDays);
  } while (start <= gameDate);

  return index;
};

export const getChallengeOfDay = (index: number) => {
  if (index < 0) {
    throw new Error("Invalid index");
  }

  return codingChallenges[index];
};

export const getSolution = (gameDate: Date) => {
  const nextGameDate = getNextGameDate(gameDate);
  const index = getIndex(gameDate);
  const challenge = getChallengeOfDay(index);
  return {
    solution: challenge,
    solutionGameDate: gameDate,
    solutionIndex: index,
    tomorrow: nextGameDate.valueOf(),
  };
};

export const setGameDate = (d: Date) => {
  try {
    if (d < getToday()) {
      window.location.href = "/?d=" + formatISO(d, { representation: "date" });
      return;
    }
  } catch (e) {
    console.log(e);
  }
  window.location.href = "/";
};

export const { solution, solutionGameDate, solutionIndex, tomorrow } =
  getSolution(getToday());
