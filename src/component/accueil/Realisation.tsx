"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/component/general/RealisationCard";

export default function Realisation() {
  return (
    <section data-section className="h-screen snap-start flex flex-col">
      {/* Titre avec SVG */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex gap-10 pt-15 pl-15 pr-15"
      >
        <div className="flex items-center gap-10 mt-5">
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
            className="2xl:text-7xl xl:text-5xl text-lightgreen italic"
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

      <div className="flex flex-col gap-10 mt-10">
        {/* Cards des projets */}
        <div className="flex justify-center gap-15 pl-10 pr-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard
              imageSrc="/10.png"
              imageAlt="Immeuble résidentiel à Paris"
              title="RÉNOVATION D'UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ"
              description={[
                "Transformation d'un immeuble ancien en appartements modernes et optimisés pour la location.",
                "Valorisation du patrimoine et création de revenus locatifs stables pour les investisseurs.",
              ]}
              backgroundColor="bg-lightgreen"
              titleColor="text-darkblue"
              descriptionColor="text-beige"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard
              imageSrc="/11.png"
              imageAlt="Immeuble résidentiel à Paris"
              title="RÉNOVATION D'UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ"
              description={[
                "Transformation d'un immeuble ancien en appartements modernes et optimisés pour la location.",
                "Valorisation du patrimoine et création de revenus locatifs stables pour les investisseurs.",
              ]}
              backgroundColor="bg-beige"
              titleColor="text-lightgreen"
              descriptionColor="text-darkblue"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard
              imageSrc="/12.png"
              imageAlt="Immeuble résidentiel à Paris"
              title="RÉNOVATION D'UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ"
              description={[
                "Transformation d'un immeuble ancien en appartements modernes et optimisés pour la location.",
                "Valorisation du patrimoine et création de revenus locatifs stables pour les investisseurs.",
              ]}
              backgroundColor="bg-darkblue"
              titleColor="text-beige"
              descriptionColor="text-lightgreen"
            />
          </motion.div>
        </div>

        {/* Bouton final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/realisation">
            <button className="inline-block bg-beige text-4xl text-darkblue p-2 hover:bg-darkblue hover:text-beige transition">
              Découvrir toutes nos projets
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
