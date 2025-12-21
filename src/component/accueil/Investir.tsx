"use client";

import { motion } from "framer-motion";
import PillarsSection from "@/component/general/PillarsSection";

export default function Investir() {
  return (
    <section className="h-screen snap-start bg-lightgreen flex flex-col">
      {/* Titre avec SVG */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-start gap-10 pt-15 pl-15 pr-15"
      >
        <motion.svg
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          width="90"
          height="103"
          viewBox="0 0 406 465"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M404.775 92.021V177.189L209.44 128.347L82.3547 177.189L0 147.681V69.2955L184.73 0L404.775 92.021Z"
            fill="#363D40"
          />
          <path
            d="M404.775 207.502V289.279L259.245 280.189L148.645 301.411L0 279.42V237.045L211.4 177.189L404.775 207.502Z"
            fill="#363D40"
          />
          <path
            d="M0 313.508V375.601L198.87 464.196L404.775 382.419L401.24 358.959L272.615 321.829L158.83 349.869L0 313.508Z"
            fill="#363D40"
          />
        </motion.svg>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-7xl text-darkblue"
        >
          Investir <span className="text-beige italic">avec nous</span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl text-beige font-bold font-[Montserrat]"
          >
            Chaque bien a un potentiel. Nous le révélons
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* Section des piliers */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <PillarsSection />
      </motion.div>
    </section>
  );
}
