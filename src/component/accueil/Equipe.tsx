"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TeamCarousel } from "@/component/general/TeamCarousel";
import { teamMembers } from "@/data/team";

export default function Equipe() {
  return (
    <section data-section className="snap-start min-h-screen flex justify-center items-center py-20">
      <div className="flex flex-col w-[90%] justify-around gap-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <TeamCarousel data={teamMembers} initialId={1}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/equipe">
                <button className="inline-block bg-beige text-4xl text-darkblue mt-20 p-2 hover:bg-darkblue hover:text-beige transition">
                  <span className="underline">S</span>avoir faire
                </button>
              </Link>
            </motion.div>
          </TeamCarousel>
        </motion.div>
      </div>
    </section>
  );
}
