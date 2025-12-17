import { TeamCarousel } from "@/component/general/TeamCarousel";
import { teamMembers } from "@/data/team";

export default function Equipe() {
  return (
    <section className="snap-start min-h-screen flex justify-center items-center py-20">
      <div className="flex flex-col w-[90%] justify-around gap-6">
        <TeamCarousel data={teamMembers} overflowImage />
        <TeamCarousel data={teamMembers} />
        <TeamCarousel data={teamMembers}>
          <div>
            <a className="inline-block text-4xl bg-beige text-darkblue mt-20 p-2">
              <span className="underline">S</span>avoir faire
            </a>
          </div>
        </TeamCarousel>
      </div>
    </section>
  );
}