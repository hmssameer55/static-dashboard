export default function DayStreak() {
  const days = [
    { day: "M", completed: true },
    { day: "T", completed: true },
    { day: "W", completed: true },
    { day: "T", completed: true },
    { day: "F", completed: true },
    { day: "S", completed: false },
    { day: "S", completed: false },
  ];

  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6 border border-gray-700/50">
      {/* Header with icon and title */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-[#0ea5e9] rounded-lg p-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m8 14 3 3 6-6" />
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">5 day streak</h3>
              <p className="text-sm text-gray-400">Longest streak: 12 days</p>
            </div>
          </div>
          {/* Daily goal text */}
          <p className="text-sm text-gray-400 mb-4">
            Daily goal: Complete 10 mins OR 5 questions
          </p>
          {/* Coin reward section */}
          <div className="flex items-center">
            <div className="bg-amber-400 rounded-full w-5 h-5 flex items-center justify-center mr-2">
              <span className="text-amber-900 text-xs font-bold">₹</span>
            </div>
            <span className="text-sm text-gray-400">
              Earn 50 coins on 7 day streak
            </span>
          </div>
        </div>
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <div
              key={index}
              className={`${
                day.completed ? "bg-[#0ea5e9]" : "bg-gray-600"
              } rounded-full p-1 flex items-center justify-center`}
            >
              <span className="text-white text-sm font-medium">{day.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
