import rupee from "@/public/rupee.png";
import { Check, CircleCheck } from "lucide-react";
import Image from "next/image";

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
              <CircleCheck className="text-white" size={24} />
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
            <Image
              src={rupee}
              alt="Rupee Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="text-sm text-gray-400">
              Earn 50 coins on 7 day streak
            </span>
          </div>
        </div>
        {/* Calendar grid */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex justify-between gap-3">
            {days.map((day, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    day.completed ? "bg-green-500" : "bg-gray-600"
                  }`}
                >
                  {day.completed && <Check />}
                </div>
                <span className="text-xs text-gray-400">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
