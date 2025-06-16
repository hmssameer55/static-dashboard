import Image from "next/image";
import rupee from "@/public/rupee.png";

export default function ActionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Scholarship Test Card */}
      <div className="bg-[#14131a] rounded-xl px-4 py-5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-white text-base font-semibold">
              Scholarship Test
            </h3>
            <span className="bg-[#d946ef] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
              GET REWARDS
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1 max-w-[70%]">
            Take this 10 minute quiz and{" "}
            <span className="text-amber-400">earn a discount coupon</span>
          </p>
        </div>
        <button className="text-[#22d3ee] text-sm font-bold hover:underline cursor-pointer">
          START NOW
        </button>
      </div>

      {/* Coins Card */}
      <div className="bg-[#14131a] rounded-xl px-4 py-5 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <Image
            src={rupee}
            alt="Rupee Icon"
            width={32}
            height={32}
            className="mt-1"
          />
          <div>
            <h3 className="text-white text-base font-semibold">
              You have 2882 coins
            </h3>
            <p className="text-sm text-gray-400 mt-1 max-w-[70%]">
              Redeem your coins to buy assessment tests and more
            </p>
          </div>
        </div>
        <button className="text-[#22d3ee] text-sm font-bold hover:underline cursor-pointer">
          REDEEM
        </button>
      </div>
    </div>
  );
}
