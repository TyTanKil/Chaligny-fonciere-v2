"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Toggle } from "@/component/general/Toggle";
import Navbar from "@/component/general/NavBar";

export default function TogglePage() {
  const [activePage, setActivePage] = useState(false);
  const logoColor = activePage ? "#363d40" : "#98AA9D";

  return (
    <>
      <Navbar />
      <div
        className={`
    min-h-screen
    transition-colors
    duration-500
    ${activePage ? "bg-lightgreen" : "bg-beige"}
  `}
      >
        <div className="w-full flex flex-col items-center gap-6 p-6 mt-15">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
    flex 
    flex-col sm:flex-row  /* colonne sur mobile, ligne sur desktop */
    items-center 
    gap-4 sm:gap-10       /* moins d'espace sur mobile */
    text-center sm:text-left  /* centré sur mobile, aligné à gauche sur desktop */
  "
          >
            {/* SVG */}
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

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-7xl xl:text-6xl text-darkblue mt-2 sm:mt-0"
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
              <section className="relative min-h-screen lg:h-[90vh] overflow-hidden">
                {/* ===== MOBILE ===== */}
                <div className="flex flex-col lg:hidden">
                  {/* Image */}
                  <motion.img
                    src="/6.png"
                    alt="Photo histoire foncière Chaligny"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-64 object-cover"
                  />

                  {/* Texte */}
                  <div className="bg-white px-6 py-8 space-y-6 text-darkblue font-[Montserrat]">
                    <h2 className="text-3xl font-[Faustina] text-lightgreen">
                      Notre histoire{" "}
                      <span className="text-darkblue">
                        commence sur le terrain
                      </span>
                    </h2>

                    <p>
                      Foncière Chaligny est une foncière immobilière
                      indépendante, fondée sur une conviction simple :
                    </p>

                    <p>
                      La performance durable repose sur la complémentarité des
                      expertises, la confiance et une vision long terme de
                      l’investissement immobilier.
                    </p>

                    <p>
                      Portée par trois fondateurs aux profils différents mais
                      parfaitement alignés, Foncière Chaligny acquiert,
                      développe et gère des actifs immobiliers avec une approche
                      responsable.
                    </p>

                    <p>
                      <span className="text-lightgreen font-bold">
                        Notre promesse :
                      </span>{" "}
                      offrir une gestion transparente et exigeante.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-darkblue px-6 py-8 text-center space-y-4 font-[Montserrat]">
                    <p className="text-beige font-bold">
                      Nos experts sont à votre écoute pour vous accompagner.
                    </p>

                    <button className="border border-beige px-6 py-3 uppercase text-sm text-beige tracking-widest hover:bg-beige hover:text-darkblue transition">
                      Nous contacter
                    </button>
                  </div>
                </div>

                {/* ===== DESKTOP ===== */}
                <div className="hidden lg:block">
                  {/* Image flottante */}
                  <motion.img
                    src="/6.png"
                    alt="Photo histoire foncière Chaligny"
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="
          absolute
          right-40
          top-0
          h-[70%]
          object-cover
          z-0
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
          ml-16
          mt-16
          w-3/5
          bg-white
          p-10
          space-y-8
          font-[Montserrat]
          text-darkblue
          xl:text-xl
          2xl:text-2xl
        "
                  >
                    <h2 className="text-4xl xl:text-5xl font-[Faustina] text-lightgreen">
                      Notre histoire{" "}
                      <span className="text-darkblue">
                        commence sur le terrain
                      </span>
                    </h2>

                    <p>
                      Foncière Chaligny est une foncière immobilière
                      indépendante, fondée sur une conviction simple :
                    </p>

                    <p>
                      La performance durable repose sur la complémentarité des
                      expertises, la confiance et une vision long terme de
                      l’investissement immobilier.
                    </p>

                    <p>
                      Portée par trois fondateurs aux profils différents mais
                      parfaitement alignés, Foncière Chaligny développe des
                      actifs responsables et durables.
                    </p>

                    <p>
                      <span className="text-lightgreen font-bold">
                        Notre promesse :
                      </span>{" "}
                      une création de valeur transparente et durable.
                    </p>

                    {/* CTA desktop */}
                    <div
                      className="
            absolute
            -bottom-24
            -left-24
            w-[75vw]
            bg-darkblue
            px-14
            py-10
            flex
            justify-between
            items-center
            shadow-xl
          "
                    >
                      <p className="text-beige font-bold max-w-md">
                        Nos experts sont à votre écoute pour vous accompagner.
                      </p>

                      <button className="border border-beige px-8 py-3 uppercase text-lg text-beige tracking-widest hover:bg-beige hover:text-darkblue transition">
                        Nous contacter
                      </button>
                    </div>
                  </motion.div>
                </div>
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
              <section className="relative min-h-screen lg:h-[110vh] overflow-hidden">
                {/* ===== MOBILE ===== */}
                <div className="flex flex-col lg:hidden">
                  {/* Image */}
                  <motion.img
                    src="/7.png"
                    alt="Équipe Foncière Chaligny"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-64 object-cover"
                  />

                  {/* Texte */}
                  <div className="bg-white px-6 py-8 space-y-6 font-[Montserrat] text-darkblue">
                    <h2 className="text-3xl font-[Faustina]">
                      Notre{" "}
                      <span className="text-lightgreen italic">Équipe</span>
                    </h2>

                    <p className="font-semibold text-darkbeige">
                      Trois fondateurs, une même vision.
                    </p>

                    <p>
                      <span className="font-bold">Éléonore Crevon</span>
                      <br />
                      Co-fondatrice — relation humaine et confiance au cœur de
                      chaque projet.
                    </p>

                    <p>
                      <span className="font-bold">Laurent Da Costa</span>
                      <br />
                      Co-fondateur — exigence opérationnelle et fiabilité des
                      opérations.
                    </p>

                    <p>
                      <span className="font-bold">Ivan Varady</span>
                      <br />
                      Co-fondateur — vision stratégique et financière long
                      terme.
                    </p>

                    <p>
                      <span className="text-lightgreen font-bold italic">
                        Complémentarité, confiance et vision durable.
                      </span>
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-darkblue px-6 py-8 text-center space-y-4 font-[Montserrat]">
                    <p className="text-beige font-bold">
                      Nos experts sont à votre écoute pour vous accompagner.
                    </p>

                    <button className="border border-beige px-6 py-3 uppercase text-sm text-beige tracking-widest hover:bg-beige hover:text-darkblue transition">
                      Nous contacter
                    </button>
                  </div>
                </div>

                {/* ===== DESKTOP ===== */}
                <div className="hidden lg:block">
                  {/* Image flottante */}
                  <motion.img
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    src="/7.png"
                    alt="Équipe Foncière Chaligny"
                    className="
          absolute
          right-40
          top-0
          h-[70%]
          object-cover
          z-0
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
          ml-16
          mt-16
          w-3/5
          bg-white
          p-10
          space-y-8
          font-[Montserrat]
          text-darkblue
          xl:text-xl
          2xl:text-2xl
        "
                  >
                    <h2 className="text-4xl xl:text-5xl font-[Faustina]">
                      Notre{" "}
                      <span className="text-lightgreen italic">Équipe</span>
                    </h2>

                    <p className="font-semibold text-darkbeige">
                      Trois fondateurs, une même vision.
                    </p>

                    <p>
                      <span className="font-bold">Éléonore Crevon</span> —
                      relation humaine et confiance.
                    </p>

                    <p>
                      <span className="font-bold">Laurent Da Costa</span> —
                      exigence opérationnelle.
                    </p>

                    <p>
                      <span className="font-bold">Ivan Varady</span> — vision
                      stratégique et financière.
                    </p>

                    <p className="text-lightgreen font-bold italic">
                      Complémentarité, confiance et vision durable.
                    </p>

                    {/* CTA desktop */}
                    <div
                      className="
            absolute
            -bottom-24
            -left-24
            w-[75vw]
            bg-darkblue
            px-14
            py-10
            flex
            justify-between
            items-center
            shadow-xl
          "
                    >
                      <p className="text-beige font-bold max-w-md">
                        Nos experts sont à votre écoute pour vous accompagner.
                      </p>

                      <button className="border border-beige px-8 py-3 uppercase text-sm text-beige tracking-widest hover:bg-beige hover:text-darkblue transition">
                        Nous contacter
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
