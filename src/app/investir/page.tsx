"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/component/general/NavBar";

export default function Investir() {
  return (
    <div className="bg-beige">
      <Navbar />
      {/* ==================== Desktop ==================== */}
      <div className="hidden sm:flex w-full flex-col items-center gap-6 p-6">
        <div className="w-full flex flex-col items-center gap-6 p-6 mt-15">
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
              className="text-7xl xl:text-6xl text-darkblue italic text-lightgreen transition-colors duration-500"
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
            style={{ width: "calc(40%)" }}
          />

          {/* Étapes */}
          <div className="relative flex justify-start gap-6 z-10">
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
          className="flex justify-center py-25 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="w-1/3 p-5 bg-white font-[Montserrat] text-center text-darkblue z-40">
            Notre ambition est d’offrir à nos investisseurs un cadre
            d’investissement clair, structuré et sécurisé pour développer leur
            patrimoine immobilier. <br />
            <br />
            Nous sélectionnons des actifs immobiliers rigoureusement analysés,
            les gérons avec exigence et mettons en œuvre des stratégies visant à
            créer de la valeur durable, dans une logique de transparence et de
            performance.
          </span>
        </motion.div>

        <motion.div
          className="w-full flex justify-end font-[Montserrat] text-darkblue text-3xl px-50"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1>Les atouts de notre modèle</h1>
        </motion.div>

        <div className="relative w-full py-10">
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
            Notre mission : vous permettre d’investir sereinement dans des
            actifs solides, maîtrisés et créateurs de valeur.
          </p>

          <Link href="/contact">
            <motion.button
              className="border border-beige px-8 py-3 uppercase text-lg text-beige tracking-widest hover:bg-beige hover:text-darkblue transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              je veux investir
            </motion.button>
          </Link>
        </motion.div>

        <div className="h-32"></div>
      </div>
      {/* ==================== Mobile ==================== */}
      <div className="flex sm:hidden w-full flex-col items-center gap-4 p-4 mt-20 relative">
        {/* HEADER MOBILE */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link href="/">
            <motion.svg
              width="60"
              height="70"
              viewBox="0 0 406 465"
              fill="none"
              style={{ cursor: "pointer" }}
              whileHover={{ scale: 1.05 }}
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
            className="text-2xl xs:text-xl text-darkblue italic text-lightgreen text-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Investir <span className="not-italic text-darkblue">avec nous</span>
          </motion.h1>

          <motion.div
            className="text-center font-[Montserrat] text-darkblue text-sm xs:text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Investir l’esprit libre, en toute confiance
          </motion.div>
        </motion.div>

        {/* IMAGE + TEXTE PAR-DESSUS */}
        <div className="relative w-full mt-4">
          <motion.img
            src="/9.png"
            alt="Investir avec nous"
            className="w-full h-48 object-cover rounded-md"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center px-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="bg-white text-darkblue p-3 xs:p-2 text-center font-[Montserrat] rounded-md block text-sm xs:text-xs leading-snug">
              Notre ambition est d’offrir à nos investisseurs un cadre
              d’investissement clair, structuré et sécurisé pour développer leur
              patrimoine immobilier. <br />
              <br />
              Nous sélectionnons des actifs immobiliers rigoureusement analysés,
              les gérons avec exigence et mettons en œuvre des stratégies visant
              à créer de la valeur durable, dans une logique de transparence et
              de performance.
            </span>
          </motion.div>
        </div>

        {/* Étapes MOBILE */}
        <div className="w-full flex flex-col gap-2 mt-4">
          {["Stabilité", "Performance Durable", "Simplicité de Gestion"].map(
            (step, i) => (
              <motion.div
                key={i}
                className="w-full text-center bg-darkblue text-beige text-sm xs:text-xs font-medium py-2 rounded-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                {step}
              </motion.div>
            )
          )}
        </div>

        {/* Atouts MOBILE */}
        <motion.div
          className="text-center font-[Montserrat] text-darkblue text-base xs:text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Les atouts de notre modèle
        </motion.div>

        <div className="w-full flex flex-col gap-2 mt-2">
          {["Confiance", "Sécurité", "Performance"].map((step, i) => (
            <motion.div
              key={i}
              className="w-full text-center bg-darkblue text-beige text-sm xs:text-xs font-medium py-2 rounded-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              {step}
            </motion.div>
          ))}
        </div>

        {/* Call to action MOBILE */}
        <motion.div
          className="w-full bg-darkblue text-white p-4 xs:p-3 flex flex-col gap-2 items-center rounded-md mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-center text-beige font-bold font-[Montserrat] text-sm xs:text-xs leading-tight">
            Notre mission : vous permettre d’investir sereinement dans des
            actifs solides, maîtrisés et créateurs de valeur.
          </p>
          <Link href="/contact">
            <motion.button
              className="border border-beige px-4 py-2 uppercase text-sm xs:text-xs text-beige tracking-widest hover:bg-beige hover:text-darkblue transition"
              whileHover={{ scale: 1.05 }}
            >
              je veux investir
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
