"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Toggle } from "@/component/general/Toggle";

export default function TogglePage() {
  const [activePage, setActivePage] = useState(false);
  const logoColor = activePage ? "#363d40" : "#98AA9D";

  return (
    <div
      className={`
    min-h-screen
    transition-colors
    duration-500
    ${activePage ? "bg-lightgreen" : "bg-beige"}
  `}
    >
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
                fill={logoColor}
              />
              <path
                d="M404.775 207.502V289.279L259.245 280.189L148.645 301.411L0 279.42V237.045L211.4 177.189L404.775 207.502Z"
                fill={logoColor}
              />
              <path
                d="M0 313.508V375.601L198.87 464.196L404.775 382.419L401.24 358.959L272.615 321.829L158.83 349.869L0 313.508Z"
                fill={logoColor}
              />
            </motion.svg>
          </Link>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl text-darkblue transition-colors duration-500"
          >
            Notre{" "}
            <span
              className={`
          italic
          transition-colors
          duration-500
          ${activePage ? "text-darkblue" : "text-lightgreen"}
        `}
            >
              Histoire
            </span>
          </motion.h1>
        </motion.div>

        {/* TOGGLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Toggle
            active={activePage}
            onToggle={setActivePage}
            leftLabel={
              <span
                className={activePage ? "text-darkblue" : "text-lightgreen"}
              >
                Foncière <i>Chaligny</i>
              </span>
            }
            rightLabel={
              <span className="text-darkblue">
                Notre <i>équipe</i>
              </span>
            }
          />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {!activePage && (
          <motion.section
            key="histoire"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {/* CONTENU HISTOIRE */}
            <section className="h-[150vh] relative overflow-visible">
              {/* Image en arrière-plan */}
              <motion.img
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src="/6.png"
                alt="Photo histoire foncière Chaligny"
                className="
      absolute
      right-50
      -top-10
      h-[80%]
      w-auto
      object-cover
      z-0
      translate-x-1/4
      translate-y-1/4
    "
              />

              {/* Bloc texte */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="
      relative
      z-10
      ml-15
      mt-10
      flex
      flex-col
      justify-around
      bg-white/70
      backdrop-blur-sm
      h-3/4
      w-3/5
      p-9
      font-[Montserrat]
      text-darkblue
      2xl:text-3xl
      xl:text-2xl
    "
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="2xl:text-5xl
      xl:text-4xl font-[Faustina] text-lightgreen "
                >
                  Notre histoire{" "}
                  <span className="text-darkblue">commence sur le terrain</span>
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Foncière Chaligny est une foncière immobilière indépendante,
                  fondée sur une conviction simple :
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  La performance durable repose sur la complémentarité des
                  expertises, la confiance et une vision long terme de
                  l’investissement immobilier.
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className=""
                >
                  Portée par trois fondateurs aux profils différents mais
                  parfaitement alignés, Foncière Chaligny acquiert, développe et
                  gère des actifs immobiliers avec une approche responsable,
                  agile et ancrée dans la réalité du terrain, notamment sur le
                  marché parisien et francilien.
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className=""
                >
                  <span className="text-lightgreen font-bold">
                    Notre promesse :{" "}
                  </span>
                  offrir à nos investisseurs une gestion transparente et
                  exigeante, tournée vers la création de valeur durable dans le
                  temps.
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="
    absolute
    2xl:-bottom-30
    xl:-bottom-24
    -left-21 
    w-[75vw]
    bg-darkblue
    text-white
    px-14
    py-10
    flex
    items-center
    justify-between
    gap-12
    z-20
    shadow-xl
  "
                >
                  <p className="text-xl text-beige font-[Montserrat] font-bold max-w-md">
                    Nos experts sont à votre écoute pour vous accompagner dans
                    votre opération.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
          border border-beige
          px-8 py-3
          uppercase text-lg text-beige font-[Faustina] tracking-widest
          hover:bg-beige hover:text-darkblue
          transition
        "
                  >
                    Nous contacter
                  </motion.button>
                </motion.div>
              </motion.div>
            </section>
          </motion.section>
        )}

        {activePage && (
          <motion.section
            key="equipe"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {/* CONTENU ÉQUIPE */}
            <section className="h-[150vh] relative overflow-visible">
              {/* Image en arrière-plan */}
              <motion.img
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src="/7.png"
                alt="Photo histoire foncière Chaligny"
                className="
      absolute
      -top-10
      right-50
      h-[80%]
      w-auto
      object-cover
      z-0
      translate-x-1/4
      translate-y-1/4
    "
              />

              {/* Bloc texte */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="
      relative
      z-10
      ml-15
      mt-10
      flex
      flex-col
      justify-around
      bg-white/80
      backdrop-blur-sm
      h-3/4
      w-3/5
      p-9
      font-[Montserrat]
      2xl:text-3xl
      xl:text-2xl
      text-darkblue
    "
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-2/3 font-[Faustina]"
                >
                  Notre <span className="text-lightgreen italic">Equipe</span>{" "}
                  <br />
                  <span className="font-[Montserrat] font-semibold text-darkbeige">
                    Trois fondateurs, une même vision.
                  </span>
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-2/3"
                >
                  <span className="font-bold">Éléonore Crevon</span>
                  <br /> Co-fondatrice
                  <br /> Elle porte l’approche humaine et la relation de
                  confiance qui guident chaque projet immobilier.
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="w-2/3"
                >
                  <span className="font-bold">Laurent Da Costa</span>
                  <br /> Co-fondateur
                  <br /> Il garantit l’exigence opérationnelle et la fiabilité
                  des opérations au cœur de la foncière.
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="w-2/3"
                >
                  <span className="font-bold">Ivan Varady</span>
                  <br /> Co-fondateur
                  <br /> Il apporte la vision stratégique et financière,
                  assurant la cohérence des investissements dans le long terme.
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="w-2/3"
                >
                  Ensemble, ils incarnent les valeurs de Foncière Chaligny :
                  <br />
                  <span className="text-lightgreen font-bold italic">
                    complémentarité, confiance et vision durable de
                    l’investissement immobilier.
                  </span>
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="
    absolute
    -bottom-25
    -left-21 
    w-[75vw]
    bg-darkblue
    text-white
    px-14
    py-10
    flex
    items-center
    justify-between
    gap-12
    z-20
    shadow-xl
  "
                >
                  <p className="text-xl text-beige font-[Montserrat] font-bold max-w-md">
                    Nos experts sont à votre écoute pour vous accompagner dans
                    votre opération.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
          border border-beige
          px-8 py-3
          uppercase text-sm text-beige tracking-widest
          hover:bg-beige hover:text-darkblue
          transition
        "
                  >
                    Nous contacter
                  </motion.button>
                </motion.div>
              </motion.div>
            </section>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
