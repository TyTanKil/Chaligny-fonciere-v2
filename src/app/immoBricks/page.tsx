"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ImmoBricks() {
  return (
    <div>
      <div className="w-full flex flex-col items-center gap-6 p-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-10"
        >
          <Link href="/">
            <motion.svg
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              width="90"
              height="103"
              viewBox="0 0 406 465"
              fill="none"
              style={{ cursor: "pointer" }}
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl text-darkblue transition-colors duration-500"
          >
            Immo Bricks
          </motion.h1>
        </motion.div>
      </div>

      {/* Section principale avec texte et image */}
      <div className="relative flex w-full font-[Montserrat] p-16 h-150">
        {/* TEXTE — 2/3 */}
        <div className="flex justify-center">
          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-2/3 flex flex-col space-y-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="uppercase text-lightgreen text-5xl"
              >
                l'immobilier accessible autrement
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl text-darkblue"
              >
                Immo Bricks est notre futur modèle d'investissement fractionné,
                fondé sur la digitalisation d'actifs immobiliers via la
                blockchain.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl text-darkblue"
              >
                <span className="font-bold">L'objectif :</span> permettre à
                chacun d'investir dans des actifs sélectionnés par Foncière
                Chaligny
              </motion.p>

              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl text-center text-lightgreen font-semibold"
              >
                à partir de 2 000 euros sans les contraintes de gestion.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* IMAGE — 1/3 */}
        <motion.img
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          src="/13.png"
          alt="Illustration"
          className="absolute right-30 w-170 h-190 object-cover"
        />
      </div>

      {/* Section "Comment ça marche" */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full py-30 h-100"
      >
        <div className="w-5/6 text-darkblue font-[Montserrat] bg-lightgreen h-120 space-y-6 p-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="uppercase text-3xl"
          >
            Comment ça marche
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl"
          >
            Nous transformons la valeur d'un bien immobilier en tokens, chacun
            représentant une fraction du bien.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl"
          >
            En investissant dans ces tokens, vous devenez détenteur d'une part
            de l'actif et bénéficiez :
          </motion.p>

          <div className="relative w-full py-15">
            {/* Ligne horizontale */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-1/2 h-px bg-darkblue z-0 origin-left"
              style={{
                left: "calc(50% - 200px)",
                width: "calc(100vw - (50% - 480px))",
              }}
            />

            {/* Étapes */}
            <div className="relative flex justify-end font-[Faustina] gap-6 z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="w-80 h-20 text-2xl font-medium text-center leading-[5rem] bg-darkblue text-beige"
              >
                d'une part des revenus,
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="w-80 h-20 text-2xl font-medium text-center leading-[5rem] bg-darkblue text-beige"
              >
                d'une part de la valorisation,
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="w-120 h-20 text-2xl font-medium text-center leading-[5rem] bg-darkblue text-beige"
              >
                sans gestion ni démarches administratives.
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="h-100"></div>

      {/* CTA Final */}
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
          className="
      absolute
      bottom-0
      right-0
      w-[75vw]
      bg-darkblue
      text-white
      px-14
      py-10
      flex
      items-center
      justify-between
      gap-12
      shadow-xl
      z-20
    "
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-beige font-[Montserrat] font-bold max-w-md"
          >
            Chaque transaction est enregistrée sur une blockchain, garantissant
            transparence, traçabilité et sécurité.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="
        border border-beige
        px-8 py-3
        uppercase text-lg text-beige tracking-widest
        hover:bg-beige hover:text-darkblue
        transition
      "
          >
            Je veux investir
          </motion.button>
        </motion.div>
      </div>
      <div className="h-32"></div>
    </div>
  );
}