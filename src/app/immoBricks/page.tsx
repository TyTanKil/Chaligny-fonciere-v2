"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/component/general/NavBar";

export default function ImmoBricks() {
  return (
    <div className="bg-beige w-full flex flex-col items-center">
      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 p-6 mt-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/">
          <motion.svg
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            width="70"
            height="80"
            viewBox="0 0 406 465"
            fill="none"
            className="cursor-pointer"
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
          className="text-4xl sm:text-5xl lg:text-7xl text-darkblue font-bold text-center sm:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Immo Bricks
        </motion.h1>
      </motion.div>

      {/* Section principale */}
      <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-start font-[Montserrat] p-6 lg:p-16 gap-10">
        {/* Texte */}
        <motion.div
          className="w-full lg:w-2/3 flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl lg:text-5xl text-lightgreen font-semibold uppercase text-center lg:text-left">
            l'immobilier accessible autrement
          </motion.h2>
          <motion.p className="text-base sm:text-lg lg:text-2xl text-darkblue text-center lg:text-left">
            Immo Bricks est notre futur modèle d'investissement fractionné,
            fondé sur la digitalisation d'actifs immobiliers via la blockchain.
          </motion.p>
          <motion.p className="text-base sm:text-lg lg:text-2xl text-darkblue text-center lg:text-left">
            <span className="font-bold">L'objectif :</span> permettre à chacun
            d'investir dans des actifs sélectionnés par Foncière Chaligny
          </motion.p>
          <motion.p className="text-base sm:text-lg lg:text-2xl text-lightgreen font-semibold text-center lg:text-left">
            à partir de 2 000 euros sans les contraintes de gestion.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/13.png"
          alt="Illustration Immo Bricks"
          className="
    w-3/4 sm:w-2/3 lg:w-1/4 
    h-3/4 sm:h-2/3 lg:h-1/4 
    object-cover rounded-md
  "
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Comment ça marche */}
      <motion.div
        className="w-full flex justify-center px-6 lg:px-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="w-full lg:w-5/6 bg-lightgreen p-6 lg:p-16 flex flex-col gap-6 rounded-md font-[Montserrat]">
          <p className="text-xl lg:text-3xl uppercase text-darkblue font-semibold text-center lg:text-left">
            Comment ça marche
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-darkblue text-center lg:text-left">
            Nous transformons la valeur d'un bien immobilier en tokens, chacun
            représentant une fraction du bien.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-darkblue text-center lg:text-left">
            En investissant dans ces tokens, vous devenez détenteur d'une part
            de l'actif et bénéficiez :
          </p>

          {/* Timeline */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 items-center justify-center">
            {[
              "d'une part des revenus,",
              "d'une part de la valorisation,",
              "sans gestion ni démarches administratives.",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="w-full sm:w-80 h-20 bg-darkblue text-beige flex items-center justify-center text-center px-2 rounded-md text-sm sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Final */}
      <div className="w-full flex justify-center px-6 lg:px-16 py-10">
        <motion.div
          className="w-full lg:w-[75vw] bg-darkblue text-white p-6 lg:px-14 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12 rounded-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg lg:text-xl text-beige font-bold font-[Montserrat] text-center lg:text-left max-w-md">
            Chaque transaction est enregistrée sur une blockchain, garantissant
            transparence, traçabilité et sécurité.
          </p>

          <Link href="/contact">
            <motion.button
              className="border border-beige px-6 py-3 uppercase text-base sm:text-lg text-beige tracking-widest hover:bg-beige hover:text-darkblue transition rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Je veux investir
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className="h-32"></div>
    </div>
  );
}
