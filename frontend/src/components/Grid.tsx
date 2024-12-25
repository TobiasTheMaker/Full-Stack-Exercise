import { GridData } from "../lib/types";

interface GridProps {
  gridData: GridData | null;
  generateGrid: boolean;
}

export const Grid = ({ gridData, generateGrid }: GridProps) => {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-10">
        {gridData &&
          gridData.grid.map((row, rowIndex) =>
            row.map((cellValue, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="border place-content-center border-gray-200 text-center h-[54px]">
                {cellValue}
              </div>
            ))
          )}
      </div>
      <div className="flex flex-col items-center">
        {generateGrid && (
          <div>
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
            <span className="text-sm text-gray-700">Live</span>
          </div>
        )}

        <div className="mt-4 p-4 border text-sm text-gray-700 uppercase">Your Code: {gridData?.digitCode}</div>
      </div>
    </>
  );
};
