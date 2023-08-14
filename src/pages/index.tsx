import { Barchart } from "@/components/Barchart";
import { RecentSaved } from "@/components/RecentSaved";
import { TopCards } from "@/components/TopCards";

export default function HomePage() {
  return (
    <div className="h-full w-full shadow">
      <div className="xl:mx-48">
        <TopCards />
        <div className="grid grid-cols-1 gap-4 rounded-xl p-2 sm:m-4 xl:grid-cols-3">
          <Barchart />
          <RecentSaved />
        </div>
      </div>
    </div>
  );
}
