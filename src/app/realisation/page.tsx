"use client";

import Link from "next/link";
import ProjectCard from "@/component/general/RealisationCard";
import { motion } from "framer-motion";

export default function Realisation() {
  const projects = [
    {
      imageSrc: "/10.png",
      imageAlt: "Immeuble résidentiel à Paris",
      title: "RÉNOVATION D’UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ",
      description: [
        "Transformation d’un immeuble ancien en appartements modernes et optimisés pour la location.",
        "Valorisation du patrimoine et création de revenus locatifs stables pour les investisseurs.",
      ],
      backgroundColor: "bg-lightgreen",
      titleColor: "text-darkblue",
      descriptionColor: "text-beige",
    },
    {
      imageSrc: "/10.png",
      imageAlt: "Immeuble résidentiel à Paris",
      title: "RÉNOVATION D’UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ",
      description: [
        "Transformation d’un immeuble ancien en appartements modernes et optimisés pour la location.",
        "Valorisation du patrimoine et création de revenus locatifs stables pour les investisseurs.",
      ],
      backgroundColor: "bg-beige",
      titleColor: "text-lightgreen",
      descriptionColor: "text-darkblue",
    },
    {
      imageSrc: "/10.png",
      imageAlt: "Immeuble résidentiel à Paris",
      title: "RÉNOVATION D’UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ",
      description: [
        "Transformation d’un immeuble ancien en appartements modernes et optimisés pour la location.",
        "Valorisation du patrimoine et création de revenus locatifs stables pour les investisseurs.",
      ],
      backgroundColor: "bg-darkblue",
      titleColor: "text-beige",
      descriptionColor: "text-lightgreen",
    },
  ];

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
            className="text-7xl text-darkblue italic text-lightgreen transition-colors duration-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Nous{" "}
            <span className="not-italic transition-colors duration-500 text-darkblue">
              réalisons
            </span>
          </motion.h1>
        </motion.div>

        <div className="h-20"></div>

        <motion.div
          className="flex justify-center gap-15 pl-10 pr-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="h-32"></div>

      <motion.div
        className="bottom-0 -left-21 w-[75vw] bg-darkblue text-white px-14 py-10 flex items-center justify-between gap-12 z-20 shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl text-beige font-[Montserrat] font-bold max-w-md">
          Nous avons déjà accompagné de nombreux investisseurs. Et si la
          prochaine réussite était la vôtre ?
        </p>

        <motion.button
          className="border border-beige px-8 py-3 uppercase text-lg text-beige tracking-widest hover:bg-beige hover:text-darkblue transition"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Nous contacter
        </motion.button>
      </motion.div>

      <div className="h-32"></div>
    </div>
  );
}
