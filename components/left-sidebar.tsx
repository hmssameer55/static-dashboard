import Link from "next/link";
import { MENU_ITEMS } from "@/lib/constants";

export default function LeftSidebar() {
  return (
    <div className="border-r border-gray-800 flex flex-col items-center py-2 h-screen bg-gray-900">
      <div className="size-10 mt-3 bg-cyan-500 rounded-lg mb-8 flex items-center justify-center text-white font-bold">
        eF
      </div>

      <div className="flex flex-col items-center space-y-5">
        {MENU_ITEMS.map((item, index) => (
          <Link
            key={index}
            href="#"
            className={`flex flex-col items-center w-full px-2 py-3 ${
              item.active
                ? "text-white bg-gray-800"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <div className={`${item.active ? "text-cyan-400" : ""}`}>
              <item.icon />
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
