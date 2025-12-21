import type { Member } from "./types";

export const visionTeam: Member[] = [
  {
    id: 1,
    name: "Laurent et Éléonore - Experts terrain",
    role: "immobiliers résidentiel et opérationnel",
    description: [
      {
        type: "text",
        content:
          "Associés dans la vie comme dans les affaires, Laurent et Éléonore travaillent ensemble depuis plus de 15 ans.",
      },
      { type: "lineBreak" },
      { type: "lineBreak" },

      {
        type: "text",
        content:
          "Spécialistes reconnus de la transaction et de la gestion, ils ont construit un modèle intégré maîtrisant toute la chaîne de valeur immobilière :",
      },
      { type: "lineBreak" },

      {
        type: "highlightGreen",
        content: "vente, location, gestion, syndic, diagnostics.",
      },
      { type: "lineBreak" },
      { type: "lineBreak" },

      {
        type: "highlightGreen",
        content: "Leur force :",
      },
      {
        type: "text",
        content:
          " une vision de terrain, une capacité à détecter les bons actifs, et une exécution ",
      },
      {
        type: "highlight",
        content: "rapide, efficace et humaine.",
      },
    ],
    image: "/8.png",
  },
  {
    id: 2,
    name: "Ivan Vaudry - Expert financier",
    role: "Structuration et stratégie patrimoniale",
    description: [
      {
        type: "text",
        content:
          "Ivan évolue depuis plus de 20 ans dans la finance d’investissement. Après de nombreuses expériences, il fonde Berlioz Capital, cabinet spécialisé dans les solutions patrimoniales sur mesure.",
      },
      { type: "lineBreak" },
      { type: "lineBreak" },

      {
        type: "text",
        content:
          "Ivan apporte à Foncière Chaligny une expertise pointue en levée de fonds, structuration financière et gouvernance.",
      },
    ],
    image: "/4.png",
  },
];
