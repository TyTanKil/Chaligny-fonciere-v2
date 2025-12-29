"use client";

import { motion } from "framer-motion";

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
      "Amélioration de la performance des actifs par des actions ciblées : travaux, réhabilitation, modernisation et optimisation locative.",
    label: "OPTIMISER",
  },
  {
    id: 4,
    title: "VALORISER / GÉRER",
    content:
      "Gestion complète et rigoureuse des actifs afin de sécuriser et pérenniser la valeur des investissements dans le temps.",
    label: "PÉRENNITÉ",
  },
];

export default function PillarsSection() {
  return (
    <div className="flex p-8 w-full h-175 items-stretch">
      {pillars.map((pillar) => (
        <PillarCard key={pillar.id} {...pillar} />
      ))}
    </div>
  );
}

type PillarCardProps = {
  title: string;
  content: string;
  label: string;
};

function PillarCard({ title, content, label }: PillarCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative flex flex-1 flex-col justify-between px-8 py-10 font-[Montserrat]"
    >
      {/* Ligne verticale */}
      <div className="absolute left-2 top-6 bottom-6 w-[2px] bg-darkblue" />

      {/* Contenu */}
      <div className="pl-6">
        <h3 className="mb-4 2xl:text-3xl xl:text-2xl font-medium uppercase tracking-wide text-beige">
          {title}
        </h3>
        <p className="2xl:text-2xl xl:text-xl leading-relaxed text-darkblue whitespace-pre-line">
          {content}
        </p>
      </div>

      {/* Label vertical */}
      <span className="absolute bottom-6 left-0 -rotate-90 origin-left text-xs font-bold uppercase tracking-widest text-darkblue">
        {label}
      </span>
    </motion.article>
  );
}
