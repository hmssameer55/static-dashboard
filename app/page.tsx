import ActionCards from "@/components/ActionCards";
import DayStreak from "@/components/DayStreak";
import PromotionalBanner from "@/components/Hero-carousel";
import Score from "@/components/Score";

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      <PromotionalBanner />
      <Score />
      <ActionCards />
      <DayStreak />
    </div>
  );
}
