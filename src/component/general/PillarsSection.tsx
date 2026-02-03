"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const pillars = [
  {
    id: 1,
    title: "IDENTIFIER LES ACTIFS À POTENTIEL",
    content:
      "Analyse du marché immobilier parisien et sélection d’actifs à fort potentiel de valorisation, fondée sur une connaissance fine du terrain et des emplacements stratégiques.",
    label: "SÉLECTION",
  },
  {
    id: 2,
    title: "ACQUÉRIR AU BON MOMENT",
    content:
      "Acquisition d’actifs au juste prix grâce à une structure indépendante, réactive et une parfaite maîtrise des cycles immobiliers.",
    label: "PRÉCISION",
  },
  {
    id: 3,
    title: "OPTIMISER ET TRANSFORMER",
    content:
      "Amélioration de la performance des actifs par des actions ciblées : travaux, réhabilitation, modernisation et optimisation locative, dans une logique de création de valeur durable.",
    label: "OPTIMISER",
  },
  {
    id: 4,
    title: "VALORISER / GÉRER",
    content:
      "Gestion complète et rigoureuse des actifs immobiliers, visant à sécuriser les revenus et à pérenniser la valeur des investissements sur le long terme.",
    label: "PÉRENNITÉ",
  },
];

export default function PillarsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % pillars.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + pillars.length) % pillars.length);

  return (
    <div className="w-full flex flex-col items-center sm:flex-row sm:justify-center gap-6 sm:gap-8 p-4 sm:p-8">
      {/* Desktop */}
      <div className="hidden sm:flex w-full justify-center gap-8">
        {pillars.map((pillar) => (
          <DesktopPillarCard key={pillar.id} {...pillar} />
        ))}
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden flex-col items-center w-full relative">
        <motion.div
          className="flex w-full overflow-hidden"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) next();
            else if (info.offset.x > 50) prev();
          }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              className={`flex-shrink-0 w-11/12 sm:w-[300px] mx-2 transition-transform`}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              <MobilePillarCard {...pillar} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination dots */}
        <div className="flex gap-2 mt-4">
          {pillars.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current ? "bg-darkblue" : "bg-darkblue/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopPillarCard({ title, content, label }: any) {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative flex flex-col justify-between px-8 py-10 font-[Montserrat] 2xl:w-100 xl:w-80 min-w-[250px] sm:min-w-[250px]"
    >
      <div className="absolute left-2 top-6 bottom-6 w-[2px] bg-darkblue" />
      <div className="pl-6">
        <h3 className="mb-4 2xl:text-2xl xl:text-xl font-medium uppercase tracking-wide text-beige">
          {title}
        </h3>
        <p className="2xl:text-xl xl:text-lg leading-relaxed text-darkblue whitespace-pre-line">
          {content}
        </p>
      </div>
      <span className="absolute bottom-6 left-0 -rotate-90 origin-left text-xs font-bold uppercase tracking-widest text-darkblue">
        {label}
      </span>
    </motion.article>
  );
}

function MobilePillarCard({ title, content, label }: any) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative flex flex-col justify-start px-6 py-8 font-[Montserrat] bg-white rounded-xl shadow-md"
    >
      {/* Label horizontal */}
      <span className="absolute top-4 left-4 bg-lightgreen text-darkblue text-xs font-bold px-2 py-1 rounded">
        {label}
      </span>

      {/* Contenu */}
      <h3 className="mt-8 mb-2 text-lg font-bold text-darkblue">{title}</h3>
      <p className="text-sm text-darkblue leading-relaxed">{content}</p>
    </motion.article>
  );
}
