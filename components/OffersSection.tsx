import { OFFERS } from "@/lib/constants";

export default function OffersSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {OFFERS.map((offer, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${offer.color} rounded-lg p-4 flex justify-between items-center`}
        >
          <div className="flex items-center">
            <div className="bg-white/20 rounded-full p-1 mr-3">
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
                className="text-white"
              >
                <path d="M20.91 8.84 8.56 21.18a4.25 4.25 0 0 1-6-6L14.89 2.83a2.13 2.13 0 0 1 3 0l3.05 3.05a2.13 2.13 0 0 1 0 3Z" />
                <circle cx="7.54" cy="16.4" r="1" />
                <path d="M13 3 8 8" />
              </svg>
            </div>
            <div className="text-white">
              <h4 className="font-bold">{offer.code}</h4>
            </div>
          </div>
          <button className="bg-white/20 p-1 rounded">
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
              className="text-white"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
