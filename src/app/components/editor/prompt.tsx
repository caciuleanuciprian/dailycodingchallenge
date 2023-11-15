"use client";

import {
  solution,
  solutionGameDate,
  solutionIndex,
  tomorrow,
} from "../editor/utils/state";

const Prompt = () => {
  return (
    <div className="bg-gray-900 flex flex-grow flex-col h-full w-full px-4 py-4">
      <p className="text-white text-2xl text-center pb-2">{solution.title}</p>
      <p className="text-white text-md pb-2">{solution.description}</p>
      <div>
        <p className="text-white text-md pb-2">Examples:</p>
        {solution.examples.map((example: any) => (
          <div className=" text-white flex w-full py-4" key={Math.random()}>
            <div className="flex flex-col w-full px-2 border-2 border-b-2">
              <p>Input:</p>
              {example.input.toString()}
            </div>
            <div className=" flex flex-col w-full px-2  border-2">
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
