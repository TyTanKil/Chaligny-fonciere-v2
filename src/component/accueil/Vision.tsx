"use client";

import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section
      data-section
      className="min-h-screen snap-start bg-lightgreen flex justify-center items-center overflow-hidden"
    >
      <div className="flex flex-col h-full w-full px-5 sm:px-10 py-10 space-y-6 overflow-hidden">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-5 text-center sm:text-left"
        >
          <svg
            className="flex-none"
            width="90"
            height="103"
            viewBox="0 0 406 465"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M404.775 92.021V177.189L209.44 128.347L82.3547 177.189L0 147.681V69.2955L184.73 0L404.775 92.021Z"
              fill="#363D40"
            />
            <path
              d="M404.775 207.502V289.279L259.245 280.189L148.645 301.411L0 279.42V237.045L211.4 177.189L404.775 207.502Z"
              fill="#363D40"
            />
            <path
              d="M0 313.508V375.601L198.87 464.196L404.775 382.419L401.24 358.959L272.615 321.829L158.83 349.869L0 313.508Z"
              fill="#363D40"
            />
          </svg>

          <h1 className="2xl:text-7xl xl:text-5xl lg:text-3xl text-darkblue">
            Notre <span className="text-beige italic">Vision</span>
            <span className="block 2xl:text-3xl xl:text-2xl lg:text-lg text-beige font-bold font-[Montserrat] mt-2">
              Une expertise immobilière intégrée au service de la performance
              durable
            </span>
          </h1>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <p className="font-[Montserrat] text-center text-darkblue 2xl:text-3xl xl:text-xl lg:text-lg">
            Foncière Chaligny s’appuie sur une expertise immobilière intégrée
            couvrant l’ensemble du cycle d’investissement : acquisition,
            gestion, structuration financière et valorisation.
          </p>
        </motion.div>

        {/* Ligne + cartes */}
        <div className="relative w-full py-4">
          {/* Ligne horizontale */}
          <div
            className="absolute top-1/2 left-0 h-1 bg-darkblue -translate-y-1/2 hidden sm:block"
            style={{ width: "calc(100% + 80px)" }}
          />

          {/* Étapes */}
          <div className="relative flex flex-col sm:flex-row justify-center sm:gap-10 gap-6 z-10 font-[Montserrat] overflow-hidden">
            {[
              {
                value: 20,
                label: "d'expertise immobilières sur le marché parisien",
                suffix: " ans",
              },
              {
                value: 300,
                label: "de financements intermédiés",
                suffix: " M€",
              },
              { value: 150, label: "d'actifs intermédiés", suffix: " M€" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="w-full sm:w-72 h-32 sm:h-32 p-4 bg-darkblue text-beige text-center grid grid-rows-[3rem_1fr] items-center flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.p
                  className="text-lightgreen text-4xl leading-none flex items-end justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  +{" "}
                  <CountUp
                    end={item.value}
                    duration={6}
                    enableScrollSpy
                    scrollSpyOnce
                  />{" "}
                  {item.suffix}
                </motion.p>
                <p className="text-beige text-base leading-tight">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Explications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center text-beige 2xl:text-4xl xl:text-xl font-bold font-[Montserrat] space-y-8"
        >
          {[
            {
              title: "TRANSACTION",
              text: "Identification et acquisition d’actifs immobiliers à fort potentiel sur le marché parisien et francilien.",
            },
            {
              title: "GESTION",
              text: "Pilotage locatif, suivi opérationnel et valorisation des actifs dans la durée.",
            },
            {
              title: "STRUCTURATION FINANCIÈRE",
              text: "Montage des opérations, levées de fonds et optimisation des rendements pour les investisseurs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="block">{item.title}</span>
              <span className="block text-darkblue 2xl:text-2xl xl:text-lg font-normal mt-2">
                {item.text}
              </span>
            </motion.div>
          ))}

          {/* Bouton */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center py-6"
          >
            <Link href="/vision">
              <button className="inline-block font-[Faustina] font-normal text-2xl bg-beige text-darkblue p-2 hover:bg-darkblue hover:text-beige transition">
                Notre Vision
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
