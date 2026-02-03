"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/component/general/RealisationCard";

type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string[];
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
};

const projects: ProjectCardProps[] = [
  {
    imageSrc: "/Accueil/PhotosNosRea.png",
    imageAlt: "Immeuble résidentiel à Paris",
    title: "RÉNOVATION D'UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ",
    description: [
      
    ],
    backgroundColor: "bg-lightgreen",
    titleColor: "text-darkblue",
    descriptionColor: "text-beige",
  },
  {
    imageSrc: "/Accueil/PhotosNosRea2.png",
    imageAlt: "Immeuble résidentiel à Paris",
    title: "DIVISION ET REVENTE D'UN IMMEUBLE À NANTERRE",
    description: [
      
    ],
    backgroundColor: "bg-beige",
    titleColor: "text-lightgreen",
    descriptionColor: "text-darkblue",
  },
  {
    imageSrc: "/Accueil/PhotosNosRea3.png",
    imageAlt: "Immeuble résidentiel à Paris",
    title: "ACQUISITION D'UN LOCAL COMMERCIAL DANS LE GRAND PARIS",
    description: [
      
    ],
    backgroundColor: "bg-darkblue",
    titleColor: "text-beige",
    descriptionColor: "text-lightgreen",
  },
];

export default function Realisation() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      data-section
      className="min-h-screen snap-start flex flex-col overflow-hidden"
    >
      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex gap-10 pt-15 pl-15 pr-15"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-5 text-center sm:text-left">
          <motion.svg
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            width="90"
            height="103"
            viewBox="0 0 406 465"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="2xl:text-7xl xl:text-5xl lg:text-3xl text-lightgreen italic"
          >
            Nous <span className="text-darkblue not-italic">réalisons</span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="2xl:text-3xl xl:text-2xl text-lightgreen font-bold font-[Montserrat] not-italic"
            >
              Nos réalisations immobilières à Paris et en Île-de-France
            </motion.span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Desktop cards */}
      <div className="hidden sm:flex justify-center gap-10 mt-10 px-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      {/* Mobile cards swipeable */}
      <div className="sm:hidden flex flex-col flex-grow justify-center items-center gap-6">
        {/* Carousel */}
        <motion.div
          className="flex w-full overflow-hidden touch-pan-x"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) next();
            else if (info.offset.x > 50) prev();
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-11/12 mx-auto"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current ? "bg-darkblue" : "bg-darkblue/30"
              }`}
            />
          ))}
        </div>

        {/* Bouton mobile centré */}
        <Link href="/realisation">
          <button className="bg-beige text-xl text-darkblue px-4 py-2 hover:bg-darkblue hover:text-beige transition">
            Découvrir tous nos projets
          </button>
        </Link>
      </div>

      {/* Bouton final */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="hidden sm:flex justify-center mt-10"
      >
        <Link href="/realisation">
          <button className="inline-block font-normal bg-beige text-4xl text-darkblue p-2 hover:bg-darkblue hover:text-beige transition">
            Découvrir tous nos projets
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
