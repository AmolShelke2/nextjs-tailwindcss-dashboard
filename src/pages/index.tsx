import { Barchart } from "@/components/Barchart";
import { RecentSaved } from "@/components/RecentSaved";
import { TopCards } from "@/components/TopCards";

export default function HomePage() {
  return (
    <div className="h-full">
      <TopCards />
      <div className="grid grid-cols-1 gap-4 rounded-xl p-2 sm:m-4 md:grid-cols-3">
        <Barchart />
        <RecentSaved />
      </div>
      <div className="h-fit rounded-xl bg-slate-200 p-8 text-gray-600 sm:mx-4 lg:h-[120px]">
        <p className="whitespace-wrap lg:w-[75%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea.
          Aliquam iste rem, ipsum recusandae amet nisi alias perferendis
          dignissimos dolores numquam repellat corporis tenetur ab cumque
          similique optio impedit quisquam dicta maiores deserunt minima? Quasi,
          perferendis! Magni, voluptatibus similique!
        </p>
      </div>
    </div>
  );
}
