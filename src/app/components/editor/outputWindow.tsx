import {
  solution,
  solutionGameDate,
  solutionIndex,
  tomorrow,
} from "../editor/utils/state";

const OutputWindow = ({ outputDetails, processing }: any) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      for (let i = 0; i < solution.examples.length; i++) {
        if (solution.examples[i].output == atob(outputDetails.stdout)) {
          return (
            <pre className="px-2 py-1 font-normal text-xs text-green-500">
              {atob(outputDetails.stdout)}
            </pre>
          );
        } else {
          return (
            <pre className="px-2 py-1 font-normal text-xs text-red-500">
              {atob(outputDetails.stdout)}
            </pre>
          );
        }
      }
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <div className="flex w-[75%] h-60 bg-gray-900 flex-col text-white font-normal text-sm">
      <p className="py-2 pl-2">Output:</p>
      <div className="w-full h-full bg-gray-900 text-white font-normal text-sm overflow-y-auto">
        {outputDetails && <>{getOutput()}</>}
      </div>
    </div>
  );
};

export default OutputWindow;
