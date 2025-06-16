import { AVATARS } from "@/lib/constants";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  UserRound,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

export default function RightSidebar() {
  return (
    <div className="w-sm border-l border-gray-800 p-6 hidden lg:block space-y-6 overflow-auto">
      <div className="flex flex-wrap gap-2 justify-between">
        {AVATARS.map((avatar, index) => (
          <div key={index} className={`p-2 rounded-full ${avatar.color}`}>
            <UserRound />
          </div>
        ))}
      </div>

      <div className="bg-gray-900 border-2 border-green-300 rounded-lg p-3 flex items-center gap-3">
        <UsersRound className="text-green-300" size={20} />
        <span className="text-green-300 text-sm">
          1024 learners took a test today
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Testimonials
          </h3>
          <div className="flex">
            <button className="p-1 text-gray-400 hover:text-white">
              <ChevronLeft size={18} />
            </button>
            <button className="p-1 text-gray-400 hover:text-white">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="bg-[#1e1e1e] rounded-lg p-4">
          <div className="flex items-center mb-2">
            <div className="size-14 rounded-full bg-gray-700 mr-3 overflow-hidden">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Sarthak Chadha"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Sarthak Chadha</p>
              <p className="text-xs text-gray-400">Student</p>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star fill="gold" size={12} key={star} />
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm">
            Super smooth process. I am very thankful that I came across you on
            Google. I was stressed about the Assignment, and the deadline was
            also very close. Thank you very very much! :)
          </p>
        </div>

        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
      </div>

      <div className="bg-amber-100 text-amber-900 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold">Refer & Earn 100 coins</h3>
            <p className="text-sm">Invite your friends today!</p>
          </div>
          <button className="bg-amber-900 text-amber-100 p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Blog
          </h3>
          <div className="flex">
            <button className="p-1 text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
          <div className="relative h-40">
            <Image
              src="/placeholder.svg?height=160&width=300"
              alt="Blog post"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="text-xs text-gray-400 mb-2">3 day ago</div>
            <h3 className="font-medium">
              Everything you need to know about CUET 2023
            </h3>
          </div>
        </div>

        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
      </div>
    </div>
  );
}
