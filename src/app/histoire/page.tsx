"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Toggle } from "@/component/general/Toggle";
import Navbar from "@/component/general/NavBar";

// Composant Logo SVG
const Logo = ({ color }: { color: string }) => (
  <Link href="/">
    <motion.svg
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
      width="90"
      height="103"
      viewBox="0 0 406 465"
      fill="none"
      className="cursor-pointer"
    >
      <path
        d="M404.775 92.021V177.189L209.44 128.347L82.3547 177.189L0 147.681V69.2955L184.73 0L404.775 92.021Z"
        fill={color}
      />
      <path
        d="M404.775 207.502V289.279L259.245 280.189L148.645 301.411L0 279.42V237.045L211.4 177.189L404.775 207.502Z"
        fill={color}
      />
      <path
        d="M0 313.508V375.601L198.87 464.196L404.775 382.419L401.24 358.959L272.615 321.829L158.83 349.869L0 313.508Z"
        fill={color}
      />
    </motion.svg>
  </Link>
);

// Composant CTA réutilisable
const CTABlock = () => (
  <div className="bg-darkblue px-6 py-8 lg:px-14 lg:py-10 text-center lg:text-left space-y-4 lg:space-y-0 lg:flex lg:justify-between lg:items-center font-[Montserrat]">
    <p className="text-beige font-bold font-[Montserrat] text-base lg:text-lg xl:text-xl max-w-md">
      Nos experts sont à votre écoute pour vous accompagner dans votre projet
      d'investissement immobilier, avec proximité et rigueur.
    </p>
    <Link href="/contact">
      <button className="border-2 border-beige px-6 py-3 lg:px-8 uppercase text-sm lg:text-base text-beige tracking-widest font-semibold hover:bg-beige hover:text-darkblue transition-all duration-300 whitespace-nowrap">
        Nous contacter
      </button>
    </Link>
  </div>
);

// Section Histoire - Version Mobile
const HistoireMobile = () => (
  <div className="flex flex-col lg:hidden">
    <motion.img
      src="/6.png"
      alt="Photo histoire foncière Chaligny"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-64 object-cover"
    />

    <div className="bg-white px-6 py-8 space-y-6 text-darkblue font-[Montserrat]">
      <h2 className="text-3xl font-[Faustina] text-lightgreen">
        Une foncière immobilière indépendante née du terrain parisien.
      </h2>

      <div className="space-y-4">
        <p>
          Foncière Chaligny est une foncière immobilière indépendante, fondée
          sur une conviction simple : la performance durable repose sur la
          complémentarité des expertises, la confiance et une vision long terme
          de l'investissement immobilier.
        </p>

        <p>
          Portée par trois fondateurs aux profils complémentaires et
          parfaitement alignés, la foncière acquiert, développe et gère des
          actifs immobiliers avec une approche responsable, agile et ancrée dans
          la réalité du terrain, notamment sur le marché parisien et francilien.
        </p>

        <p>
          <span className="text-lightgreen font-bold">Notre promesse :</span>{" "}
          Offrir à nos investisseurs une gestion transparente et exigeante,
          tournée vers la création de valeur durable dans le temps.
        </p>
      </div>
    </div>

    <CTABlock />
  </div>
);
// Section Équipe - Version Mobile
const EquipeMobile = () => (
  <div className="flex flex-col lg:hidden">
    <motion.img
      src="/7.png"
      alt="Équipe Foncière Chaligny"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-64 object-cover"
    />

    <div className="bg-white px-6 py-8 space-y-6 font-[Montserrat] text-darkblue">
      <h2 className="text-3xl font-[Faustina]">
        Notre <span className="text-lightgreen italic">Équipe</span>
      </h2>

      <p className="font-semibold text-darkbeige">
        Trois fondateurs, une même vision.
      </p>

      <div className="space-y-4">
        <p>
          <span className="font-bold">Éléonore Crevon</span>
          <br />
          Co-fondatrice — Elle porte l'approche humaine et la relation de
          confiance qui guident chaque projet immobilier.
        </p>

        <p>
          <span className="font-bold">Laurent Da Costa</span>
          <br />
          Co-fondateur — Il garantit l'exigence opérationnelle et la fiabilité
          des opérations au coeur de la foncière.
        </p>

        <p>
          <span className="font-bold">Ivan Varady</span>
          <br />
          Co-fondateur — Il apporte la vision stratégique et financière,
          assurant la cohérence des investissements dans le long terme.
        </p>

        <p className="text-lightgreen font-bold italic">
          Ensemble, ils incarnent les valeurs de Foncière Chaligny :
          complémentarité, confiance et vision durable de l'investissement.
        </p>
      </div>
    </div>

    <CTABlock />
  </div>
);
// Section Histoire - Version Desktop
const HistoireDesktop = () => (
  <div className="hidden lg:block relative min-h-[600px]">
    {/* Bloc image droit responsive */}
    <div className="absolute right-0 w-[45vw] bg-darkgreen overflow-hidden rounded-bl-[120px] -translate-x-1/4 translate-y-1/11 z-20">
      <motion.img
        src="/6.png"
        alt="Photo histoire foncière Chaligny"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className=" object-cover"
      />
    </div>

    {/* Bloc blanc */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative z-10 ml-32 mt-16 w-[60%] min-h-[600px] bg-white px-10 py-16 shadow-lg"
    >
      <h2 className="text-4xl 2xl:text-5xl font-[Faustina] text-lightgreen mb-6 leading-tight">
        Une foncière immobilière indépendante née du terrain parisien.
      </h2>

      <div className="space-y-5 font-[Montserrat] w-3/4 text-darkblue text-lg leading-relaxed">
        <p>
          Foncière Chaligny est une foncière immobilière indépendante, fondée
          sur une conviction simple : la performance durable repose sur la
          complémentarité des expertises, la confiance et une vision long terme
          de l'investissement immobilier.
        </p>

        <p>
          Portée par trois fondateurs aux profils complémentaires et
          parfaitement alignés, la foncière acquiert, développe et gère des
          actifs immobiliers avec une approche responsable, agile et ancrée dans
          la réalité du terrain, notamment sur le marché parisien et francilien.
        </p>

        <p>
          <span className="text-lightgreen font-bold">Notre promesse :</span>{" "}
          Offrir à nos investisseurs une gestion transparente et exigeante,
          tournée vers la création de valeur durable dans le temps.
        </p>
      </div>
    </motion.div>
    {/* Bandeau CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute -bottom-24 w-[60vw] bg-darkblue px-14 py-10 flex justify-between items-center shadow-xl z-30"
    >
      <p className="text-beige font-[Montserrat] font-bold text-xl max-w-md">
        Nos experts sont à votre écoute pour vous accompagner dans votre projet
        d'investissement immobilier, avec proximité et rigueur.
      </p>

      <Link href="/contact">
        <button className="border-2 border-beige px-8 py-3 uppercase text-beige tracking-widest font-semibold hover:bg-beige hover:text-darkblue transition">
          Nous contacter
        </button>
      </Link>
    </motion.div>
  </div>
);
// Section Équipe - Version Desktop
const EquipeDesktop = () => (
  <div className="hidden lg:block relative min-h-[600px]">
    {/* Bloc image droit responsive */}
    <div className="absolute right-0 w-[45vw] bg-darkgreen overflow-hidden rounded-bl-[120px] -translate-x-1/4 translate-y-1/11 z-20">
      <motion.img
        src="/7.png"
        alt="Photo histoire foncière Chaligny"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="object-cover"
      />
    </div>

    {/* Bloc blanc */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative z-10 ml-32 mt-16 w-[60%] min-h-[600px] bg-white px-10 py-16 shadow-lg"
    >
      <h2 className="text-4xl 2xl:text-5xl font-[Faustina] text-lightgreen mb-6 leading-tight">
        Notre <span className="text-lightgreen italic">Équipe</span>
      </h2>

      <div className="space-y-5 font-[Montserrat] w-3/4 text-darkblue text-lg leading-relaxed">
        <p className="font-semibold text-darkbeige">
          Trois fondateurs, une même vision.
        </p>

        <p>
          <span className="font-bold">Éléonore Crevon</span>
          <br />
          Co-fondatrice — Elle porte l'approche humaine et la relation de
          confiance qui guident chaque projet immobilier.
        </p>

        <p>
          <span className="font-bold">Laurent Da Costa</span>
          <br />
          Co-fondateur — Il garantit l'exigence opérationnelle et la fiabilité
          des opérations au coeur de la foncière.
        </p>

        <p>
          <span className="font-bold">Ivan Varady</span>
          <br />
          Co-fondateur — Il apporte la vision stratégique et financière,
          assurant la cohérence des investissements dans le long terme.
        </p>

        <p className="text-lightgreen font-bold italic">
          Ensemble, ils incarnent les valeurs de Foncière Chaligny :
          complémentarité, confiance et vision durable de l'investissement.
        </p>
      </div>
    </motion.div>
    {/* Bandeau CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute -bottom-24 w-[60vw] bg-darkblue px-14 py-10 flex justify-between items-center shadow-xl z-30"
    >
      <p className="text-beige font-[Montserrat] font-bold text-xl max-w-md">
        Nos experts sont à votre écoute pour vous accompagner dans votre projet
        d'investissement immobilier, avec proximité et rigueur.
      </p>

      <Link href="/contact">
        <button className="border-2 border-beige px-8 py-3 uppercase text-beige tracking-widest font-semibold hover:bg-beige hover:text-darkblue transition">
          Nous contacter
        </button>
      </Link>
    </motion.div>
  </div>
);

// Composant principal
export default function TogglePage() {
  const [activePage, setActivePage] = useState(false);
  const logoColor = activePage ? "#363d40" : "#98AA9D";

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen transition-colors duration-500 ${
          activePage ? "bg-lightgreen" : "bg-beige"
        }`}
      >
        {/* Header */}
        <div className="w-full flex flex-col items-center gap-6 p-6 pt-24">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-center sm:text-left"
          >
            <Logo color={logoColor} />

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-7xl xl:text-6xl text-darkblue mt-2 sm:mt-0 font-[Faustina]"
            >
              Notre{" "}
              <span
                className={`italic transition-colors duration-500 ${
                  activePage ? "text-darkblue" : "text-lightgreen"
                }`}
              >
                Histoire
              </span>
            </motion.h1>
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Toggle
              active={activePage}
              onToggle={setActivePage}
              leftLabel={
                <span
                  className={activePage ? "text-darkblue" : "text-lightgreen"}
                >
                  Foncière <i>Chaligny</i>
                </span>
              }
              rightLabel={
                <span className="text-darkblue">
                  Notre <i>équipe</i>
                </span>
              }
            />
          </motion.div>
        </div>

        {/* Contenu avec animations */}
        <AnimatePresence mode="wait">
          {!activePage ? (
            <motion.section
              key="histoire"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full"
            >
              <section className="relative min-h-screen lg:min-h-[90vh] overflow-hidden lg:overflow-visible pb-32 lg:pb-0">
                <HistoireMobile />
                <HistoireDesktop />
              </section>
            </motion.section>
          ) : (
            <motion.section
              key="equipe"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full"
            >
              <section className="relative min-h-screen lg:min-h-[90vh] overflow-hidden lg:overflow-visible pb-32 lg:pb-0">
                <EquipeMobile />
                <EquipeDesktop />
              </section>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
