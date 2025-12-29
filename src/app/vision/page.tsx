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

export default function Vision() {
  const [activePage, setActivePage] = useState(false);
  return (
    <div>
      <motion.div className="w-full flex flex-col items-center gap-6 p-6">
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
            className="text-7xl text-darkblue transition-colors duration-500"
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

        <motion.div
          className="w-full flex justify-center uppercase font-[Montserrat] text-lightgreen text-3xl p-10 -translate-x-1/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1>Expertise immobilière intégrée à Paris</h1>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="w-full flex font-[Montserrat]"
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
              className="w-1/3 flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-6xl text-darkblue">
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
              <span className="w-1/2 flex text-center text-lightgreen text-2xl">
                {stat.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="h-32"></div>

        {/* Toggle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center py-4"
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
                    vente, location, gestion locative, syndic de copropriété et
                    diagnostics immobiliers.
                  </strong>
                </>,
                <>
                  Cette expertise terrain permet une analyse fine du marché
                  immobilier parisien, une détection précise des opportunités
                  d’investissement et une exécution rapide, efficace et humaine
                  à chaque étape du projet.
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
              imageAlt="Laurent et Éléonore"
            />
          )}
        </motion.div>

        <motion.div
          className="w-full flex justify-center uppercase font-[Montserrat] text-lightgreen text-3xl p-10 2xl:-translate-x-1/8"
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
        className="-bottom-25 -left-21 w-[75vw] bg-darkblue text-white px-14 py-10 flex items-center justify-between gap-12 z-20 shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl text-beige font-[Montserrat] font-bold max-w-md">
          Nous investissons dans des actifs à fort potentiel, que nous
          transformons durablement grâce à une analyse précise du marché et une
          gestion opérationnelle maîtrisée.
        </p>

        <motion.button
          className="border border-beige px-8 py-3 uppercase text-lg text-beige tracking-widest hover:bg-beige hover:text-darkblue transition"
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
