"use client";

import Link from "next/link";
import ProjectCard from "@/component/general/RealisationCard";
import { motion } from "framer-motion";
import Navbar from "@/component/general/NavBar";

export default function Realisation() {
  const projects = [
    {
      imageSrc: "/Accueil/PhotosNosRea.png",
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
      imageSrc: "/Accueil/PhotosNosRea2.png",
      imageAlt: "Immeuble résidentiel à Paris",
      title: "Division et revente d’un immeuble à Nanterre",
      description: [
        "Achat d’un immeuble sous‑exploité, division en lots résidentiels et vente à la découpe.",
        "Création de plus-value et optimisation du rendement global du portefeuille.",
      ],
      backgroundColor: "bg-beige",
      titleColor: "text-lightgreen",
      descriptionColor: "text-darkblue",
    },
    {
      imageSrc: "/Accueil/PhotosNosRea3.png",
      imageAlt: "Immeuble résidentiel à Paris",
      title: "Acquisition d’un local commercial dans le Grand Paris",
      description: [
        "Sélection d’un bien rare avant sa mise sur le marché, négociation directe avec le propriétaire.",
        "Mise en location rapide et sécurisée, générant un revenu régulier dès la première année.",
      ],
      backgroundColor: "bg-darkblue",
      titleColor: "text-beige",
      descriptionColor: "text-lightgreen",
    },
  ];

  return (
    <div>
      {/* ================= DESKTOP ================= */}
      <div className="hidden sm:flex w-full flex-col items-center gap-6 p-6 mt-15">
        <Navbar />
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
            className="text-7xl xl:text-6xl text-darkblue italic text-lightgreen transition-colors duration-500"
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

          <Link href="/contact">
            <motion.button
              className="border border-beige px-8 py-3 uppercase text-lg text-beige tracking-widest hover:bg-beige hover:text-darkblue transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Nous contacter
            </motion.button>
          </Link>
        </motion.div>

        <div className="h-32"></div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex sm:hidden w-full flex-col items-center gap-4 p-4 mt-20">
        <Navbar />
        {/* HEADER MOBILE */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link href="/">
            <motion.svg
              width="50"
              height="60"
              viewBox="0 0 406 465"
              fill="none"
              style={{ cursor: "pointer" }}
              whileHover={{ scale: 1.05 }}
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
            className="text-xl xs:text-lg text-darkblue italic text-lightgreen text-center"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Nous <span className="not-italic text-darkblue">réalisons</span>
          </motion.h1>
        </motion.div>

        {/* PROJECTS MOBILE */}
        <motion.div
          className="flex flex-col gap-3 w-full px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="w-full max-w-xs mx-auto" // Limite la taille de la carte
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* CALL TO ACTION MOBILE */}
        <motion.div
          className="w-full bg-darkblue text-white p-4 flex flex-col gap-2 items-center rounded-md mt-4"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-center text-beige font-bold font-[Montserrat] text-sm xs:text-xs leading-tight">
            Nous avons déjà accompagné de nombreux investisseurs. Et si la
            prochaine réussite était la vôtre ?
          </p>
          <Link href="/contact">
            <motion.button
              className="border border-beige px-5 py-2 uppercase text-sm xs:text-xs text-beige tracking-widest hover:bg-beige hover:text-darkblue transition"
              whileHover={{ scale: 1.05 }}
            >
              Nous contacter
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
