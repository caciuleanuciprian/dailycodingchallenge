"use client";
import { codingChallenges } from "./utils/challenges";

const todayNumber =
  codingChallenges[Math.floor(Math.random() * codingChallenges.length)];

console.log(todayNumber);

const Prompt = () => {
  return (
    <div className="bg-gray-900 flex flex-grow flex-col h-full rounded w-full px-4 py-4">
      <p className="text-white text-2xl text-center pb-2">
        {todayNumber.title}
      </p>
      <p className="text-white text-md pb-2">{todayNumber.description}</p>
      <div>
        {todayNumber.examples.map((example: any) => (
          <div className=" text-white flex w-full" key={Math.random()}>
            <div className="flex flex-col w-full px-2  border-r-2 border-b-2">
              <p>Input:</p>
              {example.input.toString()}
            </div>
            <div className=" flex flex-col w-full px-2  border-b-2">
              <p>Output:</p>
              {example.output.toString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prompt;
