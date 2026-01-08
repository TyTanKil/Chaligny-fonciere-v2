"use client";

import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import { VisionCarousel } from "@/component/general/VisionCarousel";
import { visionTeam } from "@/data/visionTeam";
import ProcessTimeline from "@/component/general/TimeLineVision";
import { motion } from "framer-motion";
import { Toggle } from "@/component/general/Toggle";
import ExpertSection from "@/component/general/ExpertSection";
import Navbar from "@/component/general/NavBar";

export default function Vision() {
  const [activePage, setActivePage] = useState(false);
  return (
    <div>
      <Navbar />
      <motion.div className="w-full flex flex-col items-center gap-6 p-6 mt-20">
        {/* HEADER */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-center sm:text-left"
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
            className="text-4xl sm:text-6xl xl:text-7xl text-darkblue mt-2 sm:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Notre{" "}
            <span className="italic transition-colors duration-500 text-lightgreen">
              Vision
            </span>
          </motion.h1>
        </motion.div>

        {/* Sous-titre */}
        <motion.div
          className="w-full flex justify-center uppercase font-[Montserrat] text-lightgreen text-xl sm:text-2xl md:text-3xl p-4 sm:p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-center">
            Expertise immobilière intégrée à Paris
          </h1>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="w-full flex flex-wrap justify-center font-[Montserrat]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {[
            {
              end: 20,
              suffix: "ans +",
              text: "d'expertise immobilières sur le marché parisien",
            },
            {
              end: 300,
              prefix: "+",
              suffix: "M€",
              text: "de financements intermédiés",
            },
            { end: 150, suffix: "M€", text: "d'actifs intermédiés" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 flex flex-col justify-start items-center mb-6 sm:mb-10 px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl text-darkblue text-center">
                {stat.prefix && (
                  <span className="text-lightgreen">{stat.prefix}</span>
                )}
                <CountUp
                  end={stat.end}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <span className="text-center text-lightgreen text-sm sm:text-lg md:text-xl mt-2">
                {stat.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Toggle + Experts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="w-full flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center mb-6"
          >
            <Toggle
              active={activePage}
              onToggle={setActivePage}
              leftLabel={
                <span
                  className={activePage ? "text-darkblue" : "text-lightgreen"}
                >
                  Laurent et Eleonore
                </span>
              }
              rightLabel={<span className="text-darkblue">Ivan Vaudry</span>}
            />
          </motion.div>

          {/* Experts */}
          <div className="w-full px-4 sm:px-10">
            {!activePage && (
              <ExpertSection
                eyebrow={`Laurent et Éléonore\nExperts de l’immobilier parisien`}
                title="Immobiliers résidentiel et opérationnel"
                paragraphs={[
                  <>
                    Associés dans la vie comme dans les affaires, Laurent et
                    Éléonore travaillent ensemble depuis plus de 15 ans dans
                    l’immobilier résidentiel et opérationnel à Paris.
                  </>,
                  <>
                    Spécialistes reconnus de la transaction immobilière et de la
                    gestion d’actifs, ils ont développé un modèle immobilier
                    intégré permettant de maîtriser toute la chaîne de valeur :{" "}
                    <strong>
                      vente, location, gestion locative, syndic de copropriété
                      et diagnostics immobiliers.
                    </strong>
                  </>,
                  <>
                    Cette expertise terrain permet une analyse fine du marché
                    immobilier parisien, une détection précise des opportunités
                    d’investissement et une exécution rapide, efficace et
                    humaine à chaque étape du projet.
                  </>,
                ]}
                imageSrc="/8.png"
                imageAlt="Laurent et Éléonore"
              />
            )}
            {activePage && (
              <ExpertSection
                eyebrow={`Ivan\nDirecteur Financier et Structuration`}
                title="Structuration et stratégie patrimoniale"
                paragraphs={[
                  "Ivan évolue depuis plus de 20 ans dans la finance d’investissement. Après de nombreuses expériences, il fonde Berlioz Capital, un cabinet spécialisé dans les solutions patrimoniales sur mesure.",
                  "Au sein de Foncière Chaligny, Ivan apporte une expertise pointue en structuration financière, en levée de fonds et en gouvernance, contribuant à la solidité et à la cohérence des stratégies d’investissement immobilier.",
                ]}
                imageSrc="/4.png"
                imageAlt="Ivan Vaudry"
              />
            )}
          </div>
        </motion.div>

        {/* Stratégie */}
        <motion.div
          className="w-full flex justify-center uppercase font-[Montserrat] text-lightgreen text-xl sm:text-2xl md:text-3xl p-4 sm:p-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1>
            Notre stratégie : Investir intelligemment, valoriser durablement
          </h1>
        </motion.div>
      </motion.div>

      <ProcessTimeline />

      {/* Call to action */}
      <motion.div
        className="w-full sm:w-[90%] max-w-[1200px] mx-auto bg-darkblue text-white px-6 sm:px-14 py-6 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-12 mt-10 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-center sm:text-left text-base sm:text-xl text-beige font-[Montserrat] font-bold max-w-md">
          Nous investissons dans des actifs à fort potentiel, que nous
          transformons durablement grâce à une analyse précise du marché et une
          gestion opérationnelle maîtrisée.
        </p>

        <motion.button
          className="border border-beige px-6 sm:px-8 py-3 uppercase text-base sm:text-lg text-beige tracking-widest hover:bg-beige hover:text-darkblue transition mt-4 sm:mt-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          en savoir plus
        </motion.button>
      </motion.div>

      <div className="h-32"></div>
    </div>
  );
}
