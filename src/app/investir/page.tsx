"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Investir() {
  return (
    <div className="bg-beige">
      <div className="w-full flex flex-col items-center gap-6 p-6">
        {/* HEADER */}
        <motion.div
          className="flex items-center gap-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link href="/">
            <motion.svg
              width="90"
              height="103"
              viewBox="0 0 406 465"
              fill="none"
              style={{ cursor: "pointer" }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path
                d="M404.775 92.021V177.189L209.44 128.347L82.3547 177.189L0 147.681V69.2955L184.73 0L404.775 92.021Z"
                fill="#98AA9D"
              />
              <path
                d="M404.775 207.502V289.279L259.245 280.189L148.645 301.411L0 279.42V237.045L211.4 177.189L404.775 207.502Z"
                fill="#98AA9D"
              />
              <path
                d="M0 313.508V375.601L198.87 464.196L404.775 382.419L401.24 358.959L272.615 321.829L158.83 349.869L0 313.508Z"
                fill="#98AA9D"
              />
            </motion.svg>
          </Link>

          <motion.h1
            className="text-7xl text-darkblue italic text-lightgreen transition-colors duration-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Investir{" "}
            <span className="not-italic transition-colors duration-500 text-darkblue">
              avec nous
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="w-full flex justify-start font-[Montserrat] text-darkblue text-3xl p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1>Investir l’esprit libre, en toute confiance</h1>
        </motion.div>
      </div>

      <div className="relative w-full py-12">
        {/* Ligne horizontale */}
        <div
          className="absolute top-1/2 left-0 h-px bg-darkblue -translate-y-1/2"
          style={{ width: "calc(50% + 200px)" }}
        />

        {/* Étapes */}
        <div className="relative flex justify-center gap-6 z-10">
          {["Stabilité", "Performance Durable", "Simplicité de Gestion"].map(
            (step, i) => (
              <motion.div
                key={i}
                className="w-60 h-20 text-2xl font-medium text-center leading-[5rem] bg-darkblue text-beige"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {step}
              </motion.div>
            )
          )}
        </div>

        <motion.img
          src="/9.png"
          alt="Investir avec nous"
          className="absolute -top-30 right-0 w-190 h-190 object-cover"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        className="flex justify-center py-30 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="w-1/3 p-5 bg-white font-[Montserrat] text-center text-darkblue z-10">
          notre ambition est d’offrir à nos investisseurs un cadre clair,
          structuré et sécurisé pour développer leur patrimoine. <br />
          <br />
          Nous sélectionnons des actifs soigneusement analysés, nous les gérons
          avec rigueur et nous veillons à créer de la valeur dans le temps en
          toute transparence.
        </span>
      </motion.div>

      <motion.div
        className="w-full flex justify-end font-[Montserrat] text-darkblue text-3xl p-10 px-50 mt-30"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1>Les atouts de notre modèle</h1>
      </motion.div>

      <div className="relative w-full py-15">
        {/* Ligne horizontale */}
        <div
          className="absolute top-1/2 right-0 h-px bg-darkblue z-0"
          style={{ width: "calc(50% + 200px)" }}
        />

        {/* Étapes */}
        <div className="relative flex justify-center gap-6 z-10">
          {["Confiance", "Sécurité", "Perfomance"].map((step, i) => (
            <motion.div
              key={i}
              className="w-60 h-20 text-2xl font-medium text-center leading-[5rem] bg-darkblue text-beige"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {step}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="-bottom-25 -left-21 w-[75vw] bg-darkblue text-white px-14 py-10 flex items-center justify-between gap-12 z-20 shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl text-beige font-[Montserrat] font-bold max-w-md">
          Notre mission : vous permettre d’investir sereinement dans des actifs
          solides, maîtrisés et créateurs de valeur.
        </p>

        <motion.button
          className="border border-beige px-8 py-3 uppercase text-lg text-beige tracking-widest hover:bg-beige hover:text-darkblue transition"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          je veux investir
        </motion.button>
      </motion.div>

      <div className="h-32"></div>
    </div>
  );
}
