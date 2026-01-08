"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TeamCarousel } from "@/component/general/TeamCarousel";
import { teamMembers } from "@/data/team";

export default function Equipe() {
  return (
    <section
      data-section
      className="snap-start min-h-screen flex justify-center items-center py-20"
    >
      <div className="flex flex-col w-[90%] justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col items-center gap-10">
            <TeamCarousel data={teamMembers} initialId={1} />

            <Link href="/equipe">
              <button className="mt-6 sm:mt-10 bg-beige text-3xl sm:text-4xl text-darkblue p-2 hover:bg-darkblue hover:text-beige transition">
                <span className="underline">S</span>avoir faire
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
