import ActionCards from "@/components/ActionCards";
import DayStreak from "@/components/DayStreak";
import PromotionalBanner from "@/components/Hero-carousel";
import OffersSection from "@/components/OffersSection";
import AnimatedSubjectCards from "@/components/SubjectCards";

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      <PromotionalBanner />
      <AnimatedSubjectCards />
      <ActionCards />
      <DayStreak />
      <div className="mt-8">
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
          Offers
        </h2>
        <OffersSection />
      </div>
    </div>
  );
}
