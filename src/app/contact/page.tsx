"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Toggle } from "@/component/general/Toggle";
import Navbar from "@/component/general/NavBar";
import ContactSection from "@/component/general/ContactSection";

export default function TogglePage() {
  const [activePage, setActivePage] = useState(false);
  const logoColor = "#363d40";

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        activePage ? "bg-lightgreen" : "bg-beige"
      }`}
    >
      <Navbar />

      {/* HEADER */}
      <div className="w-full flex flex-col items-center gap-6 p-6 mt-15">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-col items-center justify-center gap-4 lg:gap-6"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="2xl:text-7xl xl:text-6xl text-darkblue text-center transition-colors duration-500"
          >
            <span
              className={`transition-colors duration-500 ${
                activePage ? "text-darkblue" : "text-darkblue"
              }`}
            >
              Contact
            </span>
          </motion.h1>
        </motion.div>
      </div>

      {/* TOGGLE */}
      <motion.div
        className="px-4 sm:px-6 mt-6"
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

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        {!activePage && (
          <motion.section
            key="histoire"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full px-4 sm:px-6"
          >
            <ContactSection
              eyebrow="Contact Investisseur"
              title="Échangeons sur votre projet d'investissement"
              phone="06 70 49 85 82"
              email="contact@foncierechaligny.com"
              address="10 rue des champs Elysés"
              srcImage="/14.png"
              altImage="Contact investisseur"
            />
          </motion.section>
        )}

        {activePage && (
          <motion.section
            key="equipe"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full px-4 sm:px-6"
          >
            <ContactSection
              eyebrow="Demande d'information"
              title="Recevez des informations détaillées sur nos solutions et nos actifs."
              phone="06 70 49 85 82"
              email="contact@foncierechaligny.com"
              address="10 rue des champs Elysés"
              srcImage="/15.png"
              altImage="Contact investisseur"
            />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
