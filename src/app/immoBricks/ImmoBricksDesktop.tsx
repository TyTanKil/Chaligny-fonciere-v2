"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ImmoBricksDesktop() {
  return (
    <div className="w-full font-[Montserrat] mt-24">
      {/* HEADER */}
      <motion.div
        className="flex justify-center items-center gap-10"
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
          className="text-3xl font-[Faustina] sm:text-4xl lg:text-6xl text-darkblue"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Immo Bricks
        </motion.h1>
      </motion.div>

      {/* Section principale */}
      <div className="relative w-full flex items-start justify-start gap-20 px-16 py-14">
        {/* Texte */}
        <motion.div
          className="w-3/5 flex flex-col justify-between gap-6 z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-lightgreen font-normal uppercase">
            Immo Bricks : investir dans l’immobilier grâce à la tokenisation
          </h2>

          <p className="text-2xl text-darkblue">
            Immo Bricks est le futur modèle d’investissement immobilier
            fractionné de Foncière Chaligny, fondé sur la digitalisation
            d’actifs immobiliers via la blockchain.
          </p>

          <p className="text-2xl text-darkblue">
            Il permet d’investir dans l’immobilier{" "}
            <span className="font-bold">à partir de 2 000 €,</span> sans
            contraintes de gestion, dans une logique de transparence et de
            pédagogie.
          </p>
        </motion.div>

        {/* Image en absolute */}
        <motion.img
          src="/Immobricks/14.png"
          alt="Illustration Immo Bricks"
          className="absolute top-12 right-0 w-[30%] lg:w-[35%] h-auto rounded-md object-cover"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Comment ça marche */}
      <motion.div
        className="w-full flex"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="w-full lg:w-5/6 bg-lightgreen p-6 lg:p-16 flex flex-col gap-6 font-[Montserrat]">
          <div className="w-full lg:w-2/3">
            <p className="text-xl lg:text-2xl uppercase text-darkblue font-semibold text-center lg:text-left">
              Comment fonctionne l’investissement immobilier fractionné avec
              Immo Bricks ?
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-darkblue text-center lg:text-left">
              La valeur d’un bien immobilier est fractionnée en tokens, chacun
              représentant une part de l’actif.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-darkblue text-center lg:text-left">
              En investissant dans ces tokens, vous détenez une fraction du bien
              et bénéficiez de la valorisation et des revenus, sans gestion
              directe.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-6">
            {/* Ligne */}
            <div className="absolute top-1/2 xl:left-100 2xl:left-110 h-[2px] w-screen bg-darkblue/40 -translate-y-1/2 z-0" />

            {/* Cards */}
            <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:translate-x-1/4 lg:translate-x-1/4 xl:translate-x-1/4 2xl:translate-x-1/3 z-10">
              {[
                "d'une part des revenus,",
                "d'une part de la valorisation,",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="w-full sm:w-80 h-20 bg-darkblue text-beige flex items-center justify-center text-center px-2 text-sm sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.div>
              ))}

              <motion.div
                className="w-full sm:w-80 h-20 bg-darkblue text-beige flex items-center justify-center text-center px-2 text-sm sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                sans gestion ni démarches administratives.
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <div className="w-full flex justify-end pb-24 mt-10">
        <motion.div
          className="w-[70vw] bg-darkblue p-10 flex items-center justify-between "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-beige font-bold max-w-md">
            Chaque transaction est enregistrée sur la blockchain pour garantir
            transparence et sécurité.
          </p>

          <Link href="/contact">
            <motion.button
              className="border border-beige px-8 py-4 uppercase tracking-widest text-beige hover:bg-beige hover:text-darkblue transition"
              whileHover={{ scale: 1.05 }}
            >
              Je veux investir
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
