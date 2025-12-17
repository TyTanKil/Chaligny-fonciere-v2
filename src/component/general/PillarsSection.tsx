"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    id: 1,
    title: "IDENTIFIER LES ACTIFS À POTENTIEL",
    content:
      "Nous analysons en profondeur le marché, les emplacements et le potentiel de chaque immeuble. \nGrâce à notre présence terrain et à notre expertise parisienne, nous identifions des actifs rares, solides et créateurs de valeur.",
    label: "SÉLECTION",
  },
  {
    id: 2,
    title: "ACQUÉRIR AU BON MOMENT",
    content:
      "Notre structure indépendante nous permet d’être réactifs et de saisir les meilleures opportunités au bon moment. \nNous négocions au juste prix, avec une connaissance fine du marché et des cycles immobiliers.",
    label: "PRÉCISION",
  },
  {
    id: 3,
    title: "OPTIMISER ET TRANSFORMER",
    content:
      "Nous augmentons la performance des actifs grâce à des actions ciblées : travaux, réhabilitation, modernisation ou optimisation locative.",
    label: "OPTIMISER",
  },
  {
    id: 4,
    title: "VALORISER / GÉRER",
    content:
      "Nous assurons le suivi administratif, juridique, technique et locatif de chaque bien pour garantir une gestion stable et performante. \nNotre vision long terme permet d’anticiper, d’accompagner et de sécuriser la valeur des actifs dans la durée.",
    label: "PÉRENNITÉ",
  },
];

export default function PillarsSection() {
  return (
    
      <div className="flex p-15 w-full h-175 items-stretch">
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
        <h3 className="mb-4 text-2xl font-medium uppercase tracking-wide text-beige">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-darkblue whitespace-pre-line">{content}</p>
      </div>

      {/* Label vertical */}
      <span className="absolute bottom-6 left-0 -rotate-90 origin-left text-xs font-bold uppercase tracking-widest text-darkblue">
        {label}
      </span>
    </motion.article>
  );
}
