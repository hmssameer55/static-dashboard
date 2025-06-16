import { ChevronDown, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 border-b border-gray-800 flex items-center justify-between px-4 bg-gray-900">
      <div className="flex items-center gap-1">
        <h1 className="text-lg font-bold">CUET Science</h1>
        <ChevronDown />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex place-items-center gap-2 border border-amber-100 rounded-lg p-1">
          <div className="text-right hidden md:block p-1">
            <div className="flex items-center">
              <span className="text-amber-400">
                Get unlimited access to practice tools.
              </span>
              <span className="ml-1">Starting at ₹2,199</span>
            </div>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1.5 rounded-md text-sm transition-colors">
            Select Plan
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="size-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
            <span className="text-xs">PRO</span>
          </div>
          <div className="p-2">
            <UserRound />
          </div>
        </div>
      </div>
    </header>
  );
}
