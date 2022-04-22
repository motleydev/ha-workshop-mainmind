import React from "react";

type Props = {
  codeComplexity: number;
  handleClick: Function;
  codeSlot: number | null;
  codeIndex: number;
};

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-cyan-500",
  "bg-red-500",
  "bg-red-500",
  "bg-red-500",
  "bg-red-500",
];

export default function ColorChip({
  handleClick,
  codeComplexity,
  codeSlot,
  codeIndex,
}: Props) {
  const colorBoxes = [];
  for (let i = 0; i < codeComplexity; i++) {
    colorBoxes.push({ position: i });
  }

  return (
    <div className="flex flex-col h-full">
      {codeSlot ? (
        <div
          className={`h-full w-full border border-purple-300 m-2 box-${
            codeSlot - 1
          }`}
          onClick={() => {
            handleClick(codeIndex, null);
          }}
        />
      ) : (
        colorBoxes.map((colorSlot, colorIndex) => (
          <div
            key={colorIndex}
            className={`h-full w-full box-${colorIndex} border border-purple-300 m-2`}
            onClick={() => {
              handleClick(codeIndex, colorIndex + 1);
            }}
          />
        ))
      )}
    </div>
  );
}
