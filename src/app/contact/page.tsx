"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Toggle } from "@/component/general/Toggle";

export default function TogglePage() {
  const [activePage, setActivePage] = useState(false);
  const logoColor = activePage ? "#363d40" : "#363d40";

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
            className="2xl:text-7xl xl:text-5xl text-darkblue transition-colors duration-500"
          >
            <span
              className={`
          transition-colors
          duration-500
          ${activePage ? "text-darkblue" : "text-darkblue"}
        `}
            >
              Contact
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
              <span className={activePage ? "text-darkblue" : "text-darkblue"}>
                Contact investisseur
              </span>
            }
            rightLabel={
              <span className="text-darkblue">Demande d'information</span>
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
            <section className="h-[180vh] relative overflow-visible">
              {/* Image en arrière-plan */}
              <motion.img
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src="/14.png"
                alt="Photo histoire foncière Chaligny"
                className="
      absolute
      2xl:right-60
      xl:right-0
      2xl:w-auto
      xl:w-200
      object-cover
      z-20
      2xl:translate-x-1/4
      xl:translate-x-1/14
      2xl:translate-y-3/5
      xl:translate-y-5/6
    "
              />

              {/* Bloc texte */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="
      relative
      z-10
      ml-15
      flex
      flex-col
      bg-white/70
      backdrop-blur-sm
      h-3/4
      w-3/5
      p-9
      font-[Montserrat]
      text-darkblue
      2xl:text-4xl
      xl:text-3xl
    "
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-[Faustina] text-darkblue mt-10"
                >
                  Contact Investisseur
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-lightgreen font-semibold"
                >
                  Échangeons sur votre projet d'investissement
                </motion.span>
                <div className="h-32"></div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-2 gap-4 mt-6 space-y-16 font-[Faustina]"
                >
                  <input placeholder="Nom" className="p-2" />
                  <input placeholder="Prénom" className="p-2" />
                  <input placeholder="Mail" className="p-2" />
                  <input placeholder="Téléphone" className="p-2" />
                </motion.div>

                <motion.textarea
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  placeholder="Message"
                  className="font-[Faustina] border border-darkblue p-2 w-2/3 h-70 mt-4 col-span-2"
                />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-20 mt-20"
                >
                  <img src="/phone.png" alt="Phone" className="2xl:w-20 2xl:h-20 xl:w-10 xl:h-10" />
                  <p
                    className="text-darkblue 2xl:text-4xl xl:text-3xl"
                  >
                    07 77 77 77 77
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex items-center gap-20 mt-20"
                >
                  <img src="/email.png" alt="Email" className="2xl:w-20 2xl:h-20 xl:w-10 xl:h-10" />
                  <p
                    className="text-darkblue 2xl:text-4xl xl:text-3xl"
                  >
                    contact@foncièrechaligny.com
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex items-center gap-20 mt-20"
                >
                  <img
                    src="/location.png"
                    alt="Location"
                    className="2xl:w-20 2xl:h-20 xl:w-10 xl:h-10"
                  />
                  <p className="text-darkblue 2xl:text-4xl xl:text-3xl">
                    10 rue des champs Elysés
                  </p>
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
            <section className="h-[180vh] relative overflow-visible">
              {/* Image en arrière-plan */}
              <motion.img
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src="/15.png"
                alt="Photo histoire foncière Chaligny"
                className="
      absolute
      2xl:right-60
      xl:right-0
      2xl:w-auto
      xl:w-200
      object-cover
      z-20
      2xl:translate-x-1/4
      xl:translate-x-1/14
      2xl:translate-y-3/5
      xl:translate-y-5/6
    "
              />

              {/* Bloc texte */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="
      relative
      z-10
      ml-15
      flex
      flex-col
      bg-white/70
      backdrop-blur-sm
      h-3/4
      w-3/5
      p-9
      font-[Montserrat]
      text-darkblue
      2xl:text-4xl
      xl:text-3xl
    "
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-[Faustina] text-darkblue mt-10"
                >
                  Demande d'information
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-darkbeige font-semibold"
                >
                  Recevez des informations détaillées sur nos solutions et nos
                  actifs.
                </motion.span>
                <div className="h-32"></div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-2 gap-4 mt-6 space-y-16 font-[Faustina]"
                >
                  <input placeholder="Nom" className="p-2" />
                  <input placeholder="Prénom" className="p-2" />
                  <input placeholder="Mail" className="p-2" />
                  <input placeholder="Téléphone" className="p-2" />
                </motion.div>

                <motion.textarea
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  placeholder="Message"
                  className="font-[Faustina] border border-darkblue p-2 w-2/3 h-70 mt-4 col-span-2"
                />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-20 mt-20"
                >
                  <img src="/phone.png" alt="Phone" className="2xl:w-20 2xl:h-20 xl:w-10 xl:h-10" />
                  <p className="text-darkblue 2xl:text-4xl xl:text-3xl">07 77 77 77 77</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex items-center gap-20 mt-20"
                >
                  <img src="/email.png" alt="Email" className="2xl:w-20 2xl:h-20 xl:w-10 xl:h-10" />
                  <p className="text-darkblue 2xl:text-4xl xl:text-3xl">
                    contact@foncièrechaligny.com
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex items-center gap-20 mt-20"
                >
                  <img
                    src="/location.png"
                    alt="Location"
                    className="2xl:w-20 2xl:h-20 xl:w-10 xl:h-10"
                  />
                  <p className="text-darkblue 2xl:text-4xl xl:text-3xl">
                    10 rue des champs Elysés
                  </p>
                </motion.div>
              </motion.div>
            </section>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
