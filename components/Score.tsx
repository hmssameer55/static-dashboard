import React from "react";

const Score = () => {
  const subjects = [
    {
      name: "Physics",
      score: 0,
      progress: 0,
      journey: "NEO Journey",
    },
    {
      name: "Chemistry",
      score: 0,
      progress: 0,
      journey: "NEO Journey",
    },
    {
      name: "Mathematics",
      score: 0,
      progress: 0,
      journey: "NEO Journey",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-400 text-sm font-medium uppercase">
          SUBJECT LEVEL PREPAREDNESS
        </h2>
        <button className="text-[#22d3ee] hover:text-[#22d3ee]/80 text-sm font-medium">
          VIEW DETAILS &gt;
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {subjects.map((subject, index) => (
          <></>
        ))}
      </div>
    </div>
  );
};

export default Score;
