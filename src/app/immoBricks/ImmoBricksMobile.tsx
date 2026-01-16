"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ImmoBricksMobile() {
  return (
    <div className="w-full flex flex-col items-center px-6 mt-24 gap-10 font-[Montserrat]">
      {/* HEADER */}
      <motion.div
        className="flex flex-col items-center justify-center gap-4 text-darkblue font-bold text-center"
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Immo Bricks
        </motion.h1>
      </motion.div>

      {/* Texte */}
      <motion.div
        className="flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-lightgreen font-semibold uppercase">
          l'immobilier accessible autrement
        </p>

        <p className="text-base text-darkblue">
          Immo Bricks est notre futur modèle d'investissement fractionné, fondé
          sur la blockchain.
        </p>

        <p className="text-base text-darkblue">
          <span className="font-bold">L'objectif :</span> investir simplement
          dans l'immobilier sélectionné.
        </p>

        <p className="text-base text-lightgreen font-bold">
          À partir de 2 000 €
        </p>
      </motion.div>

      {/* Image */}
      <motion.img
        src="/13.png"
        alt="Illustration Immo Bricks"
        className="w-full max-w-sm rounded-md object-cover"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      />

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

      <div className="h-20" />
    </div>
  );
}
